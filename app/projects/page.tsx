"use client";

import { useState } from "react";
import { projects, getAllTags, ProjectTag } from "@/lib/projects";
import { ProjectCard } from "@/components/project-card";
import { TagFilter } from "@/components/tag-filter";

export default function ProjectsPage() {
  const [activeTag, setActiveTag] = useState<ProjectTag | null>(null);
  const allTags = getAllTags();

  const filteredProjects = activeTag
    ? projects.filter((p) => p.tags.includes(activeTag))
    : projects;

  return (
    <div>
      {/* Header */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#09332C] mb-4 text-balance">
            Projects
          </h1>
          <p className="text-foreground/60 max-w-2xl leading-relaxed">
            A selection of UX/UI design work across e-commerce, mobile apps, and
            digital products. Each project represents a journey of research,
            iteration, and thoughtful problem-solving.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        {/* Filters */}
        <div className="mb-10">
          <TagFilter
            tags={allTags}
            activeTag={activeTag}
            onTagChange={setActiveTag}
          />
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-foreground/40">No projects found for this filter.</p>
          </div>
        )}
      </div>
    </div>
  );
}
