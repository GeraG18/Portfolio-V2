import { c as createComponent, m as maybeRenderHead, a as renderScript, b as renderTemplate, d as createAstro, e as addAttribute, r as renderComponent, f as renderHead, g as renderSlot } from '../chunks/astro/server_GOUyW78n.mjs';
import 'piccolore';
import 'clsx';
/* empty css                                 */
/* empty css                                 */
import { p as portfolio_description, a as portfolio_title, $ as $$SEO } from '../chunks/SEO_CafdEOBz.mjs';
import { g as getLocale } from '../chunks/runtime_CvrDTCWp.mjs';
import { g as getLocalizedProjects } from '../chunks/projects_4iAOpvxo.mjs';
import { p as projects_no_image, l as last_projects_no_items, $ as $$ContainerTitle, a as last_projects_title, b as $$Container } from '../chunks/ContainerTitle_DfSgzJDH.mjs';
export { renderers } from '../renderers.mjs';

const $$SplashScreen = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="splash-screen" class="fixed inset-0 z-50 flex items-center justify-center bg-white" data-astro-cid-j5o3dv7q> <!-- Tu logo o contenido del splash --> <div class="text-center" data-astro-cid-j5o3dv7q> <div id="splash-logo" class="text-4xl font-bold text-gray-800 mb-4 opacity-0" data-astro-cid-j5o3dv7q>
TuLogo
</div> <div id="splash-loader" class="w-32 h-1 bg-gray-300 mx-auto overflow-hidden rounded-full" data-astro-cid-j5o3dv7q> <div id="splash-progress" class="h-full bg-blue-600 w-0" data-astro-cid-j5o3dv7q></div> </div> </div> </div> ${renderScript($$result, "/Users/gerag18/Documents/GitHub-HT/Portfolio-V2/src/components/SplashScreen.astro?astro&type=script&index=0&lang.ts")} `;
}, "/Users/gerag18/Documents/GitHub-HT/Portfolio-V2/src/components/SplashScreen.astro", void 0);

const $$Astro = createAstro();
const $$AnimatedLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AnimatedLayout;
  const { seo } = Astro2.props;
  const showSplash = Astro2.url.pathname === "/";
  const isHomePage = Astro2.url.pathname === "/" || Astro2.url.pathname === "/index.html";
  return renderTemplate`<html${addAttribute(getLocale(), "lang")}${addAttribute(showSplash ? "splash-active" : "", "class")}> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><!-- FONTS --><link href="https://fonts.googleapis.com/css2?family=Exo:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=Kode+Mono:wght@400..700&display=swap" rel="stylesheet"><meta name="generator"${addAttribute(Astro2.generator, "content")}>${renderComponent($$result, "SEO", $$SEO, { ...seo, "title": seo?.title ?? portfolio_title(), "description": seo?.description ?? portfolio_description() })}${renderHead()}</head> <body> <!-- Splash screen solo en homepage --> ${isHomePage && renderTemplate`${renderComponent($$result, "SplashScreen", $$SplashScreen, {})}`} <main> ${renderSlot($$result, $$slots["default"])} </main> ${isHomePage && renderTemplate`${renderScript($$result, "/Users/gerag18/Documents/GitHub-HT/Portfolio-V2/src/layouts/AnimatedLayout.astro?astro&type=script&index=0&lang.ts")}`} </body> </html> `;
}, "/Users/gerag18/Documents/GitHub-HT/Portfolio-V2/src/layouts/AnimatedLayout.astro", void 0);

const $$ProjectsListContainer = createComponent(async ($$result, $$props, $$slots) => {
  const currentLocale = getLocale() || "es";
  const projects = await getLocalizedProjects(currentLocale);
  return renderTemplate`${maybeRenderHead()}<div class="w-full h-fit py-4 pb-8 flex flex-col gap-4"> ${projects.length > 0 ? renderTemplate`<div class="flex flex-col gap-2 group/list"> ${projects.map((project) => {
    const projectName = project.id.split("/")[0];
    return renderTemplate`<a${addAttribute(`/projects/${projectName}`, "href")} class="group/item *border *border-gray-200 p-4 flex flex-col md:flex-row gap-2 hover:lg:bg-(--text-grayRGBA)"> <div class="flex-none aspect-video relative h-20 w-fit border border-gray-200 overflow-hidden flex items-center justify-center"> ${project.data.coverImage ? renderTemplate`<img${addAttribute(project.data.coverImage, "src")}${addAttribute(project.data.coverAlt, "alt")} class="absolute grayscale inset-0 h-full w-full object-cover group-hover/item:scale-110 group-hover/item:grayscale-0 transition-transform duration-500 ease-in-out border-none">` : renderTemplate`<div class="absolute bg-gray-200 w-full h-full text-[--text] flex flex-col items-center justify-center"> <span class="material-symbols-rounded text-2xl">
image
</span> <span>${projects_no_image()}</span> </div>`} </div> <div> <h2 class="w-full text-lg font-bold group-hover/item:text-blue-500/80">${project.data.title}</h2> ${project.data.description && renderTemplate`<p class="text-gray-500 text-sm py-2">${project.data.description}</p>`} ${project.data.technologies.length > 0 && renderTemplate`<div class="w-full flex flex-row flex-wrap gap-2 text-sm items-center justify-start overflow-y-auto overflow-x-hidden"> ${project.data.technologies.map((tech, index) => renderTemplate`<span class="capitalize text-xs/6 font-mono px-2 bg-blue-500/70 text-white rounded-full flex-none flex items-center justify-center gap-1"> <i${addAttribute("icon icon-" + tech, "class")}></i> ${tech.replace("-", " ")} </span>`)} </div>`} </div> </a>`;
  })} </div>` : renderTemplate`<p>${last_projects_no_items()}</p>`} </div>`;
}, "/Users/gerag18/Documents/GitHub-HT/Portfolio-V2/src/components/projects/ProjectsListContainer.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$AnimatedLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="pt-16"> ${renderComponent($$result2, "ContainerTitle", $$ContainerTitle, { "title": last_projects_title(), "subtitle": "section-1" })} ${renderComponent($$result2, "Container", $$Container, { "id": "all-projects-section", "className": "flex flex-col items-start justify-center min-h-screen" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "ProjectsListContainer", $$ProjectsListContainer, {})} ` })} </div>  ` })}`;
}, "/Users/gerag18/Documents/GitHub-HT/Portfolio-V2/src/pages/projects/index.astro", void 0);

const $$file = "/Users/gerag18/Documents/GitHub-HT/Portfolio-V2/src/pages/projects/index.astro";
const $$url = "/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
