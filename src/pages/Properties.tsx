import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Share2, Phone, MessageSquare, MapPin, Bed, Bath, Square, Calendar } from "lucide-react";
import { SearchFilters } from "@/components/SearchFilters";

interface Property {
  id: string;
  title: string;
  titleEn: string;
  location: string;
  locationEn: string;
  price: number;
  currency: string;
  type: string;
  typeEn: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  image: string;
  featured?: boolean;
  agent: string;
  agentPhone: string;
  publishDate: string;
}

const mockProperties: Property[] = [
  {
    id: '1',
    title: 'شقة للبيع في التجمع الخامس',
    titleEn: 'Apartment for Sale in Fifth Settlement',
    location: 'التجمع الخامس، القاهرة الجديدة',
    locationEn: 'Fifth Settlement, New Cairo',
    price: 3500000,
    currency: 'ج.م',
    type: 'شقة',
    typeEn: 'Apartment',
    bedrooms: 3,
    bathrooms: 2,
    area: 150,
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400',
    featured: true,
    agent: 'أحمد محمد',
    agentPhone: '01234567890',
    publishDate: '2024-01-15'
  },
  {
    id: '2',
    title: 'فيلا مستقلة بحديقة',
    titleEn: 'Independent Villa with Garden',
    location: '6 أكتوبر، الجيزة',
    locationEn: '6th October, Giza',
    price: 8500000,
    currency: 'ج.م',
    type: 'فيلا',
    typeEn: 'Villa',
    bedrooms: 4,
    bathrooms: 3,
    area: 300,
    image: 'https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?w=400',
    agent: 'سارة أحمد',
    agentPhone: '01098765432',
    publishDate: '2024-01-10'
  },
  {
    id: '3',
    title: 'استوديو في وسط البلد',
    titleEn: 'Studio in Downtown',
    location: 'وسط البلد، القاهرة',
    locationEn: 'Downtown, Cairo',
    price: 1200000,
    currency: 'ج.م',
    type: 'استوديو',
    typeEn: 'Studio',
    bedrooms: 1,
    bathrooms: 1,
    area: 45,
    image: 'https://images.unsplash.com/photo-1555636222-cae831e670b3?w=400',
    agent: 'محمد علي',
    agentPhone: '01187654321',
    publishDate: '2024-01-12'
  }
];

const Properties = () => {
  const [language, setLanguage] = useState<'ar' | 'en'>('ar');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  
  const isRTL = language === 'ar';
  const getText = (ar: string, en: string) => language === 'ar' ? ar : en;

  const formatPrice = (price: number, currency: string) => {
    return `${price.toLocaleString()} ${currency}`;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(language === 'ar' ? 'ar-EG' : 'en-US');
  };

  return (
    <div className="min-h-screen bg-background" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Header */}
      <header className="bg-card border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">
              {getText('البحث في العقارات', 'Property Search')}
            </h1>
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
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <SearchFilters language={language} />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Search Bar */}
            <div className="flex gap-4">
              <Input
                placeholder={getText('ابحث عن عقار...', 'Search for property...')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1"
              />
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">{getText('الأحدث', 'Newest')}</SelectItem>
                  <SelectItem value="price-low">{getText('السعر: الأقل أولاً', 'Price: Low to High')}</SelectItem>
                  <SelectItem value="price-high">{getText('السعر: الأعلى أولاً', 'Price: High to Low')}</SelectItem>
                  <SelectItem value="area">{getText('المساحة', 'Area')}</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Results Count */}
            <div className="text-muted-foreground">
              {getText(`تم العثور على ${mockProperties.length} عقار`, `Found ${mockProperties.length} properties`)}
            </div>

            {/* Properties Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mockProperties.map((property) => (
                <Card key={property.id} className="overflow-hidden hover:shadow-elegant transition-smooth group">
                  <div className="relative">
                    <img 
                      src={property.image} 
                      alt={getText(property.title, property.titleEn)}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-smooth"
                    />
                    {property.featured && (
                      <Badge className="absolute top-3 right-3 bg-primary">
                        {getText('مميز', 'Featured')}
                      </Badge>
                    )}
                    <div className="absolute top-3 left-3 flex gap-2">
                      <Button size="sm" variant="ghost" className="bg-white/80 text-foreground hover:bg-white">
                        <Heart className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="bg-white/80 text-foreground hover:bg-white">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold text-lg line-clamp-2">
                          {getText(property.title, property.titleEn)}
                        </h3>
                        <p className="text-muted-foreground text-sm flex items-center gap-1 mt-1">
                          <MapPin className="h-3 w-3" />
                          {getText(property.location, property.locationEn)}
                        </p>
                      </div>
                      <div className="text-primary font-bold text-lg">
                        {formatPrice(property.price, property.currency)}
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Bed className="h-4 w-4" />
                        <span>{property.bedrooms}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Bath className="h-4 w-4" />
                        <span>{property.bathrooms}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Square className="h-4 w-4" />
                        <span>{property.area} {getText('م²', 'm²')}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t">
                      <div className="text-xs text-muted-foreground flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {formatDate(property.publishDate)}
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="gap-1">
                          <Phone className="h-3 w-3" />
                          {getText('اتصال', 'Call')}
                        </Button>
                        <Button size="sm" variant="outline" className="gap-1">
                          <MessageSquare className="h-3 w-3" />
                          {getText('رسالة', 'Message')}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center py-8">
              <Button size="lg">
                {getText('تحميل المزيد', 'Load More')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Properties;