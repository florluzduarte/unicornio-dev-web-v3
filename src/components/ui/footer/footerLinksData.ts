import type { INavbarItem } from "@type/ui-types";

export const footerLinksData: INavbarItem[] = [
  {
    translationKey: "nav.home",
    subpath: "",
  },
  {
    translationKey: "nav.blog",
    subpath: "blog/",
  },
  {
    translationKey: "nav.about",
    subpath: "about/",
  },
  {
    translationKey: "nav.resources",
    subpath: "resources/",
  },
  // {
  //   translationKey: "nav.tutorials",
  //   subpath: "tutorials/",
  // },
  // {
  //   translationKey: "nav.theme",
  //   subpath: "theme/",
  // },
  {
    translationKey: "nav.talks",
    subpath: "talks/",
  },
  {
    translationKey: "nav.communities",
    subpath: "communities/"
  },
  // {
  //   translationKey: "nav.contact",
  //   subpath: "contact/"
  // },
];

export const footerExternalLinks: INavbarItem[] = [
  {
    translationKey: "nav.work",
    subpath: "https://florluzduarte.unicornio.dev"
  },
  {
    translationKey: "nav.social.links",
    subpath: "https://links.unicornio.dev",
  }
]