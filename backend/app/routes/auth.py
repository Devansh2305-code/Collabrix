from fastapi import APIRouter, Depends
from app.schemas.schemas import TokenResponse, UserCreate, UserLogin
from app.utils.security import require_auth

router = APIRouter(prefix="/auth", tags=["auth"])


@router.post("/signup", response_model=TokenResponse)
def signup(payload: UserCreate):
    return TokenResponse(access_token=f"signup-token-{payload.email}")


@router.post("/login", response_model=TokenResponse)
def login(payload: UserLogin):
    return TokenResponse(access_token=f"login-token-{payload.email}")


@router.post("/logout")
def logout(_: str = Depends(require_auth)):
    return {"message": "Logged out"}


@router.get("/session")
def session(token: str = Depends(require_auth)):
    return {"active": True, "token": token}
