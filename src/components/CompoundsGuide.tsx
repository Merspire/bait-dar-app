import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface Compound {
  id: string;
  name: string;
  nameEn: string;
  location: string;
  locationEn: string;
  image: string;
  priceFrom: number;
  currency: string;
  types: string[];
  typesEn: string[];
  featured?: boolean;
}

interface CompoundsGuideProps {
  language: 'ar' | 'en';
}

const mockCompounds: Compound[] = [
  {
    id: '1',
    name: 'O West - او ويست',
    nameEn: 'O West',
    location: 'طريق الواحات - 6 أكتوبر',
    locationEn: 'Wahat Road - 6th October',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400',
    priceFrom: 6953000,
    currency: 'ج.م',
    types: ['ستوديو', 'شقق', 'بنتهاوس', 'فلل'],
    typesEn: ['Studio', 'Apartments', 'Penthouse', 'Villas'],
    featured: true
  },
  {
    id: '2',
    name: 'مور ريزيدنس',
    nameEn: 'More Residence',
    location: 'التجمع الخامس - القاهرة الجديدة',
    locationEn: 'Fifth Settlement - New Cairo',
    image: 'https://images.unsplash.com/photo-1555636222-cae831e670b3?w=400',
    priceFrom: 0,
    currency: 'ج.م',
    types: ['شقق', 'دوبلكس'],
    typesEn: ['Apartments', 'Duplex']
  },
  {
    id: '3',
    name: 'ريفرتون',
    nameEn: 'Riverton',
    location: 'التجمع الخامس - القاهرة الجديدة',
    locationEn: 'Fifth Settlement - New Cairo',
    image: 'https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?w=400',
    priceFrom: 4500000,
    currency: 'ج.م',
    types: ['ستوديو', 'شقق'],
    typesEn: ['Studio', 'Apartments']
  },
  {
    id: '4',
    name: 'مدن رأس الحكمة',
    nameEn: 'Modon Ras El Hekma',
    location: 'رأس الحكمة - الساحل الشمالي',
    locationEn: 'Ras El Hekma - North Coast',
    image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=400',
    priceFrom: 15900000,
    currency: 'ج.م',
    types: ['شقق', 'فلل'],
    typesEn: ['Apartments', 'Villas']
  }
];

export const CompoundsGuide = ({ language }: CompoundsGuideProps) => {
  const isRTL = language === 'ar';
  const getText = (ar: string, en: string) => language === 'ar' ? ar : en;
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const formatPrice = (price: number, currency: string) => {
    if (price === 0) return getText('اتصل لمعرفة السعر', 'Call for Price');
    return `${getText('تبدأ من', 'Starting from')} ${price.toLocaleString()} ${currency}`;
  };

  return (
    <section className="py-16 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {getText('دليل المطورين', 'Developers Guide')}
            </h2>
            <p className="text-muted-foreground">
              {getText('اكتشف أفضل المطورين والشركات العقارية المتاحة', 'Discover the best developers and real estate companies available')}
            </p>
          </div>
          <Button variant="outline" className="gap-2">
            {getText('أظهر المزيد', 'Show More')}
            <ArrowIcon className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockCompounds.map((compound) => (
            <Card key={compound.id} className="overflow-hidden hover:shadow-elegant transition-smooth group">
              <div className="relative">
                <img 
                  src={compound.image} 
                  alt={getText(compound.name, compound.nameEn)}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-smooth"
                />
                {compound.featured && (
                  <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground">
                    {getText('مميز', 'Featured')}
                  </Badge>
                )}
              </div>
              
              <CardHeader className="pb-2">
                <h3 className="font-bold text-lg">
                  {getText(compound.name, compound.nameEn)}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {getText(compound.location, compound.locationEn)}
                </p>
              </CardHeader>
              
              <CardContent className="space-y-3">
                <div className="flex flex-wrap gap-1">
                  {(language === 'ar' ? compound.types : compound.typesEn).slice(0, 3).map((type, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {type}
                    </Badge>
                  ))}
                  {compound.types.length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{compound.types.length - 3}
                    </Badge>
                  )}
                </div>
                
                <div className="text-primary font-bold">
                  {formatPrice(compound.priceFrom, compound.currency)}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button size="lg" className="gap-2">
            {getText('اكتشف اكثر', 'Discover More')}
            <ArrowIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};