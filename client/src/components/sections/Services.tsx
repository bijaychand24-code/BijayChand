"use client";

import { motion } from "framer-motion";
import { Code, Cloud, Search, Cpu, BookOpen, Shield, Puzzle, Cloud as CloudIcon } from "lucide-react";
import { services, whyWorkWithMe } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";

const serviceIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Code,
  Cloud,
  Search,
  Cpu,
};

const whyIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  BookOpen,
  Shield,
  Cloud: CloudIcon,
  Puzzle,
};

export function Services() {
  return (
    <section
      id="services"
      className="section bg-gradient-radial"
      aria-labelledby="services-heading"
    >
      <div className="container-custom">
        <SectionHeading
          title="What I Do"
          subtitle="Services and areas where I can contribute and collaborate. Based on my current skills and learning journey."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 lg:mt-16">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card variant="glass" className="p-6 lg:p-8 h-full group group-hover:border-accent-blue/40 group-hover:shadow-glow-blue">
                <div className="p-3 rounded-2xl bg-accent-blue/10 w-fit mb-5 group-hover:bg-accent-blue/20 transition-colors">
                  {(() => {
                    const ServiceIcon = serviceIcons[service.icon];
                    return <ServiceIcon className="w-7 h-7 text-accent-blue" />;
                  })()}
                </div>
                <h3 className="text-lg lg:text-xl font-bold font-display text-text-light mb-3">
                  {service.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {service.description}
                </p>
              </Card>
            </motion.article>
          ))}
        </div>

        {/* Why Work With Me */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 lg:mt-24"
        >
          <div className="text-center mb-12 lg:mb-16">
            <h3 className="text-2xl lg:text-3xl font-bold font-display gradient-text mb-4">
              Why Work With Me
            </h3>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">
              Beyond technical skills, these are the qualities I bring to every project and collaboration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyWorkWithMe.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                <Card variant="glass" className="p-6 lg:p-8 h-full text-center group group-hover:border-accent-blue/40 group-hover:shadow-glow-blue">
                  <div className="p-3 rounded-2xl bg-accent-cyan/10 w-fit mx-auto mb-5 group-hover:bg-accent-cyan/20 transition-colors">
                    {(() => {
                      const WhyIcon = whyIcons[item.icon];
                      return <WhyIcon className="w-7 h-7 text-accent-cyan" />;
                    })()}
                  </div>
                  <h4 className="text-lg font-bold font-display text-text-light mb-3">
                    {item.title}
                  </h4>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}