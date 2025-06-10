
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, CheckCircle, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!form.current) return;

    setIsLoading(true);
    console.log("Sending email via EmailJS...");

    try {
      const result = await emailjs.sendForm(
        'service_s7ez6ik', // Your EmailJS service ID
        'template_contact', // You'll need to create a template with this ID in EmailJS
        form.current,
        'LNVt0yzjNtQZoVvK-' // Your EmailJS public key
      );

      console.log("Email sent successfully:", result.text);
      
      setIsSubmitted(true);
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you within 24 hours!",
      });

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({ user_name: "", user_email: "", message: "" });
        setIsSubmitted(false);
      }, 3000);

    } catch (error) {
      console.error("Failed to send email:", error);
      toast({
        title: "Failed to Send Message",
        description: "Please try again or contact me directly at bhushieth@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "bhushieth@gmail.com",
      href: "mailto:bhushieth@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 6383973839",
      href: "tel:+916383973839"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bangalore, India",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text text-transparent">
              Let's Create Together
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to bring your vision to life? Get in touch and let's discuss your next video project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-white/5 backdrop-blur-sm border-white/10">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-white mb-2">Message Sent!</h4>
                  <p className="text-gray-400">Thank you for reaching out. I'll get back to you within 24 hours!</p>
                </div>
              ) : (
                <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      name="user_name"
                      placeholder="Your Name"
                      value={formData.user_name}
                      onChange={handleChange}
                      required
                      disabled={isLoading}
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-cyan-400"
                    />
                  </div>
                  
                  <div>
                    <Input
                      name="user_email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.user_email}
                      onChange={handleChange}
                      required
                      disabled={isLoading}
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-cyan-400"
                    />
                  </div>
                  
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Tell me about your project..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      disabled={isLoading}
                      rows={6}
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-cyan-400 resize-none"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-cyan-500 to-orange-500 hover:from-cyan-600 hover:to-orange-600 text-white py-6 text-lg rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                I'm always excited to work on new projects and collaborate with creative minds. 
                Whether you need a cinematic documentary, engaging social media content, or 
                professional event coverage, let's discuss how we can bring your vision to life.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card
                    key={index}
                    className="bg-white/5 backdrop-blur-sm border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105"
                  >
                    <CardContent className="p-6">
                      <a
                        href={info.href}
                        className="flex items-center gap-4 text-white hover:text-cyan-400 transition-colors"
                      >
                        <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-orange-500 rounded-lg flex items-center justify-center">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="text-sm text-gray-400">{info.label}</div>
                          <div className="text-lg font-medium">{info.value}</div>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Setup Instructions Card */}
            <Card className="bg-gradient-to-r from-green-500/10 to-blue-500/10 backdrop-blur-sm border-green-400/20">
              <CardContent className="p-6">
                <h4 className="text-lg font-bold text-white mb-2">
                  ✅ EmailJS Setup Complete!
                </h4>
                <p className="text-gray-400 text-sm mb-4">
                  Your contact form is now configured. Make sure to create an email template with ID "template_contact" in your EmailJS dashboard.
                </p>
                <div className="text-xs text-gray-500 space-y-1">
                  <p>• Service ID: service_s7ez6ik ✓</p>
                  <p>• Public Key: Configured ✓</p>
                  <p>• Next: Create email template in EmailJS dashboard</p>
                </div>
              </CardContent>
            </Card>

            {/* CTA Section */}
            <Card className="bg-gradient-to-r from-cyan-500/10 to-orange-500/10 backdrop-blur-sm border-cyan-400/20">
              <CardContent className="p-6 text-center">
                <h4 className="text-lg font-bold text-white mb-2">
                  Ready to Start Your Project?
                </h4>
                <p className="text-gray-400 text-sm mb-4">
                  Let's discuss your vision and create something amazing together.
                </p>
                <Button
                  variant="outline"
                  className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300"
                  onClick={() => window.open("mailto:bhushieth@gmail.com", "_blank")}
                >
                  Email Me Directly
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
