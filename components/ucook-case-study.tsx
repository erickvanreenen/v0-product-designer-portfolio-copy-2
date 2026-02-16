"use client";

import React from "react";
import { Project } from "@/lib/projects";
import Link from "next/link";
import { ArrowLeft, ArrowRight, TrendingUp, AlertTriangle, Users, Target, Search, Lightbulb, Layers, BarChart3, BookOpen } from "lucide-react";

interface UCookCaseStudyProps {
  project: Project;
  nextProject?: Project;
  prevProject?: Project;
}

function SectionHeader({ icon: Icon, title }: { icon: React.ElementType; title: string }) {
  return (
    <div className="bg-white rounded-xl px-6 py-5 mb-8 flex items-center gap-3 shadow-sm border border-border/40">
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#09332C]/8">
        <Icon size={20} className="text-[#09332C]" />
      </div>
      <h2 className="text-xl md:text-2xl font-semibold text-[#09332C]">{title}</h2>
    </div>
  );
}

export function UCookCaseStudy({
  project,
  nextProject,
  prevProject,
}: UCookCaseStudyProps) {
  return (
    <div className="min-h-screen">
      {/* ── Hero ── */}
      <section className="bg-[#09332C] text-[#F7EDDA]">
        <div className="max-w-6xl mx-auto px-6 pt-12 pb-20 md:pt-16 md:pb-28">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-[#F7EDDA]/60 hover:text-[#FFA74F] transition-colors duration-200 mb-12 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform duration-200" />
            Back to projects
          </Link>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span key={tag} className="text-xs px-3 py-1.5 rounded-full border border-[#F7EDDA]/20 text-[#F7EDDA]/70">
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F7EDDA] mb-4 tracking-tight text-balance">
            {project.title}
          </h1>
          <p className="text-xl md:text-2xl text-[#FFA74F] font-medium max-w-3xl leading-relaxed mb-6">
            Sign-up usability investigation and funnel redesign
          </p>
          <p className="text-base text-[#F7EDDA]/70 max-w-2xl leading-relaxed">
            {project.summary}
          </p>

          {/* Meta strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-[#F7EDDA]/10">
            {[
              { label: "Role", value: project.role },
              { label: "Company", value: "Silvertree (UCOOK)" },
              { label: "Year", value: project.timeline },
              { label: "Methods", value: "Mixed methods" },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-xs text-[#FFA74F] font-medium uppercase tracking-wider mb-1">{item.label}</p>
                <p className="text-sm text-[#F7EDDA]/80">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Impact Banner ── */}
      <section className="bg-[#F0531C] text-white">
        <div className="max-w-6xl mx-auto px-6 py-10 md:py-14">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-center">
            <div className="text-center md:text-left">
              <p className="text-4xl md:text-5xl font-bold">3.7%</p>
              <p className="text-sm text-white/70 mt-1">old completion rate</p>
            </div>
            <div className="text-center flex flex-col items-center">
              <TrendingUp size={32} className="mb-2 text-white/80" />
              <p className="text-4xl md:text-5xl font-bold">9.3%</p>
              <p className="text-sm text-white/70 mt-1">new completion rate</p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-4xl md:text-5xl font-bold">~R1.3M</p>
              <p className="text-sm text-white/70 mt-1">annual revenue impact addressed</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Main Content ── */}
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">

        {/* ── Narrative Opening ── */}
        <section className="mb-20">
          <p className="text-lg md:text-xl text-foreground leading-relaxed font-medium">
            Customer service data told a clear story: users were completing what they believed was sign-up, then contacting support asking where their deliveries were. Over 60 incomplete sign-ups in a single week. Retention through the path sat at 1.43%.
          </p>
          <p className="text-base text-foreground/70 leading-relaxed mt-6">
            This wasn&apos;t on anyone&apos;s roadmap. I initiated the investigation myself, believing that sign-up friction was not just a UX issue but a strategic revenue problem hiding in plain sight.
          </p>
        </section>

        {/* ── The Problem ── */}
        <section className="mb-20">
          <SectionHeader icon={AlertTriangle} title="The Problem" />

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 border border-border/40 shadow-sm">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#F0531C] mb-4">User pain points</h3>
              <ul className="space-y-4">
                {[
                  "Sign-up felt unclear -- users confused subscription activation with account creation",
                  "Navigation broke down: users couldn't find meals or return to previous steps",
                  "Checkout muddled subscription vs on-demand ordering and when payment would happen",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#09332C]/80 leading-relaxed">
                    <span className="w-5 h-5 rounded-full bg-[#F0531C]/10 text-[#F0531C] text-xs flex items-center justify-center flex-shrink-0 mt-0.5 font-semibold">{i + 1}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 border border-border/40 shadow-sm">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#09332C] mb-4">Business pain points</h3>
              <ul className="space-y-4">
                {[
                  "60+ incomplete sign-ups per week with users still expecting delivery",
                  "~R1,296,000/year estimated revenue leaking through the funnel",
                  "56% of first billings occurred 1-5 days post sign-up -- expectation misalignment",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#09332C]/80 leading-relaxed">
                    <span className="w-5 h-5 rounded-full bg-[#09332C]/10 text-[#09332C] text-xs flex items-center justify-center flex-shrink-0 mt-0.5 font-semibold">{i + 1}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── Users & Scope ── */}
        <section className="mb-20">
          <SectionHeader icon={Users} title="Users & Scope" />

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#F7EDDA] rounded-xl p-6">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#09332C]/60 mb-3">Primary users</h3>
              <p className="text-sm text-[#09332C] leading-relaxed">
                Prospective UCOOK customers attempting to sign up and place their first order within a subscription-led model.
              </p>
            </div>
            <div className="bg-[#F7EDDA] rounded-xl p-6">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#09332C]/60 mb-3">Out of scope</h3>
              <p className="text-sm text-[#09332C] leading-relaxed">
                Existing customers managing their accounts post sign-up, except where pause/reactivation behaviour surfaced as supporting context.
              </p>
            </div>
          </div>
        </section>

        {/* ── Goals ── */}
        <section className="mb-20">
          <SectionHeader icon={Target} title="Goals" />

          <div className="grid sm:grid-cols-2 gap-4">
            {project.goals.map((goal, i) => (
              <div key={i} className="flex items-start gap-4 bg-white rounded-xl p-5 border border-border/40 shadow-sm">
                <span className="text-2xl text-[#F0531C]/30 font-bold leading-none">{String(i + 1).padStart(2, "0")}</span>
                <p className="text-sm text-[#09332C] leading-relaxed">{goal}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Constraints ── */}
        <section className="mb-20">
          <div className="bg-[#09332C] rounded-xl p-8">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-[#FFA74F] mb-6">Constraints</h2>
            <div className="space-y-4">
              {[
                "No clearly defined baseline funnel existed, preventing effective unmoderated testing",
                "Subscription and billing logic was complex and poorly aligned with user mental models",
                "Introducing payment earlier carried operational risk due to frequent order changes and refund overhead",
              ].map((constraint, i) => (
                <div key={i} className="flex items-start gap-4">
                  <span className="text-xs font-semibold text-[#FFA74F] bg-[#FFA74F]/15 px-2.5 py-1 rounded flex-shrink-0">{String(i + 1).padStart(2, "0")}</span>
                  <p className="text-sm text-[#F7EDDA]/80 leading-relaxed">{constraint}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Process: 7-stage research ── */}
        <section className="mb-20">
          <SectionHeader icon={Search} title="Research Process" />
          <p className="text-sm text-foreground/60 mb-8">Seven-stage mixed-methods investigation</p>

          <div className="space-y-0">
            {[
              { step: "01", title: "Customer service interviews", desc: "Reviewed logs, tracked complaint categories. Identified repeated contact drivers and flagged incomplete sign-ups where users believed they had successfully ordered." },
              { step: "02", title: "Internal survey", desc: "16 responses focused on sign-up and subscription pausing. 55% of feedback highlighted unclear communication. Sign-up scored 6/10 vs 8/10 for pause." },
              { step: "03", title: "Competitive benchmarking", desc: "Reviewed Marley Spoon, Taste Box and Hello Fresh sign-up funnels. Identified consistent patterns: clearly structured steps with a definitive payment action." },
              { step: "04", title: "Heuristic evaluation", desc: "Evaluated against Nielsen's 10 heuristics. Issues clustered into three themes: communication, navigation and UI optimisation." },
              { step: "05", title: "Unmoderated testing (Maze)", desc: "Attempted Maze testing. Critical blocker: no single, clearly defined happy path funnel existed to test against." },
              { step: "06", title: "Moderated usability testing", desc: "Three moderated sessions. Surfaced recurring issues around navigation, plan selection, pricing clarity and subscription vs on-demand confusion." },
              { step: "07", title: "Measurement planning", desc: "Defined Tag Manager triggers across each funnel step. Tooling: GA, GTM, PostHog heatmaps and session recordings." },
            ].map((step, i, arr) => (
              <div key={step.step} className="flex gap-5">
                {/* Timeline line */}
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-[#09332C] text-[#FFA74F] text-xs font-semibold flex items-center justify-center flex-shrink-0">
                    {step.step}
                  </div>
                  {i < arr.length - 1 && <div className="w-px flex-1 bg-border my-1" />}
                </div>
                <div className="pb-8">
                  <h3 className="text-base font-semibold text-[#09332C] mb-1">{step.title}</h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Key Insights ── */}
        <section className="mb-20">
          <SectionHeader icon={Lightbulb} title="Key Insights" />

          <div className="space-y-4">
            {project.insights.map((insight, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-5 rounded-xl bg-white border border-border/40 shadow-sm hover:border-[#F0531C]/30 transition-colors duration-200"
              >
                <span className="text-lg text-[#F0531C]/40 font-bold leading-none mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                <p className="text-sm text-[#09332C]/80 leading-relaxed">{insight}</p>
              </div>
            ))}
          </div>

          {/* Highlight callout */}
          <div className="mt-8 bg-[#FFA74F]/10 border-l-4 border-[#FFA74F] rounded-r-xl p-5">
            <p className="text-sm text-[#09332C] font-semibold mb-1">Critical finding</p>
            <p className="text-sm text-[#09332C]/70 leading-relaxed">
              All test participants expected to pay immediately, with payment acting as task completion. This single insight reshaped the entire solution direction.
            </p>
          </div>
        </section>

        {/* ── Solution ── */}
        <section className="mb-20">
          <SectionHeader icon={Layers} title="Solution" />

          <p className="text-base text-foreground/80 leading-relaxed mb-8">
            Evidence across multiple research streams established sign-up as the highest-impact usability issue. The solution split into two workstreams:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="bg-[#F7EDDA] rounded-xl p-6 border border-[#F7DFBA]">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-[#FFA74F]" />
                <h3 className="text-xs font-semibold uppercase tracking-wider text-[#09332C]/60">Quick wins</h3>
              </div>
              <p className="text-sm text-[#09332C]/80 leading-relaxed">
                Communication gaps, navigation clarity and UI improvements that could be shipped independently without structural changes.
              </p>
            </div>
            <div className="bg-[#09332C] rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-[#F0531C]" />
                <h3 className="text-xs font-semibold uppercase tracking-wider text-[#FFA74F]">Structural redesign</h3>
              </div>
              <p className="text-sm text-[#F7EDDA]/80 leading-relaxed">
                Redesigning the sign-up funnel into a measurable happy path with a key decision: whether payment should be included within sign-up.
              </p>
            </div>
          </div>

          {/* Technical delivery */}
          <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground/50 mb-5">Design-to-dev handoff specs</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "scrollIntoView()", desc: "Guides users to relevant content during step transitions and validation errors" },
              { title: "Sticky header", desc: "Maintains orientation and access to navigation during sign-up" },
              { title: "Form validation", desc: "Prevents incomplete or invalid submissions with clear error states" },
              { title: "Progress tracking", desc: "Triggers aligned to funnel steps for analytics and measurement" },
            ].map((spec) => (
              <div key={spec.title} className="bg-white rounded-xl p-5 border border-border/40 shadow-sm">
                <p className="text-sm font-mono font-semibold text-[#09332C] mb-1">{spec.title}</p>
                <p className="text-xs text-foreground/60 leading-relaxed">{spec.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Results ── */}
        <section className="mb-20">
          <SectionHeader icon={BarChart3} title="Results" />

          {/* Funnel comparison */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Old funnel */}
            <div className="bg-white rounded-xl p-6 border border-border/40 shadow-sm">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground/40 mb-6">Old funnel</h3>
              <div className="space-y-5">
                {[
                  { label: "Entered", users: 405, pct: 100 },
                  { label: "Step 2", users: 36, pct: 8.9 },
                  { label: "Completed", users: 15, pct: 3.7 },
                ].map((row) => (
                  <div key={row.label}>
                    <div className="flex justify-between text-xs text-foreground/50 mb-1.5">
                      <span>{row.label}</span>
                      <span>{row.users} users</span>
                    </div>
                    <div className="h-2.5 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-foreground/20 rounded-full transition-all duration-500" style={{ width: `${row.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-3xl font-bold text-foreground/30 mt-6">3.7%</p>
              <p className="text-xs text-foreground/40">completion rate</p>
            </div>

            {/* New funnel */}
            <div className="bg-[#09332C] rounded-xl p-6">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#FFA74F] mb-6">New funnel</h3>
              <div className="space-y-5">
                {[
                  { label: "Entered", users: 1994, pct: 100, color: "bg-[#F0531C]" },
                  { label: "Step 2", users: 499, pct: 25, color: "bg-[#F0531C]" },
                  { label: "Step 3", users: 236, pct: 11.8, color: "bg-[#FFA74F]" },
                  { label: "Completed", users: 185, pct: 9.3, color: "bg-[#FFA74F]" },
                ].map((row) => (
                  <div key={row.label}>
                    <div className="flex justify-between text-xs text-[#F7EDDA]/50 mb-1.5">
                      <span>{row.label}</span>
                      <span>{row.users} users</span>
                    </div>
                    <div className="h-2.5 bg-[#2E4B3C] rounded-full overflow-hidden">
                      <div className={`h-full ${row.color} rounded-full transition-all duration-500`} style={{ width: `${row.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-3xl font-bold text-[#F7EDDA] mt-6">9.3%</p>
              <p className="text-xs text-[#F7EDDA]/50">completion rate</p>
            </div>
          </div>

          {/* Net result callout */}
          <div className="bg-[#F0531C] rounded-xl p-8 text-white">
            <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
              <div className="flex-shrink-0">
                <p className="text-4xl md:text-5xl font-bold">+5.6%</p>
                <p className="text-sm text-white/70 mt-1">absolute increase</p>
              </div>
              <div className="h-px md:h-12 md:w-px bg-white/20 w-full md:flex-shrink-0" />
              <p className="text-sm text-white/80 leading-relaxed">
                Proportional abandonment reduced at top of funnel. More users reached later stages, indicating increased confidence and clarity. A validated measurement framework was established for ongoing optimisation.
              </p>
            </div>
          </div>

          {/* Pending */}
          <div className="mt-8 bg-white rounded-xl p-6 border border-border/40 shadow-sm">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground/40 mb-4">Pending for future iteration</h3>
            <ul className="space-y-2">
              {[
                "Finalised payment timing decision outcomes",
                "A/B testing results",
                "Post-release impact on refunds, billing timing and customer service contacts",
              ].map((item, i) => (
                <li key={i} className="text-sm text-foreground/60 leading-relaxed flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-foreground/30 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Reflection ── */}
        <section className="mb-20">
          <SectionHeader icon={BookOpen} title="Reflection" />

          <div className="space-y-4">
            {project.learnings.map((learning, i) => (
              <div key={i} className="flex items-start gap-4 p-5 bg-[#F7EDDA] rounded-xl">
                <span className="text-xs font-semibold text-[#09332C] bg-[#09332C]/10 px-2.5 py-1 rounded flex-shrink-0">{String(i + 1).padStart(2, "0")}</span>
                <p className="text-sm text-[#09332C]/80 leading-relaxed">{learning}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Tools ── */}
        <section className="mb-16 pb-16 border-b border-border">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground/40 mb-4">Tools used</h3>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <span key={tool} className="text-xs px-3 py-1.5 rounded-full bg-white border border-border/40 text-foreground/60">
                {tool}
              </span>
            ))}
          </div>
        </section>
      </div>

      {/* ── Navigation ── */}
      <div className="border-t border-border bg-white">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <div className="flex flex-col sm:flex-row justify-between gap-6">
            {prevProject ? (
              <Link
                href={`/projects/${prevProject.slug}`}
                className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-200" />
                <div>
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Previous</p>
                  <p className="text-sm group-hover:text-[#F0531C] transition-colors duration-200">{prevProject.title}</p>
                </div>
              </Link>
            ) : (
              <div />
            )}
            {nextProject && (
              <Link
                href={`/projects/${nextProject.slug}`}
                className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors duration-200 sm:text-right"
              >
                <div>
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Next</p>
                  <p className="text-sm group-hover:text-[#F0531C] transition-colors duration-200">{nextProject.title}</p>
                </div>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
