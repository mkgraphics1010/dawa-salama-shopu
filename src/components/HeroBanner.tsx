
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
      icon: <Pill className="h-16 w-16 text-white drop-shadow-lg" />,
      gradient: "from-modern-green via-modern-green-400 to-modern-green-500"
    },
    {
      title: "Huduma za Kiafya",
      subtitle: "Msaada wa kitaalamu kwa mahitaji yako ya kiafya",
      description: "Timu yetu ya wataalamu iko tayari kukusaidia wakati wowote",
      icon: <Heart className="h-16 w-16 text-white drop-shadow-lg" />,
      gradient: "from-modern-green-400 via-modern-gold to-modern-green-500"
    },
    {
      title: "Dawa Salama na za Uhakika",
      subtitle: "Tunahakikisha dawa zetu ni za ubora na salama",
      description: "Dawa zetu zinapitia ukaguzi mkali wa ubora kabla ya kuuzwa",
      icon: <Shield className="h-16 w-16 text-white drop-shadow-lg" />,
      gradient: "from-modern-green-500 via-modern-green-400 to-modern-gold"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

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
          <div className={`bg-gradient-to-br ${slide.gradient} h-full flex items-center justify-center relative overflow-hidden`}>
            {/* Moving Background Pattern with uploaded image */}
            <div className="absolute inset-0 opacity-15">
              <div 
                className="w-[200%] h-full bg-repeat animate-slow-scroll"
                style={{
                  backgroundImage: `url('/lovable-uploads/95bb5660-faa2-4397-9e36-0a380f9ecca2.png')`,
                  backgroundSize: '300px 300px',
                  animation: 'scrollBackground 80s linear infinite'
                }}
              ></div>
            </div>

            {/* Modern background pattern */}
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white/20 blur-xl"></div>
              <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full bg-white/15 blur-2xl"></div>
              <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-white/25 blur-lg"></div>
            </div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative z-10">
              <div className="mb-8 flex justify-center modern-float">
                <div className="p-6 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
                  {slide.icon}
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-black mb-6 slide-in-up tracking-tight drop-shadow-2xl">
                {slide.title}
              </h1>
              <p className="text-xl md:text-3xl mb-6 slide-in-right font-bold drop-shadow-lg">
                {slide.subtitle}
              </p>
              <p className="text-lg md:text-xl mb-12 max-w-4xl mx-auto opacity-95 fade-in-scale leading-relaxed drop-shadow-lg">
                {slide.description}
              </p>
              <div className="space-x-6 fade-in-scale">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-white hover:text-modern-green-600 font-bold px-8 py-4 text-lg modern-hover backdrop-blur-sm"
                  onClick={() => window.location.href = '/medicines'}
                >
                  Angalia Dawa
                </Button>
                <Button 
                  size="lg" 
                  className="bg-white text-modern-green-600 hover:bg-modern-green-50 font-bold px-8 py-4 text-lg shadow-2xl modern-hover"
                  onClick={() => document.getElementById('medicine-request')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Omba Sasa
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Modern Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/30 modern-hover"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/30 modern-hover"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Modern Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white shadow-lg scale-125' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroBanner;
