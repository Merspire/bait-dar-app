import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Search, MapPin, Home, DollarSign, Maximize } from "lucide-react";

interface SearchFiltersProps {
  language: "ar" | "en";
  onSearch?: (filters: SearchFilters) => void;
}

export interface SearchFilters {
  location: string;
  propertyType: string;
  listingType: "sale" | "rent" | "";
  minPrice: string;
  maxPrice: string;
  bedrooms: string;
  developer: string;
}

export const SearchFilters = ({ language, onSearch }: SearchFiltersProps) => {
  const isRTL = language === "ar";
  const getText = (ar: string, en: string) => (language === "ar" ? ar : en);

  const propertyTypes = [
    { value: "apartment", arLabel: "شقة", enLabel: "Apartment" },
    { value: "villa", arLabel: "بيت", enLabel: "House" },
    { value: "townhouse", arLabel: " كومبوند", enLabel: "Compound" },
    { value: "studio", arLabel: "ستوديو", enLabel: "Studio" },
    { value: "office", arLabel: "مكتب", enLabel: "Office" },
    { value: "shop", arLabel: "محل تجاري", enLabel: "Shop" },
  ];

  const bedroomOptions = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5+', label: '5+' },
  ];

  const developers = [
    { value: 'palm-hills', arLabel: 'بالم هيلز', enLabel: 'Palm Hills' },
    { value: 'al-ahly-sabbour', arLabel: 'الأهلي صبور', enLabel: 'Al Ahly Sabbour' },
    { value: 'sodic', arLabel: 'سوديك', enLabel: 'SODIC' },
    { value: 'emaar-misr', arLabel: 'إعمار مصر', enLabel: 'Emaar Misr' },
    { value: 'misr-italia', arLabel: 'مصر إيطاليا', enLabel: 'Misr Italia Properties' },
    { value: 'tmg', arLabel: 'طلعت مصطفى', enLabel: 'TMG - Talaat Moustafa Group' },
    { value: 'mountain-view', arLabel: 'ماونتن فيو', enLabel: 'Mountain View' },
    { value: 'la-vista', arLabel: 'لافيستا', enLabel: 'La Vista Developments' },
    { value: 'hassan-allam', arLabel: 'حسن علام', enLabel: 'Hassan Allam Properties' },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const filters: SearchFilters = {
      location: formData.get('location') as string || '',
      propertyType: formData.get('propertyType') as string || '',
      listingType: formData.get('listingType') as 'sale' | 'rent' || '',
      minPrice: formData.get('minPrice') as string || '',
      maxPrice: formData.get('maxPrice') as string || '',
      bedrooms: formData.get('bedrooms') as string || '',
      developer: formData.get('developer') as string || '',
    };

    onSearch?.(filters);
  };

  return (
    <Card className="shadow-large bg-card/95 backdrop-blur-sm">
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Main Search Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Location */}
            <div className="relative">
              <MapPin
                className={`absolute top-3 ${
                  isRTL ? "right-3" : "left-3"
                } h-4 w-4 text-muted-foreground`}
              />
              <Input
                name="location"
                placeholder={getText("المدينة أو المنطقة", "City or Area")}
                className={`${isRTL ? "pr-10" : "pl-10"} transition-smooth`}
              />
            </div>

            {/* Property Type */}
            <div className="relative">
              <Home
                className={`absolute top-3 ${
                  isRTL ? "right-3" : "left-3"
                } h-4 w-4 text-muted-foreground z-10`}
              />
              <Select name="propertyType">
                <SelectTrigger
                  className={`${isRTL ? "pr-10" : "pl-10"} transition-smooth`}
                >
                  <SelectValue
                    placeholder={getText("نوع العقار", "Property Type")}
                  />
                </SelectTrigger>
                <SelectContent>
                  {propertyTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {getText(type.arLabel, type.enLabel)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Listing Type */}
            <div>
              <Select name="listingType">
                <SelectTrigger className="transition-smooth">
                  <SelectValue
                    placeholder={getText("بيع / إيجار", "Sale or Rent")}
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sale">
                    {getText("بيع", "For Sale")}
                  </SelectItem>
                  <SelectItem value="rent">
                    {getText("إيجار", "For Rent")}
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Search Button */}
            <Button type="submit" className="transition-smooth hover:scale-105">
              <Search className="h-4 w-4 mr-2" />
              {getText("بحث", "Search")}
            </Button>
          </div>

          {/* Advanced Filters Row */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-4 border-t">
            {/* Price Range */}
            <div className="grid grid-cols-2 gap-2">
              <div className="relative">
                <DollarSign
                  className={`absolute top-3 ${
                    isRTL ? "right-3" : "left-3"
                  } h-4 w-4 text-muted-foreground`}
                />
                <Input
                  name="minPrice"
                  type="number"
                  placeholder={getText("أقل سعر", "Min Price")}
                  className={`${isRTL ? "pr-10" : "pl-10"} transition-smooth`}
                />
              </div>
              <div className="relative">
                <DollarSign
                  className={`absolute top-3 ${
                    isRTL ? "right-3" : "left-3"
                  } h-4 w-4 text-muted-foreground`}
                />
                <Input
                  name="maxPrice"
                  type="number"
                  placeholder={getText("أعلى سعر", "Max Price")}
                  className={`${isRTL ? "pr-10" : "pl-10"} transition-smooth`}
                />
              </div>
            </div>

            {/* Bedrooms */}
            <div>
              <Select name="bedrooms">
                <SelectTrigger className="transition-smooth">
                  <SelectValue placeholder={getText("عدد الغرف", "Bedrooms")} />
                </SelectTrigger>
                <SelectContent>
                  {bedroomOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label} {getText("غرف", "Bedrooms")}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Area */}
            <div className="relative">
              <Maximize
                className={`absolute top-3 ${
                  isRTL ? "right-3" : "left-3"
                } h-4 w-4 text-muted-foreground`}
              />
              <Input
                name="area"
                type="number"
                placeholder={getText("المساحة (م²)", "Area (m²)")}
                className={`${isRTL ? "pr-10" : "pl-10"} transition-smooth`}
              />
            </div>

            {/* Developer */}
            <div>
              <Select name="developer">
                <SelectTrigger className="transition-smooth">
                  <SelectValue placeholder={getText('المطور', 'Developer')} />
                </SelectTrigger>
                <SelectContent>
                  {developers.map((developer) => (
                    <SelectItem key={developer.value} value={developer.value}>
                      {getText(developer.arLabel, developer.enLabel)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};
