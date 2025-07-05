import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Settings } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { name: "Accueil", href: "#hero" },
  { name: "Créations", href: "#videos" },
  { name: "Compétences", href: "#skills" },
  { name: "Réseaux", href: "#social" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-xl border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo - iJerce style */}
          <Link
            to="/"
            className="text-xl font-bold text-foreground hover:text-primary transition-colors duration-200"
          >
            NaCoSpy
          </Link>

          {/* Desktop Navigation - iJerce style */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {item.name}
              </button>
            ))}

            {/* Admin Link */}
            <Link to="/admin">
              <Button
                size="sm"
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg font-medium"
              >
                <Settings className="mr-2 h-4 w-4" />
                Admin
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border slide-in-left">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left text-muted-foreground hover:text-primary transition-colors duration-300 py-2"
                >
                  {item.name}
                </button>
              ))}
              <Link to="/admin" className="block pt-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-purple-500 text-purple-400 hover:bg-purple-500/10 transition-all duration-300"
                >
                  <Settings className="mr-2 h-4 w-4" />
                  Admin
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
