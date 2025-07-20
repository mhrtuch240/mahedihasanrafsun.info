import { useState, useEffect } from 'react';
import { Home, User, Briefcase, FolderOpen, Mail, Menu, X } from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const navItems = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: User },
  { id: 'services', label: 'Services', icon: Briefcase },
  { id: 'projects', label: 'Projects', icon: FolderOpen },
  { id: 'contact', label: 'Contact', icon: Mail },
];

export const Sidebar = ({ activeSection, onSectionChange }: SidebarProps) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsMobileOpen(false);
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const handleNavClick = (sectionId: string) => {
    onSectionChange(sectionId);
    setIsMobileOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      {isMobile && (
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="fixed top-4 left-4 z-50 glass-strong p-3 rounded-lg hover-glow"
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      )}

      {/* Sidebar */}
      <nav
        className={`
          fixed left-0 top-0 h-screen glass-strong
          transition-transform duration-300 ease-in-out z-40
          ${isMobile ? 'w-64' : 'w-28'}
          ${isMobile && !isMobileOpen ? '-translate-x-full' : 'translate-x-0'}
        `}
      >
        <div className="flex flex-col h-full p-4">
          {/* Profile Image */}
          <div className="flex flex-col items-center mb-8 mt-4">
            <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-primary hover-glow animate-float">
              <img
                src="/lovable-uploads/28763b3a-3beb-4cfe-bd56-871a0aaf455f.png"
                alt="Mahedi Hasan Rafsun"
                className="w-full h-full object-cover"
              />
            </div>
            {isMobile && (
              <div className="mt-3 text-center">
                <h3 className="text-sm font-semibold text-foreground">Mahedi Hasan</h3>
                <p className="text-xs text-muted-foreground">Web Developer</p>
              </div>
            )}
          </div>

          {/* Navigation Links */}
          <div className="flex-1 space-y-2">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = activeSection === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`
                    w-full p-3 rounded-lg nav-link group
                    ${isActive ? 'active text-primary bg-primary/10' : 'text-muted-foreground hover:text-primary'}
                    ${isMobile ? 'flex items-center space-x-3 justify-start' : 'flex flex-col items-center'}
                  `}
                >
                  <IconComponent 
                    size={isMobile ? 20 : 24} 
                    className={`${isActive ? 'text-primary' : 'group-hover:text-primary'} transition-colors duration-200`}
                  />
                  {isMobile && (
                    <span className="text-sm font-medium">{item.label}</span>
                  )}
                  {!isMobile && (
                    <span className="text-xs mt-1 font-medium">{item.label}</span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Footer */}
          <div className="text-center">
            <div className="w-full h-px bg-border mb-4"></div>
            <p className="text-xs text-muted-foreground">
              {isMobile ? '© 2024 Mahedi Hasan' : '© 2024'}
            </p>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      {isMobile && isMobileOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-30"
          onClick={() => setIsMobileOpen(false)}
        />
      )}
    </>
  );
};