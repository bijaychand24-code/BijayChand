"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Github, ExternalLink, Code, Cloud, Shield, Search, Cpu, Globe } from "lucide-react";
import { projects, personalInfo } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { cn } from "@/utils/cn";

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  All: Code,
  Cloud: Cloud,
  DevOps: Cpu,
  Web: Globe,
  "Cyber Security": Shield,
  SEO: Search,
};

const filters = ["All", "Web", "Cloud", "DevOps", "Cyber Security", "SEO"];

function TechBadge({ tech }: { tech: string }) {
  const Icon = techIcons[tech.toLowerCase()] || techIcons.default;

  return (
    <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 text-[11px] font-medium text-text-muted">
      <Icon className="h-3.5 w-3.5" />
      {tech}
    </span>
  );
}

const techIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  react: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="2.5" fill="currentColor" />
      <ellipse cx="12" cy="12" rx="9" ry="4" stroke="currentColor" strokeWidth="1.5" transform="rotate(0 12 12)" />
      <ellipse cx="12" cy="12" rx="9" ry="4" stroke="currentColor" strokeWidth="1.5" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="9" ry="4" stroke="currentColor" strokeWidth="1.5" transform="rotate(-60 12 12)" />
    </svg>
  ),
  vite: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path d="M12 2 2.6 19.1h18.8L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M12 7.1v9.1M8.8 15l3.2 4.4 3.1-4.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  docker: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path d="M6 17h2v-2H6v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm-8-4h2v-2H6v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm-8-4h2V7H6v2Zm4 0h2V7h-2v2Zm4 0h2V7h-2v2Zm4 0h2V7h-2v2ZM4 20h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  aws: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path d="M8.5 8.5c0-1.9 1.6-3.5 3.5-3.5 1.5 0 2.8.8 3.4 2.1h2.2c-.9-3.1-3.7-5.1-6.6-5.1C7.2 2 4 5.2 4 9.2c0 2.7 1.5 5 3.8 6.1L8 15.2A4.7 4.7 0 0 1 7 12c0-2.8 2.2-5 5-5 2 0 3.7 1.1 4.5 2.8h-2.3a2.5 2.5 0 0 0-4.7 1.7c0 1.4 1.1 2.5 2.5 2.5h1.7v2.1H11c-3.1 0-5.5-2.4-5.5-5.5Z" fill="currentColor"/>
      <path d="M15.5 13.5H12v2h3.5v2.2H12v2h3.5v2.3h-6.8v-9.5h6.8v2.1Z" fill="currentColor"/>
    </svg>
  ),
  nginx: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path d="M12 3.5 4 7.2v9.6l8 3.7 8-3.7V7.2l-8-3.7Zm0 2.2 5.5 2.5-5.5 2.5L6.5 8.2 12 5.7Zm-5.5 4.1 4.5 2.1v5.2l-4.5-2.1V9.8Zm11 0v5.2l-4.5 2.1v-5.2l4.5-2.1Z" fill="currentColor"/>
    </svg>
  ),
  node: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path d="M12 2.8 4.4 7.1v9.8L12 21.2l7.6-4.3V7.1L12 2.8Zm0 2.2 5.3 3-5.3 3-5.2-3 5.2-3Zm-6 4.5 5 2.9v6.2l-5-2.9V9.5Zm12 0v6.2l-5 2.9v-6.2l5-2.9Z" fill="currentColor"/>
    </svg>
  ),
  mongodb: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path d="M12 2.8c3.3 0 5.8 2.6 5.8 6.2 0 3.3-2.4 5.5-5.8 7.6-3.4-2.1-5.8-4.3-5.8-7.6 0-3.6 2.5-6.2 5.8-6.2Zm0 2.2c-2.1 0-3.7 1.6-3.7 4 0 2.2 1.5 3.7 3.7 5.1 2.2-1.4 3.7-2.9 3.7-5.1 0-2.4-1.6-4-3.7-4Zm-1.5 5.4h3v1.8h-3v-1.8Z" fill="currentColor"/>
    </svg>
  ),
  tailwind: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path d="M4.5 15.5c1.5-3 3.6-4.5 6.3-4.5 2.4 0 4.2 1.2 5.1 3.6.9-1.7 2.2-2.8 4-3.3-1.1 3.6-3.8 6.2-7.6 6.2-2.8 0-4.9-1.4-7.8-2Z" fill="currentColor" opacity="0.9"/>
      <path d="M4.5 11.5c1.9-2.1 3.8-3.6 6.4-3.6 2.1 0 3.8 1 5.1 2.9 1.2-1.7 2.7-3 4.5-3.4-1.1 4.4-4.1 7.3-8.7 7.3-2.1 0-4.1-.9-7.3-3.2Z" fill="currentColor" opacity="0.7"/>
    </svg>
  ),
  django: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round"/>
    </svg>
  ),
  mysql: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path d="M6 7.5c0-1.8 2.5-3 6-3s6 1.2 6 3v9c0 1.8-2.5 3-6 3s-6-1.2-6-3v-9Zm12 0c0 1.2-2.1 2.1-6 2.1s-6-.9-6-2.1M6 12c0 1.2 2.1 2.1 6 2.1s6-.9 6-2.1M6 15.5c0 1.2 2.1 2.1 6 2.1s6-.9 6-2.1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  socket: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  ),
  express: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M2 17l10 5 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    </svg>
  ),
  compose: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path d="M6 17h2v-2H6v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm-8-4h2v-2H6v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm-8-4h2V7H6v2Zm4 0h2V7h-2v2Zm4 0h2V7h-2v2Zm4 0h2V7h-2v2ZM4 20h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 2v4M12 18v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  linux: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path d="M12 2.5a9.5 9.5 0 1 0 0 19 9.5 9.5 0 0 0 0-19Zm0 2.2a7.3 7.3 0 0 1 4.6 1.5h-9.2A7.3 7.3 0 0 1 12 4.7Zm-5.5 8.6a6.9 6.9 0 0 1 .2-1.8h10.6a6.9 6.9 0 0 1 .2 1.8 6.9 6.9 0 0 1-.2 1.8H6.7a6.9 6.9 0 0 1-.2-1.8Zm1.8 4.2c.8-1.5 2.3-2.5 4.7-2.5s3.9 1 4.7 2.5H8.3Zm9.1-11.1a7.3 7.3 0 0 1 0 9.4H15.8a9.4 9.4 0 0 0 0-9.4h1.6ZM9.3 7.8a9.4 9.4 0 0 0 0 9.4H7.7a7.3 7.3 0 0 1 0-9.4h1.6Z" fill="currentColor"/>
    </svg>
  ),
  default: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path d="M12 3.5v17M3.5 12h17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
};

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section
      id="projects"
      className="section bg-gradient-radial"
      aria-labelledby="projects-heading"
    >
      <div className="container-custom">
        <SectionHeading
          title="Featured Projects"
          subtitle="A collection of projects showcasing my skills in web development, cloud, and real-time applications."
          align="center"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12 lg:mb-16"
          role="tablist"
          aria-label="Project categories"
        >
          {filters.map((filter, i) => (
            <button
              key={filter}
              role="tab"
              aria-selected={activeFilter === filter}
              aria-controls={`${filter.toLowerCase().replace(" ", "-")}-panel`}
              id={`${filter.toLowerCase().replace(" ", "-")}-tab`}
              onClick={() => setActiveFilter(filter)}
              className={cn(
                "px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2",
                activeFilter === filter
                  ? "bg-gradient-primary text-white shadow-glow-blue"
                  : "bg-white/5 text-text-muted hover:text-text-light hover:bg-white/10 border border-white/10"
              )}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {(() => {
                const CategoryIcon = categoryIcons[filter];
                return <CategoryIcon className="w-4 h-4" />;
              })()}
              {filter}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            role="tabpanel"
            id={`${activeFilter.toLowerCase().replace(" ", "-")}-panel`}
            aria-labelledby={`${activeFilter.toLowerCase().replace(" ", "-")}-tab`}
          >
            {filteredProjects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {activeFilter === "All" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 lg:mt-16 text-center"
          >
            <Button variant="outline" size="lg" asChild>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                View More on GitHub
                <ExternalLink className="w-5 h-5" />
              </a>
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
}

type ProjectItem = (typeof projects)[number];

function ProjectCard({ project, index }: { project: ProjectItem; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group"
    >
      <Card variant="glass" className="overflow-hidden h-full flex flex-col group-hover:border-accent-blue/40 group-hover:shadow-glow-blue">
        <div className="relative h-52 overflow-hidden bg-gradient-to-br from-accent-blue/20 via-primary-secondary/80 to-accent-cyan/10">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
          {project.featured && (
            <span className="absolute left-3 top-3 rounded-full border border-accent-green/30 bg-accent-green/20 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-accent-green">
              Featured
            </span>
          )}
          <span className="absolute right-3 top-3 rounded-full border border-white/10 bg-white/10 px-2.5 py-1 text-[10px] font-medium text-text-muted backdrop-blur-sm">
            {project.category}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <h3 className="mb-3 text-xl font-bold font-display text-text-light transition-colors group-hover:text-accent-blue">
            {project.title}
          </h3>
          <p className="mb-4 text-sm leading-relaxed text-text-muted">{project.description}</p>
          <p className="mb-4 rounded-xl border border-accent-blue/10 bg-accent-blue/5 px-3 py-2 text-xs font-medium text-accent-sky">
            {project.impact}
          </p>

          <div className="mb-5 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <TechBadge key={tech} tech={tech} />
            ))}
          </div>

          <div className="mt-auto flex flex-wrap gap-3 border-t border-white/10 pt-4">
            <Button variant="primary" size="sm" className="flex-1 min-w-0" asChild>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </Button>
            {project.liveDemo !== "#" && (
              <Button variant="secondary" size="sm" className="flex-1 min-w-0" asChild>
                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4" />
                  Live
                </a>
              </Button>
            )}
          </div>
        </div>
      </Card>
    </motion.article>
  );
}