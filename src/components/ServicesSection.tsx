import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Calculator, 
  TrendingUp, 
  Users, 
  MessageSquare, 
  Star, 
  Calendar,
  BarChart3,
  BookOpen,
  Search
} from "lucide-react";

interface Service {
  icon: React.ElementType;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  action: string;
  actionEn: string;
}

interface ServicesSectionProps {
  language: 'ar' | 'en';
}

const services: Service[] = [
  {
    icon: Star,
    title: 'تقييم الكمبوندات',
    titleEn: 'Compounds Rating',
    description: 'تقييمات حقيقية من السكان للكمبوندات',
    descriptionEn: 'Real reviews from residents about compounds',
    action: 'قيم الآن',
    actionEn: 'Rate Now'
  },
  {
    icon: Calculator,
    title: 'تقييم عقاري',
    titleEn: 'Property Valuation',
    description: 'احصل على تقييم فوري ودقيق لعقارك',
    descriptionEn: 'Get instant and accurate valuation for your property',
    action: 'قيم عقارك',
    actionEn: 'Value Property'
  },
  {
    icon: TrendingUp,
    title: 'أسعار العقارات',
    titleEn: 'Property Prices',
    description: 'تتبع أسعار العقارات في مختلف المناطق',
    descriptionEn: 'Track property prices across different areas',
    action: 'اعرف الأسعار',
    actionEn: 'Check Prices'
  },
  {
    icon: MessageSquare,
    title: 'إسأل أهل المنطقة',
    titleEn: 'Ask Neighbors',
    description: 'اسأل السكان عن المنطقة والخدمات',
    descriptionEn: 'Ask residents about the area and services',
    action: 'اسأل الآن',
    actionEn: 'Ask Now'
  },
  {
    icon: Users,
    title: 'الوسطاء المميزون',
    titleEn: 'Featured Agents',
    description: 'تواصل مع أفضل الوسطاء العقاريين',
    descriptionEn: 'Connect with top real estate agents',
    action: 'تصفح الوسطاء',
    actionEn: 'Browse Agents'
  },
  {
    icon: Calendar,
    title: 'دليل المعارض',
    titleEn: 'Events Guide',
    description: 'اكتشف أحدث المعارض العقارية',
    descriptionEn: 'Discover the latest real estate exhibitions',
    action: 'تصفح المعارض',
    actionEn: 'Browse Events'
  },
  {
    icon: BarChart3,
    title: 'المؤشر العقاري',
    titleEn: 'Real Estate Index',
    description: 'مؤشرات السوق العقاري وتحليلات',
    descriptionEn: 'Real estate market indicators and analysis',
    action: 'عرض المؤشر',
    actionEn: 'View Index'
  },
  {
    icon: BookOpen,
    title: 'نصائح عقارية',
    titleEn: 'Real Estate Tips',
    description: 'نصائح ومقالات مفيدة في العقارات',
    descriptionEn: 'Useful tips and articles about real estate',
    action: 'اقرأ المزيد',
    actionEn: 'Read More'
  },
  {
    icon: Search,
    title: 'ابحاث ودراسات',
    titleEn: 'Research & Studies',
    description: 'تقارير وأبحاث متخصصة في السوق العقاري',
    descriptionEn: 'Specialized reports and research on real estate market',
    action: 'عرض الأبحاث',
    actionEn: 'View Research'
  }
];

export const ServicesSection = ({ language }: ServicesSectionProps) => {
  const getText = (ar: string, en: string) => language === 'ar' ? ar : en;

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {getText('خدماتنا المميزة', 'Our Premium Services')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {getText(
              'استفد من مجموعة شاملة من الخدمات العقارية المتقدمة',
              'Benefit from a comprehensive range of advanced real estate services'
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-elegant transition-smooth group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-smooth">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg">
                  {getText(service.title, service.titleEn)}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-muted-foreground">
                  {getText(service.description, service.descriptionEn)}
                </p>
                <Button variant="outline" size="sm" className="transition-smooth hover:scale-105">
                  {getText(service.action, service.actionEn)}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};