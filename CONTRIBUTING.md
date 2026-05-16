# Contributing to democast

Thanks for your interest in contributing! We welcome all kinds of contributions.

---

## Ways to Contribute

### 🐛 Report Bugs

Found a bug? Open an issue with:
- Description of the bug
- Steps to reproduce
- Expected vs actual behavior
- Screenshots/videos if helpful
- Your environment (OS, Node version, etc.)

[Open an issue](https://github.com/pisanocami/democast/issues)

### 💡 Suggest Features

Have an idea? Open a discussion with:
- What problem does it solve?
- How would you use it?
- Any alternatives you've considered?

[Start a discussion](https://github.com/pisanocami/democast/discussions)

### 📝 Improve Documentation

- Fix typos
- Clarify confusing sections
- Add examples
- Improve diagrams

Just fork, edit, and submit a PR.

### 🔧 Write Code

Want to implement a feature? Here's how:

1. **Check existing issues/PRs** — Don't duplicate work
2. **Fork the repo** — Create your own copy
3. **Create a branch** — `git checkout -b feature/your-feature`
4. **Make changes** — Write clean, tested code
5. **Commit** — `git commit -m "Add your feature"`
6. **Push** — `git push origin feature/your-feature`
7. **Open a PR** — Describe what you changed and why

### 🎨 Design

- UI/UX improvements
- Logo/branding
- Marketing materials

Open a discussion with your ideas.

### 📢 Spread the Word

- Star the repo ⭐
- Share on Twitter
- Write a blog post
- Talk about it at meetups
- Add to awesome lists

---

## Development Setup

### Prerequisites

- Node.js 18+
- npm or yarn
- Git

### Local Setup

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/democast.git
cd democast

# Install dependencies
cd api && npm install
cd ../web && npm install

# Create .env file
cp api/.env.example api/.env
# Edit api/.env and add your ElevenLabs API key

# Start development servers
cd api && npm start          # Terminal 1
cd web && npm run dev        # Terminal 2

# Open http://localhost:3000
```

### Project Structure

```
democast/
├── api/                     # Express.js backend
│   ├── server.js            # Main server
│   ├── package.json
│   └── README.md
│
├── web/                     # Next.js frontend
│   ├── src/
│   │   ├── app/             # Pages
│   │   ├── components/      # React components
│   │   └── lib/             # Utilities
│   ├── package.json
│   └── README.md
│
├── README.md                # Main docs
├── SETUP.md                 # Setup guide
├── EXAMPLES.md              # Example configs
├── INTEGRATION.md           # Integration guide
└── CONTRIBUTING.md          # This file
```

---

## Code Style

### TypeScript

- Use strict mode
- Type all function parameters
- Type all return values
- No `any` types

```typescript
// ✅ Good
function renderVideo(config: RenderConfig): Promise<string> {
  // ...
}

// ❌ Bad
function renderVideo(config: any): any {
  // ...
}
```

### React

- Use functional components
- Use hooks (useState, useEffect, etc.)
- Memoize expensive computations
- Keep components small and focused

```typescript
// ✅ Good
export function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  
  return (
    <motion.div animate={{ opacity: isVisible ? 1 : 0 }}>
      {/* ... */}
    </motion.div>
  );
}

// ❌ Bad
export class Hero extends React.Component {
  // ...
}
```

### Express

- Use async/await
- Handle errors properly
- Log important events
- Validate input

```typescript
// ✅ Good
app.post("/api/render", async (req, res) => {
  try {
    const { demoUrl, prompt } = req.body;
    
    if (!demoUrl || !prompt) {
      return res.status(400).json({ error: "Missing required fields" });
    }
    
    const jobId = await submitRenderJob(demoUrl, prompt);
    res.json({ jobId, status: "queued" });
  } catch (error) {
    console.error("Render error:", error);
    res.status(500).json({ error: error.message });
  }
});

// ❌ Bad
app.post("/api/render", (req, res) => {
  const jobId = submitRenderJob(req.body.demoUrl, req.body.prompt);
  res.json({ jobId });
});
```

### CSS

- Use Tailwind classes
- Avoid inline styles
- Keep component styles in CSS files
- Use dark mode utilities

```tsx
// ✅ Good
<button className="px-4 py-2 rounded-lg bg-violet-500 hover:bg-violet-600 text-white">
  Render
</button>

// ❌ Bad
<button style={{ padding: "8px 16px", backgroundColor: "#8b5cf6" }}>
  Render
</button>
```

---

## Testing

### Write Tests

- Unit tests for utilities
- Integration tests for API endpoints
- E2E tests for critical flows

```bash
npm test
```

### Before Submitting

- [ ] Code runs locally
- [ ] No console errors
- [ ] Tests pass
- [ ] Linter passes

```bash
npm run lint
npm test
npm run build
```

---

## Commit Messages

Use clear, descriptive commit messages:

```
# ✅ Good
Add ElevenLabs TTS integration to API
Fix race condition in job queue
Update README with new examples

# ❌ Bad
fix stuff
update
asdf
```

Format:
- Start with a verb (Add, Fix, Update, Remove, etc.)
- Be specific about what changed
- Keep it under 50 characters

---

## Pull Request Process

1. **Fork the repo** — Create your own copy
2. **Create a branch** — `git checkout -b feature/your-feature`
3. **Make changes** — Write clean, tested code
4. **Commit** — Use clear commit messages
5. **Push** — `git push origin feature/your-feature`
6. **Open a PR** — Describe what you changed and why

### PR Template

```markdown
## Description
What does this PR do?

## Related Issues
Fixes #123

## Changes
- Change 1
- Change 2
- Change 3

## Testing
How did you test this?

## Screenshots
If applicable, add screenshots.

## Checklist
- [ ] Code runs locally
- [ ] Tests pass
- [ ] Linter passes
- [ ] Docs updated
```

---

## Review Process

- **Code review** — We'll review your code for quality and style
- **Testing** — We'll test it locally
- **Feedback** — We may ask for changes
- **Merge** — Once approved, we'll merge it

Be patient! We review PRs as soon as we can.

---

## Community Guidelines

- **Be respectful** — Treat everyone with kindness
- **Be constructive** — Provide helpful feedback
- **Be inclusive** — Welcome all perspectives
- **Be honest** — Admit mistakes, learn from them

---

## Questions?

- **Issues:** https://github.com/pisanocami/democast/issues
- **Discussions:** https://github.com/pisanocami/democast/discussions
- **Email:** camila@forceofnature.io

---

## Recognition

Contributors will be recognized in:
- README.md (Contributors section)
- GitHub contributors page
- Release notes

---

**Thank you for contributing! You're helping make democast better for everyone. 💜**
