const express = require("express");
const router = express.Router();

// const usersRouter = require("./users.api");
// router.use("/users", usersRouter);

const gamesRouter = require("./games.api");
router.use("/games", gamesRouter);

module.exports = router;