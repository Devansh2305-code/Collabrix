import { Card } from "@/components/ui/card";

const sponsors = [
  { company: "Acme Tech", industry: "Technology", score: 91, likelihood: "High", reason: "Strong campus audience alignment" },
  { company: "FinFlow", industry: "Fintech", score: 84, likelihood: "Medium", reason: "Suitable for entrepreneurship events" },
];

export default function SponsorsPage() {
  return (
    <main className="mx-auto max-w-5xl space-y-4 p-4">
      <h1 className="text-2xl font-semibold">AI Sponsor Recommendations</h1>
      <div className="grid gap-3 sm:grid-cols-2">
        {sponsors.map((sponsor) => (
          <Card key={sponsor.company}>
            <div className="space-y-2">
              <h2 className="text-lg font-semibold">{sponsor.company}</h2>
              <p className="text-sm">Industry: {sponsor.industry}</p>
              <p className="text-sm">Fit score: {sponsor.score}</p>
              <p className="text-sm">Likelihood: {sponsor.likelihood}</p>
              <p className="text-sm text-zinc-600 dark:text-zinc-300">AI reasoning: {sponsor.reason}</p>
            </div>
          </Card>
        ))}
      </div>
    </main>
  );
}
