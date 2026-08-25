/**
 * Unified NPC Generator Router
 * Routes generation requests to either Standard (D&D 5e) or Myria setting generators.
 */

import { generateStandardNpc } from './standardGenerator.js';
import { generateMyriaNpc } from './myriaGenerator.js';

export { generateStandardNpc } from './standardGenerator.js';
export { generateMyriaNpc } from './myriaGenerator.js';

/**
 * Main procedural generator entry point.
 * Dispatches to standard or myria generator based on mode parameter.
 * 
 * @param {string|number|Object} [seedOrOptions] - Optional seed string/number or options object
 * @param {Object} [options] - Generation options (e.g., { mode: 'standard' | 'myria', gender: 'male' | 'female' })
 * @returns {Object} Generated character payload
 */
export function generateNpc(seedOrOptions, options = {}) {
  let seed;
  let opts = { ...options };

  if (typeof seedOrOptions === 'object' && seedOrOptions !== null) {
    seed = seedOrOptions.seed;
    opts = { ...opts, ...seedOrOptions };
  } else {
    seed = seedOrOptions;
  }

  const mode = String(opts.mode || 'standard').toLowerCase().trim();

  if (mode === 'myria') {
    return generateMyriaNpc(seed, opts);
  }

  return generateStandardNpc(seed, opts);
}
