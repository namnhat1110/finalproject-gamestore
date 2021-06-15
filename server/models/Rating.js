const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ratingSchema = Schema(
  {
    game: { ref: "Game", required: true, type: Schema.Types.ObjectId },
    owner: {
      ref: "User",
      required: true,
      type: Schema.Types.ObjectId,
    },
  },

  {
    timestamps: true,
  },
);


const Game = mongoose.model("Game", ratingSchema);
module.exports = Game;
