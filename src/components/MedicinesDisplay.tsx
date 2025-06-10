
import { Star, ShoppingCart, Info } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const MedicinesDisplay = () => {
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
            Dawa Zetu za Vida Divina
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Chagua kutoka kwa mkusanyiko wetu wa dawa za hali ya juu na za uhakika za Vida Divina
          </p>
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

                {/* Maelezo ya Dawa Section */}
                <div className="bg-vida-cream/50 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-vida-burgundy mb-2">Maelezo ya Dawa:</h4>
                  <div className="space-y-2">
                    {medicine.benefits && (
                      <div>
                        <p className="text-xs font-medium text-vida-burgundy mb-1">Faida:</p>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          {medicine.benefits.slice(0, 3).map((benefit, index) => (
                            <li key={index} className="flex items-start">
                              <span className="inline-block w-1 h-1 bg-vida-burgundy rounded-full mt-2 mr-2 flex-shrink-0"></span>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <div>
                      <p className="text-xs font-medium text-vida-burgundy">Matumizi:</p>
                      <p className="text-xs text-muted-foreground">{medicine.dosage}</p>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1 border-vida-burgundy text-vida-burgundy hover:bg-vida-burgundy hover:text-white"
                  >
                    <Info className="h-4 w-4 mr-2" />
                    Maelezo Zaidi
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
