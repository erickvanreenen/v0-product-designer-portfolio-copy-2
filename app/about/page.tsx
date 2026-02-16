import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About | Erick van Reenen",
  description:
    "Learn more about Erick van Reenen, an experienced UX/UI Designer based in Cape Town.",
};

const skills = [
  "User Research", "UX Strategy", "Information Architecture",
  "Wireframing & Prototyping", "UI Design", "Design Systems",
  "Usability Testing", "Data Visualization", "Content Design", "CX Design",
];

const tools = [
  "Figma", "Adobe Creative Suite", "Miro", "Jira",
  "Articulate 360", "Google Suite", "Office Suite",
];

const waysOfWorking = [
  { title: "Research-Driven", description: "I embrace research as an essential tool for uncovering user needs, shaping experiences that resonate with their motivations and aspirations." },
  { title: "Collaborative", description: "I work closely with cross-functional teams, from developers to product managers, ensuring alignment between business goals and user needs." },
  { title: "Iterative", description: "Design is never finished. I believe in continuous improvement through testing, feedback, and refinement." },
  { title: "User-Centered", description: "Every decision is guided by a deep curiosity about the people I design for and with, focusing on their real needs and behaviors." },
];

const experience = [
  { title: "UX/UI Designer", company: "Silvertree Brands", period: "Sep 2024 - Present", description: "Leading UX/UI design across UCOOK, Faithful to Nature, and Pet Heaven e-commerce brands." },
  { title: "UX Designer", company: "YumEase", period: "Jul 2023 - Aug 2024", description: "Sole UX Designer shaping the user experience from inception to launch." },
  { title: "Visual Team Lead", company: "UNi4 Online", period: "May 2021 - Aug 2024", description: "Led visual design team, streamlined workflows, and designed UX for aggregator platform." },
  { title: "Design Director", company: "Poly Nation", period: "Jun 2018 - Apr 2020", description: "Responsible for entire production process. Contributed to 40% business turnover increase." },
];

const education = [
  { title: "Professional Diploma in UX Design", institution: "UX Design Institute, Glasgow Caledonian University", year: "2022" },
  { title: "The Creative's Workshop", institution: "Akimbo, Seth Godin", year: "2021" },
  { title: "UX Design Fundamentals", institution: "California Institute of the Arts", year: "2020" },
  { title: "Visual Elements of User Interface Design", institution: "California Institute of the Arts", year: "2020" },
];

export default function AboutPage() {
  return (
    <div>
      {/* ── Hero ── */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#09332C] mb-6 text-balance">
            Relentless Curiosity
          </h1>
          <p className="text-lg md:text-xl text-foreground/60 max-w-3xl leading-relaxed">
            I am an experienced designer with a diverse background in
            entrepreneurship, business development, branding, product design,
            visual and online education design, and UX/UI.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">

        {/* ── Bio Grid ── */}
        <div className="lg:grid lg:grid-cols-[2fr_1fr] lg:gap-16 mb-20">
          <div className="mb-12 lg:mb-0">
            <div className="aspect-square max-w-md bg-[#09332C] rounded-lg flex items-center justify-center mb-8">
              <span className="text-3xl font-bold text-[#F7EDDA]/20 select-none">EVR</span>
            </div>

            <div className="space-y-6">
              <p className="text-base text-foreground leading-relaxed">
                I have a passion for how exceptional design impacts users&apos;
                lives, blending creativity, empathy, and kindness in everything
                I create. My work is driven by a deep curiosity and an endless
                desire to understand the intricacies of design, focusing on the
                people I design for and with.
              </p>
              <p className="text-base text-foreground leading-relaxed">
                I embrace research as an essential tool for uncovering user
                needs, shaping experiences that resonate with their motivations
                and aspirations. I&apos;m a dedicated problem-solver and advocate
                for quality design, balancing innovation with practical solutions.
              </p>
              <p className="text-base text-foreground/60 leading-relaxed">
                Beyond design, I&apos;m a proud father who draws inspiration and
                solace from nature, Tai Chi, meditation, breathwork, trail
                running, and early morning swims in the Atlantic Ocean.
              </p>
            </div>
          </div>

          <aside className="space-y-8">
            {[
              { label: "Location", value: "Cape Town, South Africa" },
              { label: "Email", value: "erickvanreenen@gmail.com" },
              { label: "Phone", value: "+27 620 969 497" },
              { label: "Availability", value: "Open to opportunities" },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-xs text-foreground/40 font-medium uppercase tracking-wider mb-1">{item.label}</p>
                <p className="text-sm text-foreground">{item.value}</p>
              </div>
            ))}
          </aside>
        </div>

        {/* ── Skills & Tools ── */}
        <section className="mb-20 pb-20 border-b border-border">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-xs text-foreground/40 font-medium uppercase tracking-wider mb-5">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill} className="text-sm px-3 py-1.5 rounded-full bg-[#09332C] text-[#F7EDDA] hover:bg-[#F0531C] transition-colors duration-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-xs text-foreground/40 font-medium uppercase tracking-wider mb-5">Tools</h2>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span key={tool} className="text-sm px-3 py-1.5 rounded-full bg-card border border-border text-foreground/70">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Ways of Working ── */}
        <section className="mb-20 pb-20 border-b border-border">
          <div className="bg-white rounded-xl px-6 py-4 shadow-sm border border-border/40 inline-block mb-10">
            <h2 className="text-xl md:text-2xl font-semibold text-[#09332C]">Ways of Working</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {waysOfWorking.map((way) => (
              <div key={way.title} className="p-6 bg-[#F7EDDA] rounded-lg hover:shadow-md transition-shadow duration-200">
                <h3 className="text-base font-medium text-[#09332C] mb-2">{way.title}</h3>
                <p className="text-sm text-[#09332C]/70 leading-relaxed">{way.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Experience ── */}
        <section className="mb-20 pb-20 border-b border-border">
          <div className="bg-white rounded-xl px-6 py-4 shadow-sm border border-border/40 inline-block mb-10">
            <h2 className="text-xl md:text-2xl font-semibold text-[#09332C]">Experience</h2>
          </div>
          <div className="space-y-0">
            {experience.map((exp, i, arr) => (
              <div key={exp.company} className="flex gap-6">
                {/* Timeline */}
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-[#F0531C] flex-shrink-0 mt-1" />
                  {i < arr.length - 1 && <div className="w-px flex-1 bg-border" />}
                </div>
                <div className="pb-10">
                  <p className="text-xs text-foreground/40 font-medium mb-1">{exp.period}</p>
                  <h3 className="text-base font-medium text-foreground">{exp.title}</h3>
                  <p className="text-sm text-[#F0531C] mb-2">{exp.company}</p>
                  <p className="text-sm text-foreground/70 leading-relaxed">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Education ── */}
        <section className="mb-20 pb-20 border-b border-border">
          <div className="bg-white rounded-xl px-6 py-4 shadow-sm border border-border/40 inline-block mb-10">
            <h2 className="text-xl md:text-2xl font-semibold text-[#09332C]">Education</h2>
          </div>
          <div className="space-y-6">
            {education.map((edu) => (
              <div key={edu.title} className="flex items-start gap-6">
                <span className="text-xs text-foreground/40 font-medium w-12 flex-shrink-0 pt-0.5">{edu.year}</span>
                <div>
                  <h3 className="text-base font-medium text-foreground">{edu.title}</h3>
                  <p className="text-sm text-foreground/50">{edu.institution}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section>
          <div className="bg-[#F7EDDA] rounded-lg p-10 md:p-14">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#09332C] mb-4 text-balance leading-snug">
              Let&apos;s work together
            </h2>
            <p className="text-[#09332C]/60 mb-6 leading-relaxed max-w-lg">
              I&apos;m always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#09332C] text-[#F7EDDA] text-sm font-medium rounded-full hover:bg-[#F0531C] hover:shadow-md transition-all duration-200 group"
            >
              Get in touch
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform duration-200" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
