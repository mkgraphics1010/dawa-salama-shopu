
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const ContactSection = () => {
  const whatsappNumber = "+255 717 677 298";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=Hujambo, nina mahitaji ya dawa na ushauri wa kiafya`;

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-vida-burgundy" />,
      title: "Simu",
      details: ["+255 123 456 789", "+255 987 654 321"],
      description: "Piga simu wakati wowote"
    },
    {
      icon: <MessageCircle className="h-6 w-6 text-green-600" />,
      title: "WhatsApp",
      details: [whatsappNumber],
      description: "Tuma ujumbe wa haraka",
      isWhatsApp: true
    },
    {
      icon: <Mail className="h-6 w-6 text-vida-burgundy" />,
      title: "Barua Pepe",
      details: ["info@vidadivina.co.tz", "orders@vidadivina.co.tz"],
      description: "Tuma barua pepe yako"
    },
    {
      icon: <MapPin className="h-6 w-6 text-vida-burgundy" />,
      title: "Mahali",
      details: ["Mtaa wa Kariakoo", "Dar es Salaam, Tanzania"],
      description: "Tembelea duka letu"
    },
    {
      icon: <Clock className="h-6 w-6 text-vida-burgundy" />,
      title: "Muda wa Kufunguka",
      details: ["Jumatatu - Jumamosi: 8:00 - 20:00", "Jumapili: 9:00 - 18:00"],
      description: "Tunafunguka kila siku"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-vida-cream to-vida-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23b91c1c%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-vida-burgundy to-vida-burgundy-light bg-clip-text text-transparent mb-6">
            Mawasiliano
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-vida-burgundy to-vida-burgundy-light mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Tuko tayari kukusaidia kwa mahitaji yako yote ya kiafya. Wasiliana nasi leo kupitia njia yoyote unayopendelea
          </p>
        </div>

        {/* WhatsApp CTA Banner */}
        <div className="mb-12">
          <Card className="bg-gradient-to-r from-green-50 to-green-100 border-2 border-green-200 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="text-center md:text-left mb-6 md:mb-0">
                  <h3 className="text-2xl font-bold text-green-800 mb-2">
                    Wasiliana Nasi Haraka kupitia WhatsApp!
                  </h3>
                  <p className="text-green-700 text-lg">
                    Pata huduma za haraka za ushauri wa dawa na maagizo ya ununuzi
                  </p>
                </div>
                <Button 
                  onClick={() => window.open(whatsappLink, '_blank')}
                  className="bg-green-600 hover:bg-green-700 text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  size="lg"
                >
                  <MessageCircle className="h-6 w-6 mr-3" />
                  Anza Mazungumzo
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-vida-burgundy mb-8">
              Habari za Mawasiliano
            </h3>
            
            {contactInfo.map((info, index) => (
              <Card 
                key={index} 
                className={`border-l-4 ${info.isWhatsApp ? 'border-l-green-600 bg-green-50/50' : 'border-l-vida-burgundy bg-vida-burgundy/5'} hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]`}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 ${info.isWhatsApp ? 'bg-green-100' : 'bg-vida-burgundy/10'} rounded-xl shadow-md`}>
                      {info.icon}
                    </div>
                    <div>
                      <CardTitle className={`text-xl ${info.isWhatsApp ? 'text-green-800' : 'text-vida-burgundy'}`}>
                        {info.title}
                      </CardTitle>
                      <CardDescription className="text-base font-medium">
                        {info.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-foreground font-semibold text-lg mb-1">
                      {detail}
                    </p>
                  ))}
                  {info.isWhatsApp && (
                    <Button 
                      onClick={() => window.open(whatsappLink, '_blank')}
                      variant="outline"
                      className="mt-3 border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                      size="sm"
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Fungua WhatsApp
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Enhanced Contact Form */}
          <div>
            <Card className="shadow-2xl border-2 border-vida-burgundy/20 hover:border-vida-burgundy/40 transition-all duration-300">
              <CardHeader className="bg-gradient-to-r from-vida-burgundy to-vida-burgundy-light text-white rounded-t-lg">
                <CardTitle className="text-3xl font-bold">
                  Tuma Ujumbe
                </CardTitle>
                <CardDescription className="text-vida-cream text-lg">
                  Jaza fomu hii na tutatuma jibu haraka kuliko ulivyotarajia
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName" className="text-base font-semibold text-vida-burgundy">Jina la Kwanza</Label>
                    <Input id="firstName" placeholder="Jina lako la kwanza" className="mt-2 border-2 focus:border-vida-burgundy" />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-base font-semibold text-vida-burgundy">Jina la Mwisho</Label>
                    <Input id="lastName" placeholder="Jina lako la mwisho" className="mt-2 border-2 focus:border-vida-burgundy" />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-base font-semibold text-vida-burgundy">Barua Pepe</Label>
                  <Input id="email" type="email" placeholder="barua@mfano.com" className="mt-2 border-2 focus:border-vida-burgundy" />
                </div>
                
                <div>
                  <Label htmlFor="phone" className="text-base font-semibold text-vida-burgundy">Nambari ya Simu</Label>
                  <Input id="phone" type="tel" placeholder="+255 123 456 789" className="mt-2 border-2 focus:border-vida-burgundy" />
                </div>
                
                <div>
                  <Label htmlFor="subject" className="text-base font-semibold text-vida-burgundy">Mada</Label>
                  <Input id="subject" placeholder="Mada ya ujumbe wako" className="mt-2 border-2 focus:border-vida-burgundy" />
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-base font-semibold text-vida-burgundy">Ujumbe</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Andika ujumbe wako hapa..." 
                    rows={6}
                    className="mt-2 border-2 focus:border-vida-burgundy resize-none"
                  />
                </div>
                
                <Button className="w-full bg-gradient-to-r from-vida-burgundy to-vida-burgundy-light hover:from-vida-burgundy-dark hover:to-vida-burgundy text-white font-bold text-lg py-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                  <Send className="h-5 w-5 mr-3" />
                  Tuma Ujumbe Sasa
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
