
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Nyumbani', href: '#home' },
    { name: 'Dawa', href: '#medicines' },
    { name: 'Aina za Dawa', href: '#categories' },
    { name: 'Kuhusu Sisi', href: '#about' },
    { name: 'Mawasiliano', href: '#contact' },
  ];

  const services = [
    'Uuzaji wa Dawa',
    'Ushauri wa Kiafya',
    'Uongozaji wa Dawa',
    'Huduma za Haraka',
    'Dawa za Kitaalamu',
  ];

  return (
    <footer className="bg-vida-burgundy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/lovable-uploads/6ee79d10-de0e-44b9-a79d-ceadfb6f4daa.png" 
                alt="Vida Divina Logo" 
                className="h-10 w-auto filter brightness-0 invert"
              />
              <div>
                <h3 className="text-xl font-bold">VIDA DIVINA</h3>
                <p className="text-sm opacity-80">Duka la Dawa</p>
              </div>
            </div>
            <p className="text-sm opacity-90 mb-4">
              Tunauza dawa za hali ya juu na za uhakika kwa bei nafuu. 
              Afya yako ni muhimu kwetu.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-vida-cream transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-vida-cream transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-vida-cream transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Viungo vya Haraka</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-sm opacity-90 hover:opacity-100 hover:text-vida-cream transition-all duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Huduma Zetu</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service} className="text-sm opacity-90">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Mawasiliano</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 opacity-80" />
                <span className="text-sm">+255 123 456 789</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 opacity-80" />
                <span className="text-sm">info@vidadivina.co.tz</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 opacity-80 mt-1" />
                <span className="text-sm">
                  Mtaa wa Kariakoo<br />
                  Dar es Salaam, Tanzania
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm opacity-80 mb-4 md:mb-0">
              © {currentYear} Vida Divina. Haki zote zimehifadhiwa.
            </p>
            <div className="flex items-center space-x-1 text-sm opacity-80">
              <span>Imetengenezwa kwa</span>
              <Heart className="h-4 w-4 text-red-400" />
              <span>Tanzania</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
