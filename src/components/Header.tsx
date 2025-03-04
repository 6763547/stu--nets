
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu } from 'lucide-react';

const Header = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled ? "bg-white/90 backdrop-blur-sm shadow-sm py-2" : "bg-transparent py-3"
    )}>
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl md:text-2xl font-semibold text-primary transition-all duration-300 hover:opacity-80">
          ПродуктЛист
        </Link>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative"
          >
            <Menu size={24} />
          </Button>
        </div>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-4">
          <Link to="/">
            <Button variant={location.pathname === '/' ? "default" : "ghost"}>
              Мой список
            </Button>
          </Link>
          <Link to="/catalog">
            <Button variant={location.pathname === '/catalog' ? "default" : "ghost"}>
              Каталог
            </Button>
          </Link>
          <Link to="/authors">
            <Button variant={location.pathname === '/authors' ? "default" : "ghost"}>
              Авторы
            </Button>
          </Link>
        </nav>
        
        {/* Mobile navigation dropdown */}
        {menuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-md py-2 md:hidden animate-fade-in">
            <div className="flex flex-col space-y-1 px-4">
              <Link to="/" onClick={() => setMenuOpen(false)}>
                <Button 
                  variant={location.pathname === '/' ? "default" : "ghost"}
                  className="w-full justify-start"
                >
                  Мой список
                </Button>
              </Link>
              <Link to="/catalog" onClick={() => setMenuOpen(false)}>
                <Button 
                  variant={location.pathname === '/catalog' ? "default" : "ghost"}
                  className="w-full justify-start"
                >
                  Каталог
                </Button>
              </Link>
              <Link to="/authors" onClick={() => setMenuOpen(false)}>
                <Button 
                  variant={location.pathname === '/authors' ? "default" : "ghost"}
                  className="w-full justify-start"
                >
                  Авторы
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
