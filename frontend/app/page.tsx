"use client";

import Link from "next/link";
import { ArrowRight, Brain, ChartPie, Mail, Presentation, Sparkles, Users } from "lucide-react";
import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/theme-toggle";
import { Card } from "@/components/ui/card";

const features = [
  { title: "AI Sponsor Matching", icon: Brain, text: "Get fit-scored sponsor recommendations with reasoning." },
  { title: "AI Email Generation", icon: Mail, text: "Generate personalized outreach, follow-up and DM copy." },
  { title: "Sponsorship CRM", icon: Users, text: "Manage sponsor pipeline from lead to paid." },
  { title: "Proposal Generator", icon: Presentation, text: "Create sponsor decks and package offerings." },
  { title: "Analytics", icon: ChartPie, text: "Track open rates, responses, conversion and trends." },
  { title: "AI Insights", icon: Sparkles, text: "Continuously improve campaigns with AI recommendations." },
];

const faqs = [
  { q: "Can I use this for university fests?", a: "Yes, Collabrix is built for clubs, fests, hackathons and conferences." },
  { q: "Which AI model is used?", a: "Gemini models are supported through a secure backend service layer." },
  { q: "Do you support team workflows?", a: "The architecture supports multi-user collaboration and sponsor pipelines." },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-white dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-6">
        <h1 className="text-xl font-bold">Collabrix</h1>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link className="rounded-lg bg-indigo-600 px-4 py-2 text-sm text-white" href="/dashboard">Launch App</Link>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 pb-20">
        <section className="grid gap-8 py-14 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <p className="inline-flex rounded-full border border-indigo-300 bg-indigo-100 px-3 py-1 text-xs text-indigo-700 dark:border-indigo-700 dark:bg-indigo-950 dark:text-indigo-200">AI Sponsorship Outreach Assistant</p>
            <h2 className="text-4xl font-semibold leading-tight sm:text-5xl">Find Sponsors Smarter with AI</h2>
            <p className="text-zinc-600 dark:text-zinc-300">Create events, discover relevant sponsors, generate outreach, build proposals, and manage conversions from one premium SaaS workspace.</p>
            <div className="flex flex-wrap gap-3">
              <Link className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-white" href="/auth/signup">Get Started <ArrowRight className="h-4 w-4" /></Link>
              <Link className="rounded-xl border border-zinc-300 px-5 py-3 dark:border-zinc-700" href="/dashboard">View Dashboard</Link>
            </div>
          </div>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-xl dark:border-zinc-800 dark:bg-zinc-900">
            <p className="mb-3 text-sm text-zinc-500">Dashboard Preview</p>
            <div className="grid gap-3 sm:grid-cols-2">
              <Card className="p-4"><p className="text-sm">Sponsors Contacted</p><p className="text-2xl font-bold">124</p></Card>
              <Card className="p-4"><p className="text-sm">Response Rate</p><p className="text-2xl font-bold">36%</p></Card>
              <Card className="p-4"><p className="text-sm">Active Campaigns</p><p className="text-2xl font-bold">8</p></Card>
              <Card className="p-4"><p className="text-sm">Projected Revenue</p><p className="text-2xl font-bold">$42k</p></Card>
            </div>
          </motion.div>
        </section>

        <section className="grid gap-4 py-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.title} className="space-y-3">
                <Icon className="h-5 w-5 text-indigo-600" />
                <h3 className="font-semibold">{feature.title}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-300">{feature.text}</p>
              </Card>
            );
          })}
        </section>

        <section className="py-8">
          <h3 className="mb-4 text-2xl font-semibold">Workflow</h3>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {["Create event", "Get sponsor recommendations", "Send outreach", "Track conversions"].map((step, idx) => (
              <Card key={step} className="p-4"><p className="text-sm text-zinc-500">Step {idx + 1}</p><p className="font-medium">{step}</p></Card>
            ))}
          </div>
        </section>

        <section className="grid gap-4 py-8 lg:grid-cols-3">
          {["Free", "Pro", "Enterprise"].map((plan) => (
            <Card key={plan} className="space-y-3">
              <h4 className="text-xl font-semibold">{plan}</h4>
              <p className="text-zinc-600 dark:text-zinc-300">{plan === "Free" ? "$0/mo" : plan === "Pro" ? "$49/mo" : "Custom"}</p>
              <button className="rounded-lg bg-indigo-600 px-4 py-2 text-white">Choose {plan}</button>
            </Card>
          ))}
        </section>

        <section className="grid gap-4 py-8 md:grid-cols-2">
          {faqs.map((faq) => (
            <Card key={faq.q} className="p-4">
              <h5 className="font-semibold">{faq.q}</h5>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">{faq.a}</p>
            </Card>
          ))}
        </section>

        <footer className="mt-8 border-t border-zinc-200 py-6 text-sm text-zinc-500 dark:border-zinc-800">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p>© {new Date().getFullYear()} Collabrix</p>
            <div className="flex gap-4">
              <Link href="#">Terms</Link>
              <Link href="#">Privacy</Link>
              <Link href="#">Socials</Link>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
