
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ListChecks, BookOpen } from 'lucide-react';

const BottomNav = () => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav 
      className={`fixed bottom-0 left-0 right-0 bg-white border-t border-gray-300 z-50 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="flex justify-around items-center h-14">
        <Link 
          to="/" 
          className={`flex flex-col items-center justify-center w-full h-full ${
            location.pathname === '/' ? 'text-blue-600' : 'text-gray-500'
          }`}
        >
          <ListChecks size={20} />
          <span className="text-xs mt-1">Список</span>
        </Link>
        
        <Link 
          to="/catalog" 
          className={`flex flex-col items-center justify-center w-full h-full ${
            location.pathname === '/catalog' ? 'text-blue-600' : 'text-gray-500'
          }`}
        >
          <ListChecks size={20} />
          <span className="text-xs mt-1">Каталог</span>
        </Link>
        
        <Link 
          to="/authors" 
          className={`flex flex-col items-center justify-center w-full h-full ${
            location.pathname === '/authors' ? 'text-blue-600' : 'text-gray-500'
          }`}
        >
          <BookOpen size={20} />
          <span className="text-xs mt-1">Авторы</span>
        </Link>
      </div>
    </nav>
  );
};

export default BottomNav;
