"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink, Clock, CheckCircle, Loader2, Calendar, ArrowRight } from "lucide-react";
import { awsJourneyPosts, certifications } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { cn } from "@/utils/cn";

type CertificationItem = (typeof certifications)[number];

const statusConfig: Record<CertificationItem["status"], { icon: React.ComponentType<{ className?: string }>; color: string; bg: string; border: string }> = {
  Completed: { icon: CheckCircle, color: "text-accent-green", bg: "bg-accent-green/20", border: "border-accent-green/30" },
  "In Progress": { icon: Loader2, color: "text-accent-sky", bg: "bg-accent-sky/20", border: "border-accent-sky/30" },
  Planned: { icon: Clock, color: "text-accent-blue", bg: "bg-accent-blue/20", border: "border-accent-blue/30" },
};

export function Certifications() {
  return (
    <section
      id="certifications"
      className="section"
      aria-labelledby="certifications-heading"
    >
      <div className="container-custom">
        <SectionHeading
          title="Certifications & Roadmap"
          subtitle="Certificates, active learning goals, and the cloud certifications I’m pursuing to advance my engineering path."
          align="center"
        />

        <div className="relative mt-12 lg:mt-16">
          <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-accent-blue/70 via-accent-cyan/60 to-transparent md:left-1/2" />
          <div className="space-y-8">
            {certifications.map((cert, index) => (
              <motion.article
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="grid gap-6 md:grid-cols-2 md:items-center">
                  <div className={cn(index % 2 === 0 ? "md:pr-12 md:text-right" : "md:col-start-2 md:pl-12")}>
                    <Card variant="glass" className="p-6">
                      <div className={cn("mb-4 flex items-center gap-3", index % 2 === 0 ? "md:justify-end" : "") }>
                        <CertificationStatusBadge status={cert.status} />
                      </div>
                      <h3 className="text-xl font-bold font-display text-text-light">{cert.name}</h3>
                      <p className="mt-2 text-sm text-text-muted">{cert.issuer}</p>
                      <div className={cn("mt-4 flex items-center gap-2 text-sm text-text-muted", index % 2 === 0 ? "md:justify-end" : "") }>
                        <Calendar className="h-4 w-4" />
                        <span>{cert.date}</span>
                      </div>
                    </Card>
                  </div>

                  <div className="absolute left-3 top-1/2 flex h-5 w-5 -translate-y-1/2 items-center justify-center rounded-full border border-accent-blue/60 bg-primary md:left-1/2 md:-translate-x-1/2">
                    <div className="h-2.5 w-2.5 rounded-full bg-accent-blue" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16"
        >
          <Card variant="glass" className="border-dashed border-accent-blue/30 p-8 lg:p-12">
            <div className="mb-5 flex w-fit items-center justify-center rounded-2xl bg-accent-blue/10 p-4">
              <Award className="h-8 w-8 text-accent-blue" />
            </div>
            <h3 className="text-xl font-bold font-display text-text-light lg:text-2xl">Roadmap Ahead</h3>
            <p className="mt-3 max-w-2xl text-text-muted">
              I’m actively strengthening my AWS, Kubernetes, and Terraform fundamentals while continuing to build secure, cloud-first solutions.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="badge badge-learning">AWS Solutions Architect</span>
              <span className="badge badge-learning">Certified Kubernetes Administrator</span>
              <span className="badge badge-learning">Terraform Associate</span>
            </div>
          </Card>
        </motion.div>

        <motion.div
          id="journal"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20"
        >
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-accent-blue">Learning Journal</p>
              <h3 className="mt-2 text-3xl font-bold font-display text-text-light">My AWS Journey</h3>
            </div>
            <Button variant="outline" size="sm" asChild>
              <a href="https://www.linkedin.com/in/bijay-chand" target="_blank" rel="noopener noreferrer">
                View All on LinkedIn
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {awsJourneyPosts.map((post, index) => (
              <motion.a
                key={post.title}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group block h-full"
              >
                <Card variant="glass" className="h-full p-5 transition-all duration-300 group-hover:border-accent-blue/40 group-hover:shadow-glow-blue">
                  <span className="mb-4 inline-flex rounded-full bg-accent-blue/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-accent-blue">
                    {post.tag}
                  </span>
                  <h4 className="text-lg font-bold text-text-light">{post.title}</h4>
                  <p className="mt-3 text-sm leading-relaxed text-text-muted">{post.description}</p>
                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-accent-sky">
                    Read more
                    <ExternalLink className="h-4 w-4" />
                  </div>
                </Card>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CertificationStatusBadge({ status }: { status: CertificationItem["status"] }) {
  const config = statusConfig[status];
  const Icon = config.icon;

  return (
    <span className={cn("inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium", config.bg, config.color, config.border)}>
      <Icon className="h-3 w-3" />
      {status}
    </span>
  );
}
