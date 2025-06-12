
import { useState } from 'react';
import { Menu, X, ShoppingCart, Phone, MessageCircle, History } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Nyumbani', href: '#home' },
    { name: 'Dawa', href: '#medicines' },
    { name: 'Aina za Dawa', href: '#categories' },
    { name: 'Historia', href: '#history' },
    { name: 'Kuhusu Sisi', href: '#about' },
    { name: 'Mawasiliano', href: '#contact' },
  ];

  const whatsappNumber = "+255714530900";
  const phoneNumber = "+255714530900";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=Hujambo, nina mahitaji ya dawa`;

  return (
    <>
      {/* Scrolling Text Animation */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white py-2 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap">
          <span className="text-sm font-semibold mx-4">
            Kiongozi mkuu wa Vida Divina Tanzania - Mtaalamu wa mafunzo ya network marketing, mshauri wa bidhaa za afya na mapato
          </span>
        </div>
      </div>

      <header className="bg-vida-white shadow-xl sticky top-0 z-50 border-b-2 border-green-600/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Enhanced Logo */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <img 
                  src="/lovable-uploads/6ee79d10-de0e-44b9-a79d-ceadfb6f4daa.png" 
                  alt="Frank Vida Divina Logo" 
                  className="h-14 w-auto drop-shadow-lg"
                />
                <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-green-500 opacity-20 blur-sm rounded-full"></div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
                  FRANK VIDA DIVINA
                </h1>
                <p className="text-sm text-green-700 font-semibold tracking-wider">
                  Duka la Dawa la Hali ya Juu
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-green-600 transition-all duration-300 font-semibold relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>

            {/* Enhanced Action Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              <Button 
                onClick={() => window.open(`tel:${phoneNumber}`, '_self')}
                variant="outline" 
                size="sm" 
                className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition-all duration-300 font-semibold shadow-md hover:shadow-lg"
              >
                <Phone className="h-4 w-4 mr-2" />
                Piga Simu
              </Button>
              
              <Button 
                onClick={() => window.open(whatsappLink, '_blank')}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300"
                size="sm"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                WhatsApp
              </Button>
              
              <Button className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
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
                className="text-green-600"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Enhanced Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden animate-fade-in bg-gradient-to-b from-vida-white to-vida-cream border-t border-green-600/20">
              <div className="px-2 pt-2 pb-4 space-y-2 sm:px-3">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-3 text-foreground hover:text-green-600 hover:bg-green-600/10 transition-all duration-300 rounded-lg font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <div className="mt-6 space-y-3 px-2">
                  <Button 
                    onClick={() => window.open(`tel:${phoneNumber}`, '_self')}
                    variant="outline" 
                    className="w-full border-2 border-green-600 text-green-600 font-semibold"
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    Piga Simu
                  </Button>
                  <Button 
                    onClick={() => window.open(whatsappLink, '_blank')}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold"
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    WhatsApp
                  </Button>
                  <Button className="w-full bg-gradient-to-r from-green-600 to-green-500 text-white font-semibold">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Omba Dawa
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
