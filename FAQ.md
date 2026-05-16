# Frequently Asked Questions

---

## General

### What is democast?

**democast** is an open-source platform for creating product demo videos. You provide a config (URL + prompt), and democast generates a professional video with voiceover, subtitles, and perfect timing.

### How is it different from Tella, Loom, or Scribe?

| Feature | democast | Tella | Loom | Scribe |
|---------|----------|-------|------|--------|
| **Cost** | Free | $25/mo | $10-25/mo | Free (limited) |
| **Open Source** | ✅ Yes | ❌ No | ❌ No | ❌ No |
| **Self-Hosted** | ✅ Yes | ❌ No | ❌ No | ❌ No |
| **Config-as-Code** | ✅ Yes | ❌ No | ❌ No | ❌ No |
| **CI/CD Ready** | ✅ Yes | ❌ No | ❌ No | ❌ No |

### Is it really free?

Yes. MIT license. Forever free. No ads. No tracking. No hidden costs.

### Can I use it commercially?

Yes. MIT license allows commercial use. You can use it to create videos for your business, sell the videos, or anything else.

### Can I self-host?

Yes. Deploy the API to your own server. Deploy the web app to your own domain. Full control.

---

## Technical

### What are the system requirements?

- Node.js 18+
- npm or yarn
- 2GB RAM (minimum)
- 10GB disk space (for videos)

### How long does rendering take?

- **Narration:** 2-5 seconds
- **Recording:** 1-3 minutes
- **Composition:** 30-60 seconds
- **Total:** 2-5 minutes per demo

### Can I use it in CI/CD?

Yes. The API is headless and deterministic. Perfect for GitHub Actions, GitLab CI, etc.

```yaml
# GitHub Actions example
- name: Render demo
  run: |
    curl -X POST http://localhost:3001/api/render \
      -H "Content-Type: application/json" \
      -d '{"demoUrl": "...", "prompt": "..."}'
```

### What video formats are supported?

Currently: **MP4 (H.264 + AAC)**

Coming soon: WebM, MOV, MKV

### What audio formats are supported?

Currently: **AAC (via ffmpeg)**

Coming soon: MP3, FLAC, WAV

### Can I customize the output?

Yes. You can customize:
- Intro/outro cards
- Fonts
- Colors
- Timing
- Transitions
- Watermarks

### Can I use custom fonts?

Coming in Phase 3. Currently uses system fonts.

### Can I add background music?

Coming in Phase 3. Currently only voiceover.

---

## ElevenLabs

### Do I need an ElevenLabs account?

Currently, yes. We're adding Kokoro TTS (local, free) in Phase 3.

### How much does ElevenLabs cost?

- **Free tier:** 10,000 characters/month
- **Starter:** $5/month (100k chars/month)
- **Professional:** $99/month (1M chars/month)

### How do I get an API key?

1. Go to https://elevenlabs.io
2. Sign up (free)
3. Go to Settings → API Keys
4. Copy your key
5. Add to `api/.env`

### Can I use a different TTS provider?

Coming soon. We're planning to support:
- Kokoro (local, free)
- Google Cloud TTS
- AWS Polly
- Azure Speech

---

## Deployment

### How do I deploy the web app?

```bash
cd web
netlify deploy --prod
```

Or use Vercel, GitHub Pages, etc.

### How do I deploy the API?

```bash
cd api
heroku create democast-api
heroku config:set ELEVENLABS_API_KEY=sk_...
git push heroku main
```

Or use Railway, Render, AWS, etc.

### What's the cost to deploy?

- **Web app:** Free (Netlify, Vercel)
- **API:** Free tier available (Heroku, Railway, Render)
- **ElevenLabs:** $0-99/month (depending on usage)

### Can I deploy to AWS?

Yes. Use EC2, Lambda, or ECS.

### Can I deploy to Docker?

Yes. We provide a Dockerfile (coming in Phase 2).

---

## Troubleshooting

### The API won't start

```bash
# Check if port 3001 is in use
netstat -ano | findstr :3001

# Kill the process
taskkill /PID <PID> /F

# Try again
npm start
```

### The web app won't start

```bash
# Clear Next.js cache
rm -rf web/.next

# Reinstall dependencies
cd web && rm -rf node_modules && npm install

# Try again
npm run dev
```

### Render fails with "API not found"

Make sure the API is running on http://localhost:3001

```bash
# Check if API is running
curl http://localhost:3001/api/health
```

### ElevenLabs API errors

- Verify your API key is correct
- Check that your account has credits
- Try a different voice ID
- Check ElevenLabs status page

### Video is too slow/fast

Adjust the timing in your config. Coming in Phase 3: custom timing controls.

### Subtitles are wrong

The subtitles are auto-generated from the voiceover. If they're wrong, try:
- Clearer pronunciation
- Slower speech
- Shorter sentences

---

## Features

### Can I record multiple scenes?

Coming in Phase 2. Currently: single scene per demo.

### Can I add interactions (clicks, typing)?

Yes. Include them in the prompt:

```json
{
  "prompt": "Click the button, type 'hello', press enter"
}
```

### Can I add pauses?

Yes. Include them in the prompt:

```json
{
  "prompt": "Show the page, pause for 3 seconds, then click the button"
}
```

### Can I add zoom/pan effects?

Coming in Phase 3.

### Can I add background music?

Coming in Phase 3.

### Can I add watermarks?

Coming in Phase 3.

---

## Pricing

### Is there a paid version?

Not yet. democast is 100% free and open-source.

### Will there be a paid version?

Possibly. We're considering:
- **Free tier:** Web playground + API (limited)
- **Pro tier:** Unlimited renders + priority support
- **Enterprise tier:** Self-hosted + custom integrations

But the core will always be free and open-source.

---

## Community

### How do I report a bug?

Open an issue on GitHub: https://github.com/pisanocami/democast/issues

### How do I request a feature?

Start a discussion: https://github.com/pisanocami/democast/discussions

### How do I contribute?

See [CONTRIBUTING.md](./CONTRIBUTING.md)

### How do I get help?

- **GitHub Issues:** Bug reports
- **GitHub Discussions:** Questions & feature requests
- **Email:** camila@forceofnature.io
- **Twitter:** [@pisanocami](https://twitter.com/pisanocami)

---

## Legal

### What's the license?

MIT License. See [LICENSE](./LICENSE) for details.

### Can I fork it?

Yes. MIT license allows forking.

### Can I modify it?

Yes. MIT license allows modifications.

### Can I sell it?

Yes. MIT license allows commercial use.

### Do you collect data?

No. democast doesn't collect any user data.

### Is it GDPR compliant?

Yes. We don't store personal data.

### Is it CCPA compliant?

Yes. We don't collect personal information.

---

## Still Have Questions?

- **GitHub Discussions:** https://github.com/pisanocami/democast/discussions
- **Email:** camila@forceofnature.io
- **Twitter:** [@pisanocami](https://twitter.com/pisanocami)

---

**Happy demoing! 🎬**
