
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import Contact from "@/components/Contact";
import { Film } from "lucide-react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observerOptions = {
      threshold: 0.6,
      rootMargin: "-10% 0px -10% 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <Header activeSection={activeSection} />
      
      <main className="relative z-10">
        <Hero />
        <Portfolio />
        <About />
        <Contact />
      </main>

      {/* Floating Elements */}
      <div className="fixed top-1/4 left-10 opacity-20 animate-pulse hidden lg:block">
        <Film size={40} className="text-cyan-400" />
      </div>
      <div className="fixed bottom-1/4 right-10 opacity-20 animate-pulse hidden lg:block">
        <Film size={32} className="text-orange-400" />
      </div>
    </div>
  );
};

export default Index;
