import mongoose from "mongoose";

const PlayerInfoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  overall: {
    type: Number,
    required: true,
  },
  pac: {
    type: Number,
    required: true,
  },
  sho: {
    type: Number,
    required: true,
  },
  pas: {
    type: Number,
    required: true,
  },
  dri: {
    type: Number,
    required: true,
  },
  def: {
    type: Number,
    required: true,
  },
  phy: {
    type: Number,
    required: true,
  },
  attWorkRate: {
    type: String,
    required: true,
  },
  defWorkRate: {
    type: String,
    required: true,
  },
  preferredFoot: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  league: {
    type: String,
    required: true,
  },
  team: {
    type: String,
    required: true,
  },
  height: {
    type: String,
    required: true,
  },
  weight: {
    type: String,
    required: true,
  },
  nation: {
    type: String,
    required: true,
  },
  pace: {
    type: Number,
    required: true,
  },
  acceleration: {
    type: Number,
    required: true,
  },
  sprintSpeed: {
    type: Number,
    required: true,
  },
  shooting: {
    type: Number,
    required: true,
  },
  positioning: {
    type: Number,
    required: true,
  },
  finishing: {
    type: Number,
    required: true,
  },
});

const PlayerInfoModel = mongoose.model("PlayerInfo", PlayerInfoSchema);

export default PlayerInfoModel;
