/**
 * NPC Procedural Generation Logic
 * Implements weighted, archetype-correlated fantasy character generation with deterministic PRNG,
 * Origins, D&D 5e-style roleplay pillars (Ideals, Bonds, Flaws), pocket trinkets, and Obsidian/Notion-ready Markdown export.
 */

import { PRNG } from './prng.js';
import {
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
 * @typedef {Object} NpcOutput
 * @property {string|number} seed - The raw seed used to generate the character
 * @property {string} name - Character's full name
 * @property {string} title - The occupation / archetype title
 * @property {string} origin - Character's formative background / origin
 * @property {string} personality - Dominant personality trait
 * @property {string} ideal - D&D 5e-style driving moral or philosophical ideal
 * @property {string} bond - Deep emotional tie, debt, or connection to the world
 * @property {string} flaw - Vulnerability, vice, or behavioral compulsion
 * @property {string} trinket - Atmospheric pocket item for pickpocketing and clues
 * @property {string} fear - Core internal or superstitious fear
 * @property {string} secret - Hidden burden or clandestine allegiance
 * @property {string} dialogue - Contextual flavor dialogue line
 * @property {string} markdown - Formatted Markdown block ready for Obsidian / Notion copy
 */

/**
 * Generates an atmospheric fantasy NPC deterministically using a seeded PRNG.
 * 
 * @param {string|number} [seed] - Optional seed for deterministic generation
 * @returns {NpcOutput}
 */
export function generateNpc(seed) {
  const prng = new PRNG(seed);

  // 1. Generate Full Name
  const firstName = prng.pick(firstNames);
  const surname = prng.pick(surnames);
  const fullName = `${firstName} ${surname}`;

  // 2. Select Occupation Archetype based on base weights
  const occupation = prng.weightedPick(occupations, (occ) => occ.baseWeight ?? 1);

  // 3. Select Formative Origin / Background
  const origin = prng.pick(origins);

  // 4. Select Dominant Personality based on occupation's trait affinity weights
  const personality = prng.weightedPick(personalities, (pers) => {
    return occupation.traitWeights?.[pers.id] ?? 1;
  });

  // 5. Select D&D 5e Roleplay Pillars (Ideals, Bonds, Flaws) & Pocket Trinket
  const ideal = prng.pick(ideals);
  const bond = prng.pick(bonds);
  const flaw = prng.pick(flaws);
  const trinket = prng.pick(trinkets);

  // 6. Select Dynamic Fear (correlated with archetype tag, 5x weight for matching tags)
  const fear = prng.weightedPick(fears, (item) => {
    return item.tags?.includes(occupation.tag) ? 5 : 1;
  });

  // 7. Select Dynamic Secret (correlated with archetype tag, 5x weight for matching tags)
  const secret = prng.weightedPick(secrets, (item) => {
    return item.tags?.includes(occupation.tag) ? 5 : 1;
  });

  // 8. Select Contextual Dialogue matching the dominant personality trait
  const dialoguePool = personality.dialogue && personality.dialogue.length > 0
    ? personality.dialogue
    : ["..."];
  const dialogueTemplate = prng.pick(dialoguePool);

  // 9. Format clean dialogue string with rich contextual interpolation
  const dialogue = dialogueTemplate
    .replace(/\{name\}/g, fullName)
    .replace(/\{title\}/g, occupation.title)
    .replace(/\{fear\}/g, fear.text.toLowerCase())
    .replace(/\{secret\}/g, secret.text.toLowerCase())
    .replace(/\{personality\}/g, personality.name.toLowerCase());

  // 10. Assemble Obsidian / Notion-Ready Markdown Block
  const markdown = [
    `# 🍺 ${fullName} — ${occupation.title}`,
    `> *"${dialogue}"*`,
    ``,
    `### 📜 Background & Personality`,
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
    seed: prng.rawSeed,
    name: fullName,
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
