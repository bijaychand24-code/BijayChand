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

const filters = [
  "All",
  "Web",
  "Cloud",
  "DevOps",
  "Cyber Security",
  "SEO",
];

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

        {/* Filter Tabs */}
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

        {/* Projects Grid */}
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

        {/* View More */}
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
        {/* Project Image Placeholder */}
        <div className="relative h-48 bg-gradient-to-br from-accent-blue/20 to-accent-cyan/10 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative z-10 text-6xl opacity-50 group-hover:opacity-100 transition-opacity duration-500">
            {project.category === "Web" && "🌐"}
            {project.category === "Cloud" && "☁️"}
            {project.category === "DevOps" && "⚙️"}
            {project.category === "Cyber Security" && "🔐"}
            {project.category === "SEO" && "🔍"}
          </div>
          {/* Featured Badge */}
          {project.featured && (
            <span className="absolute top-3 left-3 px-2 py-1 rounded-full bg-accent-green/20 text-accent-green text-xs font-medium border border-accent-green/30">
              Featured
            </span>
          )}
          {/* Category Badge */}
          <span className="absolute top-3 right-3 px-2 py-1 rounded-full bg-white/10 text-text-muted text-xs font-medium border border-white/10 backdrop-blur-sm">
            {project.category}
          </span>
        </div>

        {/* Project Content */}
        <div className="p-6 flex flex-col flex-1">
          <h3 className="text-xl font-bold font-display text-text-light mb-3 group-hover:text-accent-blue transition-colors">
            {project.title}
          </h3>
          <p className="text-text-muted text-sm leading-relaxed mb-4 flex-1">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-5">
            {project.technologies.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-lg bg-white/5 text-text-muted text-xs font-medium border border-white/10 hover:border-accent-blue/30 hover:text-accent-blue transition-colors"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 5 && (
              <span className="px-2.5 py-1 rounded-lg bg-white/5 text-text-muted text-xs font-medium border border-white/10">
                +{project.technologies.length - 5} more
              </span>
            )}
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-3 pt-4 border-t border-white/10">
            <Button
              variant="primary"
              size="sm"
              className="flex-1 min-w-0"
              asChild
            >
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4" />
                Code
              </a>
            </Button>
            {project.liveDemo !== "#" && (
              <Button
                variant="secondary"
                size="sm"
                className="flex-1 min-w-0"
                asChild
              >
                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              </Button>
            )}
          </div>
        </div>
      </Card>
    </motion.article>
  );
}