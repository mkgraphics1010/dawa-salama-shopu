
import { useEffect, useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';

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

  return (
    <section className="py-16 bg-gradient-to-r from-green-700 to-green-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Bidhaa Zetu za Hali ya Juu
          </h2>
          <p className="text-green-100 text-lg">
            Chunguza mkusanyiko wetu wa dawa za ubora wa kimataifa
          </p>
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
                <Card className="bg-white/95 backdrop-blur-sm hover:bg-white transition-all duration-300 group hover:shadow-2xl">
                  <CardContent className="p-6">
                    <div className="aspect-square mb-4 flex items-center justify-center bg-white rounded-lg overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <h3 className="font-bold text-green-700 text-center mb-2 text-sm">
                      {product.name}
                    </h3>
                    <p className="text-center text-green-800 font-semibold mb-4">
                      {product.price}
                    </p>
                    <Button 
                      size="sm" 
                      className="w-full bg-green-600 hover:bg-green-700 text-white"
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Omba Sasa
                    </Button>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-white border-white hover:bg-white hover:text-green-600" />
          <CarouselNext className="text-white border-white hover:bg-white hover:text-green-600" />
        </Carousel>
      </div>
    </section>
  );
};

export default ProductCarousel;
