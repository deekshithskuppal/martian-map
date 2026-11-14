import mongoose from "mongoose";

const marsLocationSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    region: { type: String, required: true, trim: true },
    latitude: { type: Number, required: true, min: -90, max: 90 },
    longitude: { type: Number, required: true, min: -180, max: 180 },
    category: { type: String, enum: ["habitable", "caution", "water", "shelter"], required: true },
    summary: { type: String, required: true },
    sourceUrl: { type: String, required: true }
  },
  { timestamps: true }
);

export default mongoose.model("MarsLocation", marsLocationSchema);
