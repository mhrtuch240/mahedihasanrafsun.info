import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'LWMHR - Learn with Mahedi Hasan Rafsun',
    description: 'Educational platform offering comprehensive web development tutorials and AI prompt engineering courses.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'SEO'],
    image: '/lovable-uploads/28763b3a-3beb-4cfe-bd56-871a0aaf455f.png',
    liveUrl: '#',
    githubUrl: '#',
    featured: true
  },
  {
    title: 'E-commerce Website',
    description: 'Modern responsive e-commerce platform with advanced filtering, cart management, and payment integration.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    liveUrl: '#',
    githubUrl: '#',
    featured: false
  },
  {
    title: 'Portfolio Website',
    description: 'Interactive 3D portfolio website with glass morphism design and smooth animations.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', '3D Effects'],
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
    liveUrl: '#',
    githubUrl: '#',
    featured: false
  },
  {
    title: 'AI Content Generator',
    description: 'Prompt engineering tool for generating high-quality content using advanced AI models.',
    technologies: ['React', 'OpenAI API', 'Node.js', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
    liveUrl: '#',
    githubUrl: '#',
    featured: true
  },
  {
    title: 'SEO Dashboard',
    description: 'Comprehensive SEO analytics dashboard with keyword tracking and performance metrics.',
    technologies: ['Vue.js', 'Chart.js', 'PHP', 'MySQL'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    liveUrl: '#',
    githubUrl: '#',
    featured: false
  },
  {
    title: 'Cybersecurity Toolkit',
    description: 'Educational platform for cybersecurity awareness with interactive learning modules.',
    technologies: ['React', 'TypeScript', 'Security APIs', 'Educational Tools'],
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop',
    liveUrl: '#',
    githubUrl: '#',
    featured: false
  }
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="min-h-screen py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-3d mb-4">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of my work spanning web development, AI integration, and digital solutions
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-primary mb-8">Featured Projects</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.filter(project => project.featured).map((project, index) => (
              <div
                key={project.title}
                className="glass rounded-2xl overflow-hidden hover-float group"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                  
                  {/* Action Buttons */}
                  <div className="absolute top-4 right-4 space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.liveUrl}
                      className="glass-strong p-2 rounded-lg hover-glow"
                      aria-label="View Live Project"
                    >
                      <ExternalLink size={20} className="text-primary" />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="glass-strong p-2 rounded-lg hover-glow"
                      aria-label="View Source Code"
                    >
                      <Github size={20} className="text-primary" />
                    </a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="glass-strong px-3 py-1 rounded-full text-xs font-medium text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold text-primary mb-8">Other Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter(project => !project.featured).map((project, index) => (
              <div
                key={project.title}
                className="glass rounded-xl overflow-hidden hover-float group"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                  
                  {/* Action Buttons */}
                  <div className="absolute top-4 right-4 space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.liveUrl}
                      className="glass-strong p-2 rounded-lg hover-glow"
                      aria-label="View Live Project"
                    >
                      <ExternalLink size={16} className="text-primary" />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="glass-strong p-2 rounded-lg hover-glow"
                      aria-label="View Source Code"
                    >
                      <Github size={16} className="text-primary" />
                    </a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-4 space-y-3">
                  <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="glass-strong px-2 py-1 rounded-full text-xs font-medium text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="glass-strong px-2 py-1 rounded-full text-xs font-medium text-muted-foreground">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="glass p-8 rounded-2xl max-w-2xl mx-auto hover-glow">
            <h3 className="text-2xl font-bold text-primary mb-4">Interested in Working Together?</h3>
            <p className="text-muted-foreground mb-6">
              I'm always excited to take on new challenges and create innovative solutions. Let's discuss your project!
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="glass-strong px-8 py-3 rounded-lg font-medium hover-glow transition-all duration-300"
            >
              Start a Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
