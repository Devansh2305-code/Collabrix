from typing import Any

SEED_SPONSORS = [
    {"company_name": "Acme Tech", "industry": "Technology", "website": "https://example.com/acme", "email": "partners@acme.com"},
    {"company_name": "FinFlow", "industry": "Fintech", "website": "https://example.com/finflow", "email": "growth@finflow.com"},
    {"company_name": "EduSpark", "industry": "Education", "website": "https://example.com/eduspark", "email": "sponsorships@eduspark.com"},
]


def recommend_sponsors(category: str, location: str, audience: str, footfall: int, budget: float) -> list[dict[str, Any]]:
    scale_factor = min(1.0, max(0.3, footfall / 10000))
    budget_factor = min(1.0, max(0.3, budget / 100000))
    audience_bonus = 0.1 if "student" in audience.lower() else 0.0

    recommendations: list[dict[str, Any]] = []
    for idx, sponsor in enumerate(SEED_SPONSORS):
        fit = round((0.55 + scale_factor * 0.2 + budget_factor * 0.15 + audience_bonus - idx * 0.05) * 100)
        recommendations.append(
            {
                **sponsor,
                "sponsor_fit_score": max(1, min(99, fit)),
                "sponsorship_probability": "High" if fit >= 80 else "Medium" if fit >= 60 else "Low",
                "contact_availability": "Available",
                "reasoning": f"Strong alignment with {category} events in {location} for {audience} audience.",
            }
        )

    return sorted(recommendations, key=lambda item: item["sponsor_fit_score"], reverse=True)
