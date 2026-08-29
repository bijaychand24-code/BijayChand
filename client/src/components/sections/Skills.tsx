"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Cloud,
  Code,
  Cpu,
  Database,
  Shield,
  Wrench,
  Search,
  X,
  Layers,
  Sparkles,
  CheckCircle2,
  BookOpen,
  Compass,
} from "lucide-react";
import { skillsCategories } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { cn } from "@/utils/cn";
import { Skill } from "@/types";

const categoryIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "Cloud & DevOps": Cloud,
  "Frontend Development": Code,
  "Backend & APIs": Cpu,
  "Databases & Storage": Database,
  "Cyber Security": Shield,
  "Tools & Workflow": Wrench,
  Cloud,
  Code,
  Cpu,
  Database,
  Shield,
  Wrench,
};

const levelStyles: Record<string, { bg: string; text: string; border: string; dot: string }> = {
  Intermediate: {
    bg: "bg-accent-blue/15",
    text: "text-accent-blue",
    border: "border-accent-blue/30",
    dot: "bg-accent-blue",
  },
  Learning: {
    bg: "bg-accent-sky/15",
    text: "text-accent-sky",
    border: "border-accent-sky/30",
    dot: "bg-accent-sky",
  },
  Beginner: {
    bg: "bg-accent-green/15",
    text: "text-accent-green",
    border: "border-accent-green/30",
    dot: "bg-accent-green",
  },
};

const devicons: Record<string, React.ComponentType<{ className?: string }>> = {
  aws: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path d="M8.5 8.5c0-1.9 1.6-3.5 3.5-3.5 1.5 0 2.8.8 3.4 2.1h2.2c-.9-3.1-3.7-5.1-6.6-5.1C7.2 2 4 5.2 4 9.2c0 2.7 1.5 5 3.8 6.1L8 15.2A4.7 4.7 0 0 1 7 12c0-2.8 2.2-5 5-5 2 0 3.7 1.1 4.5 2.8h-2.3a2.5 2.5 0 0 0-4.7 1.7c0 1.4 1.1 2.5 2.5 2.5h1.7v2.1H11c-3.1 0-5.5-2.4-5.5-5.5Z" fill="currentColor" />
      <path d="M15.5 13.5H12v2h3.5v2.2H12v2h3.5v2.3h-6.8v-9.5h6.8v2.1Z" fill="currentColor" />
    </svg>
  ),
  docker: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path d="M6 17h2v-2H6v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm-8-4h2v-2H6v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm-8-4h2V7H6v2Zm4 0h2V7h-2v2Zm4 0h2V7h-2v2Zm4 0h2V7h-2v2ZM4 20h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  kubernetes: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path d="M12 2.8v3.4M12 17.8v3.4M5.4 5.4l2.4 2.4M16.2 16.2l2.4 2.4M2.8 12h3.4M17.8 12h3.4M5.4 18.6l2.4-2.4M16.2 7.8l2.4-2.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="12" cy="12" r="3.8" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </svg>
  ),
  terraform: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path d="M9 3.5 4.5 6v12.5L9 16V3.5Zm6.5 0L10 6v12.5l5.5-2.5V3.5Zm5.5 4.5L15 10.5v12.5L21 20V8Z" fill="currentColor" />
    </svg>
  ),
  git: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path d="M8.5 8.5A3.5 3.5 0 1 1 15 15a3.5 3.5 0 1 1-6.5-6.5Zm0 0 7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="8.5" cy="8.5" r="2.5" fill="currentColor" />
      <circle cx="15.5" cy="15.5" r="2.5" fill="currentColor" />
    </svg>
  ),
  github: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path d="M12 2.2a9.8 9.8 0 0 0-3.1 19.1c.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.5-1.2-1.2-1.5-1.2-1.5-.9-.7.1-.7.1-.7 1 .1 1.6 1.1 1.6 1.1.9 1.5 2.4 1.1 3 .8.1-.7.4-1.1.7-1.3-2.2-.3-4.6-1.2-4.6-5.1 0-1.1.4-2 1.1-2.7-.1-.3-.5-1.3.1-2.7 0 0 .9-.3 2.8 1.1A9.4 9.4 0 0 1 12 7.4c.9 0 1.8.1 2.7.4 1.9-1.4 2.8-1.1 2.8-1.1.6 1.4.2 2.4.1 2.7.7.7 1.1 1.6 1.1 2.7 0 3.9-2.4 4.8-4.6 5.1.4.3.7.9.7 1.8v2.8c0 .3.2.6.7.5A9.8 9.8 0 0 0 12 2.2Z" fill="currentColor" />
    </svg>
  ),
  linux: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path d="M12 2.5a9.5 9.5 0 1 0 0 19 9.5 9.5 0 0 0 0-19Zm0 2.2a7.3 7.3 0 0 1 4.6 1.5h-9.2A7.3 7.3 0 0 1 12 4.7Zm-5.5 8.6a6.9 6.9 0 0 1 .2-1.8h10.6a6.9 6.9 0 0 1 .2 1.8 6.9 6.9 0 0 1-.2 1.8H6.7a6.9 6.9 0 0 1-.2-1.8Zm1.8 4.2c.8-1.5 2.3-2.5 4.7-2.5s3.9 1 4.7 2.5H8.3Zm9.1-11.1a7.3 7.3 0 0 1 0 9.4H15.8a9.4 9.4 0 0 0 0-9.4h1.6ZM9.3 7.8a9.4 9.4 0 0 0 0 9.4H7.7a7.3 7.3 0 0 1 0-9.4h1.6Z" fill="currentColor" />
    </svg>
  ),
  javascript: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path d="M4 4h16v16H4V4Zm2.5 2.5v11h11v-11h-11Zm2 2h7v2H8.5v-2Zm0 3h7v2h-7v-2Z" fill="currentColor" />
    </svg>
  ),
  typescript: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path d="M4 4h16v16H4V4Zm2.5 2.5v11h11v-11h-11Zm2 2h7v2H8.5v-2Zm0 3h7v2h-7v-2Zm0 3h4v2h-4v-2Z" fill="currentColor" />
    </svg>
  ),
  python: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path d="M9 2.5h6v3h-6v-3Zm0 3h-2a2 2 0 0 0-2 2v5h2V7.5h2v12h6v-12h2V12h2V7.5a2 2 0 0 0-2-2h-2v-3h-6Zm-2 7h2v2H7v-2Zm10 0h2v2h-2v-2Z" fill="currentColor" />
    </svg>
  ),
  html5: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path d="M4 3h16l-1.5 15.5L12 21l-6.5-2.5L4 3Zm3 3.5 1.2 11.5 5.1 1.8 5.2-1.8L17 6.5H7Zm1.7 2.4h6.6l-.2 2.1-2.2 1-.3.1-.3-.1-2.1-1-.1-1.5h2v.6h1.1l.8-.4.4-1.2H9.8l-.1-1.5h6.6l-.1 1.9h-3.7l.1 1.4h3.5l-.1 2.3-2.7 1.1-2.6-1.1-.2-1.7h1.7v.8.1h1.1l1.2-.5.2-1.1H9.2l-.1-2.3Z" fill="currentColor" />
    </svg>
  ),
  css3: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path d="M4 3h16l-1.5 15.5L12 21l-6.5-2.5L4 3Zm3 3.5 1.1 10.5 4.3 1.5 4.4-1.5L17 6.5H7Zm2.2 2.2h5.6l-.2 2.1-2.1 1h-.2l-2-.9-.2-1.3h2.3v.9h1.2l1-.5.1-.8H9.4l-.1-1.5h6.1l-.1 2.2-2.6 1.1-2.6-1.2-.3-1.3h1.6v.9h1.1l1.1-.5.1-1.1H9.2l-.1-2.2Z" fill="currentColor" />
    </svg>
  ),
  mysql: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path d="M6 7.5c0-1.8 2.5-3 6-3s6 1.2 6 3v9c0 1.8-2.5 3-6 3s-6-1.2-6-3v-9Zm12 0c0 1.2-2.1 2.1-6 2.1s-6-.9-6-2.1M6 12c0 1.2 2.1 2.1 6 2.1s6-.9 6-2.1M6 15.5c0 1.2 2.1 2.1 6 2.1s6-.9 6-2.1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  security: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path d="M12 2.5 5 5.5v6.1c0 4.1 2.7 7.9 7 10.4 4.3-2.5 7-6.3 7-10.4V5.5l-7-3Zm0 4.1 3.5 1.5v3.1c0 2.4-1.5 4.7-3.5 6.1-2-1.4-3.5-3.7-3.5-6.1V8.1L12 6.6Z" fill="currentColor" />
    </svg>
  ),
  react: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="2.5" fill="currentColor" />
      <ellipse cx="12" cy="12" rx="9" ry="4" stroke="currentColor" strokeWidth="1.5" transform="rotate(0 12 12)" />
      <ellipse cx="12" cy="12" rx="9" ry="4" stroke="currentColor" strokeWidth="1.5" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="9" ry="4" stroke="currentColor" strokeWidth="1.5" transform="rotate(-60 12 12)" />
    </svg>
  ),
  node: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path d="M12 2.8 4.4 7.1v9.8L12 21.2l7.6-4.3V7.1L12 2.8Zm0 2.2 5.3 3-5.3 3-5.2-3 5.2-3Zm-6 4.5 5 2.9v6.2l-5-2.9V9.5Zm12 0v6.2l-5 2.9v-6.2l5-2.9Z" fill="currentColor" />
    </svg>
  ),
  mongodb: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path d="M12 2.8c3.3 0 5.8 2.6 5.8 6.2 0 3.3-2.4 5.5-5.8 7.6-3.4-2.1-5.8-4.3-5.8-7.6 0-3.6 2.5-6.2 5.8-6.2Zm0 2.2c-2.1 0-3.7 1.6-3.7 4 0 2.2 1.5 3.7 3.7 5.1 2.2-1.4 3.7-2.9 3.7-5.1 0-2.4-1.6-4-3.7-4Zm-1.5 5.4h3v1.8h-3v-1.8Z" fill="currentColor" />
    </svg>
  ),
  tailwind: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path d="M4.5 15.5c1.5-3 3.6-4.5 6.3-4.5 2.4 0 4.2 1.2 5.1 3.6.9-1.7 2.2-2.8 4-3.3-1.1 3.6-3.8 6.2-7.6 6.2-2.8 0-4.9-1.4-7.8-2Z" fill="currentColor" opacity="0.9" />
      <path d="M4.5 11.5c1.9-2.1 3.8-3.6 6.4-3.6 2.1 0 3.8 1 5.1 2.9 1.2-1.7 2.7-3 4.5-3.4-1.1 4.4-4.1 7.3-8.7 7.3-2.1 0-4.1-.9-7.3-3.2Z" fill="currentColor" opacity="0.7" />
    </svg>
  ),
  nginx: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path d="M12 3.5 4 7.2v9.6l8 3.7 8-3.7V7.2l-8-3.7Zm0 2.2 5.5 2.5-5.5 2.5L6.5 8.2 12 5.7Zm-5.5 4.1 4.5 2.1v5.2l-4.5-2.1V9.8Zm11 0v5.2l-4.5 2.1v-5.2l4.5-2.1Z" fill="currentColor" />
    </svg>
  ),
  bash: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path d="M4 17l6-5-6-5M12 17h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  socket: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  code: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  default: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path d="M12 3.5v17M3.5 12h17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
};

const skillIconMap: Record<string, string> = {
  AWS: "aws",
  EC2: "aws",
  S3: "aws",
  "S3 Storage": "aws",
  IAM: "aws",
  "IAM Security": "security",
  VPC: "aws",
  "Route 53": "aws",
  CloudWatch: "aws",
  Docker: "docker",
  "Docker Compose": "docker",
  Kubernetes: "kubernetes",
  Terraform: "terraform",
  Linux: "linux",
  "Linux Security": "linux",
  "CI/CD": "github",
  "GitHub Actions": "github",
  Nginx: "nginx",
  Bash: "bash",
  Git: "git",
  GitHub: "github",
  "VS Code": "code",
  Postman: "code",
  "React.js": "react",
  React: "react",
  TypeScript: "typescript",
  JavaScript: "javascript",
  HTML5: "html5",
  CSS3: "css3",
  "Tailwind CSS": "tailwind",
  "Node.js": "node",
  "Express.js": "node",
  "REST APIs": "code",
  "Socket.IO": "socket",
  Python: "python",
  MongoDB: "mongodb",
  MySQL: "mysql",
  Prisma: "code",
  "Network Security": "security",
  "SSL/TLS": "security",
  "Digital Forensics": "security",
  "Cyber Security Fundamentals": "security",
  "Cyber Security": "security",
};

function DevSkillIcon({ name, className }: { name: string; className?: string }) {
  const key = skillIconMap[name] || "default";
  const Icon = devicons[key] || devicons.default;
  return <Icon className={className} />;
}

interface ExtendedSkill extends Skill {
  category: string;
}

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const allSkills: ExtendedSkill[] = useMemo(() => {
    return skillsCategories.flatMap((c) =>
      c.skills.map((s) => ({ ...s, category: c.category }))
    );
  }, []);

  const totalSkillsCount = allSkills.length;
  const categoriesList = ["All", ...skillsCategories.map((c) => c.category)];

  const isExpanded = activeCategory !== null || searchQuery.trim().length > 0;

  const filteredSkills = useMemo(() => {
    let result = allSkills;

    if (activeCategory && activeCategory !== "All") {
      result = result.filter((s) => s.category === activeCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          s.category.toLowerCase().includes(q) ||
          s.level.toLowerCase().includes(q)
      );
    }

    return result;
  }, [allSkills, activeCategory, searchQuery]);

  const handleCategoryClick = (category: string) => {
    if (activeCategory === category) {
      setActiveCategory(null);
    } else {
      setActiveCategory(category);
    }
  };

  return (
    <section id="skills" className="section bg-gradient-radial" aria-labelledby="skills-heading">
      <div className="container-custom">
        <SectionHeading
          title="Skills & Technologies"
          subtitle="A comprehensive overview of cloud platforms, DevOps automation tools, development frameworks, and security practices I work with."
          align="center"
        />

        {/* Highlight Stats Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mt-8 mb-10 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          <Card variant="glass" className="p-4 flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-accent-blue/15 text-accent-blue">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl font-bold font-display text-text-light">{totalSkillsCount}+</div>
              <div className="text-xs text-text-muted">Technologies</div>
            </div>
          </Card>

          <Card variant="glass" className="p-4 flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-accent-sky/15 text-accent-sky">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl font-bold font-display text-text-light">{skillsCategories.length}</div>
              <div className="text-xs text-text-muted">Core Domains</div>
            </div>
          </Card>

          <Card variant="glass" className="p-4 flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-accent-cyan/15 text-accent-cyan">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl font-bold font-display text-text-light">Cloud & Web</div>
              <div className="text-xs text-text-muted">Primary Focus</div>
            </div>
          </Card>

          <Card variant="glass" className="p-4 flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-accent-green/15 text-accent-green">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl font-bold font-display text-text-light">Hands-on</div>
              <div className="text-xs text-text-muted">Project-Driven</div>
            </div>
          </Card>
        </motion.div>

        {/* Category Buttons Filter Bar */}
        <div className="mb-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-2.5"
            role="tablist"
            aria-label="Skills domain categories"
          >
            {categoriesList.map((category) => {
              const Icon = category === "All" ? Layers : categoryIconMap[category] || Code;
              const count =
                category === "All"
                  ? totalSkillsCount
                  : skillsCategories.find((c) => c.category === category)?.skills.length || 0;
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  role="tab"
                  aria-selected={isActive}
                  id={`skill-tab-${category.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                  onClick={() => handleCategoryClick(category)}
                  className={cn(
                    "flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300",
                    isActive
                      ? "bg-gradient-primary text-white shadow-glow-blue scale-[1.03] ring-2 ring-accent-blue/50"
                      : "bg-white/5 border border-white/10 text-text-muted hover:text-text-light hover:bg-white/10 hover:border-white/20"
                  )}
                >
                  <Icon className="w-4 h-4" />
                  <span>{category}</span>
                  <span
                    className={cn(
                      "px-2 py-0.5 rounded-full text-[11px] font-bold",
                      isActive ? "bg-white/25 text-white" : "bg-white/10 text-text-muted"
                    )}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </motion.div>
        </div>

        {/* Not Expanded Initial State - Friendly Prompt */}
        {!isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center py-10"
          >
            <Card variant="glass" className="p-8 max-w-xl mx-auto border-dashed border-accent-blue/30 bg-white/5">
              <div className="w-12 h-12 rounded-2xl bg-accent-blue/15 text-accent-blue flex items-center justify-center mx-auto mb-4 shadow-glow-blue/20">
                <Sparkles className="w-6 h-6 animate-pulse" />
              </div>
              <h3 className="text-lg font-bold font-display text-text-light mb-2">
                Click any category above to view skills
              </h3>
              <p className="text-sm text-text-muted leading-relaxed mb-5">
                Select from <strong>Cloud & DevOps (8)</strong>, <strong>Frontend (6)</strong>, <strong>Backend (5)</strong>, <strong>Security (6)</strong>, or <strong>All (35)</strong> to explore technologies and proficiency levels.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <button
                  onClick={() => setActiveCategory("All")}
                  className="btn btn-primary text-xs py-2 px-4 shadow-glow-blue"
                >
                  View All Skills (35)
                </button>
                <button
                  onClick={() => setActiveCategory("Cloud & DevOps")}
                  className="btn btn-secondary text-xs py-2 px-4"
                >
                  Cloud & DevOps (8)
                </button>
              </div>
            </Card>
          </motion.div>
        )}

        {/* Expanded Skills Content (Shown after clicking any button) */}
        <AnimatePresence mode="wait">
          {isExpanded && (
            <motion.div
              key="expanded-skills-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-8"
            >
              {/* Header Bar with Search & Active Filter Info */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-text-light">
                    Showing:{" "}
                    <span className="text-accent-sky font-semibold">
                      {activeCategory || "Search Results"}
                    </span>{" "}
                    ({filteredSkills.length} skills)
                  </span>
                  {activeCategory && (
                    <button
                      onClick={() => setActiveCategory(null)}
                      className="text-xs text-text-muted hover:text-accent-blue transition-colors flex items-center gap-1 underline ml-2"
                    >
                      <X className="w-3.5 h-3.5" /> Close
                    </button>
                  )}
                </div>

                {/* Search Box */}
                <div className="w-full sm:w-72 relative">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none" />
                  <input
                    type="text"
                    placeholder="Search in skills..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-8 py-2 rounded-xl bg-white/5 border border-white/10 text-text-light placeholder:text-text-muted/60 text-xs sm:text-sm focus:outline-none focus:border-accent-blue/50 focus:ring-1 focus:ring-accent-blue/20 transition-all"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-text-muted hover:text-text-light"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>

              {/* No Results */}
              {filteredSkills.length === 0 ? (
                <div className="text-center py-12">
                  <Search className="w-8 h-8 text-text-muted mx-auto mb-3" />
                  <h4 className="text-lg font-bold text-text-light mb-1">No matching skills</h4>
                  <p className="text-xs text-text-muted mb-4">
                    No results found for "{searchQuery}".
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setActiveCategory("All");
                    }}
                    className="btn btn-secondary text-xs py-1.5 px-3"
                  >
                    Clear Filter
                  </button>
                </div>
              ) : activeCategory === "All" && !searchQuery.trim() ? (
                /* Grouped View for "All" */
                <div className="space-y-10">
                  {skillsCategories.map((categoryGroup, groupIndex) => {
                    const CategoryIcon = categoryIconMap[categoryGroup.category] || Code;
                    return (
                      <motion.div
                        key={categoryGroup.category}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: groupIndex * 0.05 }}
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-2 rounded-xl bg-accent-blue/15 text-accent-blue border border-accent-blue/20">
                            <CategoryIcon className="w-4 h-4" />
                          </div>
                          <h3 className="text-base sm:text-lg font-bold font-display text-text-light">
                            {categoryGroup.category}
                          </h3>
                          <span className="ml-auto text-xs font-medium px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-text-muted">
                            {categoryGroup.skills.length} skills
                          </span>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3 sm:gap-4">
                          {categoryGroup.skills.map((skill, idx) => (
                            <SkillCard
                              key={skill.name}
                              skill={{ ...skill, category: categoryGroup.category }}
                              index={idx}
                            />
                          ))}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              ) : (
                /* Specific Category or Search Filtered View */
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3 sm:gap-4">
                  {filteredSkills.map((skill, idx) => (
                    <SkillCard
                      key={`${skill.category}-${skill.name}`}
                      skill={skill}
                      index={idx}
                    />
                  ))}
                </div>
              )}

              {/* Proficiency Levels Legend Card */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="mt-12"
              >
                <Card variant="glass" className="p-6 border-white/10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-xl bg-accent-blue/15 text-accent-blue">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <h4 className="text-base sm:text-lg font-bold font-display text-text-light">
                      Proficiency Level Guide
                    </h4>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-4">
                    <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-accent-blue" />
                        <span className="text-xs sm:text-sm font-semibold text-accent-blue">
                          Intermediate
                        </span>
                      </div>
                      <p className="text-[11px] sm:text-xs text-text-muted leading-relaxed">
                        Practical project experience, building real applications and configuring infrastructure.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-accent-sky" />
                        <span className="text-xs sm:text-sm font-semibold text-accent-sky">
                          Learning / Goal
                        </span>
                      </div>
                      <p className="text-[11px] sm:text-xs text-text-muted leading-relaxed">
                        Actively studying, practicing hands-on labs, and preparing for certifications.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-accent-green" />
                        <span className="text-xs sm:text-sm font-semibold text-accent-green">
                          Beginner / Core
                        </span>
                      </div>
                      <p className="text-[11px] sm:text-xs text-text-muted leading-relaxed">
                        Solid conceptual foundation and syntax learned through academic curriculum.
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

function SkillCard({ skill, index }: { skill: ExtendedSkill; index: number }) {
  const style = levelStyles[skill.level] || levelStyles.Intermediate;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 15 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: Math.min(index * 0.03, 0.3) }}
      className="group h-full"
    >
      <Card
        variant="glass"
        className="h-full p-4 flex flex-col justify-between group-hover:border-accent-blue/40 group-hover:shadow-glow-blue transition-all duration-300"
      >
        <div className="flex items-start gap-3">
          <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-white/5 text-accent-blue border border-white/10 group-hover:border-accent-blue/30 group-hover:bg-accent-blue/10 transition-colors">
            <DevSkillIcon name={skill.name} className="h-5 w-5" />
          </div>

          <div className="min-w-0 flex-1">
            <h4 className="truncate text-sm font-bold text-text-light group-hover:text-accent-blue transition-colors">
              {skill.name}
            </h4>
            <span className="block text-[11px] text-text-muted truncate mt-0.5">
              {skill.category}
            </span>
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
          <span
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[10px] font-medium border",
              style.bg,
              style.text,
              style.border
            )}
          >
            <span className={cn("w-1.5 h-1.5 rounded-full", style.dot)} />
            {skill.level}
          </span>
        </div>
      </Card>
    </motion.div>
  );
}