import express from "express";
import PlayerInfoModel from "../models/PlayerInfo.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const country = req.query.country; // Access the country from the query string
    const players = await PlayerInfoModel.find({ NATION: country }); // needs to be NATION since thats how its stored in MongoDB (dont look at models)
    res.json(players);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
