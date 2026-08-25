/**
 * NPC Procedural Generation Logic
 * Implements weighted, archetype-correlated fantasy character generation with deterministic PRNG.
 */

import { PRNG } from './prng.js';
import {
  firstNames,
  surnames,
  occupations,
  personalities,
  fears,
  secrets
} from '../data/index.js';

/**
 * @typedef {Object} NpcOutput
 * @property {string|number} seed - The raw seed used to generate the character
 * @property {string} name - Character's full fantasy name
 * @property {string} title - The occupation / archetype title
 * @property {string} personality - Dominant personality trait
 * @property {string} fear - Core internal or superstitious fear
 * @property {string} secret - Hidden burden or clandestine allegiance
 * @property {string} dialogue - Contextual flavor dialogue line
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

  // 3. Select Dominant Personality based on occupation's trait affinity weights
  const personality = prng.weightedPick(personalities, (pers) => {
    return occupation.traitWeights?.[pers.id] ?? 1;
  });

  // 4. Select Dynamic Fear (correlated with archetype tag, 5x weight for matching tags)
  const fear = prng.weightedPick(fears, (item) => {
    return item.tags?.includes(occupation.tag) ? 5 : 1;
  });

  // 5. Select Dynamic Secret (correlated with archetype tag, 5x weight for matching tags)
  const secret = prng.weightedPick(secrets, (item) => {
    return item.tags?.includes(occupation.tag) ? 5 : 1;
  });

  // 6. Select Contextual Dialogue matching the dominant personality trait
  const dialoguePool = personality.dialogue && personality.dialogue.length > 0
    ? personality.dialogue
    : ["..."];
  const dialogueTemplate = prng.pick(dialoguePool);

  // 7. Format clean dialogue string
  const dialogue = dialogueTemplate
    .replace(/\{name\}/g, fullName)
    .replace(/\{title\}/g, occupation.title);

  return {
    seed: prng.rawSeed,
    name: fullName,
    title: occupation.title,
    personality: personality.name,
    fear: fear.text,
    secret: secret.text,
    dialogue: dialogue
  };
}
