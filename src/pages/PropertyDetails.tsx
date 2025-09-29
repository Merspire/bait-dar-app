import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { 
  Heart, 
  Share2, 
  Phone, 
  MessageSquare, 
  MapPin, 
  Bed, 
  Bath, 
  Square, 
  Calendar,
  Car,
  Wifi,
  Shield,
  Zap,
  Home,
  Trees,
  Dumbbell,
  ShoppingCart,
  GraduationCap,
  Hospital,
  ArrowLeft,
  ArrowRight
} from "lucide-react";

const PropertyDetails = () => {
  const [language, setLanguage] = useState<'ar' | 'en'>('ar');
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  
  const isRTL = language === 'ar';
  const getText = (ar: string, en: string) => language === 'ar' ? ar : en;
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const property = {
    id: '1',
    title: 'شقة فاخرة بالتجمع الخامس مع إطلالة رائعة',
    titleEn: 'Luxury Apartment in Fifth Settlement with Amazing View',
    location: 'التجمع الخامس، القاهرة الجديدة',
    locationEn: 'Fifth Settlement, New Cairo',
    price: 3500000,
    currency: 'ج.م',
    type: 'شقة',
    typeEn: 'Apartment',
    bedrooms: 3,
    bathrooms: 2,
    area: 150,
    garages: 1,
    floor: 8,
    totalFloors: 12,
    yearBuilt: 2020,
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800',
      'https://images.unsplash.com/photo-1555636222-cae831e670b3?w=800',
      'https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?w=800',
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800'
    ],
    description: 'شقة فاخرة بالتجمع الخامس في موقع مميز مع إطلالة رائعة على الحديقة المركزية. الشقة مجهزة بأحدث المرافق والتشطيبات العالية الجودة.',
    descriptionEn: 'Luxury apartment in Fifth Settlement in a prime location with amazing view of the central garden. The apartment is equipped with the latest facilities and high-quality finishes.',
    agent: {
      name: 'أحمد محمد',
      nameEn: 'Ahmed Mohamed',
      phone: '01234567890',
      email: 'ahmed@example.com',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100',
      company: 'العقارية المتميزة',
      companyEn: 'Premium Real Estate'
    },
    features: [
      { icon: Wifi, name: 'إنترنت عالي السرعة', nameEn: 'High Speed Internet' },
      { icon: Shield, name: 'أمان 24/7', nameEn: '24/7 Security' },
      { icon: Zap, name: 'مولد كهرباء', nameEn: 'Power Generator' },
      { icon: Car, name: 'جراج مغطى', nameEn: 'Covered Parking' },
      { icon: Trees, name: 'حديقة', nameEn: 'Garden' },
      { icon: Dumbbell, name: 'نادي رياضي', nameEn: 'Gym' }
    ],
    nearbyPlaces: [
      { icon: ShoppingCart, name: 'مول سيتي ستارز', nameEn: 'City Stars Mall', distance: '5 دقائق', distanceEn: '5 minutes' },
      { icon: GraduationCap, name: 'الجامعة الأمريكية', nameEn: 'AUC', distance: '10 دقائق', distanceEn: '10 minutes' },
      { icon: Hospital, name: 'مستشفى التجمع', nameEn: 'Tajamoa Hospital', distance: '8 دقائق', distanceEn: '8 minutes' },
      { icon: Home, name: 'نادي الصيد', nameEn: 'Hunting Club', distance: '15 دقيقة', distanceEn: '15 minutes' }
    ]
  };

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length);
  };

  return (
    <div className="min-h-screen bg-background" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Header */}
      <header className="bg-card border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" className="gap-2">
              <ArrowIcon className="h-4 w-4" />
              {getText('العودة للبحث', 'Back to Search')}
            </Button>
            <Button
              variant="outline"
              onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
            >
              {language === 'ar' ? 'English' : 'العربية'}
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image Gallery */}
            <Card className="overflow-hidden">
              <div className="relative">
                <img 
                  src={property.images[activeImageIndex]} 
                  alt={getText(property.title, property.titleEn)}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-between p-4">
                  <Button size="sm" variant="ghost" onClick={prevImage} className="bg-white/80 text-foreground hover:bg-white">
                    <ArrowLeft className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="ghost" onClick={nextImage} className="bg-white/80 text-foreground hover:bg-white">
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
                <div className="absolute top-4 right-4 flex gap-2">
                  <Button size="sm" variant="ghost" className="bg-white/80 text-foreground hover:bg-white">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="ghost" className="bg-white/80 text-foreground hover:bg-white">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
                <Badge className="absolute bottom-4 right-4 bg-primary">
                  {activeImageIndex + 1} / {property.images.length}
                </Badge>
              </div>
              
              {/* Thumbnail Strip */}
              <div className="p-4">
                <div className="flex gap-2 overflow-x-auto">
                  {property.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt=""
                      className={`w-20 h-16 object-cover rounded cursor-pointer transition-all ${
                        index === activeImageIndex ? 'ring-2 ring-primary' : 'opacity-70 hover:opacity-100'
                      }`}
                      onClick={() => setActiveImageIndex(index)}
                    />
                  ))}
                </div>
              </div>
            </Card>

            {/* Property Details */}
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl mb-2">
                      {getText(property.title, property.titleEn)}
                    </CardTitle>
                    <p className="text-muted-foreground flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {getText(property.location, property.locationEn)}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-primary">
                      {property.price.toLocaleString()} {property.currency}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {getText('سعر البيع', 'Sale Price')}
                    </p>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="text-center p-3 bg-muted rounded-lg">
                    <Bed className="h-6 w-6 mx-auto mb-2 text-primary" />
                    <div className="font-semibold">{property.bedrooms}</div>
                    <div className="text-xs text-muted-foreground">{getText('غرف نوم', 'Bedrooms')}</div>
                  </div>
                  <div className="text-center p-3 bg-muted rounded-lg">
                    <Bath className="h-6 w-6 mx-auto mb-2 text-primary" />
                    <div className="font-semibold">{property.bathrooms}</div>
                    <div className="text-xs text-muted-foreground">{getText('حمامات', 'Bathrooms')}</div>
                  </div>
                  <div className="text-center p-3 bg-muted rounded-lg">
                    <Square className="h-6 w-6 mx-auto mb-2 text-primary" />
                    <div className="font-semibold">{property.area}</div>
                    <div className="text-xs text-muted-foreground">{getText('م²', 'm²')}</div>
                  </div>
                  <div className="text-center p-3 bg-muted rounded-lg">
                    <Car className="h-6 w-6 mx-auto mb-2 text-primary" />
                    <div className="font-semibold">{property.garages}</div>
                    <div className="text-xs text-muted-foreground">{getText('جراج', 'Garage')}</div>
                  </div>
                </div>

                <Tabs defaultValue="description" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="description">{getText('الوصف', 'Description')}</TabsTrigger>
                    <TabsTrigger value="features">{getText('المرافق', 'Features')}</TabsTrigger>
                    <TabsTrigger value="location">{getText('الموقع', 'Location')}</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="description" className="mt-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {getText(property.description, property.descriptionEn)}
                    </p>
                    <div className="grid grid-cols-2 gap-4 mt-6 text-sm">
                      <div>
                        <span className="text-muted-foreground">{getText('الطابق:', 'Floor:')}</span>
                        <span className="ml-2 font-medium">{property.floor} / {property.totalFloors}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">{getText('سنة البناء:', 'Year Built:')}</span>
                        <span className="ml-2 font-medium">{property.yearBuilt}</span>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="features" className="mt-4">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {property.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                          <feature.icon className="h-5 w-5 text-primary" />
                          <span className="text-sm">{getText(feature.name, feature.nameEn)}</span>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="location" className="mt-4">
                    <div className="space-y-4">
                      <h4 className="font-semibold">{getText('الأماكن القريبة', 'Nearby Places')}</h4>
                      <div className="grid gap-3">
                        {property.nearbyPlaces.map((place, index) => (
                          <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                            <div className="flex items-center gap-3">
                              <place.icon className="h-5 w-5 text-primary" />
                              <span>{getText(place.name, place.nameEn)}</span>
                            </div>
                            <Badge variant="secondary">
                              {getText(place.distance, place.distanceEn)}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Agent Card */}
            <Card>
              <CardHeader>
                <CardTitle>{getText('تواصل مع الوسيط', 'Contact Agent')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <img
                    src={property.agent.avatar}
                    alt={getText(property.agent.name, property.agent.nameEn)}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold">{getText(property.agent.name, property.agent.nameEn)}</div>
                    <div className="text-sm text-muted-foreground">
                      {getText(property.agent.company, property.agent.companyEn)}
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-3">
                  <Button className="w-full gap-2">
                    <Phone className="h-4 w-4" />
                    {getText('اتصال', 'Call Now')}
                  </Button>
                  <Button variant="outline" className="w-full gap-2">
                    <MessageSquare className="h-4 w-4" />
                    {getText('رسالة واتساب', 'WhatsApp')}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Info */}
            <Card>
              <CardHeader>
                <CardTitle>{getText('معلومات سريعة', 'Quick Info')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{getText('نوع العقار:', 'Property Type:')}</span>
                  <span>{getText(property.type, property.typeEn)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{getText('المساحة:', 'Area:')}</span>
                  <span>{property.area} {getText('م²', 'm²')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{getText('الطابق:', 'Floor:')}</span>
                  <span>{property.floor}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{getText('سنة البناء:', 'Year Built:')}</span>
                  <span>{property.yearBuilt}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{getText('السعر لكل متر:', 'Price per m²:')}</span>
                  <span>{Math.round(property.price / property.area).toLocaleString()} {property.currency}</span>
                </div>
              </CardContent>
            </Card>

            {/* Mortgage Calculator */}
            <Card>
              <CardHeader>
                <CardTitle>{getText('حاسبة القرض', 'Mortgage Calculator')}</CardTitle>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  {getText('احسب القسط الشهري', 'Calculate Monthly Payment')}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;