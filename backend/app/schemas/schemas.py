from datetime import datetime
from pydantic import BaseModel, Field


class TokenResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"


class UserCreate(BaseModel):
    name: str
    email: str
    organization: str = ""


class UserLogin(BaseModel):
    email: str
    password: str = Field(min_length=6)


class EventCreate(BaseModel):
    user_id: int
    title: str
    description: str
    category: str
    audience: str
    footfall: int
    location: str
    budget: float


class EventOut(EventCreate):
    id: int
    created_at: datetime

    model_config = {"from_attributes": True}


class SponsorRecommendationRequest(BaseModel):
    category: str
    location: str
    audience: str
    footfall: int
    budget: float


class AIContentRequest(BaseModel):
    event_name: str
    audience: str
    sponsor_name: str
    tone: str = "formal"
