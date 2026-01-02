// src/content/config.ts
import { defineCollection, z } from 'astro:content';

// 1. Define la colección CORRECTAMENTE
const projectsCollection = defineCollection({
  type: 'content', // Esto es OBLIGATORIO para archivos .md
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    lang: z.enum(['es', 'en']).default('es'),
    technologies: z.array(z.string()).default([]),
    urls: z.array(z.object({
      name: z.string(),
      url: z.string(),
    })).default([]),
    // NO uses image() helper aquí temporalmente hasta que funcione
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

// 2. Exporta CORRECTAMENTE - ¡ESTA ES LA PARTE CLAVE!
export const collections = {
  projects: projectsCollection, // La clave debe llamarse 'projects'
};