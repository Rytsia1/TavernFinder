/**
 * Myria Lore: Power Branches & Ranks Dataset
 * Rules:
 * - Tier Magic: Tiers 0 to 3
 * - Aura: Stars 1 to 3, with rare Star 4
 * - Wild Magic (Witch): FEMALE ONLY
 * - Awakener (Aura + Tier Magic): MALE ONLY
 */

export const tierMagicRanks = [
  { rank: "Tier 0 (Initiate)", tierNum: 0, description: "Basic ether shaping, spark ignition, and minor telekinesis." },
  { rank: "Tier 1 (Adept)", tierNum: 1, description: "Stable elemental spellcasting and tactical glyph projection." },
  { rank: "Tier 2 (Mage)", tierNum: 2, description: "Advanced high-density ether constructs and devastating area spells." },
  { rank: "Tier 3 (High Magus)", tierNum: 3, description: "Catastrophic environmental transmutation and dimensional resonance." }
];

export const auraRanks = [
  { rank: "1-Star (Latent Resonance)", stars: 1, description: "Basic muscular ether reinforcement and accelerated reflexes." },
  { rank: "2-Star (Blazing Flow)", stars: 2, description: "Tangible external aura shielding and concussive shockwave strikes." },
  { rank: "3-Star (Grand Vanguard)", stars: 3, description: "Dense body armor manifest from pure elemental aura; weapon imbument." },
  { rank: "4-Star (Transcendent Crest - Rare)", stars: 4, description: "Legendary sovereign aura capable of cleaving fortress ramparts effortlessly." }
];

export const wildMagicRanks = [
  { rank: "Witch of the Bramble (Novice)", description: "Instinctive primal ether channeling driven by emotion and nature." },
  { rank: "Witch of the Eclipse (Adept)", description: "Commands chaotic raw ether without incantations; distorts spell vectors." },
  { rank: "Witch of the Coven (Elder)", description: "Terrifying mastery over leyline surges, curses, and life-force manipulation." }
];

export const powerBranches = [
  {
    id: "tier_magic",
    name: "Tier Magic",
    genderRestriction: null,
    baseWeight: 4,
    description: "Structured, academic spellcraft channeled through incantations, geometric formulas, and ether rings."
  },
  {
    id: "aura",
    name: "Aura Combatant",
    genderRestriction: null,
    baseWeight: 4,
    description: "Internal ether refinement focused on martial enhancement, reinforced constitution, and kinetic aura projections."
  },
  {
    id: "wild_magic",
    name: "Wild Magic (Witch)",
    genderRestriction: "Female", // Female only
    baseWeight: 3,
    description: "Unshackled primal ether manipulation that bypasses structured circles and draws directly from nature's raw currents."
  },
  {
    id: "awakener",
    name: "Awakener (Dual Practitioner)",
    genderRestriction: "Male", // Male only
    baseWeight: 3,
    description: "Rare hybrid individuals capable of simultaneously commanding high-tier spellcraft and high-star aura reinforcement."
  },
  {
    id: "mundane",
    name: "Mundane (Non-Practitioner)",
    genderRestriction: null,
    baseWeight: 2,
    description: "Possesses no active ether pathways; relies strictly on mundane weapons, alchemical trinkets, and natural wit."
  }
];
