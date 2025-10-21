import { useState } from "react";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher, Language } from "@/components/ui/language-switcher";
import { SearchFilters } from "@/components/SearchFilters";
import type { SearchFilters as SearchFiltersType } from "@/components/SearchFilters";
import { PropertyCard, Property } from "@/components/PropertyCard";
import { CompoundsGuide } from "@/components/CompoundsGuide";
import { ServicesSection } from "@/components/ServicesSection";
import { PopularAreas } from "@/components/PopularAreas";

import { ProfessionalServices } from "@/components/ProfessionalServices";
import { Badge } from "@/components/ui/badge";
import { Users, Award, MapPin, Clock } from "lucide-react";
import logoImage from "@/assets/logo.png";
import heroBg from "@/assets/hero-bg.jpg";

const languages: Language[] = [
  { code: "ar", name: "العربية", flag: "🇪🇬" },
  { code: "en", name: "English", flag: "🇺🇸" },
];

// Mock data for properties
const mockProperties: Property[] = [
  {
    id: "1",
    title: "شقة فاخرة في التجمع الخامس",
    titleEn: "Luxury Apartment in New Cairo",
    price: 3500000,
    currency: "ج.م",
    location: "التجمع الخامس، القاهرة الجديدة",
    locationEn: "Fifth Settlement, New Cairo",
    bedrooms: 3,
    bathrooms: 2,
    area: 180,
    type: "شقة",
    typeEn: "Apartment",
    listingType: "sale",
    images: ["https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400"],
    featured: true,
  },
  {
    id: "2",
    title: "فيلا مودرن في الشيخ زايد",
    titleEn: "Modern Villa in Sheikh Zayed",
    price: 45000,
    currency: "ج.م",
    location: "الشيخ زايد، الجيزة",
    locationEn: "Sheikh Zayed, Giza",
    bedrooms: 4,
    bathrooms: 3,
    area: 350,
    type: "فيلا",
    typeEn: "Villa",
    listingType: "rent",
    images: [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400",
    ],
  },
  {
    id: "3",
    title: "استوديو في وسط البلد",
    titleEn: "Studio in Downtown",
    price: 8000,
    currency: "ج.م",
    location: "وسط البلد، القاهرة",
    locationEn: "Downtown, Cairo",
    bedrooms: 1,
    bathrooms: 1,
    area: 45,
    type: "استوديو",
    typeEn: "Studio",
    listingType: "rent",
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400",
    ],
  },
  {
    id: "4",
    title: "دوبلكس في المعادي",
    titleEn: "Duplex in Maadi",
    price: 5200000,
    currency: "ج.م",
    location: "المعادي، القاهرة",
    locationEn: "Maadi, Cairo",
    bedrooms: 4,
    bathrooms: 3,
    area: 280,
    type: "دوبلكس",
    typeEn: "Duplex",
    listingType: "sale",
    images: [
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=400",
    ],
    featured: true,
  },
];

const Index = () => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(
    languages[0]
  );
  const [filteredProperties, setFilteredProperties] =
    useState<Property[]>(mockProperties);

  const isRTL = currentLanguage.code === "ar";
  const getText = (ar: string, en: string) =>
    currentLanguage.code === "ar" ? ar : en;

  const handleSearch = (filters: SearchFiltersType) => {
    // Simple filtering logic - in real app, this would be an API call
    let filtered = mockProperties;

    if (filters.listingType) {
      filtered = filtered.filter((p) => p.listingType === filters.listingType);
    }

    if (filters.propertyType) {
      filtered = filtered.filter((p) =>
        p.typeEn.toLowerCase().includes(filters.propertyType.toLowerCase())
      );
    }

    setFilteredProperties(filtered);
  };

  const stats = [
    {
      icon: Users,
      value: "50,000+",
      label: getText("عميل راضٍ", "Happy Clients"),
    },
    {
      icon: Award,
      value: "15+",
      label: getText("سنوات خبرة", "Years Experience"),
    },
    {
      icon: MapPin,
      value: "25+",
      label: getText("مدينة", "Cities"),
    },
    {
      icon: Clock,
      value: "24/7",
      label: getText("دعم العملاء", "Customer Support"),
    },
  ];

  return (
    <div
      className={`min-h-screen bg-background ${
        isRTL ? "font-arabic" : "font-english"
      }`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src={logoImage}
                alt="عقار لينك"
                className="w-12 h-12 rounded-full"
              />
              <span className="text-xl font-bold text-gradient">
                {getText("عقار لينك", "Aqar Link")}
              </span>
            </div>

            <nav className="hidden md:flex items-center gap-6">
              <a
                href="#"
                className="text-foreground hover:text-primary transition-smooth"
              >
                {getText("الرئيسية", "Home")}
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-smooth"
              >
                {getText("العقارات", "Properties")}
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-smooth"
              >
                {getText("من نحن", "About")}
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-smooth"
              >
                {getText("اتصل بنا", "Contact")}
              </a>
            </nav>

            <div className="flex items-center gap-4">
              <LanguageSwitcher
                currentLanguage={currentLanguage}
                languages={languages}
                onLanguageChange={setCurrentLanguage}
              />
              <Button variant="outline" size="sm">
                {getText("تسجيل الدخول", "Sign In")}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat "
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0" />

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto space-y-6">
            <Badge
              variant="secondary"
              className="bg-white/20 text-white border-white/30 mb-4"
            >
              {getText(
                "أكثر من 440,000 عقار متاح",
                "440,000+ Properties Available"
              )}
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              {getText("اكتشف منزل أحلامك", "Discover Your Dream Home")}
            </h1>

            <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto">
              {getText(
                "ابحث عن أفضل العقارات للبيع والإيجار في مصر مع خدمة حجز فورية",
                "Find the best properties for sale and rent in Egypt with instant reservation service"
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 -mt-16 relative z-20">
        <div className="container mx-auto px-4">
          <SearchFilters
            language={currentLanguage.code as "ar" | "en"}
            onSearch={handleSearch}
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {getText("عقارات مميزة", "Featured Properties")}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {getText(
                "اكتشف مجموعة مختارة من أجود العقارات المتاحة للحجز الفوري",
                "Discover a curated selection of premium properties available for instant reservation"
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                language={currentLanguage.code as "ar" | "en"}
                onFavorite={(id) => console.log("Favorited:", id)}
                onReserve={(id) => console.log("Reserved:", id)}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="transition-smooth hover:scale-105">
              {getText("عرض جميع العقارات", "View All Properties")}
            </Button>
          </div>
        </div>
      </section>

      {/* Developers Guide */}
      <CompoundsGuide language={currentLanguage.code as "ar" | "en"} />

      {/* Professional Services */}
      <ProfessionalServices language={currentLanguage.code as "ar" | "en"} />

      {/* Services Section */}
      <ServicesSection language={currentLanguage.code as "ar" | "en"} />

      {/* Popular Areas */}
      <PopularAreas language={currentLanguage.code as "ar" | "en"} />

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-16">
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
                  {getText("عقار لينك", "Aqar Link")}
                </span>
              </div>
              <p className="opacity-90">
                {getText(
                  "منصة العقارات الرائدة في مصر لحجز العقارات فوريًا",
                  "Leading real estate platform in Egypt for instant property reservations"
                )}
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">
                {getText("روابط سريعة", "Quick Links")}
              </h4>
              <ul className="space-y-2 opacity-90">
                <li>
                  <a href="#" className="hover:opacity-100 transition-smooth">
                    {getText("العقارات", "Properties")}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-100 transition-smooth">
                    {getText("من نحن", "About Us")}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-100 transition-smooth">
                    {getText("اتصل بنا", "Contact")}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-100 transition-smooth">
                    {getText("المدونة", "Blog")}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">
                {getText("الخدمات", "Services")}
              </h4>
              <ul className="space-y-2 opacity-90">
                <li>
                  <a href="#" className="hover:opacity-100 transition-smooth">
                    {getText("بيع العقارات", "Property Sales")}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-100 transition-smooth">
                    {getText("إيجار العقارات", "Property Rental")}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-100 transition-smooth">
                    {getText("تقييم العقارات", "Property Valuation")}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-100 transition-smooth">
                    {getText("استشارات", "Consulting")}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">
                {getText("تواصل معنا", "Contact Info")}
              </h4>
              <div className="space-y-2 opacity-90">
                <p>📧 info@estatereserve.com</p>
                <p>📞 +20 123 456 7890</p>
                <p>📍 {getText("أسيوط، مصر", "Cairo, Egypt")}</p>
              </div>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center opacity-90">
            <p>
              &copy; 2025 {getText("عقار لينك", "Aqar Link")}.{" "}
              {getText("جميع الحقوق محفوظة", "All rights reserved")}.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
