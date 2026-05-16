from collections import defaultdict, deque
from datetime import UTC, datetime, timedelta
from fastapi import HTTPException, Request

_requests: dict[str, deque[datetime]] = defaultdict(deque)


def simple_rate_limit(request: Request, limit: int = 60, window_seconds: int = 60) -> None:
    key = f"{request.client.host if request.client else 'local'}:{request.url.path}"
    now = datetime.now(UTC).replace(tzinfo=None)
    q = _requests[key]
    window_start = now - timedelta(seconds=window_seconds)

    while q and q[0] < window_start:
        q.popleft()

    if len(q) >= limit:
        raise HTTPException(status_code=429, detail="Rate limit exceeded")

    q.append(now)
