# Security Policy

## Reporting a Vulnerability

If you discover a security vulnerability, please **do not** open a public issue.

Instead, email **camila@forceofnature.io** with:
- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix (if you have one)

We will:
1. Acknowledge receipt within 24 hours
2. Investigate and confirm the issue
3. Develop and test a fix
4. Release a patch
5. Credit you (unless you prefer anonymity)

---

## Security Best Practices

### API Keys

- **Never** commit `.env` files
- **Never** hardcode API keys in code
- Use environment variables
- Rotate keys regularly
- Use least-privilege keys

```bash
# ✅ Good
ELEVENLABS_API_KEY=sk_...  # In .env, not in git

# ❌ Bad
const apiKey = "sk_...";   # Hardcoded in code
```

### Input Validation

- Validate all user input
- Sanitize URLs before visiting
- Validate JSON schemas
- Reject unexpected data

```typescript
// ✅ Good
if (!demoUrl || !demoUrl.startsWith("https://")) {
  return res.status(400).json({ error: "Invalid URL" });
}

// ❌ Bad
const browser = await chromium.launch();
await page.goto(req.body.demoUrl);  // No validation
```

### Dependencies

- Keep dependencies up to date
- Use `npm audit` to check for vulnerabilities
- Review dependency licenses
- Avoid unmaintained packages

```bash
npm audit
npm audit fix
npm outdated
```

### Secrets Management

- Use `.env` files locally
- Use environment variables in production
- Use secret management services (AWS Secrets Manager, etc.)
- Never log sensitive data

```typescript
// ✅ Good
const apiKey = process.env.ELEVENLABS_API_KEY;
console.log("API key configured");  // Don't log the key

// ❌ Bad
console.log("API key:", process.env.ELEVENLABS_API_KEY);
```

### Error Handling

- Don't expose sensitive info in error messages
- Log errors securely
- Use generic error messages for users
- Log detailed errors for debugging

```typescript
// ✅ Good
try {
  await renderVideo(config);
} catch (error) {
  console.error("Render failed:", error);  // Log details
  res.status(500).json({ error: "Render failed" });  // Generic message
}

// ❌ Bad
res.status(500).json({ error: error.message });  // Exposes internals
```

### CORS

- Restrict CORS to trusted origins
- Don't use `*` in production
- Validate origin headers

```typescript
// ✅ Good
app.use(cors({
  origin: ["https://democast.dev", "https://app.democast.dev"],
  credentials: true
}));

// ❌ Bad
app.use(cors());  // Allows all origins
```

### Rate Limiting

- Implement rate limiting on API endpoints
- Prevent brute force attacks
- Prevent DDoS attacks

```typescript
import rateLimit from "express-rate-limit";

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,  // 15 minutes
  max: 100  // 100 requests per windowMs
});

app.post("/api/render", limiter, (req, res) => {
  // ...
});
```

### HTTPS

- Always use HTTPS in production
- Use valid SSL certificates
- Redirect HTTP to HTTPS

```typescript
// ✅ Good
if (process.env.NODE_ENV === "production") {
  app.use((req, res, next) => {
    if (req.header("x-forwarded-proto") !== "https") {
      res.redirect(`https://${req.header("host")}${req.url}`);
    } else {
      next();
    }
  });
}
```

### Logging

- Log security events
- Don't log sensitive data
- Use structured logging
- Monitor logs for suspicious activity

```typescript
// ✅ Good
console.log({
  timestamp: new Date(),
  event: "render_submitted",
  jobId: jobId,
  userId: req.user?.id
});

// ❌ Bad
console.log("Render submitted with config:", config);  // May contain secrets
```

---

## Security Checklist

Before deploying to production:

- [ ] No hardcoded secrets
- [ ] `.env` file in `.gitignore`
- [ ] HTTPS enabled
- [ ] CORS configured
- [ ] Rate limiting enabled
- [ ] Input validation implemented
- [ ] Error handling secure
- [ ] Dependencies up to date
- [ ] `npm audit` passes
- [ ] Secrets in environment variables
- [ ] Logging configured
- [ ] No console.log of sensitive data

---

## Deployment Security

### Environment Variables

```bash
# Production
ELEVENLABS_API_KEY=sk_...
NODE_ENV=production
PORT=3001
```

### Docker

```dockerfile
# ✅ Good
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 3001
CMD ["npm", "start"]

# ❌ Bad
FROM node:18
COPY . .
RUN npm install
EXPOSE 3001
CMD ["npm", "start"]
```

### Heroku

```bash
heroku config:set ELEVENLABS_API_KEY=sk_...
heroku config:set NODE_ENV=production
```

---

## Monitoring

- Monitor API logs for suspicious activity
- Set up alerts for errors
- Monitor performance
- Monitor security events

---

## Compliance

- GDPR: We don't store user data
- CCPA: No personal data collection
- SOC 2: Not applicable (open-source)

---

## Questions?

- **Security issues:** camila@forceofnature.io
- **General questions:** https://github.com/pisanocami/democast/discussions

---

**Thank you for helping keep democast secure! 🔒**
