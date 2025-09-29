import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Building, 
  Award, 
  TrendingUp, 
  Heart, 
  Shield, 
  Clock, 
  Globe,
  Phone,
  Mail,
  MapPin
} from "lucide-react";

const About = () => {
  const [language, setLanguage] = useState<'ar' | 'en'>('ar');
  
  const isRTL = language === 'ar';
  const getText = (ar: string, en: string) => language === 'ar' ? ar : en;

  const stats = [
    { 
      icon: Users, 
      value: '50,000+', 
      label: 'عميل سعيد', 
      labelEn: 'Happy Clients' 
    },
    { 
      icon: Building, 
      value: '25,000+', 
      label: 'عقار تم بيعه', 
      labelEn: 'Properties Sold' 
    },
    { 
      icon: Award, 
      value: '15+', 
      label: 'جائزة تميز', 
      labelEn: 'Excellence Awards' 
    },
    { 
      icon: TrendingUp, 
      value: '12+', 
      label: 'سنة خبرة', 
      labelEn: 'Years Experience' 
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'شغف بالخدمة',
      titleEn: 'Passion for Service',
      description: 'نحن ملتزمون بتقديم أفضل خدمة عملاء في صناعة العقارات',
      descriptionEn: 'We are committed to providing the best customer service in the real estate industry'
    },
    {
      icon: Shield,
      title: 'الثقة والأمان',
      titleEn: 'Trust & Security',
      description: 'نضمن الشفافية والأمان في جميع معاملاتنا العقارية',
      descriptionEn: 'We ensure transparency and security in all our real estate transactions'
    },
    {
      icon: Clock,
      title: 'الالتزام بالوقت',
      titleEn: 'Time Commitment',
      description: 'نقدر وقتك ونلتزم بالمواعيد المحددة في جميع خدماتنا',
      descriptionEn: 'We value your time and commit to scheduled appointments in all our services'
    },
    {
      icon: Globe,
      title: 'رؤية عالمية',
      titleEn: 'Global Vision',
      description: 'نسعى لتقديم خدمات عقارية تواكب المعايير العالمية',
      descriptionEn: 'We strive to provide real estate services that meet global standards'
    }
  ];

  const team = [
    {
      name: 'أحمد محمد علي',
      nameEn: 'Ahmed Mohamed Ali',
      position: 'المدير التنفيذي',
      positionEn: 'CEO',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300',
      experience: '15 سنة خبرة',
      experienceEn: '15 Years Experience'
    },
    {
      name: 'سارة أحمد محمود',
      nameEn: 'Sara Ahmed Mahmoud',
      position: 'مدير المبيعات',
      positionEn: 'Sales Manager',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300',
      experience: '10 سنوات خبرة',
      experienceEn: '10 Years Experience'
    },
    {
      name: 'محمد حسام الدين',
      nameEn: 'Mohamed Hossam Eldin',
      position: 'مدير التسويق',
      positionEn: 'Marketing Manager',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300',
      experience: '8 سنوات خبرة',
      experienceEn: '8 Years Experience'
    }
  ];

  return (
    <div className="min-h-screen bg-background" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Header */}
      <header className="bg-card border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">
              {getText('من نحن', 'About Us')}
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

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {getText('رائدون في عالم العقارات', 'Leaders in Real Estate')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {getText(
              'نحن شركة رائدة في مجال العقارات، نسعى لتقديم أفضل الخدمات العقارية وأحدث التقنيات لعملائنا الكرام',
              'We are a leading real estate company, striving to provide the best real estate services and latest technologies to our valued clients'
            )}
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-elegant transition-smooth">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{getText(stat.label, stat.labelEn)}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="hover:shadow-elegant transition-smooth">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Heart className="h-5 w-5 text-primary" />
                </div>
                {getText('رسالتنا', 'Our Mission')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                {getText(
                  'تسهيل عملية البحث عن العقارات وتوفير منصة شاملة تجمع بين البائعين والمشترين مع ضمان الشفافية والمصداقية في جميع المعاملات العقارية',
                  'To facilitate the property search process and provide a comprehensive platform that brings together sellers and buyers while ensuring transparency and credibility in all real estate transactions'
                )}
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-elegant transition-smooth">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <TrendingUp className="h-5 w-5 text-primary" />
                </div>
                {getText('رؤيتنا', 'Our Vision')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                {getText(
                  'أن نكون المنصة العقارية الأولى في المنطقة والخيار الأمثل لكل من يبحث عن عقار أو يرغب في بيع عقاره بأفضل الأسعار وأسرع الطرق',
                  'To be the number one real estate platform in the region and the best choice for anyone looking for a property or wanting to sell their property at the best prices and fastest methods'
                )}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">
            {getText('قيمنا', 'Our Values')}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-elegant transition-smooth group">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-smooth">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold mb-3">
                    {getText(value.title, value.titleEn)}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {getText(value.description, value.descriptionEn)}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">
            {getText('فريق العمل', 'Our Team')}
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-elegant transition-smooth group">
                <CardContent className="p-6">
                  <img
                    src={member.image}
                    alt={getText(member.name, member.nameEn)}
                    className="w-24 h-24 rounded-full object-cover mx-auto mb-4 group-hover:scale-105 transition-smooth"
                  />
                  <h4 className="text-xl font-semibold mb-2">
                    {getText(member.name, member.nameEn)}
                  </h4>
                  <p className="text-primary font-medium mb-2">
                    {getText(member.position, member.positionEn)}
                  </p>
                  <Badge variant="secondary">
                    {getText(member.experience, member.experienceEn)}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <Card className="bg-gradient-card">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">
              {getText('تواصل معنا', 'Contact Us')}
            </CardTitle>
            <p className="text-muted-foreground">
              {getText('نحن هنا لخدمتك في أي وقت', 'We are here to serve you anytime')}
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold">{getText('اتصل بنا', 'Call Us')}</h4>
                <p className="text-muted-foreground">+20 123 456 7890</p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold">{getText('راسلنا', 'Email Us')}</h4>
                <p className="text-muted-foreground">info@aqarmap.com</p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold">{getText('زورنا', 'Visit Us')}</h4>
                <p className="text-muted-foreground">
                  {getText('القاهرة الجديدة، مصر', 'New Cairo, Egypt')}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;