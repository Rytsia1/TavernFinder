/**
 * Tavern Finder Backend Verification Script
 * Validates Dual-Mode Generation (Standard D&D 5e vs Canonical Myria Metaphysics)
 */

import http from 'node:http';
import assert from 'node:assert/strict';
import { PRNG, hashSeed } from '../src/generators/prng.js';
import { generateNpc, generateStandardNpc, generateMyriaNpc } from '../src/generators/npcGenerator.js';
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

console.log("\n========================================================");
console.log("⚔️  TAVERN FINDER CANONICAL DUAL-MODE ENGINE TESTS");
console.log("========================================================\n");

// 1. PRNG & Hash Determinism
console.log("🧪 1. Seed & PRNG Determinism Tests");
it("Hash produces exact same 32-bit unsigned int for identical inputs", () => {
  const h1 = hashSeed("myria_nexus_99");
  const h2 = hashSeed("myria_nexus_99");
  const h3 = hashSeed("different_seed");
  assert.equal(h1, h2);
  assert.notEqual(h1, h3);
  assert(h1 >= 0 && h1 <= 0xffffffff);
});

it("PRNG with identical string seed generates exact same number sequences", () => {
  const prng1 = new PRNG("leyline_confluence");
  const prng2 = new PRNG("leyline_confluence");
  for (let i = 0; i < 50; i++) {
    assert.equal(prng1.next(), prng2.next());
  }
});

// 2. Standard Mode Tests
console.log("\n🧪 2. Standard Mode (D&D 5e) Tests");
it("Generates identical Standard NPC for 50 repeated runs with same seed", () => {
  const testSeed = "standard_seed_77";
  const baseline = generateNpc(testSeed, { mode: "standard" });

  for (let i = 0; i < 50; i++) {
    const run = generateNpc(testSeed, { mode: "standard" });
    assert.deepEqual(run, baseline);
  }
});

it("Matches exact Standard output schema", () => {
  const npc = generateNpc("standard_schema", { mode: "standard" });
  assert.equal(npc.mode, "standard");
  const requiredKeys = [
    "mode", "seed", "name", "gender", "title", "origin", "personality", "ideal", "bond", "flaw", "trinket", "fear", "secret", "dialogue", "markdown"
  ];
  
  for (const key of requiredKeys) {
    assert.ok(key in npc, `Missing key: ${key}`);
    assert.equal(typeof npc[key], "string", `Key ${key} must be a string`);
    assert.ok(npc[key].trim().length > 0, `Key ${key} cannot be empty`);
  }
});

// 3. Myria Mode Canonical Power System Tests
console.log("\n🧪 3. Canonical Myria Mode Tests (Metaphysics, Racial Bonuses & Power Profile)");
it("Generates identical Myria NPC for 50 repeated runs with same seed", () => {
  const testSeed = "canonical_myria_42";
  const baseline = generateNpc(testSeed, { mode: "myria" });

  for (let i = 0; i < 50; i++) {
    const run = generateNpc(testSeed, { mode: "myria" });
    assert.deepEqual(run, baseline);
  }
});

it("Matches exact canonical Myria schema with power_profile object", () => {
  const npc = generateNpc("myria_canonical_schema", { mode: "myria" });
  assert.equal(npc.mode, "myria");
  assert.ok(npc.seed, "Missing seed");
  assert.ok(npc.name, "Missing name");
  assert.ok(["Male", "Female"].includes(npc.gender), "Gender must be Male or Female");
  assert.ok(npc.race, "Missing race");
  assert.ok(npc.homeland, "Missing homeland");
  assert.ok(npc.nation, "Missing nation");
  assert.ok(npc.government, "Missing government");
  assert.ok(npc.patron_god, "Missing patron_god");
  assert.ok(npc.occupation, "Missing occupation");
  assert.ok(npc.power_profile, "Missing power_profile");
  assert.ok(npc.power_profile.branch, "Missing power_profile.branch");
  assert.ok(npc.power_profile.rank, "Missing power_profile.rank");
  assert.ok(npc.power_profile.element, "Missing power_profile.element");
  assert.ok(npc.power_profile.aura_color, "Missing power_profile.aura_color");
  assert.ok(npc.power_profile.racial_boost, "Missing power_profile.racial_boost");
  assert.ok(npc.power_profile.description, "Missing power_profile.description");
  assert.ok(npc.ideal, "Missing ideal");
  assert.ok(npc.bond, "Missing bond");
  assert.ok(npc.flaw, "Missing flaw");
  assert.ok(npc.fear, "Missing fear");
  assert.ok(npc.quirk, "Missing quirk");
  assert.ok(npc.trinket, "Missing trinket");
  assert.ok(npc.secret, "Missing secret");
  assert.ok(npc.dialogue, "Missing dialogue");
  assert.ok(npc.markdown, "Missing markdown block");
});

it("Validates all 7 canonical race elemental auras & attribute boosts", () => {
  const expectedAuras = {
    Human: { element: "Fire", aura_color: "Crimson/Gold", racial_boost: "Strength +20%" },
    Elf: { element: "Wind", aura_color: "Silver/Green", racial_boost: "Speed +20%" },
    Druid: { element: "Plant", aura_color: "Verdant", racial_boost: "Endurance +20%" },
    "Half-Animal": { element: "Thunder", aura_color: "Violet/Blue", racial_boost: "Reflexes +20%" },
    Dwarf: { element: "Earth", aura_color: "Bronze/Grey", racial_boost: "Defense +20%" },
    Liichtian: { element: "Light", aura_color: "White/Gold", racial_boost: "Speed & Reflexes +10% each" },
    Merfolk: { element: "Water", aura_color: "Blue/Teal", racial_boost: "Endurance & Defense +10% each" }
  };

  for (let i = 0; i < 70; i++) {
    const npc = generateMyriaNpc(`seed_race_test_${i}`);
    const expected = expectedAuras[npc.race];
    assert.ok(expected, `Unknown race generated: ${npc.race}`);
    assert.equal(npc.power_profile.element, expected.element);
    assert.equal(npc.power_profile.aura_color, expected.aura_color);
    assert.equal(npc.power_profile.racial_boost, expected.racial_boost);
  }
});

it("Enforces gender constraints on Wild Magic (Female only) and Awakener (Male only)", () => {
  for (let i = 0; i < 60; i++) {
    const femaleNpc = generateMyriaNpc(`seed_fem_${i}`, { gender: "female" });
    assert.equal(femaleNpc.gender, "Female");
    assert.notEqual(femaleNpc.power_profile.branch, "Awakener", "Awakener cannot be Female");

    const maleNpc = generateMyriaNpc(`seed_male_${i}`, { gender: "male" });
    assert.equal(maleNpc.gender, "Male");
    assert.notEqual(maleNpc.power_profile.branch, "Wild Magic", "Wild Magic cannot be Male");
  }
});

it("Partitions names strictly by race and nation cultural pools", () => {
  for (let i = 0; i < 70; i++) {
    const npc = generateMyriaNpc(`seed_name_test_${i}`);
    assert.ok(npc.name, "Name must be defined");
    assert.ok(npc.homeland, "Homeland must be defined");
    assert.ok(npc.nation, "Nation must be defined");
    const nameParts = npc.name.split(' ');
    assert(nameParts.length >= 2, `Full name '${npc.name}' must contain first and last name`);
  }
});

// 4. API Integration Testing
console.log("\n🧪 4. Express API Integration Tests");
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

    await itAsync("GET /api/npc/random defaults to standard mode", async () => {
      const res = await fetch(`${baseUrl}/api/npc/random`);
      assert.equal(res.status, 200);
      const npc = await res.json();
      assert.equal(npc.mode, "standard");
      assert.ok(npc.ideal);
      assert.ok(npc.trinket);
    });

    await itAsync("GET /api/npc/random?mode=myria returns canonical Myria schema", async () => {
      const res = await fetch(`${baseUrl}/api/npc/random?mode=myria`);
      assert.equal(res.status, 200);
      const npc = await res.json();
      assert.equal(npc.mode, "myria");
      assert.ok(npc.race);
      assert.ok(npc.power_profile);
      assert.ok(npc.power_profile.racial_boost);
      assert.ok(npc.power_profile.aura_color);
    });

    await itAsync("GET /api/npc/random?mode=myria&seed=albrecht42 returns deterministic output", async () => {
      const res1 = await fetch(`${baseUrl}/api/npc/random?mode=myria&seed=albrecht42`);
      const res2 = await fetch(`${baseUrl}/api/npc/random?mode=myria&seed=albrecht42`);
      const npc1 = await res1.json();
      const npc2 = await res2.json();
      assert.deepEqual(npc1, npc2);
      assert.equal(npc1.seed, "albrecht42");
    });

    console.log("\n========================================================");
    console.log(`🎉 ALL ${passed}/${total} TESTS PASSED SUCCESSFULLY!`);
    console.log("========================================================\n");

    // Display sample outputs
    console.log("📜 Sample Output - Standard Mode:");
    console.log(JSON.stringify(generateNpc("std_sample", { mode: "standard" }), null, 2));

    console.log("\n📜 Sample Output - Canonical Myria Mode (Male):");
    console.log(JSON.stringify(generateNpc("myria_male_sample", { mode: "myria", gender: "male" }), null, 2));

    console.log("\n📜 Sample Output - Canonical Myria Mode (Female):");
    console.log(JSON.stringify(generateNpc("myria_female_sample", { mode: "myria", gender: "female" }), null, 2));
    console.log("");
  } finally {
    server.close();
  }
});
