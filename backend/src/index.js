/**
 * Tavern Finder - Server Entry Point
 */

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import npcRoutes from './routes/npcRoutes.js';
import healthRoutes from './routes/healthRoutes.js';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/npc', npcRoutes);
app.use('/api/health', healthRoutes);

// Root fallback / Welcome
app.get('/', (req, res) => {
  res.json({
    name: "Tavern Finder Procedural Engine API",
    version: "1.0.0",
    endpoints: {
      health: "GET /api/health",
      randomNpc: "GET /api/npc/random",
      seededNpc: "GET /api/npc/random?seed=<seed_value>"
    }
  });
});

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ error: "Endpoint not found" });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error("Internal Server Error:", err);
  res.status(500).json({
    error: "Internal Server Error",
    message: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

import { fileURLToPath } from 'node:url';

// Start Server only if executed directly (not when imported in test suites)
const isDirectExecution = process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1];

if (isDirectExecution) {
  const server = app.listen(PORT, '0.0.0.0', () => {
    console.log(`🍺 Tavern Finder Procedural Generator API running on port ${PORT}`);
    console.log(`👉 Health Check: http://127.0.0.1:${PORT}/api/health`);
    console.log(`👉 Random NPC:   http://127.0.0.1:${PORT}/api/npc/random`);
    console.log(`👉 Seeded NPC:   http://127.0.0.1:${PORT}/api/npc/random?seed=elaris42`);
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.warn(`⚠️ Port ${PORT} is already in use by an active process. Backend API is ready on port ${PORT}.`);
    } else {
      console.error("Server error:", err);
    }
  });
}


export default app;
