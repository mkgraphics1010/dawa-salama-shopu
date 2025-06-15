
import { useEffect, useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Star, MessageCircle } from 'lucide-react';

const ProductCarousel = () => {
  const products = [
    {
      id: 1,
      name: "MARS TABLETS",
      price: "Tsh 100,000",
      image: "/lovable-uploads/1823436a-7fec-424d-ac7c-47bc72720f20.png"
    },
    {
      id: 2,
      name: "ATOM CAPSULES",
      price: "Tsh 100,000",
      image: "/lovable-uploads/2c8c3649-fc59-42fb-8f88-4b9130fb857c.png"
    },
    {
      id: 3,
      name: "LIQUID GOLD",
      price: "Tsh 100,000",
      image: "/lovable-uploads/1823436a-7fec-424d-ac7c-47bc72720f20.png"
    },
    {
      id: 4,
      name: "LIFE CAPSULES",
      price: "Tsh 100,000",
      image: "/lovable-uploads/014a176f-f932-4132-99d7-0f1394e009cb.png"
    },
    {
      id: 5,
      name: "HCG CAPSULES",
      price: "Tsh 100,000",
      image: "/lovable-uploads/7d68ccaa-6701-4824-a674-9f0d9f158b90.png"
    },
    {
      id: 6,
      name: "SLEEP N LOOSE",
      price: "Tsh 100,000",
      image: "/lovable-uploads/305f94fb-8431-4ca8-8ced-4bc44479fee1.png"
    },
    {
      id: 7,
      name: "TeDIVINA DETOX TEA",
      price: "Tsh 150,000",
      image: "/lovable-uploads/0e1bae9b-db5a-4c12-902d-4d5c1d658bff.png"
    }
  ];

  const handleOrderMedicine = (product: any) => {
    const whatsappNumber = "+255714530900";
    const message = `Hujambo! Naomba ${product.name} kwa bei ya ${product.price}. Tafadhali nipatieni maelezo zaidi na jinsi ya kupata dawa hii.`;
    const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <section className="py-20 bg-modern-gradient relative overflow-hidden">
      {/* Moving Background Pattern with uploaded image */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="w-[200%] h-full bg-repeat animate-slow-scroll"
          style={{
            backgroundImage: `url('/lovable-uploads/95bb5660-faa2-4397-9e36-0a380f9ecca2.png')`,
            backgroundSize: '400px 400px',
            animation: 'scrollBackground 60s linear infinite'
          }}
        ></div>
      </div>
      
      {/* Modern background elements */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-white/5 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-modern-gold/10 blur-2xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight drop-shadow-2xl">
            Bidhaa Zetu za Hali ya Juu
          </h2>
          <p className="text-white/95 text-xl font-medium max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
            Chunguza mkusanyiko wetu wa dawa za ubora wa kimataifa
          </p>
          <div className="flex justify-center mt-6">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-modern-gold fill-current drop-shadow-lg" />
              ))}
            </div>
          </div>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {products.map((product) => (
              <CarouselItem key={product.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                <Card className="modern-card bg-white/98 backdrop-blur-sm hover:bg-white transition-all duration-500 group border-0 shadow-2xl">
                  <CardContent className="p-6">
                    <div className="aspect-square mb-6 flex items-center justify-center bg-modern-green-50 rounded-2xl overflow-hidden relative">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-modern-green/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                    <h3 className="font-black text-modern-green-700 text-center mb-2 text-lg leading-tight">
                      {product.name}
                    </h3>
                    <p className="text-center text-modern-green-600 font-bold mb-6 text-xl">
                      {product.price}
                    </p>
                    
                    {/* Modern Button Layout */}
                    <div className="space-y-3">
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="w-full border-2 border-modern-green-500 text-modern-green-600 hover:bg-modern-green-500 hover:text-white font-bold py-3 modern-hover shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm"
                        onClick={() => window.location.href = '/medicines'}
                      >
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Angalia Dawa
                      </Button>
                      
                      <Button 
                        size="sm" 
                        className="w-full bg-gradient-to-r from-modern-green-500 via-modern-green-600 to-modern-green-700 hover:from-modern-green-600 hover:via-modern-green-700 hover:to-modern-green-800 text-white font-bold py-3 modern-hover shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                        onClick={() => handleOrderMedicine(product)}
                      >
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Omba Sasa
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-white border-white/50 hover:bg-white hover:text-modern-green-600 backdrop-blur-sm shadow-lg" />
          <CarouselNext className="text-white border-white/50 hover:bg-white hover:text-modern-green-600 backdrop-blur-sm shadow-lg" />
        </Carousel>
      </div>
    </section>
  );
};

export default ProductCarousel;
