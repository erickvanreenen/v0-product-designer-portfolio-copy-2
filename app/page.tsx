import Link from "next/link";
import { projects } from "@/lib/projects";
import { ProjectCard } from "@/components/project-card";
import { ArrowRight } from "lucide-react";

const credibilityItems = [
  { label: "E-commerce", detail: "across 3+ brands" },
  { label: "App launch", detail: "from inception" },
  { label: "Team leadership", detail: "& mentoring" },
  { label: "UX education", detail: "& teaching" },
];

export default function HomePage() {
  const featuredProjects = projects.slice(0, 4);

  return (
    <div>
      {/* ── Hero ── */}
      <section className="bg-[#09332C] text-[#F7EDDA]">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-36">
          <p className="text-sm text-[#FFA74F] font-medium uppercase tracking-wider mb-6">UX/UI Designer</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-normal leading-tight text-[#F7EDDA] max-w-3xl text-balance">
            I&apos;m an experienced designer with a passion for how exceptional
            design impacts users&apos; lives, blending creativity, empathy, and
            kindness in everything I create.
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#F0531C] text-white text-sm font-medium rounded-full hover:bg-[#F0531C]/90 hover:shadow-lg transition-all duration-200 group"
            >
              View case studies
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform duration-200" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[#F7EDDA]/20 text-[#F7EDDA] text-sm font-medium rounded-full hover:bg-[#F7EDDA]/10 transition-all duration-200"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>

      {/* ── Credibility Strip ── */}
      <section className="bg-[#F7EDDA]">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex flex-wrap gap-x-10 gap-y-4">
            {credibilityItems.map((item) => (
              <div key={item.label}>
                <span className="text-sm font-medium text-[#09332C]">{item.label}</span>
                <span className="text-sm text-[#09332C]/50 ml-1.5">{item.detail}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Work ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-2xl font-serif text-foreground">Selected work</h2>
            <Link
              href="/projects"
              className="text-sm text-foreground/50 hover:text-[#F0531C] transition-colors duration-200 flex items-center gap-1.5 group"
            >
              View all
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform duration-200" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} featured />
            ))}
          </div>
        </div>
      </section>

      {/* ── How I Work ── */}
      <section className="py-20 md:py-28 bg-card">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-serif text-foreground mb-12">How I work</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { step: "01", title: "Research", desc: "Understanding users, business goals, and market context" },
              { step: "02", title: "Define", desc: "Synthesizing insights into clear problem statements" },
              { step: "03", title: "Ideate", desc: "Exploring multiple solutions through divergent thinking" },
              { step: "04", title: "Prototype", desc: "Creating tangible representations to test concepts" },
              { step: "05", title: "Test", desc: "Validating solutions with real users" },
              { step: "06", title: "Iterate", desc: "Refining based on feedback and learnings" },
            ].map((step) => (
              <div key={step.step} className="p-6 bg-background rounded-lg border border-border/50 hover:border-[#F0531C]/20 transition-all duration-200 group">
                <span className="text-xs text-[#F0531C] font-medium">{step.step}</span>
                <h3 className="text-base font-medium text-foreground mt-2 group-hover:text-[#F0531C] transition-colors duration-200">
                  {step.title}
                </h3>
                <p className="text-sm text-foreground/60 mt-2 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-[#F7EDDA] rounded-lg p-10 md:p-14">
            <p className="text-xs text-[#09332C]/50 font-medium uppercase tracking-wider mb-4">Contact</p>
            <h2 className="text-2xl md:text-3xl font-serif text-[#09332C] text-balance leading-snug max-w-xl">
              If you would like to discuss a project or just say hi, I&apos;m always
              open to chat.
            </h2>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#09332C] text-[#F7EDDA] text-sm font-medium rounded-full hover:bg-[#F0531C] hover:shadow-md transition-all duration-200 mt-8 group"
            >
              Get in touch
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform duration-200" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
