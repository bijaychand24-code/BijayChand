"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import Typewriter from "typewriter-effect";
import { personalInfo, heroRoles, stats } from "@/data/portfolio";
import { Button } from "@/components/ui/Button";
import { cn } from "@/utils/cn";

function TypingSpan({ className, children }: { className?: string; children?: React.ReactNode }) {
  return <span className={cn("gradient-text font-semibold min-w-[180px] inline-block", className)}>{children}</span>;
}


export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 lg:pt-20"
      aria-labelledby="hero-heading"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient Orb */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-primary/20 blur-3xl"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{ filter: "blur(120px)" }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-accent-cyan/10 blur-3xl"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
          style={{ filter: "blur(120px)" }}
        />
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z' fill='%232563EB' fill-opacity='0.1'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "60px 60px",
        }} />
        {/* Floating Particles */}
        <FloatingParticles />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="max-w-2xl">
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-accent-blue text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                BCA Cyber Security Student
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              id="hero-heading"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-display tracking-tight leading-tight mb-6"
            >
              Hi, I'm <span className="gradient-text">Bijay Chand.</span>
            </motion.h1>

            {/* Sub Heading */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="text-xl sm:text-2xl lg:text-3xl font-medium text-text-muted mb-8 max-w-xl"
            >
              Building the Future with Cloud, Code & Security.
            </motion.p>

            {/* Animated Typing Roles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className="mb-8 min-h-[60px]"
            >
              <div className="flex flex-wrap items-center gap-2 text-lg sm:text-xl">
                <span className="text-text-muted">I build with</span>
                <Typewriter
                  component={TypingSpan}
                  options={{
                    strings: heroRoles,
                    autoStart: true,
                    loop: true,
                    delay: 75,
                    deleteSpeed: 50,
                  }}
                />
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              className="text-text-muted text-lg leading-relaxed mb-10 max-w-xl"
            >
              {personalInfo.shortBio}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
              className="flex flex-wrap items-center gap-4 mb-12"
            >
              <Button
                variant="primary"
                size="lg"
                rightIcon={<ArrowRight className="w-5 h-5" />}
                asChild
              >
                <a href="#projects">View My Work</a>
              </Button>
              <Button
                variant="secondary"
                size="lg"
                asChild
              >
                <a href="/Bijay_Chand_Resume.pdf" download="Bijay_Chand_Resume.pdf">
                  <Download className="w-5 h-5" />
                  Download Resume
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
              >
                <a href="#contact">Let's Connect</a>
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
              className="flex items-center gap-6"
            >
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 hover:border-accent-blue/30 hover:shadow-glow-blue group"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-text-muted group-hover:text-accent-blue transition-colors" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 hover:border-accent-blue/30 hover:shadow-glow-blue group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-text-muted group-hover:text-accent-blue transition-colors" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 hover:border-accent-blue/30 hover:shadow-glow-blue group"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-text-muted group-hover:text-accent-blue transition-colors" />
              </a>
            </motion.div>
          </div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="relative"
          >
            <CloudInfrastructureVisual />
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
          className="mt-20 lg:mt-24"
        >
          <Stats />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-accent-blue rounded-full animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
}

function CloudInfrastructureVisual() {
  const technologies = [
    "Cloud Computing",
    "AWS",
    "Docker",
    "DevOps",
    "Git & GitHub",
    "Linux",
    "CI/CD",
  ];

  return (
    <div className="relative w-full aspect-square max-w-3xl mx-auto flex items-center justify-center">
      {/* SVG for connecting lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 600 600"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Lines from tech items to center profile */}
        <line x1="150" y1="80" x2="400" y2="300" stroke="currentColor" strokeWidth="2" className="text-text-muted/20" />
        <line x1="120" y1="150" x2="400" y2="280" stroke="currentColor" strokeWidth="2" className="text-text-muted/20" />
        <line x1="100" y1="240" x2="400" y2="300" stroke="currentColor" strokeWidth="2" className="text-text-muted/20" />
        <line x1="120" y1="330" x2="400" y2="320" stroke="currentColor" strokeWidth="2" className="text-text-muted/20" />
        <line x1="150" y1="410" x2="400" y2="340" stroke="currentColor" strokeWidth="2" className="text-text-muted/20" />
        <line x1="200" y1="470" x2="410" y2="360" stroke="currentColor" strokeWidth="2" className="text-text-muted/20" />
        <line x1="280" y1="510" x2="420" y2="380" stroke="currentColor" strokeWidth="2" className="text-text-muted/20" />
      </svg>

      {/* Tech Items on left side */}
      <div className="absolute left-0 top-0 w-1/2 h-full flex flex-col justify-around py-12">
        {technologies.map((tech, i) => (
          <motion.div
            key={tech}
            className="flex items-center gap-3 text-lg sm:text-xl font-semibold text-text-primary"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 * i, ease: "easeOut" }}
          >
            <span className="text-2xl">
              {tech === "Cloud Computing" && "☁️"}
              {tech === "AWS" && "🔶"}
              {tech === "Docker" && "🐳"}
              {tech === "DevOps" && "♾️"}
              {tech === "Git & GitHub" && "🐙"}
              {tech === "Linux" && "🐧"}
              {tech === "CI/CD" && "⚙️"}
            </span>
            <span>{tech}</span>
          </motion.div>
        ))}
      </div>

      {/* Oval Profile Photo on right */}
      <motion.div
        className="absolute right-0 w-1/2 h-full flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <motion.div
          className="w-64 h-64 rounded-full bg-gradient-primary/20 border-2 border-accent-blue/30 overflow-hidden backdrop-blur-xl shadow-glow-blue"
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <img
            src="/bijay-prof.jpeg"
            alt="Bijay Chand"
            className="w-full h-full object-cover object-top"
          />
          <motion.span
            className="absolute -inset-2 rounded-full border border-accent-cyan/30 pointer-events-none"
            animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

function FloatingParticles() {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5,
    opacity: Math.random() * 0.5 + 0.1,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-accent-cyan"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
          }}
          animate={{
            x: [0, (Math.random() - 0.5) * 100, 0],
            y: [0, (Math.random() - 0.5) * 100, 0],
            opacity: [p.opacity, p.opacity * 2, p.opacity],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
        />
      ))}
    </div>
  );
}

function Stats() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          className="card-glass p-6 lg:p-8 text-center group"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 * i, ease: "easeOut" }}
          whileHover={{ y: -4 }}
        >
          <div className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display gradient-text mb-2">
            {stat.value}
          </div>
          <div className="text-text-muted text-sm sm:text-base font-medium">
            {stat.label}
          </div>
          <motion.div
            className="mt-4 h-px bg-gradient-primary w-0"
            initial={{ width: 0 }}
            animate={{ width: "60px" }}
            transition={{ duration: 0.8, delay: 0.5 + i * 0.1 }}
          />
        </motion.div>
      ))}
    </div>
  );
}