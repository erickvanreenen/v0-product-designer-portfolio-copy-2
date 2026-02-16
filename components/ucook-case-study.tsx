"use client";

import React from "react";
import { Project } from "@/lib/projects";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";

interface UCookCaseStudyProps {
  project: Project;
  nextProject?: Project;
  prevProject?: Project;
}

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="py-12 md:py-16 border-t border-border/50">
      <h2 className="text-sm text-muted-foreground font-medium uppercase tracking-wide mb-6">
        {title}
      </h2>
      <div className="max-w-none">{children}</div>
    </section>
  );
}

const processSteps = [
  {
    step: "01",
    title: "Customer service interviews",
    description:
      "Reviewed customer service logs, tracked topics and complaint categories. Identified repeated contact drivers and flagged incomplete sign-ups where users believed they had successfully ordered.",
  },
  {
    step: "02",
    title: "Internal survey",
    description:
      "16 internal responses focused on sign-up and subscription pausing. 55% of feedback highlighted unclear communication. Sign-up scored 6/10 compared to 8/10 for pause subscription.",
  },
  {
    step: "03",
    title: "Competitive benchmarking",
    description:
      "Reviewed sign-up funnels from Marley Spoon, Taste Box and Hello Fresh. Identified consistent patterns including clearly structured steps and a definitive payment action.",
  },
  {
    step: "04",
    title: "Heuristic evaluation",
    description:
      "Evaluated against Nielsen's 10 usability heuristics. Issues clustered into three themes: communication, navigation and UI optimisation.",
  },
  {
    step: "05",
    title: "Unmoderated testing (Maze)",
    description:
      "Attempted to set up Maze testing. Identified a critical blocker: no single, clearly defined happy path funnel existed to test.",
  },
  {
    step: "06",
    title: "Moderated usability testing",
    description:
      "Conducted three moderated usability tests. Surfaced recurring issues around navigation, plan selection, pricing clarity and subscription vs on-demand confusion.",
  },
  {
    step: "07",
    title: "Measurement planning",
    description:
      "Defined Tag Manager triggers across each funnel step. Tooling included Google Analytics, Tag Manager, PostHog heatmaps and session recordings.",
  },
];

const technicalSpecs = [
  {
    title: "scrollIntoView()",
    description:
      "Guides users to relevant content during step transitions and validation errors",
  },
  {
    title: "Sticky header",
    description:
      "Maintains orientation and access to navigation during sign-up",
  },
  {
    title: "Form validation",
    description: "Prevents incomplete or invalid submissions with clear error states",
  },
  {
    title: "Progress tracking",
    description:
      "Triggers aligned to funnel steps for analytics and measurement",
  },
];

export function UCookCaseStudy({
  project,
  nextProject,
  prevProject,
}: UCookCaseStudyProps) {
  const sections = [
    { id: "problem", label: "Problem" },
    { id: "users", label: "Users" },
    { id: "constraints", label: "Constraints" },
    { id: "process", label: "Process" },
    { id: "insights", label: "Insights" },
    { id: "solution", label: "Solution" },
    { id: "delivery", label: "Delivery" },
    { id: "results", label: "Results" },
    { id: "learnings", label: "Learnings" },
  ];

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Back Link */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors duration-200 mb-8 group"
        >
          <ArrowLeft
            size={16}
            className="group-hover:-translate-x-0.5 transition-transform duration-200"
          />
          Back to projects
        </Link>

        {/* Hero Section */}
        <header className="pb-12 md:pb-16">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 bg-[#09332C] text-white rounded-sm transition-colors duration-200 hover:bg-[#F0531C]"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal text-foreground mb-4 text-balance">
            {project.title}
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl leading-relaxed">
            Sign-up usability investigation and funnel redesign
          </p>
          <p className="text-base text-muted-foreground max-w-3xl leading-relaxed mt-4">
            {project.summary}
          </p>
        </header>

        {/* Main Content with Sticky Sidebar */}
        <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-16">
          {/* Main Content */}
          <div>
            {/* Quick Stats */}
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-border/50 mb-8">
              <div>
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide mb-1">
                  Role
                </p>
                <p className="text-sm text-foreground">{project.role}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide mb-1">
                  Company
                </p>
                <p className="text-sm text-foreground">
                  Silvertree (UCOOK)
                </p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide mb-1">
                  Year
                </p>
                <p className="text-sm text-foreground">{project.timeline}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide mb-1">
                  Tools
                </p>
                <p className="text-sm text-foreground">
                  {project.tools.join(", ")}
                </p>
              </div>
            </div>

            {/* Key Outcomes - Highlight Card */}
            <div className="py-8 bg-[#09332C] rounded-sm px-6 mb-8">
              <p className="text-xs text-[#FFA74F] font-medium uppercase tracking-wide mb-4">
                Key Outcomes
              </p>
              <ul className="space-y-2">
                {project.outcomes.map((outcome, i) => (
                  <li
                    key={i}
                    className="text-sm text-[#F7EDDA] flex items-start gap-2"
                  >
                    <span className="text-[#F0531C] mt-1">*</span>
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>

            {/* Problem */}
            <Section id="problem" title="The Problem">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-sm font-medium text-foreground mb-3">
                    User pain points
                  </h3>
                  <ul className="space-y-3">
                    <li className="text-sm text-foreground/80 leading-relaxed flex items-start gap-2">
                      <span className="text-accent mt-0.5 flex-shrink-0">--</span>
                      Sign-up felt unclear and confusing, particularly what
                      &quot;signing up&quot; meant in relation to subscription activation
                      and payment
                    </li>
                    <li className="text-sm text-foreground/80 leading-relaxed flex items-start gap-2">
                      <span className="text-accent mt-0.5 flex-shrink-0">--</span>
                      Users struggled with navigation and orientation, including
                      finding meal options and returning to previous steps
                    </li>
                    <li className="text-sm text-foreground/80 leading-relaxed flex items-start gap-2">
                      <span className="text-accent mt-0.5 flex-shrink-0">--</span>
                      Checkout created confusion around subscription vs on-demand
                      ordering, pricing clarity and when payment would occur
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-foreground mb-3">
                    Business pain points
                  </h3>
                  <ul className="space-y-3">
                    <li className="text-sm text-foreground/80 leading-relaxed flex items-start gap-2">
                      <span className="text-accent mt-0.5 flex-shrink-0">--</span>
                      Over 60 incomplete sign-ups in a single week, with users still expecting delivery
                    </li>
                    <li className="text-sm text-foreground/80 leading-relaxed flex items-start gap-2">
                      <span className="text-accent mt-0.5 flex-shrink-0">--</span>
                      Estimated revenue impact of ~R1,296,000 per year based on average basket value
                    </li>
                    <li className="text-sm text-foreground/80 leading-relaxed flex items-start gap-2">
                      <span className="text-accent mt-0.5 flex-shrink-0">--</span>
                      Retention through the sign-up path was extremely low at 1.43%
                    </li>
                    <li className="text-sm text-foreground/80 leading-relaxed flex items-start gap-2">
                      <span className="text-accent mt-0.5 flex-shrink-0">--</span>
                      56% of first billings occurred 1-5 days after sign-up, reinforcing misalignment
                    </li>
                  </ul>
                </div>
              </div>
            </Section>

            {/* Users & Scope */}
            <Section id="users" title="Users & Scope">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-card border border-border/50 rounded-sm p-6">
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide mb-3">
                    Primary users
                  </p>
                  <p className="text-sm text-foreground leading-relaxed">
                    Prospective UCOOK customers attempting to sign up and place
                    their first order within a subscription-led model.
                  </p>
                </div>
                <div className="bg-card border border-border/50 rounded-sm p-6">
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide mb-3">
                    Out of scope
                  </p>
                  <p className="text-sm text-foreground leading-relaxed">
                    Existing customers managing their accounts post sign-up,
                    except where pause and reactivation behaviour surfaced as
                    supporting context through customer service.
                  </p>
                </div>
              </div>
            </Section>

            {/* Constraints */}
            <Section id="constraints" title="Constraints">
              <ul className="space-y-3">
                <li className="text-sm text-foreground/80 leading-relaxed flex items-start gap-3">
                  <span className="text-xs bg-[#FFA74F] text-[#09332C] px-2 py-1 rounded-sm flex-shrink-0 font-medium">
                    01
                  </span>
                  No clearly defined baseline funnel existed, preventing
                  effective unmoderated testing
                </li>
                <li className="text-sm text-foreground/80 leading-relaxed flex items-start gap-3">
                  <span className="text-xs bg-[#FFA74F] text-[#09332C] px-2 py-1 rounded-sm flex-shrink-0 font-medium">
                    02
                  </span>
                  Subscription and billing logic was complex and poorly aligned
                  with user mental models
                </li>
                <li className="text-sm text-foreground/80 leading-relaxed flex items-start gap-3">
                  <span className="text-xs bg-[#FFA74F] text-[#09332C] px-2 py-1 rounded-sm flex-shrink-0 font-medium">
                    03
                  </span>
                  Introducing payment earlier carried operational risk due to
                  frequent order changes and refund overhead
                </li>
              </ul>
            </Section>

            {/* Process */}
            <Section id="process" title="Process">
              <div className="space-y-6">
                {processSteps.map((step) => (
                  <div
                    key={step.step}
                    className="flex gap-4 items-start group"
                  >
                    <span className="text-xs bg-[#09332C] text-[#FFA74F] px-2.5 py-1.5 rounded-sm font-medium flex-shrink-0 mt-0.5">
                      {step.step}
                    </span>
                    <div>
                      <h3 className="text-sm font-medium text-foreground mb-1">
                        {step.title}
                      </h3>
                      <p className="text-sm text-foreground/70 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            {/* Key Insights */}
            <Section id="insights" title="Key Insights">
              <ul className="space-y-3">
                {project.insights.map((insight, i) => (
                  <li
                    key={i}
                    className="text-sm text-foreground/80 flex items-start gap-3 leading-relaxed"
                  >
                    <span className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded-sm flex-shrink-0 font-medium">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {insight}
                  </li>
                ))}
              </ul>
            </Section>

            {/* Solution */}
            <Section id="solution" title="Solution">
              <p className="text-sm text-foreground/80 leading-relaxed mb-6">
                Established sign-up as the highest-impact usability issue to
                prioritise based on evidence across multiple research streams.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-[#F7EDDA] rounded-sm p-6">
                  <p className="text-xs text-[#09332C] font-medium uppercase tracking-wide mb-3">
                    Quick wins
                  </p>
                  <p className="text-sm text-[#09332C]/80 leading-relaxed">
                    Addressing communication gaps, navigation clarity and UI
                    improvements that could be shipped independently.
                  </p>
                </div>
                <div className="bg-[#F7EDDA] rounded-sm p-6">
                  <p className="text-xs text-[#09332C] font-medium uppercase tracking-wide mb-3">
                    Structural redesign
                  </p>
                  <p className="text-sm text-[#09332C]/80 leading-relaxed">
                    Redesigning the sign-up funnel into a measurable happy path
                    with a key decision to validate: whether payment should be
                    included within sign-up.
                  </p>
                </div>
              </div>
            </Section>

            {/* Development & Delivery */}
            <Section id="delivery" title="Development & Delivery">
              <p className="text-sm text-foreground/80 leading-relaxed mb-6">
                Led design-to-development handoff with annotated Figma
                prototypes, interaction documentation and component-level
                specifications. Worked closely with developers during agile
                sprints and collaborated on QA.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {technicalSpecs.map((spec) => (
                  <div
                    key={spec.title}
                    className="bg-card border border-border/50 rounded-sm p-5"
                  >
                    <p className="text-sm font-medium text-foreground font-mono mb-1">
                      {spec.title}
                    </p>
                    <p className="text-sm text-foreground/70 leading-relaxed">
                      {spec.description}
                    </p>
                  </div>
                ))}
              </div>
            </Section>

            {/* Results - Funnel Comparison */}
            <Section id="results" title="Results">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {/* Old Funnel */}
                <div className="bg-card border border-border/50 rounded-sm p-6">
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide mb-4">
                    Old sign-up funnel
                  </p>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-baseline justify-between mb-1">
                        <p className="text-xs text-foreground/60">Step 1</p>
                        <p className="text-xs text-foreground/60">405 users</p>
                      </div>
                      <div className="h-2 bg-muted rounded-sm overflow-hidden">
                        <div
                          className="h-full bg-foreground/30 rounded-sm"
                          style={{ width: "100%" }}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-baseline justify-between mb-1">
                        <p className="text-xs text-foreground/60">Step 2</p>
                        <p className="text-xs text-foreground/60">36 users</p>
                      </div>
                      <div className="h-2 bg-muted rounded-sm overflow-hidden">
                        <div
                          className="h-full bg-foreground/30 rounded-sm"
                          style={{ width: "8.9%" }}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-baseline justify-between mb-1">
                        <p className="text-xs text-foreground/60">Completed</p>
                        <p className="text-xs text-foreground/60">15 users</p>
                      </div>
                      <div className="h-2 bg-muted rounded-sm overflow-hidden">
                        <div
                          className="h-full bg-foreground/30 rounded-sm"
                          style={{ width: "3.7%" }}
                        />
                      </div>
                    </div>
                    <p className="text-2xl font-medium text-foreground/40 mt-2">
                      3.7%
                      <span className="text-sm font-normal text-foreground/40 ml-2">
                        completion
                      </span>
                    </p>
                  </div>
                </div>

                {/* New Funnel */}
                <div className="bg-[#09332C] rounded-sm p-6">
                  <p className="text-xs text-[#FFA74F] font-medium uppercase tracking-wide mb-4">
                    New sign-up funnel
                  </p>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-baseline justify-between mb-1">
                        <p className="text-xs text-[#F7EDDA]/60">Step 1</p>
                        <p className="text-xs text-[#F7EDDA]/60">
                          1,994 users
                        </p>
                      </div>
                      <div className="h-2 bg-[#2E4B3C] rounded-sm overflow-hidden">
                        <div
                          className="h-full bg-[#F0531C] rounded-sm"
                          style={{ width: "100%" }}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-baseline justify-between mb-1">
                        <p className="text-xs text-[#F7EDDA]/60">Step 2</p>
                        <p className="text-xs text-[#F7EDDA]/60">499 users</p>
                      </div>
                      <div className="h-2 bg-[#2E4B3C] rounded-sm overflow-hidden">
                        <div
                          className="h-full bg-[#F0531C] rounded-sm"
                          style={{ width: "25%" }}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-baseline justify-between mb-1">
                        <p className="text-xs text-[#F7EDDA]/60">Step 3</p>
                        <p className="text-xs text-[#F7EDDA]/60">236 users</p>
                      </div>
                      <div className="h-2 bg-[#2E4B3C] rounded-sm overflow-hidden">
                        <div
                          className="h-full bg-[#FFA74F] rounded-sm"
                          style={{ width: "11.8%" }}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-baseline justify-between mb-1">
                        <p className="text-xs text-[#F7EDDA]/60">Completed</p>
                        <p className="text-xs text-[#F7EDDA]/60">185 users</p>
                      </div>
                      <div className="h-2 bg-[#2E4B3C] rounded-sm overflow-hidden">
                        <div
                          className="h-full bg-[#FFA74F] rounded-sm"
                          style={{ width: "9.3%" }}
                        />
                      </div>
                    </div>
                    <p className="text-2xl font-medium text-[#F7EDDA] mt-2">
                      9.3%
                      <span className="text-sm font-normal text-[#F7EDDA]/60 ml-2">
                        completion
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Net uplift */}
              <div className="bg-[#F7EDDA] rounded-sm p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
                <div>
                  <p className="text-3xl md:text-4xl font-medium text-[#F0531C]">
                    +5.6%
                  </p>
                  <p className="text-sm text-[#09332C]/70 mt-1">
                    absolute increase in sign-up completion
                  </p>
                </div>
                <div className="h-px sm:h-12 sm:w-px bg-[#09332C]/20 w-full sm:flex-shrink-0" />
                <div>
                  <p className="text-sm text-[#09332C]/80 leading-relaxed">
                    Proportional abandonment reduced at top of funnel, more users
                    reached later stages, and a validated measurement framework
                    was established for ongoing optimisation.
                  </p>
                </div>
              </div>

              {/* Pending */}
              <div className="mt-6">
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide mb-3">
                  Pending for future iteration
                </p>
                <ul className="space-y-1">
                  <li className="text-sm text-foreground/60 leading-relaxed">
                    -- Finalised payment timing decision outcomes
                  </li>
                  <li className="text-sm text-foreground/60 leading-relaxed">
                    -- A/B testing results
                  </li>
                  <li className="text-sm text-foreground/60 leading-relaxed">
                    -- Post-release impact on refunds, billing timing and customer service contacts
                  </li>
                </ul>
              </div>
            </Section>

            {/* Learnings */}
            <Section id="learnings" title="Reflection & Learnings">
              <ul className="space-y-4">
                {project.learnings.map((learning, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3"
                  >
                    <span className="text-xs bg-[#09332C] text-[#FFA74F] px-2 py-1 rounded-sm flex-shrink-0 font-medium mt-0.5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm text-foreground/80 leading-relaxed">
                      {learning}
                    </p>
                  </li>
                ))}
              </ul>
            </Section>
          </div>

          {/* Sticky Sidebar - Desktop Only */}
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide mb-4">
                On this page
              </p>
              <nav className="space-y-2">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="block text-sm text-muted-foreground hover:text-accent transition-colors duration-200 py-1"
                  >
                    {section.label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>
        </div>

        {/* Next/Prev Navigation */}
        <nav className="mt-16 pt-8 border-t border-border/50">
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            {prevProject ? (
              <Link
                href={`/projects/${prevProject.slug}`}
                className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                <ArrowLeft
                  size={16}
                  className="group-hover:-translate-x-1 transition-transform duration-200"
                />
                <div>
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
                    Previous
                  </p>
                  <p className="text-sm group-hover:text-accent transition-colors duration-200">
                    {prevProject.title}
                  </p>
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
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
                    Next
                  </p>
                  <p className="text-sm group-hover:text-accent transition-colors duration-200">
                    {nextProject.title}
                  </p>
                </div>
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform duration-200"
                />
              </Link>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
}
