import Game from '../models/gameModel.js';
import asyncHandler from 'express-async-handler'

// @desc    Create a new game
// @route   POST /api/games
// @access  Public
const createGame = asyncHandler(async (req, res) => {
  try {
    const { user, score } = req.body;

    // Create a new game instance
    const game = new Game({
      user: user,
      score,
    });

    // Save the game to the database
    const createdGame = await game.save();

    res.status(201).json(createdGame);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create game' });
  }
});

// @desc    Get all games
// @route   GET /api/games
// @access  Public
const getGames =asyncHandler(async (req, res) => {
  try {
    // Fetch all games from the database
    const games = await Game.find().populate('user', 'name email');

    res.json(games);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch games' });
  }
});

// @desc    Get a single game by ID
// @route   GET /api/games/:id
// @access  Public
const getGameById = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;

    // Find a game by ID in the database
    const game = await Game.findById(id).populate('user', 'name email');

    if (game) {
      res.json(game);
    } else {
      res.status(404).json({ error: 'Game not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch game' });
  }
});

const getGamesByUser = asyncHandler(async (req, res) => {
    try {
      const { userId } = req.params;
  
      // Fetch games by user ID from the database
      const games = await Game.find({ user: userId }).populate('user', 'name email');
  
      res.json(games);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch games by user' });
    }
  });


export { createGame, getGames, getGameById,getGamesByUser };
