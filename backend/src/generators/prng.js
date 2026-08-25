/**
 * Deterministic PRNG Engine for Tavern Finder
 * Uses 32-bit FNV-1a hashing for alphanumeric seeds and Mulberry32 for uniform pseudo-random number generation.
 */

/**
 * Converts any string or numeric seed into an unsigned 32-bit integer using FNV-1a.
 * @param {string|number} input 
 * @returns {number} 32-bit unsigned integer
 */
export function hashSeed(input) {
  if (input === undefined || input === null) {
    return Math.floor(Math.random() * 0xffffffff) >>> 0;
  }

  const str = String(input);
  let hash = 0x811c9dc5; // FNV offset basis
  for (let i = 0; i < str.length; i++) {
    hash ^= str.charCodeAt(i);
    hash = Math.imul(hash, 0x01000193); // FNV prime
  }
  return hash >>> 0;
}

/**
 * Generates a random alphanumeric seed string.
 * @returns {string}
 */
export function generateRandomSeed() {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < 10; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

/**
 * Seeded PRNG instance implementing the Mulberry32 algorithm.
 */
export class PRNG {
  /**
   * @param {string|number} [seed] - Optional seed. If omitted, a random seed is generated.
   */
  constructor(seed) {
    this.rawSeed = seed !== undefined && seed !== null && seed !== '' 
      ? String(seed) 
      : generateRandomSeed();
    this.uintSeed = hashSeed(this.rawSeed);
    this.state = this.uintSeed;
  }

  /**
   * Generates next pseudo-random float in range [0, 1).
   * @returns {number}
   */
  next() {
    this.state = (this.state + 0x6d2b79f5) | 0;
    let t = Math.imul(this.state ^ (this.state >>> 15), 1 | this.state);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  }

  /**
   * Generates a random integer in range [min, max] inclusive.
   * @param {number} min 
   * @param {number} max 
   * @returns {number}
   */
  nextInt(min, max) {
    return Math.floor(this.next() * (max - min + 1)) + min;
  }

  /**
   * Picks a random element from an array with uniform probability.
   * @template T
   * @param {T[]} array 
   * @returns {T}
   */
  pick(array) {
    if (!array || array.length === 0) return null;
    const index = Math.floor(this.next() * array.length);
    return array[index];
  }

  /**
   * Picks an item from an array using weighted probabilities.
   * @template T
   * @param {T[]} items - Array of items to choose from
   * @param {(item: T) => number} [weightFn] - Function returning the weight of an item (default: item.weight)
   * @returns {T}
   */
  weightedPick(items, weightFn = (item) => item?.weight ?? 1) {
    if (!items || items.length === 0) return null;

    const weights = items.map(item => Math.max(0, weightFn(item) || 0));
    const totalWeight = weights.reduce((sum, w) => sum + w, 0);

    if (totalWeight <= 0) {
      return this.pick(items);
    }

    let threshold = this.next() * totalWeight;
    for (let i = 0; i < items.length; i++) {
      threshold -= weights[i];
      if (threshold <= 0) {
        return items[i];
      }
    }

    return items[items.length - 1];
  }
}
