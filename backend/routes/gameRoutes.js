import express from 'express';
import { createGame, getGames, getGameById, getGamesByUser } from '../controllers/gameController.js';

const router = express.Router();

// Routes for the Game model
router.route('/').post(createGame).get(getGames);
router.route('/:id').get(getGameById);
router.route('/user/:userId').get(getGamesByUser);

export default router;
