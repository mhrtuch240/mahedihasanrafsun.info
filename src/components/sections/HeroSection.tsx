import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  onScrollToAbout: () => void;
}

export const HeroSection = ({ onScrollToAbout }: HeroSectionProps) => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
        {/* Main Title */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-orbitron font-black">
            <span className="text-hero text-glow block">MAHEDI HASAN</span>
            <span className="text-hero text-glow block">RAFSUN</span>
          </h1>
          
          <div className="space-y-2">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-inter font-light text-foreground">
              Web Developer & Prompt Engineer
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Crafting innovative digital solutions with modern web technologies and AI-powered prompts
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            onClick={onScrollToAbout}
            className="glass-strong px-8 py-3 text-lg font-medium hover-glow"
            variant="default"
          >
            Explore My Work
          </Button>
          
          <Button 
            onClick={() => {
              const element = document.getElementById('contact');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="glass px-8 py-3 text-lg font-medium hover-glow"
            variant="outline"
          >
            Get In Touch
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6">
          <a
            href="mailto:developer.mahedihasanrafsun@gmail.com"
            className="glass p-3 rounded-full hover-glow transition-all duration-300"
            aria-label="Email"
          >
            <Mail size={24} className="text-primary" />
          </a>
          <a
            href="#"
            className="glass p-3 rounded-full hover-glow transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} className="text-primary" />
          </a>
          <a
            href="#"
            className="glass p-3 rounded-full hover-glow transition-all duration-300"
            aria-label="GitHub"
          >
            <Github size={24} className="text-primary" />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={onScrollToAbout}
            className="glass p-2 rounded-full hover-glow"
            aria-label="Scroll to about section"
          >
            <ChevronDown size={24} className="text-primary" />
          </button>
        </div>

        {/* Floating Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
          <div className="glass p-6 rounded-2xl hover-float">
            <div className="text-3xl font-bold text-primary text-glow">10+</div>
            <div className="text-sm text-muted-foreground mt-1">Websites Built</div>
          </div>
          <div className="glass p-6 rounded-2xl hover-float">
            <div className="text-3xl font-bold text-primary text-glow">2+</div>
            <div className="text-sm text-muted-foreground mt-1">Years Experience</div>
          </div>
          <div className="glass p-6 rounded-2xl hover-float">
            <div className="text-3xl font-bold text-primary text-glow">100%</div>
            <div className="text-sm text-muted-foreground mt-1">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};