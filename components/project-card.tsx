import Link from "next/link";
import Image from "next/image";
import { Project } from "@/lib/projects";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block"
    >
      <article className="overflow-hidden">
        <div className={`relative bg-muted overflow-hidden ${featured ? 'aspect-[16/10]' : 'aspect-[4/3]'}`}>
          <div className="absolute inset-0 bg-foreground/5" />
          <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/40 text-sm">
            {project.title}
          </div>
          <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-300" />
        </div>
        
        <div className="pt-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-lg font-medium text-foreground group-hover:text-foreground/80 transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                {project.subtitle}
              </p>
            </div>
            <ArrowUpRight 
              size={20} 
              className="text-muted-foreground group-hover:text-foreground transition-colors flex-shrink-0 mt-1" 
            />
          </div>
          
          <div className="flex flex-wrap gap-2 mt-3">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded"
              >
                {tag}
              </span>
            ))}
          </div>
          
          {featured && project.outcomes[0] && (
            <p className="text-sm text-muted-foreground mt-3">
              {project.outcomes[0]}
            </p>
          )}
        </div>
      </article>
    </Link>
  );
}
