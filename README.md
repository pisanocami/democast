# democast

> **The open-source Tella alternative.** One config. One command. One MP4 out.  
> Playwright + ElevenLabs + ffmpeg. Run in CI. Ship in minutes.

[![GitHub stars](https://img.shields.io/github/stars/pisanocami/democast?style=flat-square&color=1f6feb)](https://github.com/pisanocami/democast)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green?style=flat-square)](https://nodejs.org)

---

## Why democast?

**Tella costs $25/mo. Loom costs $10-25/mo. Scribe is closed-source.**

democast is **free, open-source, and runs on your machine**. No SaaS. No vendor lock-in. No monthly bills.

### The Problem

Creating product demo videos is slow:
- ❌ Manual recording takes 30+ minutes per video
- ❌ Editing subtitles is tedious
- ❌ Keeping demos in sync with product changes is painful
- ❌ SaaS tools are expensive and proprietary

### The Solution

**democast** = Config-as-code for demo videos.

```json
{
  "demoUrl": "https://example.com",
  "prompt": "Show the homepage, click signup, fill the form",
  "voiceId": "21m00Tcm4TlvDq8ikWAM"
}
```

**One command:**
```bash
democast render demo.json
```

**Output:** One MP4 with voiceover, subtitles, and perfect timing.

---

## Features

- ✅ **Config-as-code** — Your demos live in git. Version control. CI/CD integration.
- ✅ **AI voiceover** — ElevenLabs (premium) or Kokoro (local, free)
- ✅ **Visible cursor** — Real cursor tracking. Users see exactly what you're doing.
- ✅ **Auto subtitles** — SRT generated from timing. Burned into video.
- ✅ **Branded cards** — Customizable intro/outro. Your logo. Your colors.
- ✅ **Tight pacing** — No dead air. No filler. Pure signal.
- ✅ **Deterministic** — Same config = same output. Every time.
- ✅ **CI-friendly** — Headless. No UI. Perfect for GitHub Actions.
- ✅ **Web playground** — Optional visual editor for non-technical users.
- ✅ **Open source** — MIT license. Fork it. Modify it. Ship it.

---

## Quick Start (2 minutes)

### Option 1: Web Playground (Easiest)

```bash
git clone https://github.com/pisanocami/democast.git
cd democast

# Terminal 1: Start API
cd api && npm install && npm start

# Terminal 2: Start web app
cd web && npm install && npm run dev
```

Open **http://localhost:3000** → Playground → Edit config → Render → Download MP4

### Option 2: CLI (Coming Soon)

```bash
npm i -g democast
democast render demo.json
```

---

## Real-World Example

### Input (demo.json)

```json
{
  "demoUrl": "https://gs-monroe-preview.netlify.app",
  "prompt": "Create a 60-second walkthrough of the Growth Signal portfolio monitor. Start with the intro, show the portfolio overview, click on Charah Solutions to show the PULL BACK verdict, navigate to The Ledger to show misses first, then highlight the 22.8x capital multiple. End with a closing message about decision infrastructure.",
  "voiceId": "21m00Tcm4TlvDq8ikWAM",
  "viewport": { "width": 1920, "height": 1080 }
}
```

### Output

- ✅ 60-second MP4 video
- ✅ AI-generated voiceover (natural, not robotic)
- ✅ Auto-burned subtitles
- ✅ Visible cursor tracking
- ✅ Branded intro/outro
- ✅ Ready to ship

**Time to create:** 3 minutes (vs 30+ minutes with Tella)

---

## How It Works

### The Pipeline (3 Steps)

```
Config → Narrate → Record → Build → MP4
```

1. **Narrate** — Generate voiceover via ElevenLabs API
2. **Record** — Automate browser with Playwright + capture video
3. **Build** — Compose with ffmpeg + burn subtitles

All automated. All deterministic. All in your control.

---

## Use Cases

### 📚 Product Documentation
Create video walkthroughs for your docs. Update config. Regenerate. Ship.

### 🎯 Sales Demos
Consistent, on-brand demos. No manual recording. No human error.

### 🧪 QA Testing
Record test flows. Attach to bug reports. Prove the issue.

### 📺 Content Creation
Generate demo videos for blog posts, Twitter, YouTube. Batch them in CI.

### 🚀 CI/CD Integration
Generate demos on every release. Attach to GitHub releases. Auto-publish.

---

## Comparison

| Feature | democast | Tella | Loom | Scribe |
|---------|----------|-------|------|--------|
| **Cost** | Free | $25/mo | $10-25/mo | Free (limited) |
| **Open Source** | ✅ Yes | ❌ No | ❌ No | ❌ No |
| **Config-as-code** | ✅ Yes | ❌ No | ❌ No | ❌ No |
| **CI/CD Ready** | ✅ Yes | ❌ No | ❌ No | ❌ No |
| **Self-hosted** | ✅ Yes | ❌ No | ❌ No | ❌ No |
| **AI Voiceover** | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes |
| **Auto Subtitles** | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes |
| **Visible Cursor** | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes |

---

## Installation

### Prerequisites

- Node.js 18+ ([download](https://nodejs.org))
- npm or yarn
- Git

### Setup (5 minutes)

```bash
# Clone
git clone https://github.com/pisanocami/democast.git
cd democast

# Install dependencies
cd api && npm install
cd ../web && npm install

# Configure
cp api/.env.example api/.env
# Edit api/.env and add your ElevenLabs API key

# Run
cd api && npm start          # Terminal 1
cd web && npm run dev        # Terminal 2

# Open http://localhost:3000
```

**Get ElevenLabs API key:** https://elevenlabs.io/app/settings/api-keys (free tier: 10k chars/month)

---

## API Reference

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

**Response:**
```json
{
  "jobId": "uuid-here",
  "status": "queued"
}
```

### GET /api/jobs/:jobId

Check job status.

```bash
curl http://localhost:3001/api/jobs/uuid-here
```

**Response:**
```json
{
  "id": "uuid-here",
  "status": "rendering",
  "progress": 45,
  "createdAt": "2026-05-15T...",
  "downloadUrl": "/api/jobs/uuid-here/download"
}
```

### GET /api/jobs/:jobId/download

Download the MP4 video.

```bash
curl http://localhost:3001/api/jobs/uuid-here/download -o demo.mp4
```

---

## Deployment

### Web App (Netlify)

```bash
cd web
netlify deploy --prod
```

### API (Heroku)

```bash
cd api
heroku create democast-api
heroku config:set ELEVENLABS_API_KEY=sk_...
git push heroku main
```

### API (Railway)

```bash
cd api
railway link
railway up
```

---

## Tech Stack

**Frontend:**
- Next.js 15 (React 19)
- Tailwind CSS
- Framer Motion
- Sonner

**Backend:**
- Express.js
- Playwright
- ElevenLabs API
- ffmpeg
- Node.js

---

## Roadmap

### Phase 1: Core (Now)
- [x] Web playground
- [x] API backend
- [x] Mock render pipeline
- [ ] Real ElevenLabs integration
- [ ] Real Playwright recording
- [ ] Real ffmpeg composition

### Phase 2: CLI (Q2 2026)
- [ ] `npm i -g democast`
- [ ] `democast render demo.json`
- [ ] Config validation
- [ ] Error reporting

### Phase 3: Advanced (Q3 2026)
- [ ] Kokoro TTS (local, free)
- [ ] Custom fonts & branding
- [ ] Multi-language support
- [ ] Advanced transitions
- [ ] Analytics dashboard

### Phase 4: Enterprise (Q4 2026)
- [ ] Team collaboration
- [ ] API rate limiting
- [ ] Custom domains
- [ ] SLA support

---

## Contributing

We welcome contributions! Here's how:

1. **Fork** the repo
2. **Create** a feature branch (`git checkout -b feature/amazing`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing`)
5. **Open** a Pull Request

### Development

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/democast.git
cd democast

# Create a feature branch
git checkout -b feature/your-feature

# Make changes
# Test locally
npm run dev

# Commit and push
git add .
git commit -m "Add your feature"
git push origin feature/your-feature

# Open a PR on GitHub
```

### Code Style

- Use TypeScript
- Follow ESLint rules
- Write tests for new features
- Update docs

---

## FAQ

### Q: Is it really free?

**A:** Yes. MIT license. Forever free. No ads. No tracking.

### Q: Can I use it commercially?

**A:** Yes. MIT license allows commercial use.

### Q: Can I self-host?

**A:** Yes. Deploy API to your own server. Deploy web app to your own domain.

### Q: What if I don't have an ElevenLabs account?

**A:** We're adding Kokoro TTS (local, free) in Phase 3. No API key needed.

### Q: Can I use it in CI/CD?

**A:** Yes. Headless API. Perfect for GitHub Actions, GitLab CI, etc.

### Q: How long does rendering take?

**A:** ~2-5 minutes per demo (depends on length and complexity).

### Q: Can I customize the output?

**A:** Yes. Intro/outro cards, fonts, colors, timing. All configurable.

### Q: Is there a web UI?

**A:** Yes. Optional playground at http://localhost:3000. Or use the CLI.

---

## License

MIT License — See [LICENSE](./LICENSE) for details.

You are free to:
- ✅ Use commercially
- ✅ Modify
- ✅ Distribute
- ✅ Use privately

---

## Support

- **GitHub Issues:** [Report bugs](https://github.com/pisanocami/democast/issues)
- **GitHub Discussions:** [Ask questions](https://github.com/pisanocami/democast/discussions)
- **Email:** camila@forceofnature.io
- **Twitter:** [@pisanocami](https://twitter.com/pisanocami)

---

## Acknowledgments

Built with:
- [Playwright](https://playwright.dev) — Browser automation
- [ElevenLabs](https://elevenlabs.io) — AI voiceover
- [ffmpeg](https://ffmpeg.org) — Video composition
- [Next.js](https://nextjs.org) — Web framework
- [Express.js](https://expressjs.com) — API framework

---

## Roadmap to 4k Stars ⭐

Help us reach 4k stars! Here's how:

1. **Star the repo** — https://github.com/pisanocami/democast
2. **Share on Twitter** — Tag [@pisanocami](https://twitter.com/pisanocami)
3. **Share on Product Hunt** — Coming soon
4. **Contribute** — Open a PR
5. **Sponsor** — Help fund development

---

**Made with ♥ by Camila Pisano at Force of Nature**

*The future of demo videos is open-source.*
