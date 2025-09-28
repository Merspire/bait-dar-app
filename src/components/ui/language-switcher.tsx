import { Button } from "@/components/ui/button";
import { useState } from "react";

export interface Language {
  code: string;
  name: string;
  flag: string;
}

interface LanguageSwitcherProps {
  currentLanguage: Language;
  languages: Language[];
  onLanguageChange: (language: Language) => void;
}

export const LanguageSwitcher = ({ 
  currentLanguage, 
  languages, 
  onLanguageChange 
}: LanguageSwitcherProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 transition-smooth"
      >
        <span className="text-lg">{currentLanguage.flag}</span>
        <span className="text-sm font-medium">{currentLanguage.name}</span>
      </Button>
      
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 bg-card border rounded-lg shadow-medium z-50 min-w-[120px]">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => {
                onLanguageChange(language);
                setIsOpen(false);
              }}
              className="w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-muted transition-smooth first:rounded-t-lg last:rounded-b-lg"
            >
              <span className="text-lg">{language.flag}</span>
              <span>{language.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};