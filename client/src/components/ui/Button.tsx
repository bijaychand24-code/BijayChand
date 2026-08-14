import { cloneElement, forwardRef, isValidElement, type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/utils/cn";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading,
      leftIcon,
      rightIcon,
      asChild = false,
      children,
      disabled,
      type = "button",
      ...props
    },
    ref
  ) => {
    const baseStyles = "inline-flex items-center justify-center gap-2 font-medium rounded-xl transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-primary disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
      primary: "bg-gradient-primary text-white hover:shadow-glow-blue hover:-translate-y-0.5",
      secondary: "bg-white/5 text-text-light border border-white/10 hover:bg-white/10 hover:border-white/20 hover:-translate-y-0.5",
      outline: "bg-transparent border-2 border-accent-blue text-accent-blue hover:bg-accent-blue/10 hover:-translate-y-0.5",
      ghost: "bg-transparent text-text-muted hover:text-text-light hover:bg-white/5",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    const spinner = (
      <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" aria-hidden="true">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
      </svg>
    );

    if (asChild && isValidElement(children)) {
      const childProps = children.props as { className?: string; children?: ReactNode };
      const childContent = (
        <>
          {isLoading ? spinner : leftIcon}
          {childProps.children}
          {!isLoading && rightIcon}
        </>
      );

      return cloneElement(
        children,
        {
          className: cn(baseStyles, variants[variant], sizes[size], className, childProps.className),
          ...props,
          "aria-disabled": disabled || isLoading ? true : undefined,
        },
        childContent
      );
    }

    const content = (
      <>
        {isLoading ? spinner : leftIcon}
        {children}
        {!isLoading && rightIcon}
      </>
    );

    return (
      <button
        ref={ref}
        type={type}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        disabled={disabled || isLoading}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";