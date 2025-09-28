import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Bed, Bath, Maximize, Heart } from "lucide-react";
import { useState } from "react";

export interface Property {
  id: string;
  title: string;
  titleEn: string;
  price: number;
  currency: string;
  location: string;
  locationEn: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  type: string;
  typeEn: string;
  listingType: 'sale' | 'rent';
  images: string[];
  featured?: boolean;
}

interface PropertyCardProps {
  property: Property;
  language: 'ar' | 'en';
  onFavorite?: (propertyId: string) => void;
  onReserve?: (propertyId: string) => void;
}

export const PropertyCard = ({ 
  property, 
  language, 
  onFavorite,
  onReserve 
}: PropertyCardProps) => {
  const [isFavorited, setIsFavorited] = useState(false);
  const isRTL = language === 'ar';
  
  const handleFavorite = () => {
    setIsFavorited(!isFavorited);
    onFavorite?.(property.id);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat(language === 'ar' ? 'ar-EG' : 'en-US').format(price);
  };

  const getText = (ar: string, en: string) => language === 'ar' ? ar : en;

  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-large hover:-translate-y-1">
      <div className="relative overflow-hidden">
        <img 
          src={property.images[0]} 
          alt={getText(property.title, property.titleEn)}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Badges */}
        <div className={`absolute top-3 ${isRTL ? 'right-3' : 'left-3'} flex flex-col gap-2`}>
          {property.featured && (
            <Badge variant="destructive" className="bg-accent text-accent-foreground">
              {getText('مميز', 'Featured')}
            </Badge>
          )}
          <Badge variant="secondary" className="bg-primary text-primary-foreground">
            {getText(
              property.listingType === 'sale' ? 'للبيع' : 'للإيجار',
              property.listingType === 'sale' ? 'For Sale' : 'For Rent'
            )}
          </Badge>
        </div>

        {/* Favorite Button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={handleFavorite}
          className={`absolute top-3 ${isRTL ? 'left-3' : 'right-3'} bg-background/80 backdrop-blur-sm hover:bg-background/90 transition-smooth`}
        >
          <Heart 
            className={`h-4 w-4 transition-colors ${
              isFavorited ? 'fill-red-500 text-red-500' : 'text-muted-foreground'
            }`}
          />
        </Button>
      </div>

      <CardContent className="p-4">
        <div className="space-y-3">
          {/* Title */}
          <h3 className="font-semibold text-lg leading-tight line-clamp-2">
            {getText(property.title, property.titleEn)}
          </h3>

          {/* Location */}
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4 flex-shrink-0" />
            <span className="text-sm">{getText(property.location, property.locationEn)}</span>
          </div>

          {/* Property Details */}
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Bed className="h-4 w-4" />
              <span>{property.bedrooms}</span>
            </div>
            <div className="flex items-center gap-1">
              <Bath className="h-4 w-4" />
              <span>{property.bathrooms}</span>
            </div>
            <div className="flex items-center gap-1">
              <Maximize className="h-4 w-4" />
              <span>{property.area} {getText('م²', 'm²')}</span>
            </div>
          </div>

          {/* Price */}
          <div className="flex items-center justify-between">
            <div>
              <span className="text-2xl font-bold text-primary">
                {formatPrice(property.price)}
              </span>
              <span className="text-sm text-muted-foreground mr-2">
                {property.currency}
              </span>
              {property.listingType === 'rent' && (
                <span className="text-sm text-muted-foreground">
                  /{getText('شهر', 'month')}
                </span>
              )}
            </div>
          </div>

          {/* Action Button */}
          <Button 
            className="w-full transition-smooth"
            onClick={() => onReserve?.(property.id)}
          >
            {getText('احجز الآن', 'Reserve Now')}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};