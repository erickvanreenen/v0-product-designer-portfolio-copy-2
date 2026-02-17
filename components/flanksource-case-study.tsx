"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Project } from "@/lib/projects";

interface Props {
  project: Project;
  nextProject?: Project;
  prevProject?: Project;
}

export function FlanksourceCaseStudy({ project, nextProject, prevProject }: Props) {
  return (
    <article>
      {/* Hero */}
      <section className="bg-white border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs text-foreground/40 hover:text-foreground transition-colors mb-10"
          >
            <ArrowLeft size={14} />
            Back to projects
          </Link>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#09332C] tracking-tight mb-4">
            {project.title}
          </h1>
          <p className="text-lg text-foreground/50 max-w-xl">
            {project.subtitle}
          </p>
        </div>
      </section>

      {/* Meta */}
      <section className="border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <p className="text-xs text-foreground/40 uppercase tracking-widest mb-2">Role</p>
            <p className="text-sm font-medium text-foreground">{project.role}</p>
          </div>
          <div>
            <p className="text-xs text-foreground/40 uppercase tracking-widest mb-2">Team</p>
            <p className="text-sm font-medium text-foreground">{project.team}</p>
          </div>
          <div>
            <p className="text-xs text-foreground/40 uppercase tracking-widest mb-2">Timeline</p>
            <p className="text-sm font-medium text-foreground">{project.timeline}</p>
          </div>
          <div>
            <p className="text-xs text-foreground/40 uppercase tracking-widest mb-2">Tools</p>
            <p className="text-sm font-medium text-foreground">{project.tools.join(", ")}</p>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="border-b border-border bg-[#09332C]">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <p className="text-xs text-[#FFA74F] uppercase tracking-widest mb-6">Key outcomes</p>
          <div className="grid md:grid-cols-3 gap-6">
            {project.outcomes.map((outcome, i) => (
              <p key={i} className="text-sm text-[#F7EDDA]/80">{outcome}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Context */}
      <section className="border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold text-[#09332C] mb-4">Context</h2>
          <p className="text-sm text-foreground/60 max-w-2xl leading-relaxed">
            {project.context}
          </p>
        </div>
      </section>

      {/* Brief */}
      <section className="border-b border-border bg-white">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold text-[#09332C] mb-4">Brief</h2>
          <p className="text-sm text-foreground/60 max-w-2xl leading-relaxed">
            Design a new dashboard that surfaces relevant actionables and general health of services.
            A mix of catalog items, health checks, notifications, playbooks, and topology.
          </p>
          <div className="mt-8 grid md:grid-cols-5 gap-4">
            {["Topology", "Playbooks", "Catalog", "Health Checks", "Notifications"].map((item) => (
              <div key={item} className="border border-border px-4 py-3">
                <p className="text-xs font-medium text-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold text-[#09332C] mb-8">Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", label: "Domain immersion", desc: "Learned data dev terminology and component functions." },
              { step: "02", label: "Data visualisation exploration", desc: "Explored methods to communicate system health." },
              { step: "03", label: "Ideate and wireframe", desc: "Mapped component data into dashboard layouts." },
              { step: "04", label: "Structural design", desc: "Final design representations for review." },
            ].map((item) => (
              <div key={item.step}>
                <p className="text-xs text-[#F0531C] font-medium mb-2">{item.step}</p>
                <p className="text-sm font-semibold text-foreground mb-1">{item.label}</p>
                <p className="text-xs text-foreground/50 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before / After */}
      <section className="border-b border-border bg-white">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold text-[#09332C] mb-8">Before and after</h2>

          {/* Before */}
          <div className="mb-12">
            <p className="text-xs text-foreground/40 uppercase tracking-widest mb-4">Before</p>
            <div className="border border-border overflow-hidden bg-[#f8f8f8]">
              <Image
                src="/images/flanksource-before.svg"
                alt="Flanksource original dashboard layout"
                width={1440}
                height={900}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* After */}
          <div>
            <p className="text-xs text-foreground/40 uppercase tracking-widest mb-4">After</p>
            <div className="border border-border overflow-hidden bg-[#f8f8f8]">
              <Image
                src="/images/flanksource-after.svg"
                alt="Flanksource redesigned dashboard"
                width={1800}
                height={1169}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Insights */}
      <section className="border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold text-[#09332C] mb-6">Insights</h2>
          <ul className="space-y-3 max-w-2xl">
            {project.insights.map((insight, i) => (
              <li key={i} className="text-sm text-foreground/60 leading-relaxed pl-4 border-l-2 border-[#F0531C]">
                {insight}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Learnings */}
      <section className="border-b border-border bg-white">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold text-[#09332C] mb-6">Learnings</h2>
          <ul className="space-y-3 max-w-2xl">
            {project.learnings.map((learning, i) => (
              <li key={i} className="text-sm text-foreground/60 leading-relaxed pl-4 border-l-2 border-border">
                {learning}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Navigation */}
      <section className="border-t border-border">
        <div className="max-w-5xl mx-auto px-6 py-12 flex items-center justify-between">
          {prevProject ? (
            <Link
              href={`/projects/${prevProject.slug}`}
              className="group flex items-center gap-2 text-sm text-foreground/50 hover:text-foreground transition-colors"
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
              {prevProject.title}
            </Link>
          ) : <div />}
          {nextProject ? (
            <Link
              href={`/projects/${nextProject.slug}`}
              className="group flex items-center gap-2 text-sm text-foreground/50 hover:text-foreground transition-colors"
            >
              {nextProject.title}
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          ) : <div />}
        </div>
      </section>
    </article>
  );
}
