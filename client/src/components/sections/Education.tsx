"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen, MapPin, Calendar } from "lucide-react";
import { education } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";

export function EducationSection() {
  return (
    <section
      id="education"
      className="section bg-gradient-radial"
      aria-labelledby="education-heading"
    >
      <div className="container-custom">
        <SectionHeading
          title="Education"
          subtitle="My academic background and relevant coursework in Cyber Security and Computer Applications."
          align="center"
        />

        <div className="max-w-3xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Card variant="glass" className="p-6 lg:p-8 relative overflow-hidden group">
                {/* Decorative Element */}
                <motion.div
                  className="absolute top-0 right-0 w-32 h-32 bg-gradient-primary/10 rounded-full blur-2xl translate-x-1/2 -translate-y-1/2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                />

                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6 relative z-10">
                  <div className="flex items-start gap-4">
                    <div className="p-4 rounded-2xl bg-accent-blue/10 flex-shrink-0">
                      <GraduationCap className="w-8 h-8 text-accent-blue" />
                    </div>
                    <div>
                      <h3 className="text-xl lg:text-2xl font-bold font-display text-text-light">
                        {edu.degree}
                      </h3>
                      <p className="text-text-muted mt-1">{edu.institution}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end sm:items-end text-right">
                    <span className="px-3 py-1.5 rounded-xl bg-accent-green/20 text-accent-green text-sm font-medium border border-accent-green/30">
                      {edu.currentSemester}
                    </span>
                    <p className="text-text-muted text-sm mt-1">
                      {edu.startYear} — {edu.endYear}
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-2 text-text-muted text-sm mb-6 relative z-10">
                  <MapPin className="w-4 h-4" />
                  <span>{edu.location}</span>
                </div>

                {/* Coursework */}
                <div className="relative z-10">
                  <h4 className="text-lg font-semibold text-text-light mb-4 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-accent-blue" />
                    Relevant Coursework
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course, i) => (
                      <motion.span
                        key={course}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.2 + i * 0.04 }}
                        className="px-3 py-1.5 rounded-xl bg-white/5 text-text-muted text-sm font-medium border border-white/10 hover:border-accent-blue/30 hover:text-accent-blue transition-colors group-hover:border-accent-blue/30 group-hover:text-accent-blue"
                      >
                        {course}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Status Indicator */}
                <div className="relative z-10 mt-6 pt-6 border-t border-white/10 flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-accent-green animate-pulse" />
                    <span className="text-sm font-medium text-accent-green">Currently Enrolled</span>
                  </div>
                  <div className="flex items-center gap-2 ml-auto text-text-muted text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>Expected Graduation: 2027</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}