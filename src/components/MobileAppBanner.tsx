import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Smartphone, Download, Star } from "lucide-react";

interface MobileAppBannerProps {
  language: 'ar' | 'en';
}

export const MobileAppBanner = ({ language }: MobileAppBannerProps) => {
  const getText = (ar: string, en: string) => language === 'ar' ? ar : en;

  return (
    <section className="py-16 bg-gradient-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5" />
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-center lg:text-right space-y-6">
            <Badge className="bg-white/20 text-primary-foreground border-white/30">
              {getText('جديد', 'New')} 🎉
            </Badge>
            
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
              {getText('تصفُح اسرع', 'Browse Faster')}
            </h2>
            
            <p className="text-xl text-primary-foreground/90">
              {getText('تنزيل تطبيق عقار لينك', 'Download Aqar Link App')}
            </p>
            
            <p className="text-primary-foreground/80">
              {getText(
                'استمتع بتجربة أفضل وأسرع للبحث عن العقارات مع تطبيقنا المحمول',
                'Enjoy a better and faster experience searching for properties with our mobile app'
              )}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 gap-2"
                asChild
              >
                <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                  <Download className="h-5 w-5" />
                  {getText('تنزيل للأندرويد', 'Download for Android')}
                </a>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="border-white/30 text-primary-foreground hover:bg-white/10 gap-2"
                asChild
              >
                <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
                  <Download className="h-5 w-5" />
                  {getText('تنزيل للآيفون', 'Download for iPhone')}
                </a>
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-4 text-primary-foreground/80">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-current" />
                <span className="text-sm">4.8</span>
              </div>
              <div className="text-sm">
                {getText('أكثر من 100,000 تحميل', '100,000+ Downloads')}
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-64 h-96 bg-white/10 rounded-3xl backdrop-blur-sm border border-white/20 flex items-center justify-center">
                <Smartphone className="h-32 w-32 text-white/60" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent rounded-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};