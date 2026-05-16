# Collabrix — AI Sponsorship Outreach Assistant

Collabrix is a modern full-stack SaaS platform for AI-powered sponsorship outreach.

## Tech Stack

### Frontend
- Next.js (App Router) + TypeScript
- TailwindCSS
- Framer Motion
- Lucide React
- Firebase Auth SDK
- Recharts for analytics visuals

### Backend
- FastAPI
- SQLAlchemy + Pydantic
- PostgreSQL-compatible database URL (defaults to SQLite for local dev)
- Gemini-ready AI service layer

## Project Structure

```
/frontend
  /app
  /components
  /lib
  /hooks
  /services
  /types
  /utils
/backend
  /app
    /routes
    /models
    /services
    /schemas
    /database
    /utils
    /ai
  /alembic
  /tests
```

## Environment Variables

Copy `.env.example` values into a local `.env` file and populate secrets.

Required frontend variables:
- `NEXT_PUBLIC_FIREBASE_API_KEY`
- `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
- `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
- `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
- `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
- `NEXT_PUBLIC_FIREBASE_APP_ID`
- `NEXT_PUBLIC_API_BASE_URL`

Required backend variables:
- `GEMINI_API_KEY`
- `DATABASE_URL`
- `RESEND_API_KEY`
- `FIREBASE_PROJECT_ID`
- `FIREBASE_CLIENT_EMAIL`
- `FIREBASE_PRIVATE_KEY`
- `CORS_ORIGINS`

## Local Setup

### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Backend
```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

## API Routes

- Auth: `/auth/signup`, `/auth/login`, `/auth/logout`, `/auth/session`
- Events: `POST/GET /events`, `PUT/DELETE /events/{event_id}`
- Sponsors: `/sponsors/recommendations`, `/sponsors/search`, `/sponsors/{id}`
- AI: `/ai/generate-emails`, `/ai/generate-proposals`, `/ai/generate-summaries`
- Outreach: `/outreach/send-email`, `/outreach/track`, `/outreach/status`

## Testing

```bash
cd backend
pytest -q
```

## Deployment Guide

- Frontend: deploy `frontend/` to Vercel.
- Backend: deploy `backend/` to Railway or Render.
- Database: use Supabase PostgreSQL and set `DATABASE_URL`.

## Security Notes

- Do not commit `.env` files.
- API keys are read from environment variables.
- Protected backend routes require bearer token headers.
- Basic in-memory rate limiting and CORS protections are enabled.
