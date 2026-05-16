# Examples

Real-world democast configs. Copy, paste, customize.

---

## 1. Product Walkthrough (60 seconds)

**Use case:** Show new feature to customers

```json
{
  "demoUrl": "https://your-app.com",
  "prompt": "Create a 60-second walkthrough of the new dashboard. Start with the intro screen, show the main metrics, click on the revenue chart to drill down, then highlight the export button. End with a call-to-action to upgrade.",
  "voiceId": "21m00Tcm4TlvDq8ikWAM",
  "viewport": { "width": 1920, "height": 1080 },
  "intro": {
    "title": "New Dashboard",
    "subtitle": "See your metrics at a glance"
  },
  "outro": {
    "title": "Ready to upgrade?",
    "cta": "Start free trial"
  }
}
```

---

## 2. Bug Report (30 seconds)

**Use case:** Attach to GitHub issue

```json
{
  "demoUrl": "https://your-app.com/bug-page",
  "prompt": "Reproduce the bug: Click the submit button, wait 2 seconds, then click it again. Show that the form submits twice instead of once.",
  "voiceId": "21m00Tcm4TlvDq8ikWAM",
  "viewport": { "width": 1280, "height": 720 }
}
```

---

## 3. Sales Demo (3 minutes)

**Use case:** Prospect discovery call

```json
{
  "demoUrl": "https://your-app.com",
  "prompt": "Create a 3-minute sales demo. Start with the problem statement: 'Most teams waste 10 hours/week on manual reporting.' Then show how our app solves it: 1) Auto-sync data from 5 sources, 2) Generate reports in 30 seconds, 3) Share with stakeholders. End with pricing and a call-to-action to book a demo.",
  "voiceId": "21m00Tcm4TlvDq8ikWAM",
  "viewport": { "width": 1920, "height": 1080 },
  "intro": {
    "title": "The Problem",
    "subtitle": "10 hours/week wasted on manual reporting"
  },
  "outro": {
    "title": "Book a demo",
    "cta": "calendly.com/your-link"
  }
}
```

---

## 4. Onboarding Video (2 minutes)

**Use case:** New user signup flow

```json
{
  "demoUrl": "https://your-app.com/onboarding",
  "prompt": "Create a 2-minute onboarding video. Walk through: 1) Create an account, 2) Connect your first data source, 3) Generate your first report, 4) Invite a team member. Make it feel easy and fast.",
  "voiceId": "21m00Tcm4TlvDq8ikWAM",
  "viewport": { "width": 1280, "height": 720 }
}
```

---

## 5. Feature Announcement (45 seconds)

**Use case:** Twitter, Product Hunt, email

```json
{
  "demoUrl": "https://your-app.com/new-feature",
  "prompt": "Create a 45-second announcement video for our new AI-powered insights feature. Show: 1) The old way (manual analysis), 2) The new way (one click), 3) The results (instant insights). Make it exciting and fast-paced.",
  "voiceId": "21m00Tcm4TlvDq8ikWAM",
  "viewport": { "width": 1920, "height": 1080 },
  "intro": {
    "title": "AI Insights",
    "subtitle": "One click. Instant answers."
  }
}
```

---

## 6. API Documentation (2 minutes)

**Use case:** Developer docs

```json
{
  "demoUrl": "https://your-api-docs.com",
  "prompt": "Create a 2-minute video walkthrough of the API docs. Show: 1) Authentication, 2) Making your first request, 3) Handling errors, 4) Rate limits. Speak like you're teaching a developer.",
  "voiceId": "21m00Tcm4TlvDq8ikWAM",
  "viewport": { "width": 1920, "height": 1080 }
}
```

---

## 7. Before/After Comparison (1 minute)

**Use case:** Show the impact

```json
{
  "demoUrl": "https://your-app.com/comparison",
  "prompt": "Create a 1-minute before/after video. Left side: old manual process (slow, error-prone). Right side: new automated process (fast, accurate). Show the time saved and accuracy improvement.",
  "voiceId": "21m00Tcm4TlvDq8ikWAM",
  "viewport": { "width": 1920, "height": 1080 }
}
```

---

## 8. Tutorial (5 minutes)

**Use case:** YouTube, blog post

```json
{
  "demoUrl": "https://your-app.com/tutorial",
  "prompt": "Create a 5-minute tutorial on how to set up advanced reporting. Cover: 1) Connecting data sources, 2) Creating custom metrics, 3) Building dashboards, 4) Sharing with stakeholders, 5) Setting up alerts. Go step-by-step, speak clearly.",
  "voiceId": "21m00Tcm4TlvDq8ikWAM",
  "viewport": { "width": 1920, "height": 1080 }
}
```

---

## 9. Case Study (3 minutes)

**Use case:** Sales collateral

```json
{
  "demoUrl": "https://your-app.com/case-study",
  "prompt": "Create a 3-minute case study video. Tell the story: 1) The customer's problem (losing $100k/month), 2) How they found us, 3) The implementation (2 weeks), 4) The results (saved $500k/year), 5) The testimonial. Make it emotional and compelling.",
  "voiceId": "21m00Tcm4TlvDq8ikWAM",
  "viewport": { "width": 1920, "height": 1080 }
}
```

---

## 10. Competitive Comparison (2 minutes)

**Use case:** Win deals

```json
{
  "demoUrl": "https://your-app.com/vs-competitors",
  "prompt": "Create a 2-minute comparison video. Show why we're better than the competition. Compare on: 1) Price, 2) Features, 3) Speed, 4) Support, 5) Ease of use. Be factual and fair.",
  "voiceId": "21m00Tcm4TlvDq8ikWAM",
  "viewport": { "width": 1920, "height": 1080 }
}
```

---

## Using These Examples

### Option 1: Web Playground

1. Open http://localhost:3000
2. Scroll to "Playground"
3. Copy the JSON above
4. Paste into the config editor
5. Update `demoUrl` to your site
6. Click "Render"
7. Download the MP4

### Option 2: CLI (Coming Soon)

```bash
# Save config to file
cat > demo.json << 'EOF'
{
  "demoUrl": "https://your-app.com",
  "prompt": "..."
}
EOF

# Render
democast render demo.json

# Output: demo.mp4
```

---

## Tips for Great Demos

### 1. Be Specific

❌ **Bad:** "Show the app"  
✅ **Good:** "Click the dashboard, show the revenue chart, drill down to Q2, highlight the $500k spike"

### 2. Keep It Tight

❌ **Bad:** 5-minute rambling demo  
✅ **Good:** 60-second focused demo with one clear message

### 3. Show the Value

❌ **Bad:** "Here's a button. Click it."  
✅ **Good:** "This button saves you 10 hours/week. Here's how..."

### 4. Use Real Data

❌ **Bad:** Fake data, placeholder names  
✅ **Good:** Real customer data, real use cases

### 5. Tell a Story

❌ **Bad:** Feature dump  
✅ **Good:** Problem → Solution → Results

---

## Voice IDs

Popular ElevenLabs voices:

| Voice | ID | Style |
|-------|----|----|
| Adam | `pNInz6obpgDQGcFmaJgB` | Professional, deep |
| Bella | `EXAVITQu4vr4xnSDxMaL` | Warm, friendly |
| Charlie | `IZSifFFhzhNg76HEmj2t` | Casual, upbeat |
| Domi | `AZnzlk1XvdvUBZXUNXIN` | Deep, authoritative |
| Elli | `MF3mGyEYCl7XYWbV9V6O` | Young, energetic |
| Gigi | `jsCqWAovK2LkecY7zXl4` | Soft, gentle |
| Glinda | `z9f4zblakq5AcCTe4xAO` | Bright, cheerful |
| Grace | `JBFqnCBsd6RMkjW44OWO` | Calm, reassuring |
| Liam | `FGpmtulWAzj28q3GQRjV` | Young, friendly |
| Matilda | `XrExE9yKIg1WjnnlVWZL` | Mature, warm |
| Onyx | `cjVigY5qzO86Huf0OWal` | Deep, masculine |
| Rachel | `21m00Tcm4TlvDq8ikWAM` | Clear, professional |
| Samantha | `EL02mQ2CvdbFZ5eXvF2a` | Energetic, upbeat |
| Serena | `pMsXgVXv3BLzUgSXRHj7` | Smooth, sophisticated |
| Thomas | `GBv7mTt0atIp3Br8iCZE` | Warm, conversational |

[Full list](https://elevenlabs.io/docs/voices)

---

## Customization

All examples can be customized:

```json
{
  "demoUrl": "YOUR_URL",
  "prompt": "YOUR_PROMPT",
  "voiceId": "YOUR_VOICE",
  "viewport": { "width": 1920, "height": 1080 },
  "intro": {
    "title": "YOUR_TITLE",
    "subtitle": "YOUR_SUBTITLE",
    "bgColor": "#0F2440",
    "textColor": "#FFFFFF"
  },
  "outro": {
    "title": "YOUR_CTA",
    "cta": "YOUR_LINK",
    "bgColor": "#D4AF37",
    "textColor": "#0F2440"
  }
}
```

---

## Questions?

- **Issues:** https://github.com/pisanocami/democast/issues
- **Discussions:** https://github.com/pisanocami/democast/discussions
- **Email:** camila@forceofnature.io

---

**Happy demoing! 🎬**
