import { motion } from "framer-motion";
import { useScrollProgress } from "@/hooks";

export function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-50 h-1 origin-left bg-gradient-to-r from-accent-blue via-accent-cyan to-accent-green"
      style={{ scaleX: progress }}
      aria-hidden="true"
    />
  );
}
