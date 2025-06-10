
import { Star, ShoppingCart, Info } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const MedicinesDisplay = () => {
  const medicines = [
    {
      id: 1,
      name: "Paracetamol 500mg",
      category: "Dawa za Maumivu",
      price: "Tsh 2,500",
      rating: 4.5,
      reviews: 128,
      description: "Dawa ya kusaidia kupunguza maumivu na homa",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=300&h=200&fit=crop",
      inStock: true,
      prescription: false
    },
    {
      id: 2,
      name: "Amoxicillin 250mg",
      category: "Dawa za Antibiotiki",
      price: "Tsh 8,500",
      rating: 4.8,
      reviews: 89,
      description: "Antibiotiki ya kupambana na maambukizi",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=300&h=200&fit=crop",
      inStock: true,
      prescription: true
    },
    {
      id: 3,
      name: "Vitamin D3 1000IU",
      category: "Virutubisho",
      price: "Tsh 15,000",
      rating: 4.6,
      reviews: 203,
      description: "Vitamin ya kuimarisha mifupa na kinga",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=300&h=200&fit=crop",
      inStock: true,
      prescription: false
    },
    {
      id: 4,
      name: "Omeprazole 20mg",
      category: "Dawa za Tumbo",
      price: "Tsh 12,000",
      rating: 4.4,
      reviews: 156,
      description: "Dawa ya kupunguza asidi ya tumbo",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=300&h=200&fit=crop",
      inStock: false,
      prescription: true
    },
    {
      id: 5,
      name: "Cetirizine 10mg",
      category: "Dawa za Mzio",
      price: "Tsh 6,500",
      rating: 4.3,
      reviews: 92,
      description: "Dawa ya kupambana na mzio na kuwasha",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=300&h=200&fit=crop",
      inStock: true,
      prescription: false
    },
    {
      id: 6,
      name: "Metformin 500mg",
      category: "Dawa za Kisukari",
      price: "Tsh 18,000",
      rating: 4.7,
      reviews: 234,
      description: "Dawa ya kudhibiti sukari ya damu",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=300&h=200&fit=crop",
      inStock: true,
      prescription: true
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < Math.floor(rating) 
            ? 'text-yellow-400 fill-current' 
            : i < rating 
            ? 'text-yellow-400 fill-current opacity-50' 
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="medicines" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-vida-burgundy mb-4">
            Dawa Zetu
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Chagua kutoka kwa mkusanyiko wetu wa dawa za hali ya juu na za uhakika
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {medicines.map((medicine) => (
            <Card key={medicine.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative">
                <img
                  src={medicine.image}
                  alt={medicine.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 space-y-2">
                  {medicine.prescription && (
                    <Badge variant="destructive" className="bg-red-500">
                      Haja Hati ya Daktari
                    </Badge>
                  )}
                  {!medicine.inStock && (
                    <Badge variant="secondary" className="bg-gray-500 text-white">
                      Haipatikani
                    </Badge>
                  )}
                </div>
              </div>

              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg text-vida-burgundy mb-1">
                      {medicine.name}
                    </CardTitle>
                    <CardDescription className="text-sm text-muted-foreground">
                      {medicine.category}
                    </CardDescription>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-vida-burgundy">
                      {medicine.price}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-2 mt-2">
                  <div className="flex">
                    {renderStars(medicine.rating)}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    ({medicine.reviews})
                  </span>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {medicine.description}
                </p>

                <div className="flex space-x-2">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1 border-vida-burgundy text-vida-burgundy hover:bg-vida-burgundy hover:text-white"
                  >
                    <Info className="h-4 w-4 mr-2" />
                    Maelezo
                  </Button>
                  <Button 
                    size="sm" 
                    className="flex-1 bg-vida-burgundy hover:bg-vida-burgundy-dark text-white"
                    disabled={!medicine.inStock}
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Omba
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-vida-burgundy hover:bg-vida-burgundy-dark text-white">
            Angalia Dawa Zaidi
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MedicinesDisplay;
