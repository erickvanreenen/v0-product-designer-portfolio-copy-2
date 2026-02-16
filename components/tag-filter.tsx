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
          "text-sm px-4 py-2 rounded-sm border-none transition-all duration-200",
          activeTag === null
            ? "bg-[#F0531C] text-white"
            : "bg-[#09332C] text-white hover:bg-[#F0531C]"
        )}
      >
        All
      </button>
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => onTagChange(tag)}
          className={cn(
            "text-sm px-4 py-2 rounded-sm border-none transition-all duration-200",
            activeTag === tag
              ? "bg-[#C65D3B] text-white"
              : "bg-[#6B7355] text-white hover:bg-[#C65D3B]"
          )}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
