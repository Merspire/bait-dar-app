import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface Developer {
  id: string;
  name: string;
  nameEn: string;
  location: string;
  locationEn: string;
  image: string;
  projectsCount: number;
  types: string[];
  typesEn: string[];
  featured?: boolean;
}

interface CompoundsGuideProps {
  language: 'ar' | 'en';
}

const mockDevelopers: Developer[] = [
  {
    id: '1',
    name: 'بالم هيلز',
    nameEn: 'Palm Hills',
    location: 'القاهرة والساحل الشمالي',
    locationEn: 'Cairo & North Coast',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400',
    projectsCount: 25,
    types: ['كمبوندات سكنية', 'مشاريع ساحلية', 'مولات تجارية'],
    typesEn: ['Residential Compounds', 'Coastal Projects', 'Commercial Malls'],
    featured: true
  },
  {
    id: '2',
    name: 'الأهلي صبور',
    nameEn: 'Al Ahly Sabbour',
    location: 'القاهرة الجديدة والساحل الشمالي',
    locationEn: 'New Cairo & North Coast',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400',
    projectsCount: 18,
    types: ['كمبوندات سكنية', 'فلل فاخرة', 'شقق'],
    typesEn: ['Residential Compounds', 'Luxury Villas', 'Apartments'],
    featured: true
  },
  {
    id: '3',
    name: 'سوديك',
    nameEn: 'SODIC',
    location: 'الشيخ زايد والساحل الشمالي',
    locationEn: 'Sheikh Zayed & North Coast',
    image: 'https://images.unsplash.com/photo-1555636222-cae831e670b3?w=400',
    projectsCount: 22,
    types: ['كمبوندات راقية', 'مشاريع مستدامة', 'مجتمعات متكاملة'],
    typesEn: ['Upscale Compounds', 'Sustainable Projects', 'Integrated Communities'],
    featured: true
  },
  {
    id: '4',
    name: 'إعمار مصر',
    nameEn: 'Emaar Misr',
    location: 'القاهرة الجديدة',
    locationEn: 'New Cairo',
    image: 'https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?w=400',
    projectsCount: 15,
    types: ['أبراج سكنية', 'كمبوندات فاخرة', 'مشاريع تجارية'],
    typesEn: ['Residential Towers', 'Luxury Compounds', 'Commercial Projects']
  },
  {
    id: '5',
    name: 'مصر إيطاليا',
    nameEn: 'Misr Italia Properties',
    location: 'القاهرة الجديدة',
    locationEn: 'New Cairo',
    image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=400',
    projectsCount: 12,
    types: ['كمبوندات سكنية', 'مشاريع عائلية', 'مناطق ترفيهية'],
    typesEn: ['Residential Compounds', 'Family Projects', 'Entertainment Areas']
  },
  {
    id: '6',
    name: 'طلعت مصطفى',
    nameEn: 'TMG - Talaat Moustafa Group',
    location: 'القاهرة والساحل الشمالي',
    locationEn: 'Cairo & North Coast',
    image: 'https://images.unsplash.com/photo-1464146072230-91cabc968266?w=400',
    projectsCount: 30,
    types: ['مدن متكاملة', 'كمبوندات ضخمة', 'مشاريع سياحية'],
    typesEn: ['Integrated Cities', 'Mega Compounds', 'Tourist Projects'],
    featured: true
  },
  {
    id: '7',
    name: 'ماونتن فيو',
    nameEn: 'Mountain View',
    location: 'القاهرة الجديدة والساحل الشمالي',
    locationEn: 'New Cairo & North Coast',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400',
    projectsCount: 16,
    types: ['كمبوندات سكنية', 'مشاريع ساحلية', 'منتجعات'],
    typesEn: ['Residential Compounds', 'Coastal Projects', 'Resorts']
  },
  {
    id: '8',
    name: 'لافيستا',
    nameEn: 'La Vista Developments',
    location: 'الساحل الشمالي والعين السخنة',
    locationEn: 'North Coast & Ain Sokhna',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400',
    projectsCount: 10,
    types: ['قرى سياحية', 'منتجعات ساحلية', 'شاليهات'],
    typesEn: ['Tourist Villages', 'Coastal Resorts', 'Chalets']
  },
  {
    id: '9',
    name: 'حسن علام',
    nameEn: 'Hassan Allam Properties',
    location: 'القاهرة الجديدة',
    locationEn: 'New Cairo',
    image: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?w=400',
    projectsCount: 8,
    types: ['كمبوندات حديثة', 'مشاريع ذكية', 'مجمعات تجارية'],
    typesEn: ['Modern Compounds', 'Smart Projects', 'Commercial Complexes']
  }
];

export const CompoundsGuide = ({ language }: CompoundsGuideProps) => {
  const isRTL = language === 'ar';
  const getText = (ar: string, en: string) => language === 'ar' ? ar : en;
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const formatProjectsCount = (count: number) => {
    return `${count} ${getText('مشروع', 'Projects')}`;
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
          <Link to="/developers">
            <Button variant="outline" className="gap-2">
              {getText('عرض جميع المطورين', 'Show All Developers')}
              <ArrowIcon className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockDevelopers.slice(0, 4).map((developer) => (
            <Card key={developer.id} className="overflow-hidden hover:shadow-elegant transition-smooth group">
              <div className="relative">
                <img 
                  src={developer.image} 
                  alt={getText(developer.name, developer.nameEn)}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-smooth"
                />
                {developer.featured && (
                  <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground">
                    {getText('مميز', 'Featured')}
                  </Badge>
                )}
              </div>
              
              <CardHeader className="pb-2">
                <h3 className="font-bold text-lg">
                  {getText(developer.name, developer.nameEn)}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {getText(developer.location, developer.locationEn)}
                </p>
              </CardHeader>
              
              <CardContent className="space-y-3">
                <div className="flex flex-wrap gap-1">
                  {(language === 'ar' ? developer.types : developer.typesEn).slice(0, 3).map((type, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {type}
                    </Badge>
                  ))}
                  {developer.types.length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{developer.types.length - 3}
                    </Badge>
                  )}
                </div>
                
                <div className="text-primary font-bold">
                  {formatProjectsCount(developer.projectsCount)}
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