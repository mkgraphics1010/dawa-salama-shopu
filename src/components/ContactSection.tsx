
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-vida-burgundy" />,
      title: "Simu",
      details: ["+255 123 456 789", "+255 987 654 321"],
      description: "Piga simu wakati wowote"
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
    <section id="contact" className="py-16 bg-vida-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-vida-burgundy mb-4">
            Mawasiliano
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Tuko tayari kukusaidia kwa mahitaji yako yote ya kiafya. Wasiliana nasi leo
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-vida-burgundy mb-6">
              Habari za Mawasiliano
            </h3>
            
            {contactInfo.map((info, index) => (
              <Card key={index} className="border-l-4 border-l-vida-burgundy">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-vida-burgundy/10 rounded-lg">
                      {info.icon}
                    </div>
                    <div>
                      <CardTitle className="text-lg text-vida-burgundy">
                        {info.title}
                      </CardTitle>
                      <CardDescription className="text-sm">
                        {info.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-foreground font-medium">
                      {detail}
                    </p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-vida-burgundy">
                  Tuma Ujumbe
                </CardTitle>
                <CardDescription>
                  Jaza fomu hii na tutatuma jibu haraka
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">Jina la Kwanza</Label>
                    <Input id="firstName" placeholder="Jina lako la kwanza" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Jina la Mwisho</Label>
                    <Input id="lastName" placeholder="Jina lako la mwisho" />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email">Barua Pepe</Label>
                  <Input id="email" type="email" placeholder="barua@mfano.com" />
                </div>
                
                <div>
                  <Label htmlFor="phone">Nambari ya Simu</Label>
                  <Input id="phone" type="tel" placeholder="+255 123 456 789" />
                </div>
                
                <div>
                  <Label htmlFor="subject">Mada</Label>
                  <Input id="subject" placeholder="Mada ya ujumbe wako" />
                </div>
                
                <div>
                  <Label htmlFor="message">Ujumbe</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Andika ujumbe wako hapa..." 
                    rows={5}
                  />
                </div>
                
                <Button className="w-full bg-vida-burgundy hover:bg-vida-burgundy-dark text-white">
                  <Send className="h-4 w-4 mr-2" />
                  Tuma Ujumbe
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
