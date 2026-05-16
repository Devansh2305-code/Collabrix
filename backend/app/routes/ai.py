from fastapi import APIRouter, Depends
from app.schemas.schemas import AIContentRequest
from app.services.ai_service import AIService
from app.utils.security import require_auth

router = APIRouter(prefix="/ai", tags=["ai"])
ai_service = AIService()


@router.post("/generate-emails")
async def generate_emails(payload: AIContentRequest, _: str = Depends(require_auth)):
    return await ai_service.generate_email(payload.event_name, payload.audience, payload.sponsor_name, payload.tone)


@router.post("/generate-proposals")
async def generate_proposals(payload: AIContentRequest, _: str = Depends(require_auth)):
    return await ai_service.generate_proposal(payload.event_name, payload.audience, payload.sponsor_name)


@router.post("/generate-summaries")
async def generate_summaries(payload: AIContentRequest, _: str = Depends(require_auth)):
    return {
        "content": f"{payload.event_name} campaign summary for {payload.sponsor_name}.",
        "confidence": 0.7,
        "reasoning": "Summary synthesized from campaign context.",
    }
