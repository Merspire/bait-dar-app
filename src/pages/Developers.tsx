import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { LanguageSwitcher, Language } from "@/components/ui/language-switcher";
import { Search, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import logoImage from "@/assets/logo.png";

const languages: Language[] = [
  { code: 'ar', name: 'العربية', flag: '🇪🇬' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
];

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

const allDevelopers: Developer[] = [
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

export default function Developers() {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(languages[0]);
  const [searchQuery, setSearchQuery] = useState("");
  
  const isRTL = currentLanguage.code === 'ar';
  const getText = (ar: string, en: string) => currentLanguage.code === 'ar' ? ar : en;

  const formatProjectsCount = (count: number) => {
    return `${count} ${getText('مشروع', 'Projects')}`;
  };

  const filteredDevelopers = allDevelopers.filter(developer => {
    const searchLower = searchQuery.toLowerCase();
    return (
      developer.name.toLowerCase().includes(searchLower) ||
      developer.nameEn.toLowerCase().includes(searchLower) ||
      developer.location.toLowerCase().includes(searchLower) ||
      developer.locationEn.toLowerCase().includes(searchLower)
    );
  });

  return (
    <div className={`min-h-screen bg-background ${isRTL ? 'font-arabic' : 'font-english'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Link to="/">
                <img 
                  src={logoImage} 
                  alt="عقار لينك" 
                  className="w-12 h-12 rounded-full"
                />
              </Link>
              <span className="text-xl font-bold text-gradient">
                {getText('عقار لينك', 'Aqar Link')}
              </span>
            </div>
            
            <nav className="hidden md:flex items-center gap-6">
              <Link to="/" className="text-muted-foreground hover:text-primary transition-smooth">
                {getText('الرئيسية', 'Home')}
              </Link>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                {getText('العقارات', 'Properties')}
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                {getText('من نحن', 'About')}
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                {getText('اتصل بنا', 'Contact')}
              </a>
            </nav>

            <div className="flex items-center gap-4">
              <LanguageSwitcher
                currentLanguage={currentLanguage}
                languages={languages}
                onLanguageChange={setCurrentLanguage}
              />
              <Button variant="outline" size="sm">
                {getText('تسجيل الدخول', 'Sign In')}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Page Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link to="/">
          <Button variant="ghost" className="mb-6 gap-2">
            <ArrowLeft className={`h-4 w-4 ${isRTL ? 'rotate-180' : ''}`} />
            {getText('العودة للرئيسية', 'Back to Home')}
          </Button>
        </Link>

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {getText('دليل المطورين', 'Developers Guide')}
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            {getText('اكتشف أفضل المطورين والشركات العقارية في مصر', 'Discover the best developers and real estate companies in Egypt')}
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-md">
            <Search className={`absolute top-3 ${isRTL ? 'right-3' : 'left-3'} h-5 w-5 text-muted-foreground`} />
            <Input
              placeholder={getText('ابحث عن مطور...', 'Search for developer...')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`${isRTL ? 'pr-10' : 'pl-10'}`}
            />
          </div>
        </div>

        {/* Developers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-fade-in">
          {filteredDevelopers.map((developer) => (
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
                  {(currentLanguage.code === 'ar' ? developer.types : developer.typesEn).slice(0, 3).map((type, index) => (
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

                <Button className="w-full mt-2" size="sm">
                  {getText('عرض المشاريع', 'View Projects')}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredDevelopers.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              {getText('لا توجد نتائج', 'No results found')}
            </p>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-16 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src={logoImage} 
                  alt="عقار لينك" 
                  className="w-10 h-10 rounded-full"
                />
                <span className="text-xl font-bold">
                  {getText('عقار لينك', 'Aqar Link')}
                </span>
              </div>
              <p className="opacity-90">
                {getText(
                  'منصة العقارات الرائدة في مصر لحجز العقارات فوريًا',
                  'Leading real estate platform in Egypt for instant property reservations'
                )}
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">{getText('روابط سريعة', 'Quick Links')}</h4>
              <ul className="space-y-2 opacity-90">
                <li><Link to="/" className="hover:opacity-100 transition-smooth">{getText('الرئيسية', 'Home')}</Link></li>
                <li><a href="#" className="hover:opacity-100 transition-smooth">{getText('العقارات', 'Properties')}</a></li>
                <li><a href="#" className="hover:opacity-100 transition-smooth">{getText('من نحن', 'About Us')}</a></li>
                <li><a href="#" className="hover:opacity-100 transition-smooth">{getText('اتصل بنا', 'Contact')}</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">{getText('الخدمات', 'Services')}</h4>
              <ul className="space-y-2 opacity-90">
                <li><a href="#" className="hover:opacity-100 transition-smooth">{getText('بيع العقارات', 'Property Sales')}</a></li>
                <li><a href="#" className="hover:opacity-100 transition-smooth">{getText('إيجار العقارات', 'Property Rental')}</a></li>
                <li><a href="#" className="hover:opacity-100 transition-smooth">{getText('تقييم العقارات', 'Property Valuation')}</a></li>
                <li><a href="#" className="hover:opacity-100 transition-smooth">{getText('استشارات', 'Consulting')}</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">{getText('تواصل معنا', 'Contact Info')}</h4>
              <div className="space-y-2 opacity-90">
                <p>📧 info@estatereserve.com</p>
                <p>📞 +20 123 456 7890</p>
                <p>📍 {getText('القاهرة، مصر', 'Cairo, Egypt')}</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center opacity-90">
            <p>&copy; 2024 {getText('عقار لينك', 'Aqar Link')}. {getText('جميع الحقوق محفوظة', 'All rights reserved')}.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
