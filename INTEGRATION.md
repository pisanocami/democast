# Integration Guide

How to integrate the real democast pipeline into the API.

## Current State

The API currently has a **mock render pipeline** that:
- Accepts config via POST /api/render
- Creates a job with status tracking
- Returns a dummy MP4 file

## Real Pipeline (3 Steps)

The actual democast pipeline has three steps:

### Step 1: Narrate (ElevenLabs)

Generate voiceover from text using ElevenLabs API.

**File:** `api/server.js` → `renderJob()` function

```javascript
async function narrate(config) {
  const { narration, voiceId } = config;
  
  // Call ElevenLabs API
  const response = await axios.post(
    `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`,
    { text: narration },
    {
      headers: {
        "xi-api-key": process.env.ELEVENLABS_API_KEY,
        "Content-Type": "application/json",
      },
    }
  );
  
  // Save audio to jobDir/narration.mp3
  return response.data;
}
```

### Step 2: Record (Playwright)

Automate browser and record video.

**File:** `api/server.js` → `renderJob()` function

```javascript
async function record(config, jobDir) {
  const { demoUrl, viewport } = config;
  
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  // Set viewport
  await page.setViewportSize(viewport);
  
  // Start recording
  const context = await browser.newContext({
    recordVideo: { dir: jobDir },
  });
  
  const recordPage = await context.newPage();
  await recordPage.goto(demoUrl);
  
  // Simulate interactions (click, type, scroll, etc.)
  // Based on config.actions array
  
  await recordPage.close();
  await context.close();
  await browser.close();
  
  // Video saved to jobDir/video.webm
}
```

### Step 3: Build (ffmpeg)

Compose narration + video + subtitles.

**File:** `api/server.js` → `renderJob()` function

```javascript
async function build(jobDir) {
  const ffmpeg = new FFmpeg();
  
  // Inputs
  const narration = path.join(jobDir, "narration.mp3");
  const video = path.join(jobDir, "video.webm");
  const subtitles = path.join(jobDir, "subtitles.srt");
  
  // Output
  const output = path.join(jobDir, "output.mp4");
  
  // Compose
  ffmpeg
    .input(video)
    .input(narration)
    .output(output)
    .videoCodec("libx264")
    .audioCodec("aac")
    .run();
  
  // Return output.mp4
}
```

## Implementation Checklist

- [ ] Install dependencies: `npm install elevenlabs playwright ffmpeg-static fluent-ffmpeg`
- [ ] Add ElevenLabs API key to `.env`
- [ ] Implement `narrate()` function
- [ ] Implement `record()` function
- [ ] Implement `build()` function
- [ ] Update `renderJob()` to call all three steps
- [ ] Test with sample config
- [ ] Deploy to production

## Testing

### Local Test

```bash
curl -X POST http://localhost:3001/api/render \
  -H "Content-Type: application/json" \
  -d '{
    "demoUrl": "https://example.com",
    "prompt": "Show the homepage",
    "voiceId": "21m00Tcm4TlvDq8ikWAM"
  }'
```

### Check Status

```bash
curl http://localhost:3001/api/jobs/[jobId]
```

### Download Video

```bash
curl http://localhost:3001/api/jobs/[jobId]/download -o demo.mp4
```

## Performance Considerations

- **Narration:** ~2-5 seconds (depends on text length)
- **Recording:** ~1-3 minutes (depends on demo complexity)
- **Build:** ~30-60 seconds (depends on video length)
- **Total:** ~2-5 minutes per demo

## Scaling

For production, consider:

1. **Job Queue** — Use Bull or RabbitMQ for async processing
2. **Worker Pool** — Multiple workers processing jobs in parallel
3. **Storage** — S3 or similar for video files (not local disk)
4. **Caching** — Cache narrations by hash to avoid re-generating
5. **Monitoring** — Log job progress, errors, and performance metrics

## References

- ElevenLabs API: https://elevenlabs.io/docs/api
- Playwright: https://playwright.dev
- ffmpeg: https://ffmpeg.org
- fluent-ffmpeg: https://github.com/fluent-ffmpeg/node-fluent-ffmpeg

---

Ready to integrate? Start with Step 1 (Narrate) and test locally before moving to production.
