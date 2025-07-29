// Default language is Turkish
export const fallbackLng = "tr";

// Supported languages - Turkish is the default and first in the list
export const languages = [
  fallbackLng, // "tr" - Turkish (default)
  "en", // English
  "es", // Spanish
  "fr", // French
  "de", // German
  "it", // Italian
  "pt", // Portuguese
  "ru", // Russian
];

export const defaultNS = "common";
export const cookieName = "i18next-lang";

// RTL (Right-to-Left) dilleri - Arabic kaldırıldı
export const rtlLanguages: string[] = [];

export function getOptions(lang = fallbackLng, ns = defaultNS) {
  return {
    debug: false, // Production için false yapıldı
    supportedLngs: languages,
    fallbackLng,
    lng: lang,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}

// Dilin RTL olup olmadığını kontrol eden fonksiyon
export function isRTL(lang: string) {
  return rtlLanguages.includes(lang);
} 