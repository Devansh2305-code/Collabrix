import os
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from app.database.base import Base
from app.database.session import engine
from app.routes import ai, auth, events, outreach, sponsors
from app.utils.rate_limit import simple_rate_limit

Base.metadata.create_all(bind=engine)

app = FastAPI(title="Collabrix API", version="1.0.0")

origins = [origin.strip() for origin in os.getenv("CORS_ORIGINS", "http://localhost:3000").split(",") if origin.strip()]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.middleware("http")
async def rate_limit_middleware(request: Request, call_next):
    simple_rate_limit(request)
    return await call_next(request)


@app.get("/health")
def health_check():
    return {"status": "ok"}


app.include_router(auth.router)
app.include_router(events.router)
app.include_router(sponsors.router)
app.include_router(ai.router)
app.include_router(outreach.router)
