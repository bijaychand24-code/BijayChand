"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink, Clock, CheckCircle, Loader2, Calendar } from "lucide-react";
import { certifications } from "@/data/portfolio";
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
          title="Certifications & Learning"
          subtitle="Certificates and credentials that demonstrate my commitment to continuous learning and professional growth."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12 lg:mt-16">
          {certifications.map((cert, index) => (
            <motion.article
              key={cert.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Card variant="glass" className="p-6 lg:p-8 h-full flex flex-col group-hover:border-accent-blue/40 group-hover:shadow-glow-blue relative overflow-hidden">
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <CertificationStatusBadge status={cert.status} />
                </div>

                {/* Icon */}
                <div className="p-3 rounded-2xl bg-accent-blue/10 w-fit mb-5 group-hover:bg-accent-blue/20 transition-colors">
                  <Award className="w-7 h-7 text-accent-blue" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg lg:text-xl font-bold font-display text-text-light mb-2 group-hover:text-accent-blue transition-colors">
                    {cert.name}
                  </h3>
                  <p className="text-text-muted text-sm mb-4 flex-1">
                    {cert.issuer}
                  </p>

                  {/* Meta Info */}
                  <div className="space-y-2 mb-5">
                    <div className="flex items-center gap-2 text-text-muted text-sm">
                      <Calendar className="w-4 h-4 flex-shrink-0" />
                      <span>{cert.date}</span>
                    </div>
                    {cert.credentialId && (
                      <div className="flex items-center gap-2 text-text-muted text-sm">
                        <Award className="w-4 h-4 flex-shrink-0" />
                        <span className="font-mono text-xs">{cert.credentialId}</span>
                      </div>
                    )}
                  </div>

                  {/* Action */}
                  <Button
                    variant={cert.link !== "#" ? "outline" : "ghost"}
                    size="sm"
                    className="w-full"
                    disabled={cert.link === "#"}
                    asChild
                  >
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn("flex items-center justify-center gap-2", cert.link === "#" && "pointer-events-none")}
                    >
                      {cert.link !== "#" ? (
                        <>
                          View Certificate
                          <ExternalLink className="w-4 h-4" />
                        </>
                      ) : (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Certificate Link Coming Soon
                        </>
                      )}
                    </a>
                  </Button>
                </div>
              </Card>
            </motion.article>
          ))}
        </div>

        {/* Add New Certification Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 lg:mt-16"
        >
          <Card variant="glass" className="p-8 lg:p-12 text-center border-dashed border-accent-blue/30">
            <div className="p-4 rounded-2xl bg-accent-blue/10 w-fit mx-auto mb-5">
              <Award className="w-8 h-8 text-accent-blue" />
            </div>
            <h3 className="text-xl lg:text-2xl font-bold font-display text-text-light mb-3">
              More Certifications Coming Soon
            </h3>
            <p className="text-text-muted mb-6 max-w-md mx-auto">
              Actively pursuing AWS certifications, cloud credentials, and specialized technical certifications to expand my expertise.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="badge badge-learning">AWS Solutions Architect</span>
              <span className="badge badge-learning">Docker Certified Associate</span>
              <span className="badge badge-learning">Kubernetes (CKA)</span>
              <span className="badge badge-learning">CompTIA Security+</span>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

function CertificationStatusBadge({ status }: { status: CertificationItem["status"] }) {
  const config = statusConfig[status];
  const Icon = config.icon;

  return (
    <span className={cn(
      "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium",
      config.bg,
      config.color,
      config.border
    )}>
      <Icon className="w-3 h-3" />
      {status}
    </span>
  );
}
