"use client";

import { motion } from "framer-motion";
import { Building2, MapPin, Code, Database, GitBranch, Wifi, Terminal, Server } from "lucide-react";
import { experience } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";

const techIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  React: ({ className }) => <Code className={className} />,
  Node: ({ className }) => <Terminal className={className} />,
  Express: ({ className }) => <Server className={className} />,
  MongoDB: ({ className }) => <Database className={className} />,
  Socket: ({ className }) => <Wifi className={className} />,
  Git: ({ className }) => <GitBranch className={className} />,
  GitHub: ({ className }) => <GitBranch className={className} />,
};

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="section"
      aria-labelledby="experience-heading"
    >
      <div className="container-custom">
        <SectionHeading
          title="Experience"
          subtitle="My professional journey and hands-on experience building real-world applications."
          align="center"
        />

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline Line */}
          <motion.div
            className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-blue/50 to-accent-cyan/20"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            style={{ transformOrigin: "top center" }}
          />

          <div className="space-y-12 lg:space-y-16">
            {experience.map((exp, index) => (
              <ExperienceTimelineItem key={exp.id} experience={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

type ExperienceItem = (typeof experience)[number];

function ExperienceTimelineItem({ experience: exp, index }: { experience: ExperienceItem; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative"
    >
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
        {/* Timeline Dot & Date */}
        <div className="relative flex-shrink-0 w-16 lg:w-20 text-center lg:text-right z-10">
          <div className="relative">
            {/* Dot */}
            <motion.div
              className="absolute left-8 lg:left-1/2 top-2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-primary border-4 border-primary shadow-glow-blue"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.15, type: "spring", stiffness: 200 }}
            />
            {/* Pulse Ring */}
            <motion.div
              className="absolute left-8 lg:left-1/2 top-2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-accent-blue"
              animate={{ scale: [1, 2], opacity: [0.5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
            />
          </div>
          <div className="mt-10 text-xs text-text-muted whitespace-nowrap">
            {exp.startDate} — {exp.endDate}
          </div>
          <div className="text-xs text-accent-blue font-medium">
            {exp.duration}
          </div>
        </div>

        {/* Experience Card */}
        <Card variant="glass" className="flex-1 p-6 lg:p-8 group relative">
          {/* Company Badge */}
          <div className="flex items-center gap-2 mb-3">
            <Building2 className="w-4 h-4 text-accent-blue" />
            <span className="text-sm font-medium text-accent-blue">{exp.company}</span>
            <span className="px-2 py-0.5 rounded-full bg-accent-blue/20 text-accent-blue text-xs font-medium border border-accent-blue/30">
              {exp.role}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl lg:text-2xl font-bold font-display text-text-light mb-2">
            {exp.title}
          </h3>

          {/* Location */}
          <div className="flex items-center gap-2 text-text-muted text-sm mb-4">
            <MapPin className="w-4 h-4" />
            <span>{exp.location}</span>
          </div>

          {/* Description */}
          <div className="space-y-2 mb-6">
            {exp.description.map((desc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 + i * 0.05 }}
                className="flex items-start gap-3 text-text-muted text-sm leading-relaxed group-hover:text-text-light transition-colors"
              >
                <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent-blue mt-2" />
                <span>{desc}</span>
              </motion.div>
            ))}
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
            {exp.technologies.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 + i * 0.05 }}
                className="px-3 py-1.5 rounded-xl bg-white/5 text-text-muted text-xs font-medium border border-white/10 hover:border-accent-blue/30 hover:text-accent-blue transition-colors group-hover:border-accent-blue/30 group-hover:text-accent-blue"
              >
                {(() => {
                  const TechIcon = techIcons[tech];
                  return (
                    <>
                      {tech}
                      {TechIcon && <TechIcon className="w-3 h-3 ml-1" />}
                    </>
                  );
                })()}
              </motion.span>
            ))}
          </div>
        </Card>
      </div>
    </motion.div>
  );
}