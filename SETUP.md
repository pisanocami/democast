# Setup Guide

Get democast running locally in 5 minutes.

## Prerequisites

- Node.js 18+ (download from https://nodejs.org)
- npm or yarn
- Git

## Installation

### 1. Clone the repo

```bash
git clone https://github.com/pisanocami/democast.git
cd democast
```

### 2. Install dependencies

```bash
# Install API dependencies
cd api
npm install

# Install web dependencies (in another terminal)
cd web
npm install
```

### 3. Set up environment variables

Create `api/.env`:

```
ELEVENLABS_API_KEY=sk_your_key_here
PORT=3001
```

Get your ElevenLabs API key:
1. Go to https://elevenlabs.io
2. Sign up (free tier available)
3. Go to Settings → API Keys
4. Copy your key and paste it in `.env`

### 4. Start the servers

**Terminal 1 — API:**

```bash
cd api
npm start
```

You should see:
```
🚀 democast API running on http://localhost:3001
```

**Terminal 2 — Web App:**

```bash
cd web
npm run dev
```

You should see:
```
▲ Next.js 15.0.3
- Local:        http://localhost:3000
```

### 5. Open the playground

1. Go to http://localhost:3000
2. Scroll to "Playground"
3. Edit the config (demoUrl, prompt, voiceId)
4. Click "Render"
5. Wait for the video to render
6. Download the MP4

## Troubleshooting

### API won't start

- Check that port 3001 is not in use: `netstat -ano | findstr :3001`
- Make sure Node.js is installed: `node --version`
- Check that dependencies installed: `npm list` in `api/`

### Web app won't start

- Check that port 3000 is not in use: `netstat -ano | findstr :3000`
- Clear Next.js cache: `rm -rf web/.next`
- Reinstall dependencies: `cd web && rm -rf node_modules && npm install`

### Render fails

- Check that API is running on http://localhost:3001
- Check API logs for errors
- Verify ElevenLabs API key is correct
- Try with a simpler prompt first

### ElevenLabs API errors

- Verify your API key is correct
- Check that your account has credits (free tier has 10k chars/month)
- Try a different voice ID: https://elevenlabs.io/docs/voices

## Next Steps

- Read the [README.md](./README.md) for full documentation
- Check [api/README.md](./api/README.md) for API details
- Check [web/README.md](./web/README.md) for web app details
- Deploy to production (see deployment guides in respective READMEs)

## Getting Help

- **Issues:** Open a GitHub issue
- **Discussions:** Start a discussion on GitHub
- **Email:** camila@forceofnature.io

---

Happy demoing! 🎬
