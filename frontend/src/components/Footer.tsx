import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main footer content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand section */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Venkata Lokesh Galidevara</h3>
              <p className="text-background/80 leading-relaxed mb-4">
                Creating exceptional digital experiences with modern technologies 
                and a passion for clean, efficient code.
              </p>
              <div className="flex gap-4">
                    {[
                      {
                        icon: Github,
                        href: "https://github.com/GALIDEVARA05",
                        label: "GitHub"
                      },
                      {
                        icon: Linkedin,
                        href: "https://www.linkedin.com/in/venkata-lokesh-galidevara-567a15292/",
                        label: "LinkedIn"
                      },
                      {
                        icon: Mail,
                        href: "mailto:galidevaravenkatalokesh05@gmail.com",
                        label: "Email"
                      }
                    ].map(({ icon: Icon, href, label }) => (
                      <a
                        key={label}
                        href={href}
                        className="p-2 rounded-full border border-background/20 hover:border-background/40 hover:bg-background/10 transition-all duration-300"
                        aria-label={label}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icon className="h-5 w-5" />
                      </a>
                    ))}
              </div>

            </div>

            {/* Quick links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {[
                  { label: "About", href: "#about" },
                  { label: "Skills", href: "#skills" },
                  { label: "Projects", href: "#projects" },
                  { label: "Contact", href: "#contact" }
                ].map(({ label, href }) => (
                  <li key={label}>
                    <a 
                      href={href}
                      className="text-background/80 hover:text-background transition-colors duration-300"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-background/80">
                <li>Web Development</li>
                <li>Mobile Applications</li>
                <li>UI/UX Design</li>
                <li>Consultation</li>
              </ul>
            </div>
          </div>

          {/* Bottom section */}
          <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-background/80 text-sm mb-4 md:mb-0">
              © {currentYear} Venkata Lokesh Galidevara. All rights reserved.
            </p>
            <p className="text-background/80 text-sm flex items-center">
              A portfolio of ideas turned into impact.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;