
import { useState } from 'react';
import { Star, ShoppingCart, ArrowLeft, MessageCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const BrainMedicines = () => {
  const { toast } = useToast();

  const brainMedicines = [
    {
      id: 1,
      name: "BRAIN BOOST",
      category: "Dawa za Ubongo",
      price: "Tsh 120,000",
      rating: 4.6,
      reviews: 78,
      description: "Dawa ya kuimarisha kumbukumbu na akili",
      image: "/lovable-uploads/014a176f-f932-4132-99d7-0f1394e009cb.png",
      inStock: false,
      benefits: ["Kuimarisha kumbukumbu", "Kuongeza makini", "Kusaidia kazi za akili"],
      dosage: "1x1 kwa siku"
    },
    {
      id: 2,
      name: "MEMORY PLUS",
      category: "Dawa za Ubongo",
      price: "Tsh 90,000",
      rating: 4.4,
      reviews: 56,
      description: "Dawa ya kusaidia kumbukumbu na uongozi wa akili",
      image: "/lovable-uploads/305f94fb-8431-4ca8-8ced-4bc44479fee1.png",
      inStock: false,
      benefits: ["Kusaidia kumbukumbu", "Kuongeza uelewa", "Kupunguza msongo wa mawazo"],
      dosage: "1x2 kwa siku"
    }
  ];

  const handleOrderMedicine = (medicine) => {
    if (!medicine.inStock) {
      toast({
        title: "Dawa Haipatikani",
        description: "Hii dawa haipatikani kwa sasa. Tafadhali jaribu baadaye.",
        variant: "destructive",
      });
      return;
    }
  };

  const renderStars = (rating) => {
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
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center mb-8">
          <Button 
            variant="outline" 
            onClick={() => window.history.back()}
            className="mr-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Rudi Nyuma
          </Button>
          <h1 className="text-3xl md:text-4xl font-bold text-vida-burgundy">
            Dawa za Ubongo
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {brainMedicines.map((medicine) => (
            <Card key={medicine.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative">
                <img
                  src={medicine.image}
                  alt={medicine.name}
                  className="w-full h-64 object-contain bg-white group-hover:scale-105 transition-transform duration-300 p-4"
                />
                <div className="absolute top-4 left-4 space-y-2">
                  {!medicine.inStock && (
                    <Badge variant="secondary" className="bg-red-500 text-white">
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

                <div className="bg-vida-cream/50 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-vida-burgundy mb-2">Faida za Dawa:</h4>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    {medicine.benefits?.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-block w-1 h-1 bg-vida-burgundy rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs font-medium text-vida-burgundy mt-2">
                    Matumizi: {medicine.dosage}
                  </p>
                </div>

                <Button 
                  variant="outline"
                  className="w-full border-green-500 text-green-600 hover:bg-green-500 hover:text-white"
                  onClick={() => handleOrderMedicine(medicine)}
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Omba Sasa
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BrainMedicines;
