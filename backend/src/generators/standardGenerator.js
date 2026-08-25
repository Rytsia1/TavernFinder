/**
 * Standard Mode Procedural Generator
 * Implements classic D&D 5e-style fantasy NPC generation.
 */

import { PRNG } from './prng.js';
import {
  maleNames,
  femaleNames,
  firstNames,
  surnames,
  occupations,
  origins,
  personalities,
  fears,
  secrets,
  ideals,
  bonds,
  flaws,
  trinkets
} from '../data/index.js';

/**
 * Generates a Standard D&D 5e-style fantasy NPC deterministically.
 * 
 * @param {string|number} [seed] - PRNG seed
 * @param {Object} [options] - Options (e.g. gender)
 * @returns {Object} Standard NPC payload
 */
export function generateStandardNpc(seed, options = {}) {
  const prng = new PRNG(seed);

  // 1. Determine Gender
  let selectedGender;
  let namePool;

  const normalizedGender = String(options.gender || '').toLowerCase().trim();
  if (normalizedGender === 'male') {
    selectedGender = 'Male';
    namePool = maleNames;
  } else if (normalizedGender === 'female') {
    selectedGender = 'Female';
    namePool = femaleNames;
  } else {
    selectedGender = prng.pick(['Male', 'Female']);
    namePool = selectedGender === 'Male' ? maleNames : femaleNames;
  }

  // 2. Generate Full Name
  const firstName = prng.pick(namePool) || prng.pick(firstNames);
  const surname = prng.pick(surnames);
  const fullName = `${firstName} ${surname}`;

  // 3. Select Occupation Archetype
  const occupation = prng.weightedPick(occupations, (occ) => occ.baseWeight ?? 1);

  // 4. Select Formative Origin
  const origin = prng.pick(origins);

  // 5. Select Dominant Personality
  const personality = prng.weightedPick(personalities, (pers) => {
    return occupation.traitWeights?.[pers.id] ?? 1;
  });

  // 6. Select D&D 5e Roleplay Pillars & Pocket Trinket
  const ideal = prng.pick(ideals);
  const bond = prng.pick(bonds);
  const flaw = prng.pick(flaws);
  const trinket = prng.pick(trinkets);

  // 7. Select Dynamic Fear (5x weight for matching tags)
  const fear = prng.weightedPick(fears, (item) => {
    return item.tags?.includes(occupation.tag) ? 5 : 1;
  });

  // 8. Select Dynamic Secret (5x weight for matching tags)
  const secret = prng.weightedPick(secrets, (item) => {
    return item.tags?.includes(occupation.tag) ? 5 : 1;
  });

  // 9. Select Contextual Dialogue
  const dialoguePool = personality.dialogue && personality.dialogue.length > 0
    ? personality.dialogue
    : ["..."];
  const dialogueTemplate = prng.pick(dialoguePool);

  // 10. Format clean dialogue string
  const dialogue = dialogueTemplate
    .replace(/\{name\}/g, fullName)
    .replace(/\{title\}/g, occupation.title)
    .replace(/\{fear\}/g, fear.text.toLowerCase())
    .replace(/\{secret\}/g, secret.text.toLowerCase())
    .replace(/\{personality\}/g, personality.name.toLowerCase());

  // 11. Assemble Obsidian / Notion-Ready Markdown Block
  const markdown = [
    `# 🍺 ${fullName} — ${occupation.title}`,
    `> *"${dialogue}"*`,
    ``,
    `### 📜 Background & Personality`,
    `- **Mode:** Standard (D&D 5e)`,
    `- **Gender:** ${selectedGender}`,
    `- **Origin:** ${origin}`,
    `- **Personality:** ${personality.name}`,
    `- **Core Ideal:** ${ideal}`,
    `- **Deep Bond:** ${bond}`,
    `- **Fatal Flaw:** ${flaw}`,
    ``,
    `### 🗝️ Narrative Hooks & Secrets`,
    `- **Internal Fear:** ${fear.text}`,
    `- **Dark Secret:** ${secret.text}`,
    `- **Pocket Trinket:** ${trinket}`
  ].join('\n');

  return {
    mode: "standard",
    seed: prng.rawSeed,
    name: fullName,
    gender: selectedGender,
    title: occupation.title,
    origin: origin,
    personality: personality.name,
    ideal: ideal,
    bond: bond,
    flaw: flaw,
    trinket: trinket,
    fear: fear.text,
    secret: secret.text,
    dialogue: dialogue,
    markdown: markdown
  };
}
