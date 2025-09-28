import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Crown, Users, TrendingUp, Shield } from "lucide-react";

interface ProfessionalServicesProps {
  language: 'ar' | 'en';
}

const services = [
  {
    icon: Crown,
    title: 'عقار لينك برو',
    titleEn: 'Aqar Link Pro',
    description: 'انضم لأكثر من 7500 شركة وكن شريكنا وتواصل مع عملاء أكثر',
    descriptionEn: 'Join over 7,500 companies, become our partner and connect with more clients',
    action: 'انضم الآن',
    actionEn: 'Join Now',
    highlight: true,
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400'
  },
  {
    icon: Users,
    title: 'اعلن عن عقارك',
    titleEn: 'Advertise Your Property',
    description: 'أضف عقارك واحصل على عروض من مشتريين حقيقيين',
    descriptionEn: 'Add your property and get offers from real buyers',
    action: 'اعلن مجاناً',
    actionEn: 'Advertise Free',
    highlight: false,
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400'
  },
  {
    icon: TrendingUp,
    title: 'أبحاث السوق',
    titleEn: 'Market Research',
    description: 'احصل على تقارير وتحليلات متقدمة للسوق العقاري',
    descriptionEn: 'Get advanced reports and analysis of the real estate market',
    action: 'تصفح الأبحاث',
    actionEn: 'Browse Research',
    highlight: false,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400'
  },
  {
    icon: Shield,
    title: 'تقييم الكمبوندات',
    titleEn: 'Compounds Rating',
    description: 'تقييمات وآراء حقيقية من السكان للكمبوندات',
    descriptionEn: 'Real reviews and opinions from compound residents',
    action: 'شاهد التقييمات',
    actionEn: 'View Ratings',
    highlight: false,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400'
  }
];

export const ProfessionalServices = ({ language }: ProfessionalServicesProps) => {
  const getText = (ar: string, en: string) => language === 'ar' ? ar : en;

  return (
    <section className="py-16 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {getText('خدمات احترافية', 'Professional Services')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {getText(
              'خدمات متقدمة للمطورين والوسطاء وأصحاب العقارات',
              'Advanced services for developers, agents and property owners'
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`overflow-hidden transition-smooth hover:shadow-elegant group ${
                service.highlight ? 'ring-2 ring-primary/20 bg-gradient-card' : ''
              }`}
            >
              <div className="relative">
                <img 
                  src={service.image} 
                  alt={getText(service.title, service.titleEn)}
                  className="w-full h-40 object-cover group-hover:scale-105 transition-smooth"
                />
                {service.highlight && (
                  <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground gap-1">
                    <Crown className="h-3 w-3" />
                    {getText('مميز', 'Premium')}
                  </Badge>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
              </div>
              
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">
                  {getText(service.title, service.titleEn)}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm">
                  {getText(service.description, service.descriptionEn)}
                </p>
                
                <Button 
                  className={`w-full transition-smooth hover:scale-105 ${
                    service.highlight 
                      ? 'bg-primary hover:bg-primary/90' 
                      : ''
                  }`}
                  variant={service.highlight ? "default" : "outline"}
                >
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