"use client";

import { ProjectTag } from "@/lib/projects";
import { cn } from "@/lib/utils";

interface TagFilterProps {
  tags: ProjectTag[];
  activeTag: ProjectTag | null;
  onTagChange: (tag: ProjectTag | null) => void;
}

export function TagFilter({ tags, activeTag, onTagChange }: TagFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onTagChange(null)}
        className={cn(
          "text-sm px-4 py-2 rounded-sm border transition-all duration-200",
          activeTag === null
            ? "bg-foreground text-background border-foreground"
            : "bg-transparent text-foreground border-border hover:border-foreground hover:bg-muted"
        )}
      >
        All
      </button>
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => onTagChange(tag)}
          className={cn(
            "text-sm px-4 py-2 rounded-sm border transition-all duration-200",
            activeTag === tag
              ? "bg-foreground text-background border-foreground"
              : "bg-transparent text-foreground border-border hover:border-foreground hover:bg-muted"
          )}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
