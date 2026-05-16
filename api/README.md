# democast API

Backend server for democast — processes render jobs and returns MP4 videos.

## Quick Start

```bash
npm install
npm start
```

Server runs on `http://localhost:3001`

## API Endpoints

### POST /api/render

Submit a render job.

**Request:**
```json
{
  "demoUrl": "https://example.com",
  "prompt": "Create a 60-second walkthrough showing...",
  "narration": "Optional: override prompt with direct narration",
  "voiceId": "21m00Tcm4TlvDq8ikWAM"
}
```

**Response:**
```json
{
  "jobId": "uuid",
  "status": "queued"
}
```

### GET /api/jobs/:jobId

Get job status.

**Response:**
```json
{
  "id": "uuid",
  "status": "rendering|completed|failed",
  "progress": 0-100,
  "createdAt": "2026-05-15T...",
  "completedAt": "2026-05-15T...",
  "downloadUrl": "/api/jobs/:jobId/download"
}
```

### GET /api/jobs/:jobId/download

Download the rendered MP4 video.

### GET /api/health

Health check.

## Environment Variables

```
ELEVENLABS_API_KEY=sk_...
PORT=3001
```

## Pipeline

1. **Narrate** — Generate voiceover via ElevenLabs
2. **Record** — Playwright browser automation + video capture
3. **Build** — ffmpeg composition + subtitle burn

## Job Queue

Jobs are processed sequentially. Long renders (60s video ≈ 2-3 min render time) are queued.

## Deployment

### Heroku

```bash
heroku create democast-api
heroku config:set ELEVENLABS_API_KEY=sk_...
git push heroku main
```

### Railway

```bash
railway link
railway up
```

### Render.com

Connect GitHub repo → auto-deploys on push.

## Development

```bash
npm run dev
```

Watches for file changes and restarts server.

## Testing

```bash
curl -X POST http://localhost:3001/api/render \
  -H "Content-Type: application/json" \
  -d '{
    "demoUrl": "https://example.com",
    "prompt": "Show the homepage"
  }'
```

## License

MIT
