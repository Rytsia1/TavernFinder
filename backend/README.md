# Tavern Finder - Procedural Generation Backend Engine 🍺

A lightweight, atmospheric fantasy NPC procedural generator engine built with **Node.js (ES Modules)** and **Express.js**, driven by a deterministic seeded PRNG (**Mulberry32** with 32-bit **FNV-1a** hashing).

---

## 📁 Architecture

```
backend/
├── src/
│   ├── data/                 # Datasets for names, archetypes, traits, fears, secrets, and dialogue
│   │   ├── names.js
│   │   ├── occupations.js
│   │   ├── personalities.js
│   │   ├── fears.js
│   │   ├── secrets.js
│   │   └── index.js
│   ├── generators/           # Deterministic PRNG and NPC procedural generation logic
│   │   ├── prng.js
│   │   └── npcGenerator.js
│   ├── controllers/          # Express request controllers
│   │   ├── npcController.js
│   │   └── healthController.js
│   ├── routes/               # Express API route endpoints
│   │   ├── npcRoutes.js
│   │   └── healthRoutes.js
│   └── index.js              # Express application server entry point
├── test/
│   └── verify.js             # Automated determinism, variance, schema & endpoint tests
├── package.json
└── .env.example
```

---

## 🚀 Getting Started

### 1. Installation

```bash
cd backend
npm install
```

### 2. Run the Development / Production Server

```bash
# Production start
npm start

# Development mode (with auto-reload)
npm run dev
```

The server starts at `http://localhost:3000`.

### 3. Run Automated Tests

```bash
npm test
```

---

## 🔌 API Endpoints

### 1. Generate Random NPC (Dual-Mode Supported)
`GET /api/npc/random?mode=<standard|myria>&gender=<male|female>&seed=<seed_value>`

#### Query Parameters:
- **`mode`** (optional, default: `standard`):
  - `standard`: Generates a classic D&D 5e-style fantasy NPC with Origins, Ideals, Bonds, Flaws, and Pocket Trinkets.
  - `myria`: Generates an authentic character from the Myria setting with Elemental Auras, Power Branches (*Tier Magic*, *Aura Stars*, *Wild Magic Witch*, *Awakener*), Maglica Crystal / Abyssal lore secrets, and sensory quirks.
- **`gender`** (optional): `'male'` or `'female'`. If omitted, gender is chosen deterministically by the PRNG.
- **`seed`** (optional): Any alphanumeric string or integer for 100% deterministic repeatable generation.

#### Example Queries:
- `GET /api/npc/random` (Default standard random NPC)
- `GET /api/npc/random?mode=myria` (Myria setting random NPC)
- `GET /api/npc/random?mode=myria&gender=female` (Myria female NPC, eligible for Wild Magic)
- `GET /api/npc/random?mode=myria&seed=elaris42&gender=male` (Deterministic Myria male Awakener/practitioner)

---

### 2. Health Check
`GET /api/health`

**Response:**
```json
{
  "status": "ok"
}
```


---

## 🎲 Procedural Generation Design

1. **Seeded Determinism**: Any alphanumeric seed or integer is hashed into an unsigned 32-bit integer state using FNV-1a, powering the Mulberry32 PRNG.
2. **Archetype Weighted Affinities**: Archetypes (e.g. *Traveling Apothecary*, *Grizzled Blacksmith*, *Wandering Priest*, *Street Urchin*, etc.) weight the probabilities of personality traits.
3. **Correlated Fears & Secrets**: Fears and secrets carry contextual tags, giving archetype-aligned narrative hooks 5x higher probability while retaining combinatorial depth.
4. **Contextual Dialogue**: Dialogue lines are selected from personality-specific pools to reflect the NPC's core demeanor and persona.
