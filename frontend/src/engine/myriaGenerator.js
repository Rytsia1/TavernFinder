/**
 * Canonical Myria Procedural Generator (Client-Side Fallback Engine)
 * Generates characters strictly adhering to Myria's metaphysics, racial attribute boosts,
 * elemental aura affinities, nation-specific cultural naming pools, and D&D-style roleplay pillars
 * (Core Ideal, Deep Bond, Fatal Flaw, Dark Secret, Internal Fear, Pocket Trinket).
 */

import { PRNG } from './prng.js';
import {
  quirks,
  ideals,
  bonds,
  flaws,
  myriaRaces,
  myriaNations,
  myriaNamingPools,
  powerBranches,
  tierMagicLadders,
  auraLadders,
  wildMagicSubtypes,
  abyssalTaintSubtypes,
  myriaOccupations,
  myriaSecrets,
  myriaTrinkets,
  myriaFears,
  myriaPersonalities
} from './data/index.js';

/**
 * Generates an authentic Myria NPC deterministically with cultural names, roleplay pillars, and lore hooks.
 * 
 * @param {string|number} [seed] - Optional seed for deterministic generation
 * @param {Object} [options] - Options (e.g., gender, race)
 * @returns {Object} Canonical Myria NPC payload
 */
export function generateMyriaNpc(seed, options = {}) {
  const prng = new PRNG(seed);

  // 1. Initial Gender and Power Branch selection with strict constraints
  const requestedGender = options.gender ? String(options.gender).toLowerCase().trim() : null;

  // Filter allowed power branches based on requested gender if specified
  let eligibleBranches = powerBranches;
  if (requestedGender === 'male') {
    eligibleBranches = powerBranches.filter(b => b.id !== 'wild_magic');
  } else if (requestedGender === 'female') {
    eligibleBranches = powerBranches.filter(b => b.id !== 'awakener');
  }

  const selectedBranchObj = prng.weightedPick(eligibleBranches, (b) => b.baseWeight ?? 1);

  // Determine final gender based on branch rules or random selection
  let selectedGender;
  if (requestedGender === 'male') {
    selectedGender = 'Male';
  } else if (requestedGender === 'female') {
    selectedGender = 'Female';
  } else {
    if (selectedBranchObj.id === 'wild_magic') {
      selectedGender = 'Female'; // Witches are FEMALE ONLY
    } else if (selectedBranchObj.id === 'awakener') {
      selectedGender = 'Male';   // Awakeners are MALE ONLY
    } else {
      selectedGender = prng.pick(['Male', 'Female']);
    }
  }

  // 2. Select Race & Associated Homeland / Nation
  const race = prng.weightedPick(myriaRaces, (r) => r.baseWeight ?? 1);
  const nation = myriaNations[race.id] || myriaNations.human;

  // 3. Cultural Naming Pool strictly sampled from the NPC's Nation / Race
  const namingPoolKey = nation.namingPool || 'varencia';
  const namingPool = myriaNamingPools[namingPoolKey] || myriaNamingPools.varencia;
  const firstNamesList = selectedGender === 'Male' ? namingPool.male : namingPool.female;

  const firstName = prng.pick(firstNamesList) || (selectedGender === 'Male' ? 'Albrecht' : 'Adrienne');
  const surname = prng.pick(namingPool.surnames) || 'Ardent';
  const fullName = `${firstName} ${surname}`;

  // 4. Generate Power Profile Details
  let rankStr = "";
  let powerDesc = "";

  if (selectedBranchObj.id === 'tier_magic') {
    const tierObj = prng.weightedPick(tierMagicLadders, (t) => t.weight);
    rankStr = tierObj.rank;
    powerDesc = `Channels ${race.element} magic through ${tierObj.rank}. When casting, geometric spell circles flare in ${race.auraColor} light. ${tierObj.description}`;
  } else if (selectedBranchObj.id === 'aura') {
    const auraObj = prng.weightedPick(auraLadders, (a) => a.weight);
    rankStr = auraObj.rank;
    powerDesc = `A ${race.auraColor.toLowerCase()} aura wraps around their frame in moments of tension. ${auraObj.description}`;
  } else if (selectedBranchObj.id === 'wild_magic') {
    const validWild = wildMagicSubtypes.filter(w => !w.genderRequirement || w.genderRequirement === selectedGender);
    const wildObj = prng.weightedPick(validWild, (w) => w.weight);
    const generated = wildObj.generator(prng, race);
    rankStr = generated.rank;
    powerDesc = `${generated.description} Manifests untamed ${race.auraColor.toLowerCase()} ether surges tied to local ley lines.`;
  } else if (selectedBranchObj.id === 'awakener') {
    const tm = prng.weightedPick(tierMagicLadders.slice(1, 4), (t) => t.weight); // Tier 1-3
    const ar = prng.weightedPick(auraLadders.slice(0, 3), (a) => a.weight);       // 1-3 Star
    rankStr = `${tm.rank.split(' ')[0]} & ${ar.rank.split(' ')[0]}`;
    powerDesc = `Rare combat prodigy wielding dual MP/TP systems: ${ar.rank} physical reinforcement paired with ${tm.rank} spellcasting (with a 20% MP cost penalty under active aura). Emits a blinding ${race.auraColor.toLowerCase()} harmonic aura.`;
  } else if (selectedBranchObj.id === 'abyssal_taint') {
    const abyssalObj = prng.pick(abyssalTaintSubtypes);
    rankStr = abyssalObj.rank;
    powerDesc = `${abyssalObj.description} The natural ${race.auraColor.toLowerCase()} aura is mottled with dark, void-like veins.`;
  } else {
    rankStr = "Unawakened (Mundane)";
    powerDesc = `Possesses no active ether pathways. Relies on ${race.racialBoost} natural prowess, seasoned reflexes, and cold steel.`;
  }

  const powerProfile = {
    branch: selectedBranchObj.name,
    rank: rankStr,
    element: race.element,
    aura_color: race.auraColor,
    racial_boost: race.racialBoost,
    description: powerDesc
  };

  // 5. Select Occupation & Dominant Personality
  const occupation = prng.weightedPick(myriaOccupations, (occ) => occ.baseWeight ?? 1);
  const personality = prng.weightedPick(myriaPersonalities, (pers) => {
    return occupation.traitWeights?.[pers.id] ?? 1;
  });

  // 6. Select Core Roleplay Pillars (Ideals, Bonds, Flaws)
  const ideal = prng.pick(ideals);
  const bond = prng.pick(bonds);
  const flaw = prng.pick(flaws);

  // 7. Select Narrative Hooks (Internal Fear, Dark Secret, Sensory Quirk & Pocket Trinket)
  const fear = prng.weightedPick(myriaFears, (item) => {
    return item.tags?.includes(occupation.tag) ? 5 : 1;
  });

  const secret = prng.weightedPick(myriaSecrets, (item) => {
    return item.tags?.includes(occupation.tag) ? 5 : 1;
  });

  const quirk = prng.pick(quirks);
  const trinket = prng.pick(myriaTrinkets);

  // 8. Select Contextual Dialogue
  const dialoguePool = personality.dialogue && personality.dialogue.length > 0
    ? personality.dialogue
    : ["Keep your voice low. The Ley Lines carry whispers further than the wind."];
  const dialogueTemplate = prng.pick(dialoguePool);

  // 9. Interpolate Dialogue with Lore Tokens
  const dialogue = dialogueTemplate
    .replace(/\{name\}/g, fullName)
    .replace(/\{title\}/g, occupation.title)
    .replace(/\{race\}/g, race.name)
    .replace(/\{homeland\}/g, nation.name)
    .replace(/\{element\}/g, race.element)
    .replace(/\{auraColor\}/g, race.auraColor)
    .replace(/\{powerBranch\}/g, selectedBranchObj.name)
    .replace(/\{fear\}/g, fear.text.toLowerCase())
    .replace(/\{secret\}/g, secret.text.toLowerCase())
    .replace(/\{personality\}/g, personality.name.toLowerCase());

  // 10. Assemble Obsidian / Notion-Ready Markdown Block
  const markdown = [
    `# 🔮 **${fullName}** — *${occupation.title}*`,
    `> *"${dialogue}"*`,
    ``,
    `### ⚡ **Myria Lineage & Metaphysics**`,
    `- **Race:** ${race.name} (Aura: *${race.auraColor}* | Element: *${race.element}*)`,
    `- **Homeland:** ${nation.name} *(Capital: ${nation.capital})*`,
    `- **Racial Attribute Boost:** ${race.racialBoost}`,
    `- **Gender:** ${selectedGender}`,
    `- **Power Branch:** ${selectedBranchObj.name}`,
    `- **Rank & Mastery:** ${rankStr}`,
    `- **Manifestation:** ${powerDesc}`,
    ``,
    `### 📜 **Persona & Roleplay Pillars**`,
    `- **Personality:** ${personality.name}`,
    `- **Core Ideal:** ${ideal}`,
    `- **Deep Bond:** ${bond}`,
    `- **Fatal Flaw:** ${flaw}`,
    `- **Physical Quirk:** ${quirk}`,
    `- **Pocket Trinket:** ${trinket}`,
    ``,
    `### 🗝️ **Narrative Hooks & Lore Secrets**`,
    `- **Internal Fear:** ${fear.text}`,
    `- **Dark Secret:** ${secret.text}`
  ].join('\n');

  return {
    seed: prng.rawSeed,
    mode: "myria",
    name: fullName,
    gender: selectedGender,
    race: race.name,
    homeland: nation.name,
    nation: nation.name,
    capital: nation.capital,
    occupation: occupation.title,
    personality: personality.name,
    power_profile: powerProfile,
    ideal: ideal,
    bond: bond,
    flaw: flaw,
    quirk: quirk,
    trinket: trinket,
    fear: fear.text,
    secret: secret.text,
    dialogue: dialogue,
    markdown: markdown
  };
}
