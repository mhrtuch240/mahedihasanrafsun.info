import { Code, Brain, Shield, Users, Award, Target } from 'lucide-react';

const skills = [
  { icon: Code, name: 'Web Development', description: 'Modern React, Vue.js, HTML, CSS, JavaScript' },
  { icon: Brain, name: 'Prompt Engineering', description: 'AI-powered content creation and optimization' },
  { icon: Target, name: 'SEO Optimization', description: 'Search engine optimization and analytics' },
  { icon: Shield, name: 'Cyber Security', description: 'Security awareness and best practices' },
  { icon: Users, name: 'Team Collaboration', description: 'Effective communication and project management' },
  { icon: Award, name: 'Content Creation', description: 'Educational content and tutorials' },
];

export const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-3d mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Passionate self-taught developer with expertise in modern web technologies and AI-powered solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Bio */}
          <div className="space-y-6">
            <div className="glass p-8 rounded-2xl hover-glow">
              <h3 className="text-2xl font-bold text-primary mb-4">My Journey</h3>
              <p className="text-foreground leading-relaxed mb-4">
                I am a passionate and self-taught web developer, prompt engineer, and content creator. 
                I specialize in HTML, CSS, JavaScript, and SEO. With hands-on experience building 
                websites and AI-based tools, I am confident in delivering fast, efficient, and 
                creative digital solutions.
              </p>
              <p className="text-foreground leading-relaxed">
                My journey in web development has been driven by curiosity and a constant desire 
                to learn new technologies. I believe in creating solutions that not only look great 
                but also provide exceptional user experiences.
              </p>
            </div>

            {/* Education & Location */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="glass p-6 rounded-xl hover-float">
                <h4 className="font-semibold text-primary mb-2">Education</h4>
                <p className="text-sm text-muted-foreground">BUHS High School</p>
                <p className="text-xs text-muted-foreground">2023 - 2025</p>
              </div>
              <div className="glass p-6 rounded-xl hover-float">
                <h4 className="font-semibold text-primary mb-2">Location</h4>
                <p className="text-sm text-muted-foreground">Dhaka, Bangladesh</p>
                <p className="text-xs text-muted-foreground">+8801306654467</p>
              </div>
            </div>
          </div>

          {/* Right Column - Skills Grid */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-center text-primary mb-8">My Expertise</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <div
                    key={skill.name}
                    className="glass p-6 rounded-xl hover-float group"
                    style={{
                      animationDelay: `${index * 0.1}s`
                    }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="glass-strong p-3 rounded-lg group-hover:animate-glow">
                        <IconComponent size={24} className="text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {skill.name}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-primary mb-8">Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass p-6 rounded-xl text-center hover-float">
              <div className="text-3xl font-bold text-primary text-glow mb-2">10+</div>
              <div className="font-semibold mb-1">Websites Built</div>
              <div className="text-sm text-muted-foreground">Responsive websites using HTML, CSS & JS</div>
            </div>
            <div className="glass p-6 rounded-xl text-center hover-float">
              <div className="text-3xl font-bold text-primary text-glow mb-2">Expert</div>
              <div className="font-semibold mb-1">Prompt Writing</div>
              <div className="text-sm text-muted-foreground">Recognized for AI prompt engineering skills</div>
            </div>
            <div className="glass p-6 rounded-xl text-center hover-float">
              <div className="text-3xl font-bold text-primary text-glow mb-2">SEO</div>
              <div className="font-semibold mb-1">Specialist</div>
              <div className="text-sm text-muted-foreground">Content optimization and organic traffic boost</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};