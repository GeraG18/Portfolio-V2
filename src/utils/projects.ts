// src/utils/projects.ts - VERSIÓN CORREGIDA
import { getCollection } from 'astro:content';

interface ProjectData {
  title: string;
  description?: string;
  lang: 'es' | 'en';
  technologies: string[];
  urls: Array<{ name: string; url: string }>;
  coverImage?: string;
  coverAlt?: string;
  date?: {
    start?: Date | string;
    end?: Date | string;
  };
  role?: string;
  status: 'active' | 'inactive' | 'finished' | 'archived';
  featured: boolean;
  client?: string;
  category?: string;
  duration?: string;
}

interface Project {
  id: string;
  slug: string;
  body: string;
  data: ProjectData;
  render: () => Promise<{
    Content: any;
    headings: Array<{ depth: number; slug: string; text: string }>;
  }>;
}

/**
 * Extraer el nombre del proyecto de la estructura de carpetas
 * Ej: "cord/cord-es" → "cord"
 */
function getProjectNameFromId(id: string): string {
  return id.split('/')[0];
}

/**
 * Extraer idioma del ID del proyecto - CORREGIDO
 * Ej: "cord/cord-es" → "es"
 * Ej: "cord/cord-en" → "en"
 */
function getLocaleFromId(id: string): string {
  const parts = id.split('/');
  if (parts.length < 2) return 'es';
  
  const filename = parts[1];
  // CORRECCIÓN: Buscar -es o -en en cualquier parte del filename
  if (filename.includes('-es')) return 'es';
  if (filename.includes('-en')) return 'en';
  return 'es'; // default
}

/**
 * Obtener slug limpio para URLs
 * Ej: "cord/cord-es" → "cord"
 */
function getProjectSlug(id: string): string {
  return getProjectNameFromId(id);
}

/**
 * Helper para convertir cualquier proyecto al tipo Project - MEJORADO
 */
function toProject(item: any): Project | null {
  try {
    if (!item || !item.data || !item.data.title) {
      console.warn('Item inválido:', item);
      return null;
    }
    
    // Extraer idioma de manera más robusta
    const id = item.id || '';
    const filename = id.split('/')[1] || '';
    let lang: 'es' | 'en' = 'es';
    
    if (item.data.lang && (item.data.lang === 'es' || item.data.lang === 'en')) {
      lang = item.data.lang;
    } else if (filename.includes('-en')) {
      lang = 'en';
    } else if (filename.includes('-es')) {
      lang = 'es';
    }
    
    return {
      id: id,
      slug: item.slug || id.split('/')[0],
      body: item.body || '',
      data: {
        title: item.data.title || '',
        description: item.data.description,
        lang: lang,
        technologies: item.data.technologies || [],
        urls: item.data.urls || [],
        coverImage: item.data.coverImage,
        coverAlt: item.data.coverAlt,
        date: item.data.date,
        role: item.data.role,
        status: item.data.status || 'finished',
        featured: Boolean(item.data.featured),
        client: item.data.client,
        category: item.data.category,
        duration: item.data.duration,
      },
      render: item.render || (() => Promise.resolve({ 
        Content: () => null, 
        headings: [] 
      }))
    };
  } catch (error) {
    console.error('Error converting project:', error, item);
    return null;
  }
}

/**
 * Obtener todos los proyectos filtrados por idioma - CON DEBUG
 */
export async function getLocalizedProjects(locale: string = 'es'): Promise<Project[]> {
  try {
    console.log(`🔍 Buscando proyectos para locale: ${locale}`);
    
    // @ts-ignore
    const allProjects = await getCollection('projects');
    console.log(`📁 Total proyectos encontrados: ${allProjects.length}`);
    
    if (allProjects.length === 0) {
      console.warn('⚠️ No se encontraron proyectos. Verifica:');
      console.warn('1. Que src/content/config.ts esté correcto');
      console.warn('2. Que haya archivos .md en src/content/projects/');
      console.warn('3. Que los archivos tengan frontmatter válido');
      return [];
    }
    
    // Mostrar info de debug para cada proyecto
    console.log('📄 Proyectos crudos encontrados:');
    (allProjects as any[]).forEach((item, index) => {
      console.log(`  ${index + 1}. ID: ${item.id}`);
      console.log(`     Slug: ${item.slug}`);
      console.log(`     Data keys: ${Object.keys(item.data || {})}`);
      console.log(`     Data.lang: ${item.data?.lang}`);
      console.log(`     Filename: ${item.id.split('/')[1]}`);
    });
    
    // Convertir y filtrar
    const convertedProjects = (allProjects as any[])
      .map(toProject)
      .filter((project): project is Project => project !== null);
    
    console.log(`🔄 Proyectos convertidos: ${convertedProjects.length}`);
    
    const filteredProjects = convertedProjects.filter(project => {
      const projectLocale = project.data.lang;
      const matches = projectLocale === locale;
      console.log(`   - ${project.id}: lang=${projectLocale}, matches=${matches}`);
      return matches;
    });
    
    console.log(`✅ Proyectos filtrados para ${locale}: ${filteredProjects.length}`);
    
    // Ordenar
    return filteredProjects.sort((a, b) => {
      if (a.data.featured && !b.data.featured) return -1;
      if (!a.data.featured && b.data.featured) return 1;
      
      const dateA = a.data.date?.start ? new Date(a.data.date.start).getTime() : 0;
      const dateB = b.data.date?.start ? new Date(b.data.date.start).getTime() : 0;
      return dateB - dateA;
    });
    
  } catch (error) {
    console.error('❌ Error getting projects:', error);
    return [];
  }
}

/**
 * Obtener un proyecto específico por nombre y opcionalmente idioma
 */
export async function getProject(
  projectName: string, 
  locale?: string
): Promise<Project | null> {
  try {
    console.log(`🔍 Buscando proyecto: ${projectName}, locale: ${locale || 'cualquiera'}`);
    
    // @ts-ignore
    const allProjects = await getCollection('projects');
    
    const project = (allProjects as any[]).find(item => {
      const name = getProjectNameFromId(item.id);
      const projectLocale = item.data.lang || getLocaleFromId(item.id);
      
      const matchesName = name === projectName;
      const matchesLocale = !locale || projectLocale === locale;
      
      console.log(`   - ${item.id}: name=${name}, locale=${projectLocale}, matchesName=${matchesName}, matchesLocale=${matchesLocale}`);
      
      return matchesName && matchesLocale;
    });
    
    if (project) {
      console.log(`✅ Proyecto encontrado: ${project.id}`);
      return toProject(project);
    } else {
      console.log(`❌ Proyecto no encontrado: ${projectName}`);
      return null;
    }
    
  } catch (error) {
    console.error('Error getting project:', error);
    return null;
  }
}

/**
 * Obtener todas las versiones de un proyecto (todos los idiomas)
 */
export async function getProjectVersions(projectName: string): Promise<Project[]> {
  console.log(`🔍 Buscando versiones de: ${projectName}`);
  
  // @ts-ignore
  const allProjects = await getCollection('projects');
  
  const versions = (allProjects as any[])
    .filter(item => {
      const name = getProjectNameFromId(item.id);
      return name === projectName;
    })
    .map(toProject)
    .filter((project): project is Project => project !== null);
  
  console.log(`✅ Versiones encontradas: ${versions.length}`);
  versions.forEach(v => console.log(`   - ${v.id} (${v.data.lang})`));
  
  return versions;
}

// ... (el resto de las funciones se mantienen igual, pero con console.log para debug)

/**
 * DEBUG: Función para ver TODOS los proyectos sin filtrar
 */
export async function getAllProjectsDebug(): Promise<any[]> {
  try {
    // @ts-ignore
    const allProjects = await getCollection('projects');
    console.log('=== DEBUG COMPLETO ===');
    console.log(`Total proyectos: ${allProjects.length}`);
    
    const result = (allProjects as any[]).map(item => ({
      id: item.id,
      slug: item.slug,
      data: item.data,
      filename: item.id.split('/')[1],
      inferredLang: getLocaleFromId(item.id),
      dataLang: item.data?.lang
    }));
    
    console.table(result);
    return result;
  } catch (error) {
    console.error('Debug error:', error);
    return [];
  }
}