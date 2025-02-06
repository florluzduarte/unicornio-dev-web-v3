import { dictionary, defaultLang, type TranslationKey } from "../dictionary";

export function useTranslations(lang: keyof typeof dictionary) {
  return function t(key: TranslationKey) {
    return dictionary[lang][key] || dictionary[defaultLang][key];
  };
}
