
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Heart, MessageCircle } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const whatsappNumber = "+255 714 530 900";
  const phoneNumber = "+255 714 530 900";
  const email = "matiku18andrew@gmail.com";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=Hujambo, nina mahitaji ya dawa`;

  const quickLinks = [
    { name: 'Nyumbani', href: '#home' },
    { name: 'Dawa', href: '#medicines' },
    { name: 'Aina za Dawa', href: '#categories' },
    { name: 'Historia', href: '#history' },
    { name: 'Kuhusu Sisi', href: '#about' },
    { name: 'Mawasiliano', href: '#contact' },
  ];

  const services = [
    'Uuzaji wa Dawa za Hali ya Juu',
    'Ushauri wa Kiafya wa Kitaalamu',
    'Uongozaji wa Dawa',
    'Huduma za Haraka za WhatsApp',
    'Dawa za Kitaalamu',
  ];

  return (
    <footer className="bg-gradient-to-br from-green-800 to-green-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Enhanced Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <img 
                  src="/lovable-uploads/6ee79d10-de0e-44b9-a79d-ceadfb6f4daa.png" 
                  alt="Frank Vida Divina Logo" 
                  className="h-12 w-auto filter brightness-0 invert drop-shadow-lg"
                />
                <div className="absolute -inset-1 bg-white/20 blur-sm rounded-full"></div>
              </div>
              <div>
                <h3 className="text-2xl font-bold">FRANK VIDA DIVINA</h3>
                <p className="text-base opacity-90 font-semibold">Duka la Dawa la Hali ya Juu</p>
              </div>
            </div>
            <p className="text-base opacity-90 mb-6 leading-relaxed">
              Tunauza dawa za hali ya juu na za uhakika kwa bei nafuu. 
              Afya yako ni muhimu sana kwetu na tunajitahidi kutoa huduma bora zaidi.
            </p>
            
            {/* WhatsApp CTA */}
            <div className="mb-6 p-4 bg-green-600/20 rounded-lg border border-green-400/30">
              <p className="text-sm font-semibold mb-2">Wasiliana nasi haraka:</p>
              <button 
                onClick={() => window.open(whatsappLink, '_blank')}
                className="flex items-center space-x-2 text-green-300 hover:text-green-100 transition-colors duration-300 font-semibold"
              >
                <MessageCircle className="h-5 w-5" />
                <span>{whatsappNumber}</span>
              </button>
            </div>
            
            <div className="flex space-x-4">
              <a href="https://facebook.com/frankvidadivinatanzania" target="_blank" rel="noopener noreferrer" className="hover:text-vida-cream transition-colors duration-300 transform hover:scale-110">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-vida-cream transition-colors duration-300 transform hover:scale-110">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="https://instagram.com/frankvidadivinatanzania" target="_blank" rel="noopener noreferrer" className="hover:text-vida-cream transition-colors duration-300 transform hover:scale-110">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-green-200">Viungo vya Haraka</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-base opacity-90 hover:opacity-100 hover:text-green-200 transition-all duration-300 relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-200 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-green-200">Huduma Zetu</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-base opacity-90 flex items-start">
                  <span className="inline-block w-2 h-2 bg-green-200 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Enhanced Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-green-200">Mawasiliano</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-3 bg-white/10 rounded-lg">
                <Phone className="h-5 w-5 opacity-80 text-green-200" />
                <div>
                  <p className="text-sm font-semibold">Simu</p>
                  <a href={`tel:${phoneNumber}`} className="text-sm hover:text-green-200 transition-colors duration-300">
                    {phoneNumber}
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-3 bg-green-600/20 rounded-lg border border-green-400/30">
                <MessageCircle className="h-5 w-5 text-green-300" />
                <div>
                  <p className="text-sm font-semibold text-green-300">WhatsApp</p>
                  <button 
                    onClick={() => window.open(whatsappLink, '_blank')}
                    className="text-sm hover:text-green-200 transition-colors duration-300"
                  >
                    {whatsappNumber}
                  </button>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-3 bg-white/10 rounded-lg">
                <Mail className="h-5 w-5 opacity-80 text-green-200" />
                <div>
                  <p className="text-sm font-semibold">Barua Pepe</p>
                  <a href={`mailto:${email}`} className="text-sm hover:text-green-200 transition-colors duration-300">
                    {email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 p-3 bg-white/10 rounded-lg">
                <MapPin className="h-5 w-5 opacity-80 mt-1 text-green-200" />
                <div>
                  <p className="text-sm font-semibold">Mahali</p>
                  <p className="text-sm">
                    Mtaa wa Kariakoo<br />
                    Dar es Salaam, Tanzania
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Section */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-base opacity-80 mb-4 md:mb-0 text-center md:text-left">
              © {currentYear} Frank Vida Divina. Haki zote zimehifadhiwa. Duka la Dawa la Hali ya Juu.
            </p>
            <div className="flex items-center space-x-2 text-base opacity-80">
              <span>Imetengenezwa kwa</span>
              <Heart className="h-5 w-5 text-red-400 animate-pulse" />
              <span className="font-semibold">Tanzania</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
