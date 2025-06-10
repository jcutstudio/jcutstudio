
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, ExternalLink } from "lucide-react";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = [
    { id: "all", label: "All Work" },
    { id: "reels", label: "Short-form Reels" },
    { id: "documentary", label: "Documentary" },
    { id: "podcast", label: "Podcasts" },
    { id: "wedding", label: "Weddings" },
    { id: "food", label: "Food Vlogs" },
  ];

  const projects = [
    {
      id: 1,
      title: "Travel Documentary Edit",
      category: "documentary",
      thumbnail: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop",
      description: "Cinematic travel documentary showcasing the beauty of nature with smooth transitions and color grading.",
      tools: ["After Effects", "Premiere Pro", "DaVinci Resolve"],
      duration: "8:45"
    },
    {
      id: 2,
      title: "Food Vlog Series",
      category: "food",
      thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop",
      description: "Mouth-watering food content with dynamic cuts, close-up shots, and appetizing color correction.",
      tools: ["Premiere Pro", "After Effects"],
      duration: "12:30"
    },
    {
      id: 3,
      title: "Instagram Reels Collection",
      category: "reels",
      thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      description: "High-energy short-form content with 3D transitions, motion graphics, and trending effects.",
      tools: ["After Effects", "Premiere Pro"],
      duration: "0:30"
    },
    {
      id: 4,
      title: "Wedding Highlight Reel",
      category: "wedding",
      thumbnail: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      description: "Emotional wedding story with cinematic color grading and beautiful audio synchronization.",
      tools: ["Premiere Pro", "DaVinci Resolve"],
      duration: "4:15"
    },
    {
      id: 5,
      title: "Tech Podcast Edit",
      category: "podcast",
      thumbnail: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop",
      description: "Professional podcast editing with multi-camera angles, graphics, and audio enhancement.",
      tools: ["Premiere Pro", "Audition"],
      duration: "45:20"
    },
    {
      id: 6,
      title: "Brand Commercial",
      category: "reels",
      thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop",
      description: "High-impact commercial with motion graphics, brand integration, and call-to-action elements.",
      tools: ["After Effects", "Premiere Pro", "Cinema 4D"],
      duration: "1:30"
    },
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text text-transparent">
              Portfolio Showcase
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore my diverse range of video editing projects, from cinematic documentaries to viral social media content.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              variant={activeFilter === category.id ? "default" : "outline"}
              className={`rounded-full transition-all duration-300 ${
                activeFilter === category.id
                  ? "bg-gradient-to-r from-cyan-500 to-orange-500 text-white"
                  : "border-white/30 text-white hover:bg-white/10"
              }`}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-400/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: "fadeInUp 0.6s ease-out forwards"
              }}
            >
              {/* Thumbnail */}
              <div className="relative overflow-hidden">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                    <Play className="w-6 h-6 text-white ml-1" />
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute top-4 right-4">
                  <Badge className="bg-black/50 text-white border-white/20">
                    {project.duration}
                  </Badge>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tools */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tools.map((tool) => (
                    <Badge
                      key={tool}
                      variant="secondary"
                      className="bg-white/10 text-white border-white/20 text-xs"
                    >
                      {tool}
                    </Badge>
                  ))}
                </div>

                {/* Action Button */}
                <Button
                  variant="ghost"
                  className="w-full text-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-300 transition-all duration-300"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Project
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-300 mb-6">Ready to bring your vision to life?</p>
          <Button 
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25"
          >
            Start Your Project
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
