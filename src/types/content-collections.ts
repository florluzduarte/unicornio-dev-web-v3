import type { GetStaticPathsItem, GetStaticPathsResult } from "astro";
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
  entry: CollectionEntry<"blog">;
}

export type BlogPosts = CollectionEntry<"blog">;

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
    lang: string;
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
