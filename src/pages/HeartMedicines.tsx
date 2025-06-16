
import { useState } from 'react';
import { Star, ShoppingCart, ArrowLeft, MessageCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const HeartMedicines = () => {
  const { toast } = useToast();
  const [selectedMedicine, setSelectedMedicine] = useState(null);
  const [orderForm, setOrderForm] = useState({
    name: '',
    phone: '',
    location: '',
    quantity: 1,
    notes: ''
  });

  const heartMedicines = [
    {
      id: 1,
      name: "CARDIO PLUS",
      category: "Dawa za Moyo",
      price: "Tsh 85,000",
      rating: 4.7,
      reviews: 89,
      description: "Dawa ya kuimarisha moyo na kusaidia mzunguko wa damu",
      image: "/lovable-uploads/1823436a-7fec-424d-ac7c-47bc72720f20.png",
      inStock: false,
      prescription: false,
      benefits: [
        "Kuimarisha moyo",
        "Kusaidia mzunguko wa damu",
        "Kupunguza shinikizo la damu"
      ],
      dosage: "1x2 kwa siku"
    },
    {
      id: 2,
      name: "HEART GUARD",
      category: "Dawa za Moyo",
      price: "Tsh 95,000",
      rating: 4.5,
      reviews: 67,
      description: "Dawa ya kulinda moyo na kusaidia afya ya mishipa ya damu",
      image: "/lovable-uploads/2c8c3649-fc59-42fb-8f88-4b9130fb857c.png",
      inStock: true,
      prescription: false,
      benefits: [
        "Kulinda moyo",
        "Kuimarisha mishipa ya damu",
        "Kupunguza hatari za moyo"
      ],
      dosage: "1x1 kwa siku"
    }
  ];

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

  const handleOrderMedicine = (medicine) => {
    if (!medicine.inStock) {
      toast({
        title: "Dawa Haipatikani",
        description: "Hii dawa haipatikani kwa sasa. Tafadhali jaribu baadaye.",
        variant: "destructive",
      });
      return;
    }

    const whatsappNumber = "+255714530900";
    const message = `Hujambo! Naomba ${medicine.name} kwa bei ya ${medicine.price}. Tafadhali nipatieni maelezo zaidi na jinsi ya kupata dawa hii.`;
    const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
  };

  const handleOrderSubmit = (medicine) => {
    const whatsappNumber = "+255714530900";
    const message = `Hujambo, nina mahitaji ya dawa:

DAWA: ${medicine.name}
BEI: ${medicine.price}
KIASI: ${orderForm.quantity}

MAELEZO YA MTEJA:
Jina: ${orderForm.name}
Simu: ${orderForm.phone}
Mahali: ${orderForm.location}
Maelezo mengine: ${orderForm.notes}

Asante!`;

    const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
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
            Dawa za Moyo
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {heartMedicines.map((medicine) => (
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

                <div className="space-y-2">
                  <Button 
                    className="w-full bg-vida-burgundy hover:bg-vida-burgundy-dark text-white"
                    onClick={() => setSelectedMedicine(medicine)}
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Omba Dawa Hii
                  </Button>
                  
                  <Button 
                    variant="outline"
                    className="w-full border-green-500 text-green-600 hover:bg-green-500 hover:text-white"
                    onClick={() => handleOrderMedicine(medicine)}
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Omba Sasa
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Order Form Modal */}
      {selectedMedicine && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-vida-burgundy">
                  Omba {selectedMedicine.name}
                </h3>
                <Button 
                  variant="ghost" 
                  onClick={() => setSelectedMedicine(null)}
                  className="text-gray-500"
                >
                  ✕
                </Button>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Jina Lako *</Label>
                  <Input
                    id="name"
                    value={orderForm.name}
                    onChange={(e) => setOrderForm({...orderForm, name: e.target.value})}
                    placeholder="Jina kamili"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Namba ya Simu *</Label>
                  <Input
                    id="phone"
                    value={orderForm.phone}
                    onChange={(e) => setOrderForm({...orderForm, phone: e.target.value})}
                    placeholder="+255..."
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="location">Mahali Ulipo *</Label>
                  <Input
                    id="location"
                    value={orderForm.location}
                    onChange={(e) => setOrderForm({...orderForm, location: e.target.value})}
                    placeholder="Mji/Mtaa"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="quantity">Kiasi</Label>
                  <Input
                    id="quantity"
                    type="number"
                    min="1"
                    value={orderForm.quantity}
                    onChange={(e) => setOrderForm({...orderForm, quantity: parseInt(e.target.value)})}
                  />
                </div>

                <div>
                  <Label htmlFor="notes">Maelezo Mengine</Label>
                  <Textarea
                    id="notes"
                    value={orderForm.notes}
                    onChange={(e) => setOrderForm({...orderForm, notes: e.target.value})}
                    placeholder="Maswali au maelezo mengine..."
                  />
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Muhtasari wa Ombi:</h4>
                  <p><strong>Dawa:</strong> {selectedMedicine.name}</p>
                  <p><strong>Bei:</strong> {selectedMedicine.price}</p>
                  <p><strong>Kiasi:</strong> {orderForm.quantity}</p>
                </div>

                <Button 
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                  onClick={() => handleOrderSubmit(selectedMedicine)}
                  disabled={!orderForm.name || !orderForm.phone || !orderForm.location}
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Tuma Ombi kwa WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default HeartMedicines;
