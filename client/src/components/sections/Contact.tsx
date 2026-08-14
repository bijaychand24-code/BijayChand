"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Github, Linkedin, Send, CheckCircle, AlertCircle, MapPin } from "lucide-react";
import { contactInfo } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { toast } from "react-hot-toast";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(20, "Message must be at least 20 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus("success");
        toast.success("Message sent successfully! I'll get back to you soon.");
        reset();
      } else {
        throw new Error(result.error || "Failed to send message");
      }
    } catch (error) {
      setSubmitStatus("error");
      toast.error(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="section"
      aria-labelledby="contact-heading"
    >
      <div className="container-custom">
        <SectionHeading
          title="Let's Build Something Together"
          subtitle="Have a project, internship opportunity, collaboration idea or just want to connect? Feel free to reach out."
          align="center"
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mt-12 lg:mt-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <Card variant="glass" className="p-6 lg:p-8 h-full">
              <h3 className="text-xl lg:text-2xl font-bold font-display gradient-text mb-6">
                Get In Touch
              </h3>
              <p className="text-text-muted leading-relaxed mb-8">
                I'm always open to discussing new projects, internship opportunities, or just connecting with fellow developers. Don't hesitate to reach out!
              </p>

              <div className="space-y-6">
                <ContactInfoItem
                  icon={Mail}
                  label="Email"
                  value={contactInfo.email}
                  href={`mailto:${contactInfo.email}`}
                />
                <ContactInfoItem
                  icon={Github}
                  label="GitHub"
                  value="github.com/bijaychand24-code"
                  href={contactInfo.github}
                  external
                />
                <ContactInfoItem
                  icon={Linkedin}
                  label="LinkedIn"
                  value="linkedin.com/in/bijay-chand"
                  href={contactInfo.linkedin}
                  external
                />
                <ContactInfoItem
                  icon={MapPin}
                  label="Location"
                  value="Dehradun, Uttarakhand, India"
                />
              </div>
            </Card>

            {/* Social Links Card */}
            <Card variant="glass" className="p-6 lg:p-8">
              <h4 className="text-lg font-bold text-text-light mb-4">Connect With Me</h4>
              <div className="flex items-center gap-4">
                <a
                  href={contactInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 hover:border-accent-blue/30 hover:shadow-glow-blue group"
                  aria-label="GitHub"
                >
                  <Github className="w-6 h-6 text-text-muted group-hover:text-accent-blue transition-colors" />
                </a>
                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 hover:border-accent-blue/30 hover:shadow-glow-blue group"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6 text-text-muted group-hover:text-accent-blue transition-colors" />
                </a>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 hover:border-accent-blue/30 hover:shadow-glow-blue group"
                  aria-label="Email"
                >
                  <Mail className="w-6 h-6 text-text-muted group-hover:text-accent-blue transition-colors" />
                </a>
              </div>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card variant="glass" className="p-6 lg:p-8">
              <h3 className="text-xl lg:text-2xl font-bold font-display gradient-text mb-6">
                Send a Message
              </h3>

              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-6 p-4 rounded-xl bg-accent-green/10 border border-accent-green/30 flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-accent-green flex-shrink-0" />
                  <div>
                    <p className="font-medium text-accent-green">Message Sent!</p>
                    <p className="text-sm text-text-muted">Thanks for reaching out. I'll get back to you within 24-48 hours.</p>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                <div className="grid sm:grid-cols-2 gap-4">
                  <FormField
                    label="Name"
                    error={errors.name?.message}
                    icon={Mail}
                  >
                    <Input
                      {...register("name")}
                      placeholder="Your name"
                      aria-invalid={!!errors.name}
                    />
                  </FormField>

                  <FormField
                    label="Email"
                    error={errors.email?.message}
                    icon={Mail}
                  >
                    <Input
                      type="email"
                      {...register("email")}
                      placeholder="your@email.com"
                      aria-invalid={!!errors.email}
                    />
                  </FormField>
                </div>

                <FormField
                  label="Subject"
                  error={errors.subject?.message}
                  icon={Mail}
                >
                  <Input
                    {...register("subject")}
                    placeholder="Project inquiry, collaboration, etc."
                    aria-invalid={!!errors.subject}
                  />
                </FormField>

                <FormField
                  label="Message"
                  error={errors.message?.message}
                  icon={Mail}
                >
                  <Textarea
                    {...register("message")}
                    placeholder="Tell me about your project, opportunity, or just say hi..."
                    rows={5}
                    aria-invalid={!!errors.message}
                  />
                </FormField>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  isLoading={isSubmitting}
                  rightIcon={<Send className="w-5 h-5" />}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>

                <p className="text-center text-text-muted text-sm">
                  By submitting this form, you agree to my <a href="#" className="text-accent-blue hover:underline">Privacy Policy</a>
                </p>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactInfoItem({
  icon: Icon,
  label,
  value,
  href,
  external = false,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}) {
  return (
    <div className="flex items-start gap-4 group">
      <div className="p-3 rounded-xl bg-accent-blue/10 flex-shrink-0 group-hover:bg-accent-blue/20 transition-colors">
        <Icon className="w-5 h-5 text-accent-blue" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs font-medium text-text-muted uppercase tracking-wider mb-1">{label}</p>
        {href ? (
          <a
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            className="text-text-light hover:text-accent-blue transition-colors truncate block"
          >
            {value}
          </a>
        ) : (
          <p className="text-text-light">{value}</p>
        )}
      </div>
    </div>
  );
}

function FormField({
  label,
  error,
  icon: Icon,
  children,
}: {
  label: string;
  error?: string;
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      <label className="label flex items-center gap-2">
        <Icon className="text-text-muted" />
        {label}
      </label>
      <div className="relative">
        {children}
        {error && (
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute bottom-full left-0 mb-1 text-xs text-accent-blue/80 flex items-center gap-1"
          >
            <AlertCircle className="w-3 h-3" />
            {error}
          </motion.span>
        )}
      </div>
    </div>
  );
}