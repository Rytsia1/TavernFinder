/**
 * Canonical Myria Procedural Generator
 * Adheres strictly to the metaphysical rules, racial bonuses, aura colors, and tier ladders of Myria.
 */

import { PRNG } from './prng.js';
import {
  maleNames,
  femaleNames,
  firstNames,
  surnames,
  quirks,
  myriaRaces,
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
 * Generates an authentic Myria NPC deterministically using a seeded PRNG.
 * 
 * @param {string|number} [seed] - Optional seed for deterministic generation
 * @param {Object} [options] - Options (e.g., gender)
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

  // 2. Select Name based on resolved gender
  const namePool = selectedGender === 'Male' ? maleNames : femaleNames;
  const firstName = prng.pick(namePool) || prng.pick(firstNames);
  const surname = prng.pick(surnames);
  const fullName = `${firstName} ${surname}`;

  // 3. Select Race & Extract Elemental Aura Affinities
  const race = prng.weightedPick(myriaRaces, (r) => r.baseWeight ?? 1);

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
    // If female, pick from wild magic subtypes
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

  // 5. Select Occupation
  const occupation = prng.weightedPick(myriaOccupations, (occ) => occ.baseWeight ?? 1);

  // 6. Select Dominant Personality
  const personality = prng.weightedPick(myriaPersonalities, (pers) => {
    return occupation.traitWeights?.[pers.id] ?? 1;
  });

  // 7. Select Fear (5x weight for matching tags)
  const fear = prng.weightedPick(myriaFears, (item) => {
    return item.tags?.includes(occupation.tag) ? 5 : 1;
  });

  // 8. Select Secret (5x weight for matching tags)
  const secret = prng.weightedPick(myriaSecrets, (item) => {
    return item.tags?.includes(occupation.tag) ? 5 : 1;
  });

  // 9. Select Sensory / Physical Quirk
  const quirk = prng.pick(quirks);

  // 10. Select Canonical Myria Trinket
  const trinket = prng.pick(myriaTrinkets);

  // 11. Select Contextual Dialogue
  const dialoguePool = personality.dialogue && personality.dialogue.length > 0
    ? personality.dialogue
    : ["Keep your voice low. The Ley Lines carry whispers further than the wind."];
  const dialogueTemplate = prng.pick(dialoguePool);

  // 12. Interpolate Dialogue with Lore Tokens
  const dialogue = dialogueTemplate
    .replace(/\{name\}/g, fullName)
    .replace(/\{title\}/g, occupation.title)
    .replace(/\{race\}/g, race.name)
    .replace(/\{element\}/g, race.element)
    .replace(/\{auraColor\}/g, race.auraColor)
    .replace(/\{powerBranch\}/g, selectedBranchObj.name)
    .replace(/\{fear\}/g, fear.text.toLowerCase())
    .replace(/\{secret\}/g, secret.text.toLowerCase())
    .replace(/\{personality\}/g, personality.name.toLowerCase());

  // 13. Assemble Obsidian / Notion-Ready Markdown Block
  const markdown = [
    `# 🔮 **${fullName}** — *${occupation.title}*`,
    `> *"${dialogue}"*`,
    ``,
    `### ⚡ **Myria Lineage & Metaphysics**`,
    `- **Race:** ${race.name} (Aura: *${race.auraColor}* | Element: *${race.element}*)`,
    `- **Racial Attribute Boost:** ${race.racialBoost}`,
    `- **Gender:** ${selectedGender}`,
    `- **Power Branch:** ${selectedBranchObj.name}`,
    `- **Rank & Mastery:** ${rankStr}`,
    `- **Manifestation:** ${powerDesc}`,
    ``,
    `### 📜 **Persona & Quirk**`,
    `- **Personality:** ${personality.name}`,
    `- **Physical Quirk:** ${quirk}`,
    `- **Pocket Trinket:** ${trinket}`,
    ``,
    `### 🗝️ **Narrative Hooks & Lore Secrets**`,
    `- **Internal Fear:** ${fear.text}`,
    `- **Lore Secret:** ${secret.text}`
  ].join('\n');

  return {
    seed: prng.rawSeed,
    mode: "myria",
    name: fullName,
    gender: selectedGender,
    race: race.name,
    occupation: occupation.title,
    power_profile: powerProfile,
    quirk: quirk,
    trinket: trinket,
    secret: secret.text,
    dialogue: dialogue,
    markdown: markdown
  };
}
