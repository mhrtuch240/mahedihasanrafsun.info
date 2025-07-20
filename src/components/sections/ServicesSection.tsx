import { Code2, Search, Brain, Shield, Palette, Smartphone } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies like React, Vue.js, and responsive design.',
    features: ['Responsive Design', 'Modern Frameworks', 'Performance Optimization', 'Cross-browser Compatibility']
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Boost your online visibility with comprehensive SEO strategies and content optimization techniques.',
    features: ['Keyword Research', 'On-page SEO', 'Content Strategy', 'Analytics & Reporting']
  },
  {
    icon: Brain,
    title: 'Prompt Engineering',
    description: 'AI-powered content creation and prompt optimization for chatbots, content generation, and automation.',
    features: ['AI Content Creation', 'Prompt Optimization', 'Automation Solutions', 'AI Integration']
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Create stunning user interfaces with modern design principles and user-centered approach.',
    features: ['User Research', 'Wireframing', 'Visual Design', 'Prototyping']
  },
  {
    icon: Smartphone,
    title: 'Mobile Optimization',
    description: 'Ensure your website works perfectly on all devices with responsive design and mobile-first approach.',
    features: ['Mobile-First Design', 'Touch Optimization', 'Performance Tuning', 'App-like Experience']
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Implement security best practices and protect your digital assets from vulnerabilities.',
    features: ['Security Audits', 'Data Protection', 'Safe Coding Practices', 'Vulnerability Assessment']
  }
];

export const ServicesSection = () => {
  return (
    <section id="services" className="min-h-screen py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-3d mb-4">
            My Services
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive digital solutions to help your business thrive in the modern web landscape
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.title}
                className="glass p-8 rounded-2xl hover-float group"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {/* Service Icon */}
                <div className="glass-strong p-4 rounded-xl w-fit mb-6 group-hover:animate-glow">
                  <IconComponent size={32} className="text-primary" />
                </div>

                {/* Service Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li 
                        key={featureIndex}
                        className="flex items-center text-sm text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/20 transition-colors pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="glass p-8 rounded-2xl max-w-2xl mx-auto hover-glow">
            <h3 className="text-2xl font-bold text-primary mb-4">Ready to Start Your Project?</h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss how I can help bring your ideas to life with modern web technologies and creative solutions.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="glass-strong px-8 py-3 rounded-lg font-medium hover-glow transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};