import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sun, Moon, Download, Briefcase } from "lucide-react";
import { navLinks } from "@/data/portfolio";
import { useTheme } from "@/context/ThemeContext";
import { cn } from "@/utils/cn";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => setIsMobileMenuOpen(false);

  return (
    <nav
      className={cn(
        "glass-nav",
        isScrolled && "bg-primary/95 shadow-glass"
      )}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="#home" className="flex items-center gap-2" aria-label="Bijay Chand - Home">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-accent-blue/30 shadow-glow-blue">
              <img
                src="/bijay-prof.jpeg"
                alt="Bijay Chand"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <span className="hidden sm:block text-sm font-medium text-text-muted">Bijay Chand</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "nav-link",
                  location.hash === link.href || location.pathname === link.href ? "nav-link-active" : ""
                )}
                onClick={handleNavClick}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-text-muted hover:text-text-light"
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Resume Button */}
            <a
              href="/Bijay_Chand_Resume.pdf"
              download="Bijay_Chand_Resume.pdf"
              className="hidden sm:flex items-center gap-2"
            >
              <Button variant="secondary" size="sm" leftIcon={<Download className="w-4 h-4" />}>
                Resume
              </Button>
            </a>

            {/* Hire Me Button */}
            <a
              href="#contact"
              className="hidden sm:flex"
              onClick={handleNavClick}
            >
              <Button variant="primary" size="sm" leftIcon={<Briefcase className="w-4 h-4" />}>
                Hire Me
              </Button>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/10 animate-slide-down">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    "px-3 py-2 rounded-xl text-sm font-medium transition-colors",
                    location.hash === link.href ? "bg-accent-blue/10 text-accent-blue" : "text-text-muted hover:text-text-light hover:bg-white/5"
                  )}
                  onClick={handleNavClick}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-2 pt-2 border-t border-white/10">
                <a
                  href="/Bijay_Chand_Resume.pdf"
                  download="Bijay_Chand_Resume.pdf"
                  className="flex items-center justify-center gap-2"
                >
                  <Button variant="secondary" size="sm" className="w-full" leftIcon={<Download className="w-4 h-4" />}>
                    Download Resume
                  </Button>
                </a>
                <a href="#contact" onClick={handleNavClick} className="flex">
                  <Button variant="primary" size="sm" className="w-full" leftIcon={<Briefcase className="w-4 h-4" />}>
                    Hire Me
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}