import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { personalInfo, contactInfo } from "@/data/portfolio";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#education", label: "Education" },
    { href: "#certifications", label: "Certifications" },
    { href: "#journal", label: "Learning Journal" },
    { href: "#services", label: "What I Do" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary-secondary/50 border-t border-white/10" role="contentinfo">
      <div className="container-custom py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <a
              href="#home"
              className="flex items-center gap-2 mb-4"
              aria-label="Bijay Chand - Home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#home");
              }}
            >
              <div className="w-10 h-10 rounded-full overflow-hidden border border-accent-blue/30 shadow-glow-blue flex-shrink-0">
                <img
                  src="/bijay-prof.jpeg"
                  alt="Bijay Chand"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <span className="text-sm font-medium text-text-muted">Bijay Chand</span>
            </a>
            <p className="text-text-muted text-sm leading-relaxed mb-6 max-w-xs">
              {personalInfo.personalStatement}
            </p>
            <div className="flex items-center gap-4">
              <a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-text-muted hover:text-text-light"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-text-muted hover:text-text-light"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-text-muted hover:text-text-light"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="lg:col-span-1" aria-label="Footer navigation">
            <h3 className="font-semibold text-text-light mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-text-muted hover:text-text-light transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold text-text-light mb-4">Get In Touch</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3 text-text-muted">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="hover:text-text-light transition-colors"
                >
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-text-muted">
                <Github className="w-5 h-5 flex-shrink-0" />
                <a
                  href={contactInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-text-light transition-colors"
                >
                  github.com/bijaychand24-code
                </a>
              </li>
              <li className="flex items-center gap-3 text-text-muted">
                <Linkedin className="w-5 h-5 flex-shrink-0" />
                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-text-light transition-colors"
                >
                  linkedin.com/in/bijay-chand
                </a>
              </li>
            </ul>
          </div>

          {/* CTA Section */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold text-text-light mb-4">Let's Collaborate</h3>
            <p className="text-text-muted text-sm mb-6">
              Open to internship opportunities, freelance projects, and collaborations in Cloud, DevOps, and Web Development.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-accent-blue hover:text-accent-sky transition-colors font-medium text-sm"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#contact");
              }}
            >
              Get in touch
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-text-muted">
            © {currentYear} Bijay Chand. All Rights Reserved.
          </p>
          <p className="text-sm text-text-muted">
            Built with React, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}