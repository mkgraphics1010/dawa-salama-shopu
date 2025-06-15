
import { useState } from 'react';
import { Menu, X, ShoppingCart, Phone, MessageCircle } from 'lucide-react';
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
      {/* Modern Scrolling Text Animation */}
      <div className="bg-gradient-to-r from-modern-green to-modern-green-400 text-white py-3 overflow-hidden shadow-lg">
        <div className="animate-marquee whitespace-nowrap">
          <span className="text-sm font-bold mx-8 tracking-wide">
            Kiongozi mkuu wa Vida Divina Tanzania - Mtaalamu wa mafunzo ya network marketing, mshauri wa bidhaa za afya na mapato
          </span>
        </div>
      </div>

      <header className="bg-white shadow-2xl sticky top-0 z-50 border-b border-modern-green-100 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Modern Logo Section with new Vida Divina logo */}
            <div className="flex items-center space-x-4">
              <div className="relative modern-float">
                <img 
                  src="/lovable-uploads/30caa16b-d0bc-4092-b137-15dbd3acdc4b.png" 
                  alt="Vida Divina Logo" 
                  className="h-16 w-auto drop-shadow-2xl"
                />
                <div className="absolute -inset-2 bg-gradient-to-r from-modern-green via-modern-gold to-modern-green opacity-20 blur-lg rounded-full"></div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-3xl font-black bg-gradient-to-r from-modern-green via-modern-gold to-modern-green bg-clip-text text-transparent tracking-tight">
                  FRANK VIDA DIVINA
                </h1>
                <p className="text-sm text-modern-green-600 font-bold tracking-widest">
                  Duka la Dawa la Hali ya Juu
                </p>
              </div>
            </div>

            {/* Modern Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-modern-green-700 hover:text-modern-green-500 transition-all duration-300 font-bold relative group px-2 py-1"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-modern-green to-modern-gold transition-all duration-300 group-hover:w-full rounded-full"></span>
                </a>
              ))}
            </nav>

            {/* Modern Action Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              <Button 
                onClick={() => window.open(`tel:${phoneNumber}`, '_self')}
                variant="outline" 
                size="sm" 
                className="border-2 border-modern-green-500 text-modern-green-600 hover:bg-modern-green-500 hover:text-white transition-all duration-300 font-bold shadow-lg hover:shadow-xl modern-hover"
              >
                <Phone className="h-4 w-4 mr-2" />
                Piga Simu
              </Button>
              
              <Button 
                onClick={() => window.open(whatsappLink, '_blank')}
                className="bg-modern-green-500 hover:bg-modern-green-600 text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300 modern-hover"
                size="sm"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                WhatsApp
              </Button>
              
              <Button className="bg-gradient-to-r from-modern-green via-modern-gold to-red-500 hover:opacity-90 text-white font-bold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 modern-glow">
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
                className="text-modern-green-600 hover:bg-modern-green-50"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Modern Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden animate-fade-in glass-effect border-t border-modern-green-100 rounded-b-lg">
              <div className="px-2 pt-2 pb-4 space-y-2 sm:px-3">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-3 text-modern-green-700 hover:text-modern-green-500 hover:bg-modern-green-50 transition-all duration-300 rounded-lg font-bold"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <div className="mt-6 space-y-3 px-2">
                  <Button 
                    onClick={() => window.open(`tel:${phoneNumber}`, '_self')}
                    variant="outline" 
                    className="w-full border-2 border-modern-green-500 text-modern-green-600 font-bold modern-hover"
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    Piga Simu
                  </Button>
                  <Button 
                    onClick={() => window.open(whatsappLink, '_blank')}
                    className="w-full bg-modern-green-500 hover:bg-modern-green-600 text-white font-bold modern-hover"
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    WhatsApp
                  </Button>
                  <Button className="w-full bg-gradient-to-r from-modern-green via-modern-gold to-red-500 text-white font-bold modern-hover">
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
