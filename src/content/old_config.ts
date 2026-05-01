
import { defineCollection, z } from 'astro:content';


const projectsCollection = defineCollection({
  type: 'content', 
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


export const collections = {
  projects: projectsCollection, 
};