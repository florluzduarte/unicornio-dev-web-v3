import type { GetStaticPathsItem } from "astro";
import type { CollectionEntry } from "astro:content";

export interface BlogFromSlug {
  params: {
    lang: string;
    slug: string;
  };
  props: {
    entry: BlogProps;
  };
}

export interface BlogProps {
  entry: CollectionEntry<"blogEs"> | CollectionEntry<"blogEn">;
}

export type BlogPosts = CollectionEntry<"blogEs"> | CollectionEntry<"blogEn">;

export interface BlogPostData {
  isDraft: boolean;
  title: string;
  description: string;
  publishDate: Date;
  canonicalUrl: string;
  githubUrl: string;
  language: "es" | "en";
  tags: string[];
}

export interface DynamicTags extends GetStaticPathsItem {
  params: {
    tag: string;
  };
  props: {
    posts: BlogPosts[];
  };
}

export interface BlogSeriesAlert {
  title: string;
  description: string;
  link: string;
}
