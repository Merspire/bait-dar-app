import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Building, Home, MapPin } from "lucide-react";

interface PopularAreasProps {
  language: 'ar' | 'en';
}

interface AreaCategory {
  icon: React.ElementType;
  title: string;
  titleEn: string;
  areas: { name: string; nameEn: string; url: string }[];
}

const popularAreas: AreaCategory[] = [
  {
    icon: Building,
    title: 'شقق',
    titleEn: 'Apartments',
    areas: [
      { name: 'شقق للبيع في التجمع الخامس', nameEn: 'Apartments for Sale in New Cairo', url: '/properties?type=apartment&location=new-cairo' },
      { name: 'شقق للبيع في الشيخ زايد', nameEn: 'Apartments for Sale in Sheikh Zayed', url: '/properties?type=apartment&location=sheikh-zayed' },
      { name: 'شقق للبيع في العاصمة الإدارية', nameEn: 'Apartments for Sale in New Capital', url: '/properties?type=apartment&location=new-capital' },
      { name: 'شقق للبيع في ٦ اكتوبر', nameEn: 'Apartments for Sale in 6th October', url: '/properties?type=apartment&location=6th-october' },
      { name: 'شقق للبيع في مدينتي', nameEn: 'Apartments for Sale in Madinaty', url: '/properties?type=apartment&location=madinaty' },
      { name: 'شقق للبيع في الاسكندرية', nameEn: 'Apartments for Sale in Alexandria', url: '/properties?type=apartment&location=alexandria' },
      { name: 'شاليهات للبيع في الساحل الشمالي', nameEn: 'Chalets for Sale in North Coast', url: '/properties?type=chalet&location=north-coast' }
    ]
  },
  {
    icon: Home,
    title: 'فلل',
    titleEn: 'Villas',
    areas: [
      { name: 'فلل للبيع في التجمع الخامس', nameEn: 'Villas for Sale in New Cairo', url: '/properties?type=villa&location=new-cairo' },
      { name: 'فلل للبيع في الشيخ زايد', nameEn: 'Villas for Sale in Sheikh Zayed', url: '/properties?type=villa&location=sheikh-zayed' },
      { name: 'فلل للبيع في العاصمة الادارية', nameEn: 'Villas for Sale in New Capital', url: '/properties?type=villa&location=new-capital' },
      { name: 'فلل للبيع في ٦ أكتوبر', nameEn: 'Villas for Sale in 6th October', url: '/properties?type=villa&location=6th-october' },
      { name: 'فلل للبيع في مدينتي', nameEn: 'Villas for Sale in Madinaty', url: '/properties?type=villa&location=madinaty' },
      { name: 'فلل للبيع في الاسكندرية', nameEn: 'Villas for Sale in Alexandria', url: '/properties?type=villa&location=alexandria' },
      { name: 'فلل للبيع في الساحل الشمالي', nameEn: 'Villas for Sale in North Coast', url: '/properties?type=villa&location=north-coast' }
    ]
  },
  {
    icon: MapPin,
    title: 'كمبوندات',
    titleEn: 'Compounds',
    areas: [
      { name: 'كمبوندات القاهرة الجديدة', nameEn: 'New Cairo Compounds', url: '/compounds?location=new-cairo' },
      { name: 'كمبوندات العاصمة الإدارية الجديدة', nameEn: 'New Capital Compounds', url: '/compounds?location=new-capital' },
      { name: 'كمبوندات الشيخ زايد', nameEn: 'Sheikh Zayed Compounds', url: '/compounds?location=sheikh-zayed' },
      { name: 'كمبوندات أكتوبر', nameEn: 'October Compounds', url: '/compounds?location=october' },
      { name: 'قرى الساحل الشمالي', nameEn: 'North Coast Villages', url: '/compounds?location=north-coast' },
      { name: 'منتجعات العين السخنة', nameEn: 'Ain Sokhna Resorts', url: '/compounds?location=ain-sokhna' },
      { name: 'دليل الكمبوند', nameEn: 'Compounds Guide', url: '/compounds' }
    ]
  }
];

export const PopularAreas = ({ language }: PopularAreasProps) => {
  const getText = (ar: string, en: string) => language === 'ar' ? ar : en;

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {getText('المناطق الأكثر طلباً', 'Most Popular Areas')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {getText(
              'اكتشف العقارات في أشهر المناطق والمدن في مصر',
              'Discover properties in the most famous areas and cities in Egypt'
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {popularAreas.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-4">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <category.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">
                  {getText(category.title, category.titleEn)}
                </h3>
              </div>
              
              <div className="space-y-3">
                {category.areas.map((area, areaIndex) => (
                  <Button
                    key={areaIndex}
                    variant="ghost"
                    className="w-full justify-start text-right h-auto py-3 px-4 hover:bg-primary/5"
                    asChild
                  >
                    <a href={area.url}>
                      <span className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                        {getText(area.name, area.nameEn)}
                      </span>
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};