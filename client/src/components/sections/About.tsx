"use client";

import { motion } from "framer-motion";
import { Target, Eye, Zap, CheckCircle } from "lucide-react";
import { personalInfo, aboutData, focusAreas } from "@/data/portfolio";
import { cn } from "@/utils/cn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";

const focusIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Cloud: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
      <polyline points="15 13 12 16 9 13" />
    </svg>
  ),
  Globe: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  Search: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  ),
};

const levelBadges: Record<string, string> = {
  Beginner: "badge-beginner",
  Intermediate: "badge-intermediate",
  Learning: "badge-learning",
};

export function About() {
  return (
    <section
      id="about"
      className="section bg-gradient-radial"
      aria-labelledby="about-heading"
    >
      <div className="container-custom">
        <SectionHeading
          title="About Me"
          subtitle="Get to know me better — my journey, mission, and what drives me forward."
        />

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 mt-12 lg:mt-16">
          {/* Main Bio */}
          <motion.div
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-6 lg:p-8">
              <h3 className="text-2xl lg:text-3xl font-bold font-display mb-6 gradient-text">
                Introduction
              </h3>
              <div className="prose prose-invert max-w-none text-text-muted leading-relaxed space-y-4">
                <p>
                  Hi, I'm <strong className="text-text-light">Bijay Chand</strong>, a BCA (Cyber Security) student at <strong className="text-text-light">Maya Devi University</strong>, Dehradun. I am passionate about <strong className="text-text-light">Cloud Computing</strong>, <strong className="text-text-light">DevOps</strong>, <strong className="text-text-light">Cyber Security</strong>, <strong className="text-text-light">Web Development</strong> and <strong className="text-text-light">SEO</strong>.
                </p>
                <p>
                  I enjoy learning how modern applications are built, deployed and secured. My technical journey includes web development, databases, cloud fundamentals, Linux, Git/GitHub, AWS and CI/CD technologies.
                </p>
                <p>
                  My long-term goal is to build a strong career in <strong className="text-text-light">Cloud Computing and DevOps</strong> while developing secure, scalable and high-performance applications.
                </p>
              </div>
            </Card>

            {/* Mission & Vision */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-accent-blue/10">
                    <Target className="w-6 h-6 text-accent-blue" />
                  </div>
                  <h4 className="text-xl font-bold text-text-light">My Mission</h4>
                </div>
                <p className="text-text-muted leading-relaxed">
                  {aboutData.mission}
                </p>
              </Card>

              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-accent-cyan/10">
                    <Eye className="w-6 h-6 text-accent-cyan" />
                  </div>
                  <h4 className="text-xl font-bold text-text-light">My Vision</h4>
                </div>
                <p className="text-text-muted leading-relaxed">
                  {aboutData.vision}
                </p>
              </Card>
            </div>

            {/* Strengths */}
            <Card className="p-6 lg:p-8">
              <h3 className="text-2xl font-bold font-display mb-6 gradient-text">
                My Strengths
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {aboutData.strengths.map((strength, i) => (
                  <motion.div
                    key={strength}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    <CheckCircle className="w-5 h-5 text-accent-green flex-shrink-0" />
                    <span className="text-text-light font-medium">{strength}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Focus Areas Sidebar */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl lg:text-2xl font-bold font-display gradient-text mb-6">
              Technology Focus
            </h3>
            <div className="space-y-4">
              {focusAreas.map((area, i) => (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="card-glass p-5 group"
                >
                  {(() => {
                    const FocusIcon = focusIcons[area.icon];
                    return (
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 rounded-xl bg-accent-blue/10 group-hover:bg-accent-blue/20 transition-colors">
                          <FocusIcon className="w-6 h-6 text-accent-blue" />
                        </div>
                        <h4 className="text-lg font-bold text-text-light">{area.title}</h4>
                      </div>
                    );
                  })()}
                  <div className="flex flex-wrap gap-2">
                    {area.technologies.map((tech) => (
                      <span
                        key={tech.name}
                        className={cn(
                          "badge",
                          levelBadges[tech.level] || "badge"
                        )}
                      >
                        {tech.name}
                        {tech.level !== "Intermediate" && (
                          <span className="ml-1 opacity-70">({tech.level})</span>
                        )}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Personal Statement Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="card-glass p-6 border-accent-blue/30"
            >
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-accent-cyan/10 flex-shrink-0 mt-0.5">
                  <Zap className="w-5 h-5 text-accent-cyan" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-text-light mb-2">Personal Statement</h4>
                  <p className="text-text-muted text-sm leading-relaxed italic">
                    "{personalInfo.personalStatement}"
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}