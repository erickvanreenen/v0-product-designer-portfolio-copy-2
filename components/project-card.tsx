import Link from "next/link";
import { Project } from "@/lib/projects";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <article className="bg-card rounded-lg border border-border/50 overflow-hidden hover:border-[#F0531C]/30 hover:shadow-lg transition-all duration-300">
        {/* Thumbnail area */}
        <div className={`relative bg-[#09332C] overflow-hidden ${featured ? "aspect-[16/10]" : "aspect-[4/3]"}`}>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-3xl md:text-4xl font-bold text-[#F7EDDA]/20 select-none">{project.title}</span>
          </div>
          <div className="absolute inset-0 bg-[#F0531C]/0 group-hover:bg-[#F0531C]/10 transition-colors duration-300" />
          <div className="absolute top-4 right-4">
            <div className="w-8 h-8 rounded-full bg-card/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ArrowUpRight size={14} className="text-[#F7EDDA]" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 md:p-6">
          <div className="flex flex-wrap gap-1.5 mb-3">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 rounded-full bg-[#09332C]/5 text-[#09332C] border border-[#09332C]/10"
              >
                {tag}
              </span>
            ))}
          </div>

          <h3 className="text-lg font-semibold text-foreground group-hover:text-[#F0531C] transition-colors duration-200 mb-1">
            {project.title}
          </h3>
          <p className="text-sm text-foreground/60 line-clamp-2 leading-relaxed">
            {project.subtitle}
          </p>

          {featured && project.outcomes[0] && (
            <div className="mt-4 pt-4 border-t border-border/50">
              <p className="text-xs text-[#F0531C] font-medium uppercase tracking-wider mb-1">Key outcome</p>
              <p className="text-sm text-foreground/70 leading-relaxed">{project.outcomes[0]}</p>
            </div>
          )}
        </div>
      </article>
    </Link>
  );
}
