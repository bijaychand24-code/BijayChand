import { forwardRef, HTMLAttributes } from "react";
import { cn } from "@/utils/cn";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "glass" | "elevated";
  hover?: boolean;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", hover = true, children, ...props }, ref) => {
    const variants = {
      default: "bg-primary-secondary/50 backdrop-blur-xl border border-white/10 rounded-2xl transition-all duration-500 hover:border-accent-blue/30 hover:shadow-glass-hover",
      glass: "bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl transition-all duration-500 hover:border-accent-blue/30 hover:shadow-glass-hover hover:-translate-y-1",
      elevated: "bg-primary-secondary/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-glass transition-all duration-500 hover:shadow-glass-hover",
    };

    return (
      <div
        ref={ref}
        className={cn(
          variants[variant],
          hover && "hover:-translate-y-1",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";