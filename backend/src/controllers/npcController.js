/**
 * NPC Request Controller
 */

import { generateNpc } from '../generators/npcGenerator.js';

/**
 * Controller to handle generating a random or deterministic NPC.
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 * @param {import('express').NextFunction} next 
 */
export function getNpc(req, res, next) {
  try {
    const { seed } = req.query;
    const npc = generateNpc(seed);
    return res.status(200).json(npc);
  } catch (error) {
    next(error);
  }
}
