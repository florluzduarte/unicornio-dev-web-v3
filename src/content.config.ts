import { defineCollection, z, reference } from "astro:content";
import { glob } from "astro/loaders";

// TODO: define blog schema

const blogEs = defineCollection({
  loader: glob({ pattern: "*.mdx", base: "./src/content/blog/es" }),
  schema: z.object({
    isDraft: z.boolean(),
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    canonicalUrl: z.string().url(),
    githubUrl: z.string().url(),
    language: z.enum(["es", "en"]),
    tags: z.array(z.string()),
    relatedPosts: z.array(reference("blogEs")).optional(),
  }),
});

const blogEn = defineCollection({
  loader: glob({ pattern: "*.mdx", base: "./src/content/blog/en" }),
  schema: z.object({
    isDraft: z.boolean(),
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    canonicalUrl: z.string().url(),
    githubUrl: z.string().url(),
    language: z.enum(["es", "en"]),
    tags: z.array(z.string()),
    relatedPosts: z.array(reference("blogEn")).optional(),
  }),
});

export const collections = { blogEs, blogEn };
