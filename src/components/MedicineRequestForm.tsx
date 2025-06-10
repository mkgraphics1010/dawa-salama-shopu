
import { useState } from 'react';
import { ShoppingCart, Plus, Minus, Calendar } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';

const MedicineRequestForm = () => {
  const [requestItems, setRequestItems] = useState([
    { medicine: '', quantity: 1, urgency: 'normal' }
  ]);

  const addRequestItem = () => {
    setRequestItems([...requestItems, { medicine: '', quantity: 1, urgency: 'normal' }]);
  };

  const removeRequestItem = (index: number) => {
    if (requestItems.length > 1) {
      setRequestItems(requestItems.filter((_, i) => i !== index));
    }
  };

  const updateRequestItem = (index: number, field: string, value: any) => {
    const updatedItems = requestItems.map((item, i) => 
      i === index ? { ...item, [field]: value } : item
    );
    setRequestItems(updatedItems);
  };

  return (
    <section id="request" className="py-16 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-vida-burgundy mb-4">
            Omba Dawa
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Jaza fomu hii kuomba dawa unazohitaji. Tutatuma dawa zako haraka
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-vida-burgundy flex items-center">
              <ShoppingCart className="h-6 w-6 mr-3" />
              Fomu ya Kuomba Dawa
            </CardTitle>
            <CardDescription>
              Tafadhali jaza habari zako na dawa unazohitaji
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Personal Information */}
            <div className="bg-vida-cream p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-vida-burgundy mb-4">
                Habari za Kibinafsi
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="fullName">Jina Kamili</Label>
                  <Input id="fullName" placeholder="Jina lako kamili" />
                </div>
                <div>
                  <Label htmlFor="phone">Nambari ya Simu</Label>
                  <Input id="phone" type="tel" placeholder="+255 123 456 789" />
                </div>
                <div>
                  <Label htmlFor="email">Barua Pepe</Label>
                  <Input id="email" type="email" placeholder="barua@mfano.com" />
                </div>
                <div>
                  <Label htmlFor="age">Umri</Label>
                  <Input id="age" type="number" placeholder="Umri wako" />
                </div>
              </div>
            </div>

            {/* Delivery Information */}
            <div className="bg-vida-cream p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-vida-burgundy mb-4">
                Habari za Uongozaji
              </h3>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="address">Anwani Kamili</Label>
                  <Textarea id="address" placeholder="Andika anwani yako kamili..." rows={3} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="city">Jiji</Label>
                    <Input id="city" placeholder="Jiji lako" />
                  </div>
                  <div>
                    <Label htmlFor="deliveryTime">Muda wa Uongozaji</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Chagua muda" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="morning">Asubuhi (8:00 - 12:00)</SelectItem>
                        <SelectItem value="afternoon">Mchana (12:00 - 17:00)</SelectItem>
                        <SelectItem value="evening">Jioni (17:00 - 20:00)</SelectItem>
                        <SelectItem value="anytime">Wakati wowote</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </div>

            {/* Medicine Requests */}
            <div className="bg-vida-cream p-6 rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-vida-burgundy">
                  Dawa Zinazohitajika
                </h3>
                <Button
                  onClick={addRequestItem}
                  variant="outline"
                  size="sm"
                  className="border-vida-burgundy text-vida-burgundy hover:bg-vida-burgundy hover:text-white"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Ongeza Dawa
                </Button>
              </div>

              <div className="space-y-4">
                {requestItems.map((item, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg border">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                      <div className="md:col-span-2">
                        <Label htmlFor={`medicine-${index}`}>Jina la Dawa</Label>
                        <Input
                          id={`medicine-${index}`}
                          placeholder="Andika jina la dawa..."
                          value={item.medicine}
                          onChange={(e) => updateRequestItem(index, 'medicine', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor={`quantity-${index}`}>Kiasi</Label>
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateRequestItem(index, 'quantity', Math.max(1, item.quantity - 1))}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <Input
                            id={`quantity-${index}`}
                            type="number"
                            min="1"
                            value={item.quantity}
                            onChange={(e) => updateRequestItem(index, 'quantity', parseInt(e.target.value) || 1)}
                            className="text-center w-20"
                          />
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateRequestItem(index, 'quantity', item.quantity + 1)}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <Select
                            value={item.urgency}
                            onValueChange={(value) => updateRequestItem(index, 'urgency', value)}
                          >
                            <SelectTrigger className="w-24">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="normal">Kawaida</SelectItem>
                              <SelectItem value="urgent">Haraka</SelectItem>
                            </SelectContent>
                          </Select>
                          {requestItems.length > 1 && (
                            <Button
                              variant="destructive"
                              size="sm"
                              onClick={() => removeRequestItem(index)}
                            >
                              <Minus className="h-4 w-4" />
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Information */}
            <div>
              <Label htmlFor="notes">Maelezo ya Ziada</Label>
              <Textarea
                id="notes"
                placeholder="Ongeza maelezo yoyote muhimu kuhusu dawa unazohitaji..."
                rows={4}
              />
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms" className="text-sm">
                Nakubali masharti na taratibu za huduma za Vida Divina
              </Label>
            </div>

            {/* Submit Button */}
            <Button className="w-full bg-vida-burgundy hover:bg-vida-burgundy-dark text-white py-3">
              <ShoppingCart className="h-5 w-5 mr-2" />
              Tuma Ombi la Dawa
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default MedicineRequestForm;
