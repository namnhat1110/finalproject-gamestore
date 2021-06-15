const express = require("express");
const router = express.Router();

const gameController = require("../controllers/games.controller");

router.get("/", gameController.list);
router.post("/", gameController.create);
router.patch("/:id", gameController.update);
router.delete("/:id", gameController.delete);

module.exports = router;
