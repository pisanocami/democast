import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { v4 as uuid } from "uuid";
import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json({ limit: "50mb" }));

// In-memory job queue
const jobs = new Map();

// POST /api/render - Submit a render job
app.post("/api/render", async (req, res) => {
  try {
    const { demoUrl, prompt, narration, voiceId = "21m00Tcm4TlvDq8ikWAM" } = req.body;

    if (!demoUrl || (!prompt && !narration)) {
      return res.status(400).json({ error: "demoUrl and (prompt or narration) required" });
    }

    const jobId = uuid();
    const jobDir = path.join(__dirname, "jobs", jobId);
    fs.mkdirSync(jobDir, { recursive: true });

    // Create config.json for democast
    const config = {
      demoUrl,
      voiceId,
      narration: narration || prompt,
      viewport: { width: 1920, height: 1080 },
    };

    fs.writeFileSync(path.join(jobDir, "config.json"), JSON.stringify(config, null, 2));

    // Store job
    jobs.set(jobId, {
      id: jobId,
      status: "queued",
      progress: 0,
      createdAt: new Date(),
      demoUrl,
      prompt,
    });

    // Queue the render (async, non-blocking)
    setImmediate(() => renderJob(jobId, jobDir, config));

    res.json({ jobId, status: "queued" });
  } catch (error) {
    console.error("Render error:", error);
    res.status(500).json({ error: error.message });
  }
});

// GET /api/jobs/:jobId - Get job status
app.get("/api/jobs/:jobId", (req, res) => {
  const job = jobs.get(req.params.jobId);
  if (!job) return res.status(404).json({ error: "Job not found" });
  res.json(job);
});

// GET /api/jobs/:jobId/download - Download rendered video
app.get("/api/jobs/:jobId/download", (req, res) => {
  const job = jobs.get(req.params.jobId);
  if (!job) return res.status(404).json({ error: "Job not found" });
  if (job.status !== "completed") return res.status(400).json({ error: "Job not completed" });

  const videoPath = path.join(__dirname, "jobs", req.params.jobId, "output.mp4");
  if (!fs.existsSync(videoPath)) return res.status(404).json({ error: "Video not found" });

  res.download(videoPath, `democast-${req.params.jobId}.mp4`);
});

// GET /api/health - Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date() });
});

// Render job (async)
async function renderJob(jobId, jobDir, config) {
  const job = jobs.get(jobId);
  job.status = "rendering";
  job.progress = 10;

  try {
    // Step 1: Generate narration (mock for now)
    job.progress = 30;
    console.log(`[${jobId}] Generated narration`);

    // Step 2: Record with Playwright (mock for now)
    job.progress = 60;
    console.log(`[${jobId}] Recorded video`);

    // Step 3: Compose with ffmpeg (mock for now)
    job.progress = 90;
    console.log(`[${jobId}] Composed final video`);

    // Create a dummy MP4 (in production, this would be the real render)
    const outputPath = path.join(jobDir, "output.mp4");
    fs.writeFileSync(outputPath, Buffer.from("mock video data"));

    job.status = "completed";
    job.progress = 100;
    job.completedAt = new Date();
    job.downloadUrl = `/api/jobs/${jobId}/download`;

    console.log(`[${jobId}] Render completed`);
  } catch (error) {
    job.status = "failed";
    job.error = error.message;
    console.error(`[${jobId}] Render failed:`, error);
  }
}

app.listen(PORT, () => {
  console.log(`🚀 democast API running on http://localhost:${PORT}`);
  console.log(`📝 POST /api/render - Submit a render job`);
  console.log(`📊 GET /api/jobs/:jobId - Get job status`);
  console.log(`📥 GET /api/jobs/:jobId/download - Download video`);
});
