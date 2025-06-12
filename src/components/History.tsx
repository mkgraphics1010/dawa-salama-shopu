
import { Play, Calendar, Award, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const History = () => {
  return (
    <section id="history" className="py-16 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
            Historia ya Frank Vida Divina
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Safari yetu ya kutoa huduma za afya za hali ya juu na kujenga mtandao mkuu wa wasambazaji Tanzania
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Video Section */}
          <div className="relative">
            <div className="aspect-video bg-gradient-to-r from-green-600 to-green-700 rounded-xl shadow-2xl flex items-center justify-center">
              <div className="text-center text-white">
                <Play className="h-16 w-16 mx-auto mb-4 opacity-80" />
                <p className="text-lg font-semibold">Video ya Historia</p>
                <p className="text-sm opacity-90">Itaongezwa hivi karibuni</p>
              </div>
            </div>
            <Button 
              className="absolute inset-0 w-full h-full bg-transparent hover:bg-white/10 transition-all duration-300"
              onClick={() => {
                // Video link will be added here later
                console.log('Video ya historia itaongezwa hapa');
              }}
            >
              <span className="sr-only">Cheza video ya historia</span>
            </Button>
          </div>

          {/* Story Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-green-800">Safari Yetu</h3>
            <p className="text-gray-700 leading-relaxed">
              Frank Vida Divina alianza safari yake ya kujenga biashara ya afya mwaka 2020. 
              Kwa kutumia ujuzi wake wa network marketing na passion yake ya kusaidia watu kupata afya bora, 
              amejenga timu kubwa ya wasambazaji ambao wanauza bidhaa za Vida Divina kote Tanzania.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Leo, Frank ni kiongozi mkuu wa Vida Divina Tanzania na anaongoza timu ya wasambazaji zaidi ya 1000 
              ambao wamebadilisha maisha yao kupitia biashara hii ya afya na mapato.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-4 text-center">
                  <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-green-800">1000+</div>
                  <div className="text-sm text-green-600">Wasambazaji</div>
                </CardContent>
              </Card>
              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-4 text-center">
                  <Award className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-green-800">#1</div>
                  <div className="text-sm text-green-600">Kiongozi Tanzania</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-green-800 text-center mb-8">Ratiba ya Historia</h3>
          <div className="space-y-8">
            {[
              {
                year: "2020",
                title: "Mwanzo wa Safari",
                description: "Frank alianza kujifunza kuhusu bidhaa za Vida Divina na network marketing"
              },
              {
                year: "2021", 
                title: "Timu ya Kwanza",
                description: "Alijenga timu yake ya kwanza ya wasambazaji 50 na kufikia rank ya Gold"
              },
              {
                year: "2022",
                title: "Ukuaji Mkubwa", 
                description: "Timu ilikua hadi wasambazaji 300 na Frank akafika rank ya Diamond"
              },
              {
                year: "2023",
                title: "Kiongozi wa Tanzania",
                description: "Frank akawa kiongozi mkuu wa Vida Divina Tanzania na timu ya wasambazaji 700"
              },
              {
                year: "2024",
                title: "Miaka 1000+ Wasambazaji",
                description: "Leo Frank ana timu kubwa zaidi ya wasambazaji 1000 kote Tanzania"
              }
            ].map((milestone, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-lg font-bold text-green-600">{milestone.year}</span>
                    <span className="text-lg font-semibold text-gray-800">{milestone.title}</span>
                  </div>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
