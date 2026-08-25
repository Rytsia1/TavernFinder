/**
 * Tavern Finder Backend Verification Script
 * Tests:
 * 1. PRNG determinism with repeated seeds (both strings and numbers)
 * 2. Statistical variance across multiple random seeds
 * 3. Exact schema compliance
 * 4. Integration testing with Express API endpoints
 */

import http from 'node:http';
import assert from 'node:assert/strict';
import { PRNG, hashSeed } from '../src/generators/prng.js';
import { generateNpc } from '../src/generators/npcGenerator.js';
import app from '../src/index.js';

let passed = 0;
let total = 0;

function it(desc, fn) {
  total++;
  try {
    fn();
    console.log(`  ✅ ${desc}`);
    passed++;
  } catch (err) {
    console.error(`  ❌ ${desc}`);
    console.error(`     ${err.message}`);
    throw err;
  }
}

async function itAsync(desc, fn) {
  total++;
  try {
    await fn();
    console.log(`  ✅ ${desc}`);
    passed++;
  } catch (err) {
    console.error(`  ❌ ${desc}`);
    console.error(`     ${err.message}`);
    throw err;
  }
}

console.log("\n==========================================");
console.log("⚔️  TAVERN FINDER PROCEDURAL ENGINE TESTS");
console.log("==========================================\n");

// 1. PRNG & Hash Determinism
console.log("🧪 1. Seed & PRNG Determinism Tests");
it("Hash produces exact same 32-bit unsigned int for identical inputs", () => {
  const h1 = hashSeed("tavern42");
  const h2 = hashSeed("tavern42");
  const h3 = hashSeed("different");
  assert.equal(h1, h2);
  assert.notEqual(h1, h3);
  assert(h1 >= 0 && h1 <= 0xffffffff);
});

it("PRNG with identical string seed generates exact same number sequences", () => {
  const prng1 = new PRNG("dragon_inn");
  const prng2 = new PRNG("dragon_inn");
  for (let i = 0; i < 50; i++) {
    assert.equal(prng1.next(), prng2.next());
  }
});

it("PRNG with numeric seed generates deterministic outputs", () => {
  const prng1 = new PRNG(1337);
  const prng2 = new PRNG(1337);
  for (let i = 0; i < 50; i++) {
    assert.equal(prng1.nextInt(1, 100), prng2.nextInt(1, 100));
  }
});

// 2. NPC Procedural Generator Determinism & Schema
console.log("\n🧪 2. NPC Procedural Generator Determinism & Schema Tests");
it("Generates identical NPC attributes for 50 repeated runs with same seed", () => {
  const testSeed = "elaris-apothecary-99";
  const baseline = generateNpc(testSeed);

  for (let i = 0; i < 50; i++) {
    const run = generateNpc(testSeed);
    assert.deepEqual(run, baseline);
  }
});

it("Matches exact output schema with non-empty string fields", () => {
  const npc = generateNpc("test_schema");
  const requiredKeys = [
    "seed", "name", "title", "origin", "personality", "ideal", "bond", "flaw", "trinket", "fear", "secret", "dialogue", "markdown"
  ];

  
  for (const key of requiredKeys) {
    assert.ok(key in npc, `Missing key: ${key}`);
    assert.equal(typeof npc[key], "string", `Key ${key} must be a string`);
    assert.ok(npc[key].trim().length > 0, `Key ${key} cannot be empty`);
  }
});


it("Generates high variance across 100 random seeds", () => {
  const names = new Set();
  const titles = new Set();
  const personalities = new Set();

  for (let i = 0; i < 100; i++) {
    const npc = generateNpc();
    names.add(npc.name);
    titles.add(npc.title);
    personalities.add(npc.personality);
  }

  assert.ok(names.size > 25, `Expected > 25 distinct names, got ${names.size}`);
  assert.ok(titles.size >= 5, `Expected >= 5 distinct occupations, got ${titles.size}`);
  assert.ok(personalities.size >= 5, `Expected >= 5 distinct personalities, got ${personalities.size}`);
});

// 3. API Integration Testing
console.log("\n🧪 3. Express API Integration Tests");
const server = http.createServer(app);

server.listen(0, async () => {
  const address = server.address();
  const port = address.port;
  const baseUrl = `http://127.0.0.1:${port}`;

  try {
    await itAsync("GET /api/health returns { status: 'ok' }", async () => {
      const res = await fetch(`${baseUrl}/api/health`);
      assert.equal(res.status, 200);
      const json = await res.json();
      assert.deepEqual(json, { status: "ok" });
    });

    await itAsync("GET /api/npc/random returns 200 with valid NPC JSON", async () => {
      const res = await fetch(`${baseUrl}/api/npc/random`);
      assert.equal(res.status, 200);
      const npc = await res.json();
      assert.ok(npc.seed);
      assert.ok(npc.name);
      assert.ok(npc.title);
      assert.ok(npc.personality);
      assert.ok(npc.fear);
      assert.ok(npc.secret);
      assert.ok(npc.dialogue);
    });

    await itAsync("GET /api/npc/random?seed=xyz returns deterministic output", async () => {
      const res1 = await fetch(`${baseUrl}/api/npc/random?seed=valiant_knight_77`);
      const res2 = await fetch(`${baseUrl}/api/npc/random?seed=valiant_knight_77`);
      const npc1 = await res1.json();
      const npc2 = await res2.json();
      assert.deepEqual(npc1, npc2);
      assert.equal(npc1.seed, "valiant_knight_77");
    });

    await itAsync("GET / invalid endpoint returns 404", async () => {
      const res = await fetch(`${baseUrl}/api/non_existent_route`);
      assert.equal(res.status, 404);
    });

    console.log("\n==========================================");
    console.log(`🎉 ALL ${passed}/${total} TESTS PASSED SUCCESSFULLY!`);
    console.log("==========================================\n");

    // Display sample generated NPCs
    console.log("📜 Sample Generated NPCs from Seeded Engine:\n");
    console.log("1. Seed 'elaris_sample':");
    console.log(JSON.stringify(generateNpc("elaris_sample"), null, 2));
    console.log("\n2. Seed 'ironwood_blacksmith':");
    console.log(JSON.stringify(generateNpc("ironwood_blacksmith"), null, 2));
    console.log("\n3. Random Seed:");
    console.log(JSON.stringify(generateNpc(), null, 2));
    console.log("");
  } finally {
    server.close();
  }
});
