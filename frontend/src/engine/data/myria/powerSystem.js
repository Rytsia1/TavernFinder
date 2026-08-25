/**
 * Canonical Myria Power System Architecture
 * Metaphysical branches: Tier Magic (MP), Aura (TP), Wild Magic (Hexenzirkel Witches),
 * Awakeners (Dual MP/TP), and Abyssal Taint (Azamina's corruption).
 */

export const tierMagicLadders = [
  {
    rank: "Tier 0 (Apprentice)",
    tierNum: 0,
    weight: 40,
    description: "Apprentice level: rudimentary ether manipulation, cantrips, spark ignition, and household utility tricks."
  },
  {
    rank: "Tier 1 (Adept)",
    tierNum: 1,
    weight: 35,
    description: "Adept level: structured elemental spellcasting, guild-certified tactical glyphs, and focused offensive bolts."
  },
  {
    rank: "Tier 2 (Mage)",
    tierNum: 2,
    weight: 18,
    description: "Mage level: dense geometric ether constructs, high-potency combat barriers, and explosive area transmutations."
  },
  {
    rank: "Tier 3 (High Mage)",
    tierNum: 3,
    weight: 6,
    description: "High Mage level: battlefield-scale elemental storms, fortress-shattering artillery, and spatial compression."
  },
  {
    rank: "Tier 4 (Archmage - Mythic)",
    tierNum: 4,
    weight: 1,
    description: "Archmage tier: legendary reality-bending phenomenon capable of altering regional climate and leylines."
  }
];

export const auraLadders = [
  {
    rank: "1-Star Aura (Faint Ember)",
    stars: 1,
    weight: 45,
    description: "A faint ember of internal ether wrapping muscles; slightly superhuman strength and enhanced bone density."
  },
  {
    rank: "2-Star Aura (Steady Glow)",
    stars: 2,
    weight: 35,
    description: "A steady, luminous glow enveloping weapons and armor; peak human reflexes and kinetic shockwave release."
  },
  {
    rank: "3-Star Aura (Bright Crest)",
    stars: 3,
    weight: 15,
    description: "A brilliant, blinding aura visible to the naked eye; fully superhuman agility, skin impervious to common steel."
  },
  {
    rank: "4-Star Aura (Blazing Sovereign - Rare)",
    stars: 4,
    weight: 5,
    description: "A blazing sovereign crest; veteran battlefield commander capable of bisecting siege engines with bare hands."
  }
];

export const hexenzirkelColors = [
  { color: "Verdant", domain: "Bio-catalysis, poisonous spores, and root manipulation", title: "Green Witch" },
  { color: "Crimson", domain: "Blood ether boiling, thermal surges, and raw combustion", title: "Red Witch" },
  { color: "Silver-White", domain: "Atmospheric pressure, sensory fog, and ghost-whispers", title: "White Witch" },
  { color: "Obsidian", domain: "Leyline consumption, spatial rot, and silent curses", title: "Obsidian Witch" },
  { color: "Violet", domain: "Electric nervous interference and kinetic destabilization", title: "Violet Witch" },
  { color: "Azure", domain: "Tidal resonance, cellular hydration control, and deep freeze", title: "Azure Witch" }
];

export const wildMagicSubtypes = [
  {
    type: "Witch Seedling",
    genderRequirement: "Female",
    weight: 4,
    generator: (prng, race) => {
      const color = prng.pick(hexenzirkelColors);
      return {
        rank: `Witch Seedling (${color.title})`,
        description: `Immense natural mana reserves aligned with the ${color.color} Hexenzirkel frequency. Specializes in ${color.domain}.`
      };
    }
  },
  {
    type: "Wandering Witch",
    genderRequirement: "Female",
    weight: 3,
    generator: (prng, race) => {
      const color = prng.pick(hexenzirkelColors);
      return {
        rank: `Wandering Witch of the ${color.title}`,
        description: `Fully awakened rogue practitioner drawing directly from planetary leylines. Channels ${color.domain} without casting circles.`
      };
    }
  },
  {
    type: "Draconic Bloodkin",
    genderRequirement: null,
    weight: 2,
    generator: (prng, race) => {
      return {
        rank: "Draconic Bloodkin (Primal Awakening)",
        description: "Dormant draconic lineage surfacing through the ether; scales of raw elemental force erupt under duress."
      };
    }
  },
  {
    type: "Ley-Line Sensitive",
    genderRequirement: null,
    weight: 3,
    generator: (prng, race) => {
      return {
        rank: "Ley-Line Sensitive (Resonant Vessel)",
        description: "Involuntary empathic link to the world's etheric veins; experiences physical pain near Abyssal rifts and surges."
      };
    }
  }
];

export const abyssalTaintSubtypes = [
  {
    rank: "Blighted Magla Carrier",
    description: "Veins blackened by corrupted Magla dust from Azamina's domain; physical power surges erratically during pain."
  },
  {
    rank: "Shadow-Touched Exile",
    description: "Survived an Abyssal incursion; their shadow moves with autonomous malice and snuffs out nearby candlelight."
  },
  {
    rank: "Void-Scarred Outcast",
    description: "Carries an unhealing Abyssal brand on their chest that hums with cold malice whenever holy magic is invoked."
  }
];

export const powerBranches = [
  {
    id: "aura",
    name: "Aura",
    fuel: "TP (Tension / Technique Points)",
    genderRestriction: null,
    baseWeight: 35,
    description: "Martial ether refinement reinforcing musculature, reflexes, and kinetic projection."
  },
  {
    id: "tier_magic",
    name: "Tier Magic",
    fuel: "MP (Mana Points)",
    genderRestriction: null,
    baseWeight: 30,
    description: "Divine elemental system structured through geometric spell circles and incantations."
  },
  {
    id: "wild_magic",
    name: "Wild Magic",
    fuel: "Planetary Ley-Line Resonance",
    genderRestriction: "Female", // Handled dynamically in generator for Witches
    baseWeight: 15,
    description: "Unshackled primal ether drawing directly from the world's veins, governed by the Hexenzirkel."
  },
  {
    id: "awakener",
    name: "Awakener",
    fuel: "Dual MP / TP (20% MP penalty during active aura)",
    genderRestriction: "Male", // MALE ONLY
    baseWeight: 10,
    description: "Extremely rare dual-system combat genius capable of combining lethal swordsmanship with high-tier spellcraft."
  },
  {
    id: "abyssal_taint",
    name: "Abyssal Taint",
    fuel: "Azamina's Corrupting Magla",
    genderRestriction: null,
    baseWeight: 6,
    description: "Dark, erratic power born of survival in corrupted zones; deadly but spiritually degenerative."
  },
  {
    id: "mundane",
    name: "Mundane (Unawakened)",
    fuel: "None (Physical Grit & Steel)",
    genderRestriction: null,
    baseWeight: 4,
    description: "Non-practitioner relying on cold steel, alchemical tools, and seasoned wits."
  }
];
