
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Pill, Heart, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Dawa za Hali ya Juu",
      subtitle: "Tunauza dawa za kimataifa zinazofaa kwa afya yako",
      description: "Dawa zetu ni za ubora wa hali ya juu na ni salama kwa matumizi",
      icon: <Pill className="h-12 w-12 text-white" />,
      gradient: "from-vida-burgundy to-vida-burgundy-dark"
    },
    {
      title: "Huduma za Kiafya",
      subtitle: "Msaada wa kitaalamu kwa mahitaji yako ya kiafya",
      description: "Timu yetu ya wataalamu iko tayari kukusaidia wakati wowote",
      icon: <Heart className="h-12 w-12 text-white" />,
      gradient: "from-vida-burgundy-light to-vida-burgundy"
    },
    {
      title: "Dawa Salama na za Uhakika",
      subtitle: "Tunahakikisha dawa zetu ni za ubora na salama",
      description: "Dawa zetu zinapitia ukaguzi mkali wa ubora kabla ya kuuzwa",
      icon: <Shield className="h-12 w-12 text-white" />,
      gradient: "from-vida-burgundy-dark to-vida-burgundy-light"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
          }`}
        >
          <div className={`bg-gradient-to-r ${slide.gradient} h-full flex items-center justify-center`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
              <div className="mb-8 flex justify-center">
                {slide.icon}
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl mb-4 animate-fade-in">
                {slide.subtitle}
              </p>
              <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-90 animate-fade-in">
                {slide.description}
              </p>
              <div className="space-x-4 animate-fade-in">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-vida-burgundy">
                  Angalia Dawa
                </Button>
                <Button size="lg" className="bg-white text-vida-burgundy hover:bg-vida-cream">
                  Omba Sasa
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroBanner;
