from datetime import datetime
from fastapi import APIRouter, Depends
from app.utils.security import require_auth

router = APIRouter(prefix="/outreach", tags=["outreach"])


@router.post("/send-email")
def send_email(_: str = Depends(require_auth)):
    return {"status": "queued", "provider": "resend"}


@router.get("/track")
def track_outreach(_: str = Depends(require_auth)):
    return {"items": [{"sponsor": "Acme Tech", "status": "contacted", "last_contacted": datetime.utcnow().isoformat()}]}


@router.put("/status")
def update_status(status: str, _: str = Depends(require_auth)):
    return {"updated": True, "status": status}
