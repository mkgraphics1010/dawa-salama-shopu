
import { Pill, Heart, Brain, Bone, Eye, Baby } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const MedicineCategories = () => {
  const categories = [
    {
      icon: <Heart className="h-8 w-8 text-vida-burgundy" />,
      title: "Dawa za Moyo",
      description: "Dawa za kusaidia afya ya moyo na mishipa ya damu",
      count: "45+ Dawa"
    },
    {
      icon: <Brain className="h-8 w-8 text-vida-burgundy" />,
      title: "Dawa za Ubongo",
      description: "Dawa za kusaidia kazi za akili na ubongo",
      count: "32+ Dawa"
    },
    {
      icon: <Bone className="h-8 w-8 text-vida-burgundy" />,
      title: "Dawa za Mifupa",
      description: "Dawa za kuimarisha mifupa na viungo",
      count: "28+ Dawa"
    },
    {
      icon: <Eye className="h-8 w-8 text-vida-burgundy" />,
      title: "Dawa za Macho",
      description: "Dawa za kusaidia afya ya macho na kuona",
      count: "20+ Dawa"
    },
    {
      icon: <Baby className="h-8 w-8 text-vida-burgundy" />,
      title: "Dawa za Watoto",
      description: "Dawa maalum za watoto na vipimo vyao",
      count: "38+ Dawa"
    },
    {
      icon: <Pill className="h-8 w-8 text-vida-burgundy" />,
      title: "Dawa za Kawaida",
      description: "Dawa za kila siku na za haraka",
      count: "65+ Dawa"
    }
  ];

  return (
    <section id="categories" className="py-16 bg-vida-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-vida-burgundy mb-4">
            Aina za Dawa
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Tunauza aina mbalimbali za dawa za kimataifa zinazofaa kwa mahitaji yako ya kiafya
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer border-l-4 border-l-vida-burgundy">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-vida-burgundy/10 rounded-full group-hover:bg-vida-burgundy/20 transition-colors duration-300">
                    {category.icon}
                  </div>
                </div>
                <CardTitle className="text-xl text-vida-burgundy">
                  {category.title}
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  {category.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm font-semibold text-vida-burgundy bg-vida-burgundy/10 py-2 px-4 rounded-full inline-block">
                  {category.count}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MedicineCategories;
