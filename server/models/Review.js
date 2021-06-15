const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = Schema(
  {
    date: { type: Date, default: Date.now },
    body: { type: Text, required: true, unique: false, default: "" },
    game: { ref: "Game", required: true, type: Schema.Types.ObjectId },
    upVotes: {
      type: Integer,
      default: 0,
  },
    downVotes: {
      type: Integer,
      default: 0,
    },
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


const Review = mongoose.model("Review", reviewSchema);
module.exports = Review;
