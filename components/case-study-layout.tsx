"use client";

import React from "react";
import { Project } from "@/lib/projects";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink, Target, Search, Lightbulb, Layers, BarChart3, BookOpen } from "lucide-react";

interface CaseStudyLayoutProps {
  project: Project;
  nextProject?: Project;
  prevProject?: Project;
}

export function CaseStudyLayout({
  project,
  nextProject,
  prevProject,
}: CaseStudyLayoutProps) {
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

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-normal text-[#F7EDDA] mb-4 tracking-tight text-balance">
            {project.title}
          </h1>
          <p className="text-xl md:text-2xl text-[#FFA74F] font-normal max-w-3xl leading-relaxed mb-6">
            {project.subtitle}
          </p>
          <p className="text-base text-[#F7EDDA]/70 max-w-2xl leading-relaxed">
            {project.summary}
          </p>

          {project.externalLink && (
            <Link
              href={project.externalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-[#F0531C] text-white text-sm font-medium rounded-full hover:bg-[#F0531C]/90 hover:shadow-lg transition-all duration-200 group"
            >
              View Interactive Experience
              <ExternalLink size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </Link>
          )}

          {/* Meta strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-[#F7EDDA]/10">
            {[
              { label: "Role", value: project.role },
              { label: "Team", value: project.team },
              { label: "Timeline", value: project.timeline },
              { label: "Tools", value: project.tools.join(", ") },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-xs text-[#FFA74F] font-medium uppercase tracking-wider mb-1">{item.label}</p>
                <p className="text-sm text-[#F7EDDA]/80">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Key Outcomes Banner ── */}
      <section className="bg-[#F0531C] text-white">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <p className="text-xs font-medium uppercase tracking-wider text-white/70 mb-4">Key Outcomes</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {project.outcomes.map((outcome, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-white/15 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5 font-medium">{i + 1}</span>
                <p className="text-sm text-white/90 leading-relaxed">{outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Main Content ── */}
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">

        {/* Context */}
        <section className="mb-20">
          <p className="text-lg md:text-xl text-foreground leading-relaxed font-serif">
            {project.context}
          </p>
        </section>

        {/* Goals */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#FFA74F]/15">
              <Target size={20} className="text-[#FFA74F]" />
            </div>
            <h2 className="text-2xl font-serif text-foreground">Goals</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {project.goals.map((goal, i) => (
              <div key={i} className="flex items-start gap-4 bg-card rounded-lg p-5 border border-border">
                <span className="text-2xl font-serif text-[#F0531C]/30 font-medium leading-none">{String(i + 1).padStart(2, "0")}</span>
                <p className="text-sm text-foreground leading-relaxed">{goal}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Research */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#09332C]/10">
              <Search size={20} className="text-[#09332C]" />
            </div>
            <h2 className="text-2xl font-serif text-foreground">Research</h2>
          </div>
          <p className="text-base text-foreground/80 leading-relaxed">{project.research}</p>
        </section>

        {/* Key Insights */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#F0531C]/10">
              <Lightbulb size={20} className="text-[#F0531C]" />
            </div>
            <h2 className="text-2xl font-serif text-foreground">Key Insights</h2>
          </div>
          <div className="space-y-4">
            {project.insights.map((insight, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-5 rounded-lg bg-card border border-border hover:border-[#F0531C]/30 transition-colors duration-200"
              >
                <span className="text-lg font-serif text-[#F0531C]/40 font-medium leading-none mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                <p className="text-sm text-foreground/80 leading-relaxed">{insight}</p>
              </div>
            ))}
          </div>
        </section>

        {/* IA & Flows */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#2E4B3C]/10">
              <Layers size={20} className="text-[#2E4B3C]" />
            </div>
            <h2 className="text-2xl font-serif text-foreground">Information Architecture & Flows</h2>
          </div>
          <p className="text-base text-foreground/80 leading-relaxed">{project.iaFlows}</p>
        </section>

        {/* Design */}
        <section className="mb-20">
          <div className="bg-[#F7EDDA] rounded-lg p-8">
            <h2 className="text-xs font-medium uppercase tracking-wider text-[#09332C]/60 mb-6">Design Exploration & Final UI</h2>
            <p className="text-base text-[#09332C]/80 leading-relaxed mb-4">{project.designExploration}</p>
            <p className="text-base text-[#09332C]/80 leading-relaxed">{project.finalUI}</p>
          </div>
        </section>

        {/* Testing */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#FFA74F]/15">
              <BarChart3 size={20} className="text-[#FFA74F]" />
            </div>
            <h2 className="text-2xl font-serif text-foreground">Testing & Validation</h2>
          </div>
          <p className="text-base text-foreground/80 leading-relaxed">{project.testing}</p>
        </section>

        {/* Outcome */}
        <section className="mb-20">
          <div className="bg-[#09332C] rounded-lg p-8">
            <h2 className="text-xs font-medium uppercase tracking-wider text-[#FFA74F] mb-6">Outcome</h2>
            <p className="text-base text-[#F7EDDA]/80 leading-relaxed">{project.outcome}</p>
          </div>
        </section>

        {/* Reflection */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#2E4B3C]/10">
              <BookOpen size={20} className="text-[#2E4B3C]" />
            </div>
            <h2 className="text-2xl font-serif text-foreground">Reflection</h2>
          </div>
          <div className="space-y-4">
            {project.learnings.map((learning, i) => (
              <div key={i} className="flex items-start gap-4 p-5 bg-[#F7EDDA] rounded-lg">
                <span className="text-xs font-medium text-[#09332C] bg-[#09332C]/10 px-2.5 py-1 rounded flex-shrink-0">{String(i + 1).padStart(2, "0")}</span>
                <p className="text-sm text-[#09332C]/80 leading-relaxed">{learning}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tools */}
        <section className="mb-16 pb-16 border-b border-border">
          <h3 className="text-xs font-medium uppercase tracking-wider text-foreground/40 mb-4">Tools used</h3>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <span key={tool} className="text-xs px-3 py-1.5 rounded-full bg-card border border-border text-foreground/60">
                {tool}
              </span>
            ))}
          </div>
        </section>
      </div>

      {/* ── Navigation ── */}
      <div className="border-t border-border bg-card">
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
