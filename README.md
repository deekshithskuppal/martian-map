# Martian Map

An editorial-style interplanetary survival guide for the red planet. The project now has a separate static frontend and Express/MongoDB backend. NASA Trek is used as the authoritative map source configuration for the Mars Viking global mosaic and the Jezero context layer supplied in the NASA URL.

## Project layout

- `frontend/` — colorful responsive survival guide UI
- `backend/` — Express API, Mongoose model, and NASA Trek source endpoint
- `docker-compose.yml` — local MongoDB service

## Run locally

1. Start MongoDB:

   ```bash
   docker compose up -d mongodb
   ```

2. Configure and seed the API:

   ```bash
   cp backend/.env.example backend/.env
   cd backend
   npm install
   npm run seed
   npm start
   ```

3. Serve the frontend from the project root:

   ```bash
   cd frontend
   python3 -m http.server 8000
   ```

Open `http://localhost:8000`. The frontend reads map locations from `http://localhost:4000/api/locations`.

The NASA Trek URL is retained in `backend/.env.example` and each seeded location's `sourceUrl`, so map records remain traceable to the supplied NASA source.
An interplanetary survival guide and interactive Martian map.
