import mongoose from 'mongoose';

const gameSchema = mongoose.Schema({
  user: {
    type: String,
    required: false,
  },

  
  score: {
    type: Number,
    required: false,
  },

  highest_score: {
    type: Number,
    required: false,
  }

},
{
  timestamps: true,
}

);

const Game = mongoose.model('Game', gameSchema);

export default Game;
