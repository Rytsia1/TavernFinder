/**
 * Consolidated Fantasy & Myria Data Exports
 */

// Shared
export * from './shared/names.js';
export * from './shared/quirks.js';
export * from './shared/goals.js';

// Standard Mode
export * as standardData from './standard/index.js';
export {
  occupations,
  personalities,
  fears,
  secrets,
  origins,
  ideals,
  bonds,
  flaws,
  trinkets
} from './standard/index.js';

// Myria Mode
export * as myriaData from './myria/index.js';
export {
  myriaRaces,
  myriaNations,
  myriaNamingPools,
  powerBranches,
  tierMagicLadders,
  auraLadders,
  hexenzirkelColors,
  wildMagicSubtypes,
  abyssalTaintSubtypes,
  myriaOccupations,
  myriaSecrets,
  myriaTrinkets,
  myriaFears,
  myriaPersonalities
} from './myria/index.js';
