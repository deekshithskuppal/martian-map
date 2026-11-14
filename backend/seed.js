import "dotenv/config";
import mongoose from "mongoose";
import MarsLocation from "./models/MarsLocation.js";

const sourceUrl = process.env.NASA_TREK_URL;
const locations = [
  { name: "Gale Crater", region: "Aeolis", latitude: -5.4, longitude: 137.8, category: "habitable", summary: "Current landing zone with rover-accessible terrain.", sourceUrl },
  { name: "Jezero Crater", region: "Northeast Syrtis", latitude: 18.4, longitude: 77.4, category: "water", summary: "Ancient delta terrain selected for sediment and water history.", sourceUrl },
  { name: "Valles Marineris", region: "Coprates", latitude: -14.0, longitude: -59.0, category: "shelter", summary: "Deep canyon system offering natural radiation shelter.", sourceUrl },
  { name: "Hellas Basin", region: "Hellas Planitia", latitude: -42.7, longitude: 70.0, category: "caution", summary: "Low-elevation basin with atmospheric and dust-storm hazards.", sourceUrl }
];

await mongoose.connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/martian_map");
await MarsLocation.deleteMany({});
await MarsLocation.insertMany(locations);
console.log(`Seeded ${locations.length} NASA Trek-linked locations.`);
await mongoose.disconnect();
