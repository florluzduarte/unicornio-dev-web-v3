import type { TranslationKey } from "@i18n/dictionary";

export type FontType = "regular" | "bold";

export interface ISocialMediaLink {
  icon: string;
  size: number;
  name: string;
  altText: string;
  url: string;
}

export type Languages = "Español" | "Inglés" | "Spanish" | "English";
export type ShareLink = string | undefined;
export type Platform = "Discord" | "Slack";

export interface ITechTalks {
  title: string;
  order: number;
  language: Languages;
  host: string;
  hostLink: ShareLink;
  event: string;
  eventLink: ShareLink;
  videoLink: ShareLink;
  videoId: ShareLink;
  slidesLink: ShareLink;
  description: string;
  date: string;
}

export interface ICommunities {
  name: string;
  order: number;
  description: string;
  invite: ShareLink;
  platform: Platform;
  language: Languages;
  web: ShareLink;
  x: ShareLink;
  linkedin: ShareLink;
  image: string;
  imageAlt: string;
}

export interface ISectionParagraph {
  text: string;
  order: number;
}

export interface IResource {
  title: string;
  order: number;
  description: string;
  path: string;
}

export interface INavbarItem {
  translationKey: TranslationKey;
  subpath: string;
}
