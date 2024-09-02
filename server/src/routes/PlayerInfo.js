import express from "express";
import PlayerInfoModel from "../models/PlayerInfo.js";

const router = express.Router();

router.get("/players", async (req, res) => {
  try {
    const players = await PlayerInfoModel.find({});
    res.json(players);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
