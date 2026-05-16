from fastapi import APIRouter, Depends
from app.schemas.schemas import SponsorRecommendationRequest
from app.services.sponsor_matching import recommend_sponsors
from app.utils.security import require_auth

router = APIRouter(prefix="/sponsors", tags=["sponsors"])


@router.post("/recommendations")
def sponsor_recommendations(payload: SponsorRecommendationRequest, _: str = Depends(require_auth)):
    items = recommend_sponsors(payload.category, payload.location, payload.audience, payload.footfall, payload.budget)
    return {"recommendations": items}


@router.get("/search")
def sponsor_search(query: str = "", _: str = Depends(require_auth)):
    return {"query": query, "results": []}


@router.get("/{sponsor_id}")
def sponsor_details(sponsor_id: int, _: str = Depends(require_auth)):
    return {"id": sponsor_id, "company_name": "Sample Sponsor", "industry": "Technology"}
