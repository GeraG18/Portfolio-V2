import { g as getCollection } from './ContainerTitle_DfSgzJDH.mjs';

function toProject(item) {
  try {
    if (!item || !item.data || !item.data.title) {
      console.warn("Item inválido:", item);
      return null;
    }
    const id = item.id || "";
    const filename = id.split("/")[1] || "";
    let lang = "es";
    if (item.data.lang && (item.data.lang === "es" || item.data.lang === "en")) {
      lang = item.data.lang;
    } else if (filename.includes("-en")) {
      lang = "en";
    } else if (filename.includes("-es")) {
      lang = "es";
    }
    return {
      id,
      slug: item.slug || id.split("/")[0],
      body: item.body || "",
      data: {
        title: item.data.title || "",
        description: item.data.description,
        lang,
        technologies: item.data.technologies || [],
        urls: item.data.urls || [],
        coverImage: item.data.coverImage,
        coverAlt: item.data.coverAlt,
        date: item.data.date,
        role: item.data.role,
        status: item.data.status || "finished",
        featured: Boolean(item.data.featured),
        client: item.data.client,
        category: item.data.category,
        duration: item.data.duration
      },
      render: item.render || (() => Promise.resolve({
        Content: () => null,
        headings: []
      }))
    };
  } catch (error) {
    console.error("Error converting project:", error, item);
    return null;
  }
}
async function getLocalizedProjects(locale = "es") {
  try {
    console.log(`🔍 Buscando proyectos para locale: ${locale}`);
    const allProjects = await getCollection("projects");
    console.log(`📁 Total proyectos encontrados: ${allProjects.length}`);
    if (allProjects.length === 0) {
      console.warn("⚠️ No se encontraron proyectos.");
      return [];
    }
    const convertedProjects = allProjects.map(toProject).filter((project) => project !== null);
    const filteredProjects = convertedProjects.filter((project) => {
      return project.data.lang === locale;
    });
    console.log(`✅ Proyectos filtrados para ${locale}: ${filteredProjects.length}`);
    const getSortDate = (project) => {
      const endDate = project.data.date?.end?.toLowerCase();
      const isActive = endDate === "present" || endDate === "actualidad" || endDate === "current" || project.data.status === "active";
      if (isActive && project.data.date?.start) {
        const startDate = new Date(project.data.date.start);
        startDate.setFullYear(startDate.getFullYear() + 100);
        return startDate;
      }
      if (project.data.date?.end && !["present", "actualidad", "current"].includes(project.data.date.end.toLowerCase())) {
        try {
          return new Date(project.data.date.end);
        } catch {
        }
      }
      if (project.data.date?.start) {
        try {
          return new Date(project.data.date.start);
        } catch {
          return /* @__PURE__ */ new Date(0);
        }
      }
      return /* @__PURE__ */ new Date(0);
    };
    return filteredProjects.sort((a, b) => {
      if (a.data.featured && !b.data.featured) return -1;
      if (!a.data.featured && b.data.featured) return 1;
      const dateA = getSortDate(a);
      const dateB = getSortDate(b);
      return dateB.getTime() - dateA.getTime();
    });
  } catch (error) {
    console.error("❌ Error getting projects:", error);
    return [];
  }
}

export { getLocalizedProjects as g };
