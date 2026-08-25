/**
 * Pure Node.js Full-Stack Dev Server Runner
 * Runs both backend and frontend directly using Node child processes (no cmd.exe dependency).
 */

import { spawn, fork } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import fs from 'node:fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const backendEntry = path.join(__dirname, 'backend', 'src', 'index.js');
const viteBin = path.join(__dirname, 'frontend', 'node_modules', 'vite', 'bin', 'vite.js');

console.log('\n======================================================');
console.log('🍺 Starting Tavern Finder Full Stack Development Server');
console.log('======================================================\n');

// 1. Launch Backend Process
console.log('🟡 [BACKEND] Starting Express server on port 3000...');
const backendProcess = fork(backendEntry, [], {
  cwd: path.join(__dirname, 'backend'),
  stdio: 'inherit'
});

backendProcess.on('error', (err) => {
  console.error('❌ [BACKEND ERROR]:', err.message);
});

// 2. Launch Frontend Vite Dev Server
console.log('🔵 [FRONTEND] Starting Vite on port 5173...\n');
let frontendProcess;

if (fs.existsSync(viteBin)) {
  frontendProcess = fork(viteBin, [], {
    cwd: path.join(__dirname, 'frontend'),
    stdio: 'inherit'
  });
} else {
  // Fallback to npm run dev
  const isWin = process.platform === 'win32';
  const npmExec = isWin ? 'npm.cmd' : 'npm';
  frontendProcess = spawn(npmExec, ['run', 'dev'], {
    cwd: path.join(__dirname, 'frontend'),
    stdio: 'inherit',
    shell: true
  });
}

frontendProcess.on('error', (err) => {
  console.error('❌ [FRONTEND ERROR]:', err.message);
});

// Graceful cleanup on Ctrl+C / exit
function shutdown() {
  console.log('\n🛑 Shutting down Tavern Finder servers...');
  try { backendProcess?.kill(); } catch (e) {}
  try { frontendProcess?.kill(); } catch (e) {}
  process.exit(0);
}

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
