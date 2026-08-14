"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Cloud, Cpu, Code, Server, Database, Layout, Wrench, Shield } from "lucide-react";
import { skillsCategories } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { cn } from "@/utils/cn";

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Cloud,
  Cpu,
  Code,
  Server,
  Database,
  Layout,
  Wrench,
  Shield,
};

const levelColors: Record<string, { bg: string; text: string; border: string }> = {
  Beginner: { bg: "bg-accent-green/20", text: "text-accent-green", border: "border-accent-green/30" },
  Intermediate: { bg: "bg-accent-blue/20", text: "text-accent-blue", border: "border-accent-blue/30" },
  Learning: { bg: "bg-accent-sky/20", text: "text-accent-sky", border: "border-accent-sky/30" },
};

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", ...skillsCategories.map((c) => c.category)];

  const filteredSkills = activeCategory === "All"
    ? skillsCategories.flatMap((c) => c.skills.map((s) => ({ ...s, category: c.category })))
    : skillsCategories.find((c) => c.category === activeCategory)?.skills.map((s) => ({ ...s, category: activeCategory })) || [];

  return (
    <section
      id="skills"
      className="section"
      aria-labelledby="skills-heading"
    >
      <div className="container-custom">
        <SectionHeading
          title="Skills Dashboard"
          subtitle="Technologies and tools I work with, organized by domain. Levels reflect my current proficiency."
          align="center"
        />

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12 lg:mb-16"
          role="tablist"
          aria-label="Skill categories"
        >
          {categories.map((cat, i) => (
            <button
              key={cat}
              role="tab"
              aria-selected={activeCategory === cat}
              aria-controls={`${cat.toLowerCase()}-panel`}
              id={`${cat.toLowerCase()}-tab`}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300",
                activeCategory === cat
                  ? "bg-gradient-primary text-white shadow-glow-blue"
                  : "bg-white/5 text-text-muted hover:text-text-light hover:bg-white/10 border border-white/10"
              )}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div role="tabpanel" id={`${activeCategory.toLowerCase()}-panel`} aria-labelledby={`${activeCategory.toLowerCase()}-tab`}>
          {activeCategory === "All" ? (
            <div className="space-y-8 lg:space-y-12">
              {skillsCategories.map((category, catIndex) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: catIndex * 0.1 }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-xl bg-accent-blue/10">
                      {(() => {
                        const CategoryIcon = categoryIcons[category.icon];
                        return <CategoryIcon className="w-6 h-6 text-accent-blue" />;
                      })()}
                    </div>
                    <h3 className="text-xl lg:text-2xl font-bold font-display gradient-text">{category.category}</h3>
                    <span className="px-3 py-1 rounded-full bg-white/5 text-text-muted text-xs font-medium">
                      {category.skills.length} skills
                    </span>
                  </div>
                  <SkillGrid skills={category.skills} startDelay={catIndex * 0.1} />
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              key={activeCategory}
            >
              <SkillGrid skills={filteredSkills as typeof skillsCategories[0]["skills"]} />
            </motion.div>
          )}
        </div>

        {/* Proficiency Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 lg:mt-20 p-6 lg:p-8 card-glass"
        >
          <h4 className="text-lg font-bold text-text-light mb-4 flex items-center gap-2">
            Proficiency Levels
          </h4>
          <div className="flex flex-wrap gap-4">
            {Object.entries(levelColors).map(([level, colors]) => (
              <div key={level} className="flex items-center gap-2">
                <span className={cn("badge", colors.bg, colors.text, colors.border)}>
                  {level}
                </span>
              </div>
            ))}
          </div>
          <p className="text-text-muted text-sm mt-4">
            <strong className="text-text-light">Beginner:</strong> Foundational knowledge, learning basics.{" "}
            <strong className="text-text-light">Intermediate:</strong> Practical experience, can build projects.{" "}
            <strong className="text-text-light">Learning:</strong> Actively studying, not yet production-ready.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function SkillGrid({ skills, startDelay = 0 }: { skills: typeof skillsCategories[0]["skills"]; startDelay?: number }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 lg:gap-4">
      {skills.map((skill, i) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: startDelay + i * 0.03 }}
          className="group"
        >
          <Card variant="glass" className="p-4 text-center group-hover:border-accent-blue/40 group-hover:shadow-glow-blue">
            <div className="font-medium text-text-light mb-2">{skill.name}</div>
            <span
              className={cn(
                "badge",
                levelColors[skill.level]?.bg || "bg-white/10",
                levelColors[skill.level]?.text || "text-text-muted",
                levelColors[skill.level]?.border || "border-white/10"
              )}
            >
              {skill.level}
            </span>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}