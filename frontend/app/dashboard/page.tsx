"use client";

import { Sidebar } from "@/components/layout/sidebar";
import { Topbar } from "@/components/layout/topbar";
import { Card } from "@/components/ui/card";
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";

const kpis = [
  ["Total Sponsors Contacted", "124"],
  ["Active Campaigns", "8"],
  ["Revenue Estimate", "$42,000"],
  ["Response Rate", "36%"],
  ["Conversion Rate", "18%"],
  ["Pending Follow-ups", "27"],
];

const lineData = [
  { name: "Mon", responses: 2 },
  { name: "Tue", responses: 5 },
  { name: "Wed", responses: 4 },
  { name: "Thu", responses: 7 },
  { name: "Fri", responses: 6 },
];

const barData = [
  { name: "Tech", value: 42 },
  { name: "Fintech", value: 24 },
  { name: "FMCG", value: 19 },
];

const pieData = [
  { name: "Opened", value: 68 },
  { name: "Replied", value: 24 },
  { name: "Converted", value: 8 },
];

const colors = ["#6366f1", "#22c55e", "#f59e0b"];

export default function DashboardPage() {
  return (
    <div className="min-h-screen lg:flex">
      <Sidebar />
      <div className="flex-1">
        <Topbar />
        <main className="space-y-6 p-4">
          <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {kpis.map(([label, value]) => (
              <Card key={label} className="transition hover:-translate-y-1 hover:shadow-md">
                <p className="text-sm text-zinc-500">{label}</p>
                <p className="mt-2 text-3xl font-semibold">{value}</p>
              </Card>
            ))}
          </section>

          <section className="grid gap-4 xl:grid-cols-3">
            <Card className="xl:col-span-2">
              <h2 className="mb-4 font-semibold">Outreach Trend</h2>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={lineData}><XAxis dataKey="name" /><YAxis /><Tooltip /><Line type="monotone" dataKey="responses" stroke="#6366f1" strokeWidth={2} /></LineChart>
                </ResponsiveContainer>
              </div>
            </Card>
            <Card>
              <h2 className="mb-4 font-semibold">Email Funnel</h2>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={pieData} dataKey="value" nameKey="name" outerRadius={80}>
                      {pieData.map((entry, idx) => <Cell fill={colors[idx % colors.length]} key={entry.name} />)}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </section>

          <section>
            <Card>
              <h2 className="mb-4 font-semibold">Sponsor Category Performance</h2>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={barData}><XAxis dataKey="name" /><YAxis /><Tooltip /><Bar dataKey="value" fill="#6366f1" /></BarChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </section>
        </main>
      </div>
    </div>
  );
}
