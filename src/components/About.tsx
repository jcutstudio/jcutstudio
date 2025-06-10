
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Briefcase, Award, Heart } from "lucide-react";

const About = () => {
  const skills = [
    "Adobe Premiere Pro", "After Effects", "DaVinci Resolve", "Adobe Audition",
    "Cinema 4D", "Photoshop", "Illustrator", "Motion Graphics",
    "Color Grading", "Audio Mixing", "3D Animation", "VFX Compositing"
  ];

  const experience = [
    {
      period: "2024 - Present",
      title: "Freelance Video Editor",
      description: "100+ videos edited for content creators, food vloggers, and wedding clients",
      icon: Briefcase
    },
    {
      period: "2024",
      title: "Film Studio Experience",
      description: "2 months hands-on experience in professional film production environment",
      icon: Award
    },
    {
      period: "2021 - 2025",
      title: "B.Tech in Engineering",
      description: "Vemana Institute of Technology, Bangalore",
      icon: GraduationCap
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent">
              About Bhushieth
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Passionate storyteller and certified video editor transforming creative visions into compelling visual narratives.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Personal Story */}
          <div className="space-y-8">
            <Card className="bg-white/5 backdrop-blur-sm border-white/10">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Heart className="w-6 h-6 text-orange-400" />
                  <h3 className="text-2xl font-bold text-white">My Journey</h3>
                </div>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    My journey into video editing started with a genuine passion for storytelling. 
                    What began as a curiosity about how films and videos come together has evolved 
                    into a dedicated craft that I pursue with enthusiasm every day.
                  </p>
                  <p>
                    As a certified video editor and the founder of <span className="text-cyan-400 font-semibold">JCut Studio</span>, 
                    I specialize in creating cinematic content that resonates with audiences. From 
                    documentary-style narratives to high-energy social media content, I bring technical 
                    expertise and creative vision to every project.
                  </p>
                  <p>
                    Based in Bangalore and currently pursuing my B.Tech degree, I balance academic 
                    pursuits with my passion for video creation, having already collaborated with 
                    numerous content creators and delivered exceptional results across diverse projects.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Skills Grid */}
            <Card className="bg-white/5 backdrop-blur-sm border-white/10">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Technical Expertise</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {skills.map((skill, index) => (
                    <Badge
                      key={skill}
                      className="bg-gradient-to-r from-cyan-500/20 to-orange-500/20 text-white border-white/20 justify-center py-2 hover:from-cyan-500/30 hover:to-orange-500/30 transition-all duration-300"
                      style={{
                        animationDelay: `${index * 50}ms`,
                        animation: "fadeInUp 0.6s ease-out forwards"
                      }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-8 text-center lg:text-left">
              Experience & Education
            </h3>
            
            {experience.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105"
                  style={{
                    animationDelay: `${index * 200}ms`,
                    animation: "fadeInRight 0.6s ease-out forwards"
                  }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-cyan-400 font-medium mb-1">
                          {item.period}
                        </div>
                        <h4 className="text-lg font-bold text-white mb-2">
                          {item.title}
                        </h4>
                        <p className="text-gray-400 text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            {/* Stats Card */}
            <Card className="bg-gradient-to-r from-cyan-500/10 to-orange-500/10 backdrop-blur-sm border-cyan-400/20">
              <CardContent className="p-6">
                <h4 className="text-lg font-bold text-white mb-4 text-center">
                  Project Statistics
                </h4>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-cyan-400">100+</div>
                    <div className="text-sm text-gray-400">Videos Completed</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-orange-400">27+</div>
                    <div className="text-sm text-gray-400">Happy Clients</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
