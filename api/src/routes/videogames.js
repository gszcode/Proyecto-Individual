const { Router } = require("express");
const router = Router();
const {
  getVideoGames,
  getVideoGamesId,
  createVideoGame,
  getGamesGenre,
} = require("../controllers/videogames");

router.get("/videogames", getVideoGames);
router.get("/videogames/:id", getVideoGamesId);
router.post("/videogames", createVideoGame);
router.get("/genres", getGamesGenre);

module.exports = router;
