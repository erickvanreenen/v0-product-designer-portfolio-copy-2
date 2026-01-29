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
    <div className="py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-normal text-foreground mb-4">
            Projects
          </h1>
          <p className="text-muted-foreground max-w-2xl leading-relaxed">
            A selection of UX/UI design work across e-commerce, mobile apps, and
            digital products. Each project represents a journey of research,
            iteration, and thoughtful problem-solving.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12">
          <TagFilter
            tags={allTags}
            activeTag={activeTag}
            onTagChange={setActiveTag}
          />
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-12">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <p className="text-center text-muted-foreground py-12">
            No projects found for this filter.
          </p>
        )}
      </div>
    </div>
  );
}
