# Changelog

All notable changes to this project will be documented in this file.

## [0.1.0] - 2026-05-15

### Added

- **Web Playground** — Interactive Next.js 15 landing page with live config editor
  - Hero section with animated terminal demo
  - Feature cards with gradient accents
  - Playground component for editing configs and previewing renders
  - Examples gallery showcasing real demo configs
  - Installation guide with copy-to-clipboard
  - Feature comparison table vs Tella, Loom, Scribe
  - Responsive design with dark mode
  - Framer Motion animations throughout

- **API Backend** — Express.js server for render job processing
  - POST /api/render — Submit render jobs with config
  - GET /api/jobs/:jobId — Check job status and progress
  - GET /api/jobs/:jobId/download — Download rendered MP4
  - Job queue system for async processing
  - Mock render pipeline (ready for real integration)

- **Documentation**
  - Comprehensive README with quick start guide
  - API endpoint documentation
  - Deployment instructions for Netlify (web) and Heroku/Railway (api)
  - Tech stack overview
  - Contributing guidelines

### Tech Stack

- **Frontend:** Next.js 15, React 19, Tailwind CSS, Framer Motion, Sonner
- **Backend:** Express.js, Playwright, ElevenLabs API, ffmpeg, Node.js
- **Deployment:** Netlify (web), Heroku/Railway (api)

### Known Limitations

- Render pipeline is mocked (returns dummy MP4)
- ElevenLabs integration not yet connected
- Playwright recording not yet integrated
- ffmpeg composition not yet implemented

### Next Steps

- Integrate real ElevenLabs TTS
- Implement Playwright browser recording
- Add ffmpeg video composition
- Deploy API to production
- Add CLI tool
- Implement Kokoro TTS (local, free alternative)

---

## Versioning

This project follows [Semantic Versioning](https://semver.org/).
