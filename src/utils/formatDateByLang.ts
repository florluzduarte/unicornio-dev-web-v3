import type { CollectionEntry } from "astro:content";
import type { Lang } from "@i18n/dictionary";

// Sumar cada una de las content Collections del proyecto para conseguir el tipado adecuado
type Collections = CollectionEntry<"blogEs">;

export const formatDateByLang = (page: Collections, lang: Lang) => {
  const formatDate = page.data.publishDate.toLocaleString(lang).split(",");
  return formatDate[0];
};
