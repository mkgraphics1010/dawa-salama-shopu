import { useState } from 'react';
import { Star, ShoppingCart, ArrowLeft, MessageCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Medicines = () => {
  const [selectedMedicine, setSelectedMedicine] = useState(null);
  const [orderForm, setOrderForm] = useState({
    name: '',
    phone: '',
    location: '',
    quantity: 1,
    notes: ''
  });

  const medicines = [
    {
      id: 1,
      name: "MARS TABLETS",
      category: "Virutubisho vya Kiume",
      price: "Tsh 100,000",
      rating: 4.8,
      reviews: 156,
      description: "MARS imetengenezwa na viambata mhimu kama tongkat ali, Horn goat weed, ginseng, na saw palmetto ambavyo ni muhimu sana kwenye afya ya uzazi wa mwanaume",
      image: "/lovable-uploads/1823436a-7fec-424d-ac7c-47bc72720f20.png",
      inStock: true,
      prescription: false,
      benefits: [
        "Husaidia kurudisha hamu na uwezo wa kushiriki tendo la ndoa",
        "Huimarisha afya ya tezi dume",
        "Hurejesha nguvu za kiume",
        "Hukuza nishati ya mwili na stamina",
        "Ni njia mbadala na ya asili kuimarisha afya ya uzazi wa mwanaume",
        "Husaidia kuongeza uimara wa kusimamisha uume kwa mda mrefu",
        "Kuongeza nguvu ya misuli ya uume",
        "Kuongeza stamina"
      ],
      dosage: "1x1 masaa mawili kabla ya tendo"
    },
    {
      id: 2,
      name: "ATOM CAPSULES",
      category: "Virutubisho vya Maisha",
      price: "Tsh 100,000",
      rating: 4.6,
      reviews: 89,
      description: "ATOM imetengenezwa na viambata vifuatavyo: Vitamin C, B12, Caffeine, Green tea leaf extract, Cinamon, Maca root",
      image: "/lovable-uploads/2c8c3649-fc59-42fb-8f88-4b9130fb857c.png",
      inStock: true,
      prescription: false,
      benefits: [
        "Inaondoa sumu mwilini",
        "Inasafisha mfumo mzima wa mwili",
        "Inaondoa hamu ya kula",
        "Inaongeza vitamin B12, C",
        "Inapunguza uzito",
        "Inaondoa mafuta mabaya mwilini",
        "Inaweka vizuri mfumo wa mmeng'enyo wa chakula",
        "Inasaidia mzunguko wa damu kwenda vizuri",
        "Inaongeza protein mwilini"
      ],
      dosage: "2x1 na chakula"
    },
    {
      id: 3,
      name: "LIQUID GOLD",
      category: "Dawa za Ngozi",
      price: "Tsh 100,000",
      rating: 4.9,
      reviews: 203,
      description: "VIDA ESSENTIALS LIQUID GOLD - Mafuta ya kifahari yaliyochanganywa na dhahabu asilia ya karata 23 na viambata asilia",
      image: "/lovable-uploads/1823436a-7fec-424d-ac7c-47bc72720f20.png",
      inStock: true,
      prescription: false,
      benefits: [
        "Kuimarisha ngozi na kuifanya iwe laini",
        "Kupunguza alama za uzeee",
        "Kuongeza mng'ao wa ngozi",
        "Kusafisha na kutuliza ngozi"
      ],
      dosage: "Tumia mara 2 kwa siku"
    },
    {
      id: 4,
      name: "LIFE CAPSULES",
      category: "Virutubisho vya Jumla",
      price: "Tsh 100,000",
      rating: 4.7,
      reviews: 134,
      description: "LIFE imetengenezwa na viambata vifuatavyo: Vitamin E, Magnesium, Zinc, Chromium, Guarana extract, Ginger root powder",
      image: "/lovable-uploads/014a176f-f932-4132-99d7-0f1394e009cb.png",
      inStock: true,
      prescription: false,
      benefits: [
        "Inaondoa unene",
        "Inapunguza mafuta mwilini",
        "Inaondoa sumu",
        "Inaweka vizuri mfumo wa mmeng'enyo wa chakula",
        "Inaongeza vitamin E mwilini",
        "Inapunguza hamu ya kula",
        "Inaondoa hamu ya kula",
        "Inaweka vizuri mfumo wa damu",
        "Inaongeza protein mwili"
      ],
      dosage: "1x1 pamoja na chakula"
    },
    {
      id: 5,
      name: "HCG CAPSULES",
      category: "Dawa za Kupunguza Uzito",
      price: "Tsh 100,000",
      rating: 4.8,
      reviews: 167,
      description: "Human Chorionic Gonadotrophin (HCG) - Ni vidokezo ambavyo vimebeba mchanganyiko wa virutubisho ambavyo ni muhimu kwa mtu ambae anahitaji kupungua na mwili wake kuwa na afya",
      image: "/lovable-uploads/7d68ccaa-6701-4824-a674-9f0d9f158b90.png",
      inStock: true,
      prescription: false,
      benefits: [
        "Inaondoa sumu zote mwilini",
        "Zinaondoa mafuta",
        "Inatoa nyama uzembe",
        "Inapunguza uzito",
        "Inapunguza hamu ya kula kwa kiwango kikubwa",
        "Inaongeza protini ya kutosha mwilini",
        "Inaweka mzunguko wa damu ukae vizuri",
        "Inaleta usingiizi mzuri"
      ],
      dosage: "1X2 bila kula chochote"
    },
    {
      id: 6,
      name: "SLEEP N LOOSE",
      category: "Dawa za Usingizi na Kupunguza Uzito",
      price: "Tsh 100,000",
      rating: 4.5,
      reviews: 98,
      description: "Hivi ni vidokezo mahsusi vinavotumika kwajili ya kupunguza uzito, vinatumika usiku wakati wa kulala ukiwa hujala kitu chochote",
      image: "/lovable-uploads/305f94fb-8431-4ca8-8ced-4bc44479fee1.png",
      inStock: true,
      prescription: false,
      benefits: [
        "Inaleta usingiizi mzuri",
        "Inaondoa mafuta na nyama zembe",
        "Inapunguza uzito",
        "Inaweka vizuri mfumo wa mmeng'enyo wa chakula",
        "Inaongeza protini ya kutosha mwilini",
        "Inaweka vizuri mfumo wa mzunguko wa damu",
        "Inapunguza hamu ya kula",
        "Inasaidia kuweka hormones vizuri",
        "Inaongeza kinga ya mwili"
      ],
      dosage: "Unatumia vidokezo 2x1 ukiwa hujala chochote unaingia kulala",
      ingredients: "Raspberry keytone, L-arginine, Saffron Extract, L-Glutamine, Ganoderma lucidium, Melatonin"
    },
    {
      id: 7,
      name: "TeDIVINA DETOX TEA",
      category: "Chai ya Kusafisha Mwili",
      price: "Tsh 150,000",
      rating: 4.6,
      reviews: 145,
      description: "TeDivina Original Detox Tea - Chai ya asilia ya kusafisha mwili na kuimarisha afya",
      image: "/lovable-uploads/0e1bae9b-db5a-4c12-902d-4d5c1d658bff.png",
      inStock: true,
      prescription: false,
      benefits: [
        "Husaidia kuondoa sumu mwilini",
        "Husaidia kurudisha kumbukumbu haswa kwa wazee",
        "Husaidia kuweka uwiano sawa wa sukari ni nzuri kwa watu wenye sukari",
        "Husaidia kusafisha ini na kuongeza ufanisi wake",
        "Husaidia unyaaji kazi wa figo na kusafisha figo",
        "Husaidia kupambana na maambukizi ya bacteria na fungus chronic",
        "Husaidia watu wenye sickle cell",
        "Husaidia kuweka sawa mfumo wa mmeng'enyo wa chakula",
        "Husaidia kuweka mfumo wa hormones sawa"
      ],
      dosage: "Tumia mara 2 kwa siku"
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
      
      {/* Moving Background Pattern */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div 
          className="w-[200%] h-full bg-repeat animate-slow-scroll"
          style={{
            backgroundImage: `url('/lovable-uploads/95bb5660-faa2-4397-9e36-0a380f9ecca2.png')`,
            backgroundSize: '400px 400px',
            animation: 'scrollBackground 100s linear infinite'
          }}
        ></div>
      </div>

      <div className="relative z-10">
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
              Dawa Zetu za Vida Divina
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {medicines.map((medicine) => (
              <Card key={medicine.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <img
                    src={medicine.image}
                    alt={medicine.name}
                    className="w-full h-64 object-contain bg-white group-hover:scale-105 transition-transform duration-300 p-4"
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

                  <div className="bg-vida-cream/50 p-4 rounded-lg mb-4">
                    <h4 className="font-semibold text-vida-burgundy mb-2">Faida za Dawa:</h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {medicine.benefits?.slice(0, 3).map((benefit, index) => (
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
                    className="w-full bg-vida-burgundy hover:bg-vida-burgundy-dark text-white"
                    disabled={!medicine.inStock}
                    onClick={() => setSelectedMedicine(medicine)}
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Omba Dawa Hii
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
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

export default Medicines;
