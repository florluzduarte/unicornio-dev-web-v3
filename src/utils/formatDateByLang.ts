import type { Lang } from "@i18n/dictionary";
import type { BlogPosts } from "@type/content-collections";

// Sumar cada una de las content Collections del proyecto para conseguir el tipado adecuado
type Collections = BlogPosts;

export const formatDateByLang = (page: Collections, lang: Lang) => {
  const formatDate = page.data.publishDate.toLocaleString(lang).split(",");
  return formatDate[0];
};
