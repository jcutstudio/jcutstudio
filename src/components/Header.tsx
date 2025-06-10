
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Film } from "lucide-react";

interface HeaderProps {
  activeSection: string;
}

const Header = ({ activeSection }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "portfolio", label: "Portfolio" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection("home")}>
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-orange-400 rounded-lg flex items-center justify-center">
              <Film className="w-6 h-6 text-black" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text text-transparent">
                JCut Studio
              </h1>
              <p className="text-xs text-gray-400">Bhushieth</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-all duration-300 hover:text-cyan-400 ${
                  activeSection === item.id 
                    ? "text-cyan-400 border-b border-cyan-400 pb-1" 
                    : "text-gray-300"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-white hover:text-cyan-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-white/10 pt-4">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left text-sm font-medium transition-all duration-300 hover:text-cyan-400 ${
                    activeSection === item.id ? "text-cyan-400" : "text-gray-300"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
