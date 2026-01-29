import { notFound } from "next/navigation";
import { projects, getProjectBySlug } from "@/lib/projects";
import { CaseStudyLayout } from "@/components/case-study-layout";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found | Erick van Reenen",
    };
  }

  return {
    title: `${project.title} | Erick van Reenen`,
    description: project.summary,
    openGraph: {
      title: `${project.title} | Erick van Reenen`,
      description: project.summary,
      type: "article",
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const projectIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[projectIndex + 1];
  const prevProject = projects[projectIndex - 1];

  return (
    <CaseStudyLayout
      project={project}
      nextProject={nextProject}
      prevProject={prevProject}
    />
  );
}
