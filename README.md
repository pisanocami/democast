# democast

Open-source platform for scripted product demo videos. One config. One command. One MP4 out.

**Playwright + ElevenLabs + ffmpeg. The Tella alternative you can run in CI.**

## Features

- ✅ **Config-as-code** — Your demos live in git
- ✅ **AI voiceover** — Kokoro (local) or ElevenLabs (premium)
- ✅ **Visible cursor** — Real cursor tracking across interactions
- ✅ **Auto subtitles** — SRT generated from timing
- ✅ **Branded cards** — Customizable intro/outro
- ✅ **Tight pacing** — No dead air, ever
- ✅ **CI-friendly** — Headless, deterministic, one JSON in → one MP4 out
- ✅ **Web playground** — Optional visual editor
- ✅ **Open source** — MIT license

## Quick Start

### Option 1: Web Playground (Easiest)

```bash
# Start API
cd api && npm install && npm start

# Start web app (in another terminal)
cd web && npm install && npm run dev
```

Open http://localhost:3000 → Playground → Edit config → Render

### Option 2: CLI (Coming Soon)

```bash
npm i -g democast
democast render demo.json
```

## Project Structure

```
democast/
├── web/                 # Next.js 15 landing page + playground
│   ├── src/components/  # Hero, Features, Playground, Examples, etc.
│   ├── package.json
│   └── netlify.toml
│
└── api/                 # Node.js/Express backend
    ├── server.js        # Render job queue + API endpoints
    ├── package.json
    └── README.md
```

## API Endpoints

### POST /api/render

Submit a render job.

```bash
curl -X POST http://localhost:3001/api/render \
  -H "Content-Type: application/json" \
  -d '{
    "demoUrl": "https://example.com",
    "prompt": "Show the homepage and click signup",
    "voiceId": "21m00Tcm4TlvDq8ikWAM"
  }'
```

### GET /api/jobs/:jobId

Check render status.

### GET /api/jobs/:jobId/download

Download the MP4 video.

## Configuration

### Web App

No setup required. Just run `npm install && npm run dev`.

### API

Create `.env`:

```
ELEVENLABS_API_KEY=sk_your_key_here
PORT=3001
```

Get your ElevenLabs API key: https://elevenlabs.io/app/settings/api-keys

## Deployment

### Web App (Netlify)

```bash
cd web
netlify deploy --prod
```

### API (Heroku / Railway / Render)

```bash
cd api
heroku create democast-api
heroku config:set ELEVENLABS_API_KEY=sk_...
git push heroku main
```

Then update `web/src/components/Playground.tsx` to point to your API URL.

## Tech Stack

**Frontend:**
- Next.js 15
- React 19
- Tailwind CSS
- Framer Motion
- Sonner

**Backend:**
- Express.js
- Playwright
- ElevenLabs API
- ffmpeg
- Node.js

## Roadmap

- [ ] CLI tool (`npm i -g democast`)
- [ ] Kokoro TTS integration (local, free)
- [ ] Advanced scene transitions
- [ ] Multi-language support
- [ ] Custom fonts & branding
- [ ] Analytics dashboard
- [ ] Team collaboration

## Contributing

1. Fork the repo
2. Create a feature branch (`git checkout -b feature/amazing`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing`)
5. Open a Pull Request

## License

MIT — Use freely, commercially or otherwise.

## Support

- **Issues:** Report bugs on GitHub
- **Discussions:** Ask questions
- **Email:** camila@forceofnature.io

---

**Made with ♥ by Camila Pisano at Force of Nature**

⭐ If you find this useful, please star the repo!
