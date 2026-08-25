/**
 * NPC API Routes
 */

import { Router } from 'express';
import { getNpc } from '../controllers/npcController.js';

const router = Router();

// GET /api/npc/random
router.get('/random', getNpc);

export default router;
