
import { useState } from 'react';
import { Menu, X, ShoppingCart, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Nyumbani', href: '#home' },
    { name: 'Dawa', href: '#medicines' },
    { name: 'Aina za Dawa', href: '#categories' },
    { name: 'Kuhusu Sisi', href: '#about' },
    { name: 'Mawasiliano', href: '#contact' },
  ];

  return (
    <header className="bg-vida-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/6ee79d10-de0e-44b9-a79d-ceadfb6f4daa.png" 
              alt="Vida Divina Logo" 
              className="h-12 w-auto"
            />
            <div className="hidden sm:block">
              <h1 className="text-2xl font-bold text-vida-burgundy">VIDA DIVINA</h1>
              <p className="text-sm text-muted-foreground">Duka la Dawa</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-vida-burgundy transition-colors duration-300 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm" className="border-vida-burgundy text-vida-burgundy hover:bg-vida-burgundy hover:text-white">
              <Phone className="h-4 w-4 mr-2" />
              Piga Simu
            </Button>
            <Button className="bg-vida-burgundy hover:bg-vida-burgundy-dark text-white">
              <ShoppingCart className="h-4 w-4 mr-2" />
              Omba Dawa
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-foreground hover:text-vida-burgundy transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="mt-4 space-y-2">
                <Button variant="outline" className="w-full border-vida-burgundy text-vida-burgundy">
                  <Phone className="h-4 w-4 mr-2" />
                  Piga Simu
                </Button>
                <Button className="w-full bg-vida-burgundy hover:bg-vida-burgundy-dark text-white">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Omba Dawa
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
