const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gameSchema = Schema(
    {
        title: { type: String, required: true, unique: false, default: '' },
        release_date: { type: String, required: false, unique: false },
        genre: { type: String, required: false, unique: false, default: '' },
        developer: { type: String, require: false, unique: false, default: '' },
        publisher: { type: String, require: false, unique: false, default: '' },
        description: { type: String, require: true, unique: false, default: '' },
        avg_vote: { type: String, required: false, unique: false },
        votes: { type: String, required: false, unique: false },
        reviews_from_users: { type: String, required: false, unique: false },
        pegi_rating: { type: String, required: false, unique: false },

    },

    {
        timestamps: true,
    },
);


const Game = mongoose.model("Game", gameSchema);
module.exports = Game;
