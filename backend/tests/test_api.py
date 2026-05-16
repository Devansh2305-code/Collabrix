from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)
TOKEN = {"Authorization": "Bearer test-token"}


def test_health_endpoint():
    response = client.get("/health")
    assert response.status_code == 200
    assert response.json()["status"] == "ok"


def test_create_and_list_event():
    payload = {
        "user_id": 1,
        "title": "Campus Hackathon",
        "description": "A 24-hour coding event",
        "category": "Hackathon",
        "audience": "Students",
        "footfall": 1200,
        "location": "Delhi",
        "budget": 50000,
    }
    create_response = client.post("/events", json=payload, headers=TOKEN)
    assert create_response.status_code == 200

    list_response = client.get("/events", headers=TOKEN)
    assert list_response.status_code == 200
    assert len(list_response.json()) >= 1


def test_sponsor_recommendations():
    response = client.post(
        "/sponsors/recommendations",
        json={"category": "Conference", "location": "Bangalore", "audience": "Students", "footfall": 3000, "budget": 80000},
        headers=TOKEN,
    )
    assert response.status_code == 200
    body = response.json()
    assert "recommendations" in body
    assert len(body["recommendations"]) > 0
