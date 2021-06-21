const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gameSchema = Schema(
  {
    title: { type: String, required: true, unique: false, default: "" },
    release_date: { type: Date, required: false, unique: false },
    genre: { type: String, required: false, unique: false, default: "" },
    details: { type: String, required: false, unique: false, default: "" },
    developer: { type: String, require: false, unique: false, default: "" },
    publisher: { type: String, require: false, unique: false, default: "" },
    snippet: { type: String, require: true, unique: false, default: "" },
    description: { type: String, require: true, unique: false, default: "" },
    minimum_requirements: { type: String, required: false, unique: false },
    recommended_requirements: { type: String, required: false, unique: false },
    original_price: { type: String, required: false, unique: false },
    discount_price: { type: String, required: false, unique: false },
    price: { type: String, required: false, unique: false },
    reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }],
    rating: [{ type: Schema.Types.ObjectId, ref: "Ratings" }],
  },

  {
    timestamps: true,
  },
);


const Game = mongoose.model("Game", gameSchema);
module.exports = Game;
