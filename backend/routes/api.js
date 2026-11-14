import { Router } from "express";
import MarsLocation from "../models/MarsLocation.js";

const router = Router();

router.get("/health", (_req, res) => res.json({ ok: true, service: "martian-map-api" }));

router.get("/locations", async (_req, res, next) => {
  try {
    const locations = await MarsLocation.find().sort({ name: 1 }).lean();
    res.json({ data: locations });
  } catch (error) {
    next(error);
  }
});

router.post("/locations", async (req, res, next) => {
  try {
    const location = await MarsLocation.create(req.body);
    res.status(201).json({ data: location });
  } catch (error) {
    next(error);
  }
});

router.get("/nasa-trek", (req, res) => {
  const sourceUrl = process.env.NASA_TREK_URL;
  if (!sourceUrl) return res.status(503).json({ error: "NASA Trek source is not configured" });
  res.json({ source: "NASA Trek", url: sourceUrl, planet: "mars" });
});

export default router;
