import { Schema, model } from "mongoose";

const albumSchema = new Schema({
  performer: { type: String },
  title: { type: String },
  cost: { type: Number },
});

const albumModel = model("Album", albumSchema);

export default albumModel;