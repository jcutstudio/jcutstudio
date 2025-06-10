
import { Button } from "@/components/ui/button";
import { Play, ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToPortfolio = () => {
    const element = document.getElementById("portfolio");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/20 to-orange-900/20 animate-pulse" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-400/10 rounded-full blur-3xl animate-float-delayed" />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="block bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent animate-fade-in">
              Transforming Stories
            </span>
            <span className="block bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text text-transparent animate-fade-in-delayed">
              Into Cinematic Reality
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in-more-delayed">
            Certified Video Editor | Creative Storyteller | Cinematic Craftsman
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-most-delayed">
            <Button 
              onClick={scrollToPortfolio}
              className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Portfolio
            </Button>
            <Button 
              variant="outline" 
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105"
            >
              Let's Create Together
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto animate-fade-in-final">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400">100+</div>
              <div className="text-sm text-gray-400">Videos Edited</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400">15+</div>
              <div className="text-sm text-gray-400">Content Creators</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400">10+</div>
              <div className="text-sm text-gray-400">Food Vloggers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400">2+</div>
              <div className="text-sm text-gray-400">Wedding Clients</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
