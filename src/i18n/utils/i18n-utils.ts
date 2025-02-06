import {
  dictionary,
  defaultLang,
  type TranslationKey,
  showDefaultLang,
} from "../dictionary";

export function useTranslations(lang: keyof typeof dictionary) {
  return function t(key: TranslationKey) {
    return dictionary[lang][key] || dictionary[defaultLang][key];
  };
}

export function useTranslatedPath(lang: keyof typeof dictionary) {
  return function translatePath(path: string, l: string = lang) {
    return !showDefaultLang && l === defaultLang ? path : `/${l}${path}`;
  };
}
