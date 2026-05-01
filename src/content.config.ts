
import { defineCollection } from 'astro:content';
import { z } from 'astro/zod'
import { glob, file } from 'astro/loaders';


const projects = defineCollection({
  loader: glob({ base: "./src/content/projects", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    lang: z.enum(['es', 'en']).default('es'),
    technologies: z.array(z.string()).default([]),
    urls: z.array(z.object({
      name: z.string(),
      url: z.string(),
    })).default([]),
    
    coverImage: z.string().optional(),
    coverAlt: z.string().optional(),
    date: z.object({
      start: z.string().optional(),
      end: z.string().optional(),
    }).optional(),
    role: z.string().optional(),
    status: z.enum(['active', 'inactive', 'finished', 'archived']).default('finished'),
    featured: z.boolean().default(false),
    ownership: z.string().optional(),
    category: z.string().optional(),
    duration: z.string().optional(),
  })
});

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // pubDate: z.coerce.date(),
    // updatedDate: z.coerce.date().optional(),
  }),
});

export const collections = { blog, projects };