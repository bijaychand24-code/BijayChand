import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({ title, subtitle, align = "left", className }: SectionHeadingProps) {
  const alignClasses = {
    left: "text-left items-start",
    center: "text-center items-center",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={cn("flex flex-col gap-3", alignClasses[align], className)}
    >
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display tracking-tight gradient-text">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg sm:text-xl text-text-muted max-w-2xl">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}