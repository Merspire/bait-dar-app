import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  MessageSquare,
  Send,
  Facebook,
  Twitter,
  Instagram,
  Linkedin
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [language, setLanguage] = useState<'ar' | 'en'>('ar');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    propertyType: ''
  });
  const { toast } = useToast();
  
  const isRTL = language === 'ar';
  const getText = (ar: string, en: string) => language === 'ar' ? ar : en;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: getText('خطأ', 'Error'),
        description: getText('يرجى ملء جميع الحقول المطلوبة', 'Please fill all required fields'),
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: getText('تم الإرسال بنجاح', 'Message Sent Successfully'),
      description: getText('سنتواصل معك قريباً', 'We will contact you soon'),
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      propertyType: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'اتصل بنا',
      titleEn: 'Call Us',
      value: '+20 123 456 7890',
      description: 'متاح 24/7',
      descriptionEn: 'Available 24/7'
    },
    {
      icon: Mail,
      title: 'راسلنا',
      titleEn: 'Email Us',
      value: 'info@aqarmap.com',
      description: 'للاستفسارات العامة',
      descriptionEn: 'For general inquiries'
    },
    {
      icon: MapPin,
      title: 'عنواننا',
      titleEn: 'Our Address',
      value: 'القاهرة الجديدة، التجمع الخامس',
      description: 'مصر',
      descriptionEn: 'Egypt'
    },
    {
      icon: Clock,
      title: 'ساعات العمل',
      titleEn: 'Working Hours',
      value: 'السبت - الخميس',
      description: '9:00 ص - 6:00 م',
      descriptionEn: '9:00 AM - 6:00 PM'
    }
  ];

  const socialLinks = [
    { icon: Facebook, name: 'Facebook', href: '#' },
    { icon: Twitter, name: 'Twitter', href: '#' },
    { icon: Instagram, name: 'Instagram', href: '#' },
    { icon: Linkedin, name: 'LinkedIn', href: '#' }
  ];

  return (
    <div className="min-h-screen bg-background" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Header */}
      <header className="bg-card border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">
              {getText('تواصل معنا', 'Contact Us')}
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
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            {getText('نحن هنا لمساعدتك', 'We\'re Here to Help')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {getText(
              'تواصل معنا في أي وقت للحصول على المساعدة أو الاستفسار عن خدماتنا',
              'Contact us anytime to get help or inquire about our services'
            )}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" />
                  {getText('أرسل رسالة', 'Send Message')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">
                        {getText('الاسم الكامل', 'Full Name')} *
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder={getText('أدخل اسمك الكامل', 'Enter your full name')}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">
                        {getText('البريد الإلكتروني', 'Email Address')} *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder={getText('أدخل بريدك الإلكتروني', 'Enter your email')}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">
                        {getText('رقم الهاتف', 'Phone Number')}
                      </Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder={getText('أدخل رقم هاتفك', 'Enter your phone number')}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="propertyType">
                        {getText('نوع العقار', 'Property Type')}
                      </Label>
                      <Select value={formData.propertyType} onValueChange={(value) => handleInputChange('propertyType', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder={getText('اختر نوع العقار', 'Select property type')} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="apartment">{getText('شقة', 'Apartment')}</SelectItem>
                          <SelectItem value="villa">{getText('فيلا', 'Villa')}</SelectItem>
                          <SelectItem value="office">{getText('مكتب', 'Office')}</SelectItem>
                          <SelectItem value="shop">{getText('محل تجاري', 'Shop')}</SelectItem>
                          <SelectItem value="land">{getText('أرض', 'Land')}</SelectItem>
                          <SelectItem value="other">{getText('أخرى', 'Other')}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">
                      {getText('الموضوع', 'Subject')}
                    </Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      placeholder={getText('موضوع الرسالة', 'Message subject')}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">
                      {getText('الرسالة', 'Message')} *
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder={getText('اكتب رسالتك هنا...', 'Write your message here...')}
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full gap-2">
                    <Send className="h-4 w-4" />
                    {getText('إرسال الرسالة', 'Send Message')}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info Sidebar */}
          <div className="space-y-6">
            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle>{getText('معلومات التواصل', 'Contact Information')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">
                        {getText(info.title, info.titleEn)}
                      </h4>
                      <p className="text-foreground mb-1">{info.value}</p>
                      <p className="text-sm text-muted-foreground">
                        {getText(info.description, info.descriptionEn)}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card>
              <CardHeader>
                <CardTitle>{getText('تابعنا على', 'Follow Us On')}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      className="p-3"
                      asChild
                    >
                      <a href={social.href} target="_blank" rel="noopener noreferrer">
                        <social.icon className="h-4 w-4" />
                      </a>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Contact */}
            <Card className="bg-gradient-card">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold mb-2">
                  {getText('تحتاج مساعدة فورية؟', 'Need Immediate Help?')}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {getText('تواصل معنا مباشرة للحصول على إجابات سريعة', 'Contact us directly for quick answers')}
                </p>
                <div className="space-y-2">
                  <Button variant="outline" size="sm" className="w-full gap-2">
                    <Phone className="h-4 w-4" />
                    {getText('اتصال فوري', 'Instant Call')}
                  </Button>
                  <Button variant="outline" size="sm" className="w-full gap-2">
                    <MessageSquare className="h-4 w-4" />
                    {getText('واتساب', 'WhatsApp')}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section (Placeholder) */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle>{getText('موقعنا على الخريطة', 'Our Location')}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                <p className="text-muted-foreground">
                  {getText('خريطة تفاعلية للموقع', 'Interactive Location Map')}
                </p>
                <p className="text-sm text-muted-foreground">
                  {getText('القاهرة الجديدة، التجمع الخامس، مصر', 'New Cairo, Fifth Settlement, Egypt')}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contact;