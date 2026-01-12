import { c as createComponent, m as maybeRenderHead, b as renderTemplate, d as createAstro, r as renderComponent, a as renderScript, e as addAttribute, g as renderSlot, u as unescapeHTML } from '../chunks/astro/server_GOUyW78n.mjs';
import 'piccolore';
import { a as $$LinkButton, $ as $$Layout } from '../chunks/Layout_DdN2PxwL.mjs';
import { p as projects_no_image, l as last_projects_no_items, b as $$Container, $ as $$ContainerTitle, a as last_projects_title } from '../chunks/ContainerTitle_vDxBEMtt.mjs';
import 'clsx';
/* empty css                                 */
import { g as getLocale, t as trackMessageCall } from '../chunks/runtime_BazHYirc.mjs';
import { g as getLocalizedProjects } from '../chunks/projects_CNyHEFL1.mjs';
import { m as months_present } from '../chunks/months_present_DHAfTBNv.mjs';
export { renderers } from '../renderers.mjs';

/* eslint-disable */
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

const en_hero_section_greetings = /** @type {(inputs: {}) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hey there! My name is Gerardo`)
};

const es_hero_section_greetings = /** @type {(inputs: {}) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hola! Mi nombre es Gerardo`)
};

/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
/* @__NO_SIDE_EFFECTS__ */
const hero_section_greetings = (inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	trackMessageCall("hero_section_greetings", locale);
	if (locale === "en") return en_hero_section_greetings()
	return es_hero_section_greetings()
};

/* eslint-disable */
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

const en_hero_section_description = /** @type {(inputs: {}) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Developer with the goal of building technological innovations, constantly improving, and solving challenges.`)
};

const es_hero_section_description = /** @type {(inputs: {}) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Desarrollador con el objetivo de construir innovaciones tecnológicas, estar en mejora constante y resolver desafios.`)
};

/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
/* @__NO_SIDE_EFFECTS__ */
const hero_section_description = (inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	trackMessageCall("hero_section_description", locale);
	if (locale === "en") return en_hero_section_description()
	return es_hero_section_description()
};

/* eslint-disable */
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

const en_hero_section_download_cv = /** @type {(inputs: {}) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Download CV`)
};

const es_hero_section_download_cv = /** @type {(inputs: {}) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descargar CV`)
};

/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
/* @__NO_SIDE_EFFECTS__ */
const hero_section_download_cv = (inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	trackMessageCall("hero_section_download_cv", locale);
	if (locale === "en") return en_hero_section_download_cv()
	return es_hero_section_download_cv()
};

/* eslint-disable */
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

const en_hero_section_linkedin = /** @type {(inputs: {}) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`LinkedIn`)
};

const es_hero_section_linkedin = /** @type {(inputs: {}) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`LinkedIn`)
};

/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
/* @__NO_SIDE_EFFECTS__ */
const hero_section_linkedin = (inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	trackMessageCall("hero_section_linkedin", locale);
	if (locale === "en") return en_hero_section_linkedin()
	return es_hero_section_linkedin()
};

/* eslint-disable */
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

const en_about_me_title = /** @type {(inputs: {}) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`About me`)
};

const es_about_me_title = /** @type {(inputs: {}) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sobre mí`)
};

/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
/* @__NO_SIDE_EFFECTS__ */
const about_me_title = (inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	trackMessageCall("about_me_title", locale);
	if (locale === "en") return en_about_me_title()
	return es_about_me_title()
};

/* eslint-disable */
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

const en_about_me_paragraph_1 = /** @type {(inputs: {}) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hi! I'm Gerardo. I have a Master's Degree in Software Engineering and a Bachelor Degree in Computer Systems Engineering focused on Software Development. I have developed the skills to be a better professional and to produce and develop software of the best quality, taking new challenges every day.`)
};

const es_about_me_paragraph_1 = /** @type {(inputs: {}) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hola! Soy Gerardo. Tengo una Maestría en Ingeniería de Software y una Licenciatura en Ingeniería en Sistemas Computacionales con especialización en Desarrollo de Software. He desarrollado las habilidades para ser un mejor profesional y para producir y desarrollar software de la más alta calidad, asumiendo nuevos desafíos cada día.`)
};

/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
/* @__NO_SIDE_EFFECTS__ */
const about_me_paragraph_1 = (inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	trackMessageCall("about_me_paragraph_1", locale);
	if (locale === "en") return en_about_me_paragraph_1()
	return es_about_me_paragraph_1()
};

/* eslint-disable */
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

const en_about_me_paragraph_2 = /** @type {(inputs: {}) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`My goal is to improve my programming skills, learn from all my errors and resolve complex challenges that always require solutions which are hard to understand. I have always been passionate about continuous learning in software development.`)
};

const es_about_me_paragraph_2 = /** @type {(inputs: {}) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mi objetivo es el mejorar de forma constante, aprender de todos mis errores y siempre resolver los desafíos complejos que requieren una solución complicada de entender. Siempre me ha apasionado el aprendizaje continuo del desarrollo de Software.`)
};

/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
/* @__NO_SIDE_EFFECTS__ */
const about_me_paragraph_2 = (inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	trackMessageCall("about_me_paragraph_2", locale);
	if (locale === "en") return en_about_me_paragraph_2()
	return es_about_me_paragraph_2()
};

/* eslint-disable */
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

const en_about_me_paragraph_3 = /** @type {(inputs: {}) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Technologies & Tools:`)
};

const es_about_me_paragraph_3 = /** @type {(inputs: {}) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tecnologías y herramientas:`)
};

/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
/* @__NO_SIDE_EFFECTS__ */
const about_me_paragraph_3 = (inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	trackMessageCall("about_me_paragraph_3", locale);
	if (locale === "en") return en_about_me_paragraph_3()
	return es_about_me_paragraph_3()
};

/* eslint-disable */
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

const en_work_experience_title = /** @type {(inputs: {}) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Work experience`)
};

const es_work_experience_title = /** @type {(inputs: {}) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Experiencia laboral`)
};

/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
/* @__NO_SIDE_EFFECTS__ */
const work_experience_title = (inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	trackMessageCall("work_experience_title", locale);
	if (locale === "en") return en_work_experience_title()
	return es_work_experience_title()
};

/* eslint-disable */
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

const en_work_experience_cii_description = /** @type {(inputs: {}) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`At Córdova Industrial, I worked on implementing the freelance project called InteliHogar for smart homes. My contributions included coding the store profile for device control, implementing subscription plan management logic for smart home benefits, redesigning the Ionic-based application to make it more intuitive with natural screen flow, contributing to the development of a smart alarm system and monitoring application for home monitoring personnel. I was also responsible for implementing SEO and SSR on the Angular-based website and worked on its translation for the American market (InteliHom, now discontinued). Other projects I worked on included Enegrin, Cord, and JMAS (Municipal Water and Sanitation Board), which involved remote PLC control management through bridge applications for activating and deactivating PLC options. Technologies used included Ionic, Node-RED, and Raspberry Pi. In these projects, I played a significant role in the interface design created in Figma.`)
};

const es_work_experience_cii_description = /** @type {(inputs: {}) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En Córdova Industrial estube trabajando en la implementación del proyecto freelance llamado InteliHogar que es de casas inteligentes, en el cual aporté la codificación del perfil en la tienda online para su accionamiento, realicé la lógica de la gestión de planes de suscripción para contar con ventajas en el hogar inteligente, hice el rediseño de la aplicación del proyecto trabajada en Ionic para hacerla más intuitiva y que contase con un seguimiento de pantallas más natural, contribuí a la fabricación de una alarma inteligente y una aplicación de monitoreo para el personal de monitoreo de hogares, también estuve encargado de la implementación de SEO y SSR en la página hecha en Angular, también trabajé en su traducción para su marca en el público estadounidense (InteliHom, ya descontinuado). Otro de los proyectos trabajados fue Enegrin, Cord y JMAS (Junta Municipal de Agua y Saneamiento) que los proyectos eran haciendo uso de control remoto de PLCs, gestionando el control remoto por medio de unas aplicaciones que hacían de puente para activar y desactivar opciones de dichos PLCs, se usaron las tecnologías Ionic, Node Red y Raspberry Pi, en dichos proyectos influí en gran parte en el diseño de interfaz realizado en Figma.`)
};

/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
/* @__NO_SIDE_EFFECTS__ */
const work_experience_cii_description = (inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	trackMessageCall("work_experience_cii_description", locale);
	if (locale === "en") return en_work_experience_cii_description()
	return es_work_experience_cii_description()
};

/* eslint-disable */
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

const en_work_experience_ht_description = /** @type {(inputs: {}) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`At Horizon Trailers, I worked on the Horizon Trailers, Loadboss, Bedboss, Ranchboss projects, and an application that I cannot mention at the moment as it is still under development. In these projects, I was directly involved in designing the web pages in Figma and developing these pages using Next.js and React, implementing SEO and SSR efficiently. Additionally, I worked on the performance and accessibility of these pages, improving their efficiency and load time by 80%, ensuring that there are no delays longer than 1.5 seconds on initial loads (though other factors such as Google Cloud bucket requirements also play a role). I also worked on their security by regularly reviewing Next.js versions and updating when necessary, as well as conducting reviews on data encryption handled behind the pages.`)
};

const es_work_experience_ht_description = /** @type {(inputs: {}) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En Horizon Trailers estuve trabajando en los proyectos Horizon Trailers, Loadboss, Bedboss, Ranchboss y una aplicación de la cual no puedo hacer mención de momento porque sigue en desarrollo, en dichos proyectos estuve trabajando directamente con el diseño de las páginas web en Figma, hice el desarrollo de dichas páginas en Next.js y React, haciendo una implementación de SEO, SSR de una manera eficiente. Además en dichas páginas estuve trabajando en el rendimiento y en la accesibilidad, mejorando su eficiencia y carga en un 80%, haciendo que no haya demoras mayores a 1.5 segundos en sus primeras cargas (aunque aquí influyen otros factores como lo son los requisitos del bucket de Google Cloud), además he estado trabajando en la seguridad de las mismas revisando de forma periódica las versiones de Next.js y actualizando cuando es necesario, además de hacer revisiones sobre la encriptación de datos que se llegan a manejar por detrás de la página.`)
};

/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
/* @__NO_SIDE_EFFECTS__ */
const work_experience_ht_description = (inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	trackMessageCall("work_experience_ht_description", locale);
	if (locale === "en") return en_work_experience_ht_description()
	return es_work_experience_ht_description()
};

/* eslint-disable */
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

const en_last_projects_view_all = /** @type {(inputs: {}) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`View full projects archive`)
};

const es_last_projects_view_all = /** @type {(inputs: {}) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ver todos los proyectos`)
};

/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
/* @__NO_SIDE_EFFECTS__ */
const last_projects_view_all = (inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	trackMessageCall("last_projects_view_all", locale);
	if (locale === "en") return en_last_projects_view_all()
	return es_last_projects_view_all()
};

/* eslint-disable */
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

const en_footer_text = /** @type {(inputs: { figma: NonNullable<unknown>, trae: NonNullable<unknown>, astro: NonNullable<unknown>, tailwind: NonNullable<unknown>, vercel: NonNullable<unknown> }) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Loosely designed in ${i?.figma} and coded in ${i?.trae} by yours truly. Built with ${i?.astro} and ${i?.tailwind}, deployed with ${i?.vercel}. All text is set in the Switzer typeface.`)
};

const es_footer_text = /** @type {(inputs: { figma: NonNullable<unknown>, trae: NonNullable<unknown>, astro: NonNullable<unknown>, tailwind: NonNullable<unknown>, vercel: NonNullable<unknown> }) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Diseñado libremente en ${i?.figma} y programado en ${i?.trae} por mí. Construido con ${i?.astro} y ${i?.tailwind}, desplegado en ${i?.vercel}. Todos los textos utilizan la tipografía Switzer.`)
};

/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{ figma: NonNullable<unknown>, trae: NonNullable<unknown>, astro: NonNullable<unknown>, tailwind: NonNullable<unknown>, vercel: NonNullable<unknown> }} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
/* @__NO_SIDE_EFFECTS__ */
const footer_text = (inputs, options = {}) => {
	const locale = options.locale ?? getLocale();
	trackMessageCall("footer_text", locale);
	if (locale === "en") return en_footer_text(inputs)
	return es_footer_text(inputs)
};

/* eslint-disable */
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

const en_months_feb = /** @type {(inputs: {}) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`February`)
};

const es_months_feb = /** @type {(inputs: {}) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Febrero`)
};

/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
/* @__NO_SIDE_EFFECTS__ */
const months_feb = (inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	trackMessageCall("months_feb", locale);
	if (locale === "en") return en_months_feb()
	return es_months_feb()
};

/* eslint-disable */
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

const en_months_sep = /** @type {(inputs: {}) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`September`)
};

const es_months_sep = /** @type {(inputs: {}) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Septiembre`)
};

/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "es" }} options
* @returns {LocalizedString}
*/
/* @__NO_SIDE_EFFECTS__ */
const months_sep = (inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	trackMessageCall("months_sep", locale);
	if (locale === "en") return en_months_sep()
	return es_months_sep()
};

const $$DownloadIcon = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="download-icon" id="download-icon" data-astro-cid-vh7muvhd> <span class="material-symbols-rounded top-icon" data-astro-cid-vh7muvhd>
keyboard_arrow_down
</span> <span class="material-symbols-rounded bottom-icon" data-astro-cid-vh7muvhd>
check_indeterminate_small
</span> </div> `;
}, "/Users/gerag18/Documents/GitHub-HT/Portfolio-V2/src/components/ui/DownloadIcon.astro", void 0);

const $$Astro$3 = createAstro();
const $$HeroSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$HeroSection;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col-reverse xl:flex-row gap-1 w-full *max-w-5xl"> <div class="w-full h-full flex flex-col gap-8 justify-center items-start"> <!-- <h1 id="fullName" class="font-bold text-xl">Gerardo Gallegos Jr</h1> --> <h1 id="hero-name" class="px-2 w-full text-4xl tracking-tighter text-balance max-lg:font-medium max-sm:px-4 sm:text-5xl lg:text-6xl xl:text-8xl font-['Switzer-Light']"> ${hero_section_greetings()} </h1> <!-- <span class="text-center text-[2.5rem] font-['Switzer-Medium'] w-full lg:w-3/5 h-16 border border-(--accent) relative before:content-['role-span'] before:absolute before:text-xs before:-left-px before:-top-5 before:bg-(--accent) before:py-0.5 before:px-1  before:text-(--background) mt-5">
            {t('hero_section.title')}
        </span> --> <p class="max-w-(--breakpoint-md) mx-4 px-2 text-base/7 text-gray-500 border border-blue-500/80 relative before:content-['description-span'] before:absolute before:text-xs/6 before:-left-px before:-top-7 before:bg-blue-500/80 before:py-0.5 before:px-1 before:text-(--background) before:font-mono before:whitespace-pre"> ${hero_section_description()} </p> <div class="px-4 flex gap-2 flex-row items-center justify-start"> ${renderComponent($$result, "LinkButton", $$LinkButton, { "target": "_blank", "width": "[14rem]", "id": "downloadCVButton", "href": "/downloadable_resources/Gerardo_Gallegos_Jr_Resume.pdf" }, { "default": ($$result2) => renderTemplate`${hero_section_download_cv()}${renderComponent($$result2, "DownloadIcon", $$DownloadIcon, {})} ` })} ${renderComponent($$result, "LinkButton", $$LinkButton, { "target": "_blank", "width": "[14rem]", "id": "linkedinButton", "href": "https://www.linkedin.com/in/gerardo-gallegos-jr/" }, { "default": ($$result2) => renderTemplate`${hero_section_linkedin()}<span class="material-symbols-rounded">
send
</span> ` })} </div> </div> <!-- <div class="w-full h-full flex items-center justify-center !px-4 !py-4 md:!py-0">
            <div class="relative flex items-center justify-center md:h-[80%] max-w-screen-xl">
                <Image src={Background} alt="Imágen de Ciudad Cyberpunk" class="z-5 absolute rounded-full !mb-[4rem]"/>
                <Image src={Avatar} alt="Avatar de Gerardo" class="z-10 h-[38vh] xl:h-fit image-mask !mt-[4rem]"/>
                
            </div>
    </div> --> </div> ${renderScript($$result, "/Users/gerag18/Documents/GitHub-HT/Portfolio-V2/src/components/landing/HeroSection.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/gerag18/Documents/GitHub-HT/Portfolio-V2/src/components/landing/HeroSection.astro", void 0);

const $$Astro$2 = createAstro();
const $$SystemWindow = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SystemWindow;
  const { className, contentClassName, id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(id, "id")}${addAttribute(`rounded-xl p-1 text-sm border border-gray-200 min-w-80 min-h-80 grid grid-cols-1 grid-rows-[auto_1fr] ${className}`, "class")}> <div class="flex gap-2 p-2"> <span class="size-3 rounded-full bg-black/20"></span> <span class="size-3 rounded-full bg-black/20"></span> <span class="size-3 rounded-full bg-black/20"></span> </div> <div${addAttribute(`rounded-lg bg-black/5 font-mono p-2 ${contentClassName}`, "class")}> ${renderSlot($$result, $$slots["default"])} </div> </div>`;
}, "/Users/gerag18/Documents/GitHub-HT/Portfolio-V2/src/components/ui/SystemWindow.astro", void 0);

const $$AboutMeSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col items-center justify-center mx-auto"> <div class="w-full h-fit flex flex-col md:flex-row justify-start px-4 py-8 md:py-12 items-center"> <div class="w-full flex flex-col items-start justify-center gap-4"> <p class="max-w-xl text-base/7 text-gray-500"> ${about_me_paragraph_1()} </p> <p class="max-w-xl text-base/7 text-gray-500"> ${about_me_paragraph_2()} </p> </div> ${renderComponent($$result, "SystemWindow", $$SystemWindow, { "className": "w-full md:w-3/4", "contentClassName": "text-gray-500 text-base/7 grid grid-cols-1 grid-rows-[auto_1fr] gap-2" }, { "default": ($$result2) => renderTemplate` <p class="w-full h-fit"> ${about_me_paragraph_3} </p> <div class="grid grid-cols-7 md:grid-cols-14 gap-4 h-fit w-full"> <i${addAttribute("icon icon-figma text-2xl w-fit h-fit lg:hover:text-blue-500/80 lg:hover:scale-105", "class")}></i> <i${addAttribute("icon icon-stripe text-2xl w-fit h-fit lg:hover:text-blue-500/80 lg:hover:scale-105", "class")}></i> <i${addAttribute("icon icon-twilio text-2xl w-fit h-fit lg:hover:text-blue-500/80 lg:hover:scale-105", "class")}></i> <i${addAttribute("icon icon-node-js text-2xl w-fit h-fit lg:hover:text-blue-500/80 lg:hover:scale-105", "class")}></i> <i${addAttribute("icon icon-aws text-2xl w-fit h-fit lg:hover:text-blue-500/80 lg:hover:scale-105", "class")}></i> <i${addAttribute("icon icon-mysql text-2xl w-fit h-fit lg:hover:text-blue-500/80 lg:hover:scale-105", "class")}></i> <i${addAttribute("icon icon-maria-db text-2xl w-fit h-fit lg:hover:text-blue-500/80 lg:hover:scale-105", "class")}></i> <i${addAttribute("icon icon-notion text-2xl w-fit h-fit lg:hover:text-blue-500/80 lg:hover:scale-105", "class")}></i> <i${addAttribute("icon icon-google-cloud text-2xl w-fit h-fit lg:hover:text-blue-500/80 lg:hover:scale-105", "class")}></i> <i${addAttribute("icon icon-firestore text-2xl w-fit h-fit lg:hover:text-blue-500/80 lg:hover:scale-105", "class")}></i> <i${addAttribute("icon icon-php text-2xl w-fit h-fit lg:hover:text-blue-500/80 lg:hover:scale-105", "class")}></i> <i${addAttribute("icon icon-firebase text-2xl w-fit h-fit lg:hover:text-blue-500/80 lg:hover:scale-105", "class")}></i> <i${addAttribute("icon icon-gitlab text-2xl w-fit h-fit lg:hover:text-blue-500/80 lg:hover:scale-105", "class")}></i> <i${addAttribute("icon icon-typescript text-2xl w-fit h-fit lg:hover:text-blue-500/80 lg:hover:scale-105", "class")}></i> <i${addAttribute("icon icon-android text-2xl w-fit h-fit lg:hover:text-blue-500/80 lg:hover:scale-105", "class")}></i> <i${addAttribute("icon icon-apple text-2xl w-fit h-fit lg:hover:text-blue-500/80 lg:hover:scale-105", "class")}></i> <i${addAttribute("icon icon-angular text-2xl w-fit h-fit lg:hover:text-blue-500/80 lg:hover:scale-105", "class")}></i> <i${addAttribute("icon icon-astro text-2xl w-fit h-fit lg:hover:text-blue-500/80 lg:hover:scale-105", "class")}></i> <i${addAttribute("icon icon-ember text-2xl w-fit h-fit lg:hover:text-blue-500/80 lg:hover:scale-105", "class")}></i> <i${addAttribute("icon icon-html text-2xl w-fit h-fit lg:hover:text-blue-500/80 lg:hover:scale-105", "class")}></i> <i${addAttribute("icon icon-ionic text-2xl w-fit h-fit lg:hover:text-blue-500/80 lg:hover:scale-105", "class")}></i> <i${addAttribute("icon icon-javascript text-2xl w-fit h-fit lg:hover:text-blue-500/80 lg:hover:scale-105", "class")}></i> <i${addAttribute("icon icon-node-red text-2xl w-fit h-fit lg:hover:text-blue-500/80 lg:hover:scale-105", "class")}></i> <i${addAttribute("icon icon-react text-2xl w-fit h-fit lg:hover:text-blue-500/80 lg:hover:scale-105", "class")}></i> <i${addAttribute("icon icon-sass text-2xl w-fit h-fit lg:hover:text-blue-500/80 lg:hover:scale-105", "class")}></i> <i${addAttribute("icon icon-tailwind text-2xl w-fit h-fit lg:hover:text-blue-500/80 lg:hover:scale-105", "class")}></i> <i${addAttribute("icon icon-trello text-2xl w-fit h-fit lg:hover:text-blue-500/80 lg:hover:scale-105", "class")}></i> <i${addAttribute("icon icon-wordpress text-2xl w-fit h-fit lg:hover:text-blue-500/80 lg:hover:scale-105", "class")}></i> <i${addAttribute("icon icon-css text-2xl w-fit h-fit lg:hover:text-blue-500/80 lg:hover:scale-105", "class")}></i> <i${addAttribute("icon icon-git text-2xl w-fit h-fit lg:hover:text-blue-500/80 lg:hover:scale-105", "class")}></i> <i${addAttribute("icon icon-raspberry-pi text-2xl w-fit h-fit lg:hover:text-blue-500/80 lg:hover:scale-105", "class")}></i> <i${addAttribute("icon icon-next-js text-2xl w-fit h-fit lg:hover:text-blue-500/80 lg:hover:scale-105", "class")}></i> <i${addAttribute("icon icon-github text-2xl w-fit h-fit lg:hover:text-blue-500/80 lg:hover:scale-105", "class")}></i> <i${addAttribute("icon icon-photoshop text-2xl w-fit h-fit lg:hover:text-blue-500/80 lg:hover:scale-105", "class")}></i> <i${addAttribute("icon icon-xcode text-2xl w-fit h-fit lg:hover:text-blue-500/80 lg:hover:scale-105", "class")}></i> <i${addAttribute("icon icon-vscode text-2xl w-fit h-fit lg:hover:text-blue-500/80 lg:hover:scale-105", "class")}></i> <i${addAttribute("icon icon-express-js text-2xl w-fit h-fit lg:hover:text-blue-500/80 lg:hover:scale-105", "class")}></i> <i${addAttribute("icon icon-android-studio text-2xl w-fit h-fit lg:hover:text-blue-500/80 lg:hover:scale-105", "class")}></i> <i${addAttribute("icon icon-gimp text-2xl w-fit h-fit lg:hover:text-blue-500/80 lg:hover:scale-105", "class")}></i> <i${addAttribute("icon icon-zustand text-2xl w-fit h-fit lg:hover:text-blue-500/80 lg:hover:scale-105", "class")}></i> </div> ` })} </div> </div>`;
}, "/Users/gerag18/Documents/GitHub-HT/Portfolio-V2/src/components/landing/AboutMeSection.astro", void 0);

const $$ProjectsPreviewContainer = createComponent(async ($$result, $$props, $$slots) => {
  const currentLocale = getLocale() || "es";
  const projects = await getLocalizedProjects(currentLocale);
  return renderTemplate`${maybeRenderHead()}<div class="h-fit py-4 pb-8 flex flex-col gap-4"> ${projects.length > 0 ? renderTemplate`<div class="flex flex-col gap-2 group/list"> ${projects.splice(0, 3).map((project) => {
    const projectName = project.id.split("/")[0];
    return renderTemplate`<a${addAttribute(`/projects/${projectName}`, "href")} class="group/item *border *border-gray-200 p-4 flex flex-col md:flex-row gap-2 lg:group-hover/list:opacity-50 hover:lg:bg-(--text-grayRGBA) lg:hover:opacity-100"> <div class="flex-none aspect-video relative h-20 w-fit border border-gray-200 overflow-hidden flex items-center justify-center"> ${project.data.coverImage ? renderTemplate`<img${addAttribute(project.data.coverImage, "src")}${addAttribute(project.data.coverAlt, "alt")} class="absolute grayscale inset-0 h-full w-full object-cover group-hover/item:scale-110 group-hover/item:grayscale-0 transition-transform duration-500 ease-in-out border-none">` : renderTemplate`<div class="absolute bg-gray-200 w-full h-full text-[--text] flex flex-col items-center justify-center"> <span class="material-symbols-rounded text-2xl">
image
</span> <span>${projects_no_image()}</span> </div>`} </div> <div> <h2 class="w-full text-lg font-bold group-hover/item:text-blue-500/80">${project.data.title}</h2> ${project.data.description && renderTemplate`<p class="text-gray-500 text-sm py-2">${project.data.description}</p>`} ${project.data.technologies.length > 0 && renderTemplate`<div class="w-full flex flex-row flex-wrap gap-2 text-sm items-center justify-start overflow-y-auto overflow-x-hidden"> ${project.data.technologies.map((tech, index) => renderTemplate`<span class="capitalize text-xs/6 font-mono px-2 bg-blue-500/70 text-white rounded-full flex-none flex items-center justify-center gap-1"> <i${addAttribute("icon icon-" + tech, "class")}></i> ${tech.replace("-", " ")} </span>`)} </div>`} </div> </a>`;
  })} </div>
    ${renderComponent($$result, "LinkButton", $$LinkButton, { "extraClasses": "flex-none w-fit", "href": "/projects" }, { "default": async ($$result2) => renderTemplate`${last_projects_view_all()}<span class="material-symbols-rounded">
folder_copy
</span> ` })}` : renderTemplate`<p>${last_projects_no_items()}</p>`} </div>`;
}, "/Users/gerag18/Documents/GitHub-HT/Portfolio-V2/src/components/landing/ProjectsPreviewContainer.astro", void 0);

const $$Astro$1 = createAstro();
const $$DynamicTag = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$DynamicTag;
  const { tag: Tag, href, children, ...props } = Astro2.props;
  const tagProps = Tag === "a" && href ? { href } : {};
  return renderTemplate`${renderComponent($$result, "Tag", Tag, { ...tagProps, ...props }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "/Users/gerag18/Documents/GitHub-HT/Portfolio-V2/src/components/ui/DynamicTag.astro", void 0);

const $$WorkExperienceTimeline = createComponent(($$result, $$props, $$slots) => {
  const workExperience = [
    // {
    //     date: {
    //         start: `${t('months.feb')} 2022`,
    //         end: `${t('months.sep')} 2024`
    //     },
    //     role:"Freelance Full Stack Developer",
    //     company: "Jessica Varela Salon",
    //     companyLink: "https://www.facebook.com/share/1MsgAit46q/?mibextid=LQQJ4d",
    //     description: "",
    //     technologies: [
    //         "react", "next-js"
    //     ]
    // },
    {
      date: {
        start: `${months_feb()} 2022`,
        end: `${months_sep()} 2024`
      },
      role: "Software Engineer, Full Stack Developer",
      company: "C\xF3rdova Industrial Integradores",
      companyLink: "https://cordovaindustrial.com",
      description: work_experience_cii_description(),
      //TODO: Agregar descripciones en traducciones
      technologies: [
        "angular",
        "ionic",
        "node-red",
        "twilio",
        "stripe",
        "raspberry-pi",
        "typescript",
        "javascript",
        "tailwind",
        "trello",
        "wordpress",
        "xcode",
        "android-studio",
        "git",
        "gitlab",
        "firebase",
        "google-cloud",
        "figma"
      ]
    },
    {
      date: {
        start: `${months_sep()} 2024`,
        end: `${months_present()}`
      },
      role: "Software Engineer, Full Stack Developer",
      company: "Horizon Trailers",
      companyLink: "https://horizontrailers.com",
      description: work_experience_ht_description(),
      technologies: [
        "react",
        "next-js",
        "stripe",
        "typescript",
        "javascript",
        "tailwind",
        "jira",
        "git",
        "gitlab",
        "firebase",
        "google-cloud",
        "raspberry-pi",
        "figma",
        "photoshop"
      ]
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="group/list h-fit py-4 pb-8"> ${workExperience.map(({ role, company, companyLink, date, technologies, description }) => renderTemplate`${renderComponent($$result, "DynamicTag", $$DynamicTag, { "tag": companyLink ? "a" : "div", "href": companyLink, "target": "_blank", "class": "relative block pl-8 sm:pl-12 pr-2 py-6 group *lg:hover:opacity-100 *lg:group-hover/list:opacity-50 motion-reduce:transition-none border border-transparent hover:lg:bg-(--text-grayRGBA) rounded-md group/item" }, { "default": ($$result2) => renderTemplate` <div class="flex flex-col items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-(--text-gray) sm:before:ml-6 before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-(--background) after:border-[3px] after:box-content after:border-(--accent-text) after:rounded-full sm:after:ml-6 after:-translate-x-1/2 after:translate-y-1.5"> <span class="flex-none text-start font-mono text-xs/6 text-gray-500 p-0 w-fit"> ${date.start || "-"} ${date.end !== "" ? "-" : ""} ${date.end} </span> <div class="w-full text-lg font-bold group-hover/item:text-blue-500/80"> ${role} • ${company} ${companyLink && renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path></svg>`} </div> <div class="text-gray-500 text-sm py-2">${unescapeHTML(description)}</div> <div class="w-full flex flex-row flex-wrap gap-2 text-sm items-center justify-start overflow-y-auto overflow-x-hidden"> ${technologies.map((tech, index) => renderTemplate`<span class="capitalize text-xs/6 font-mono px-2 bg-blue-500/70 text-white rounded-full flex-none flex items-center justify-center gap-1"> <i${addAttribute("icon icon-" + tech, "class")}></i> ${tech.replace("-", " ")} </span>`)} </div> </div> ` })}`)} </div>`;
}, "/Users/gerag18/Documents/GitHub-HT/Portfolio-V2/src/components/landing/WorkExperienceTimeline.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, { "id": "hero-section", "className": "flex flex-col items-start justify-center min-h-screen pt-20 " }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "HeroSection", $$HeroSection, {})} ` })} ${renderComponent($$result2, "ContainerTitle", $$ContainerTitle, { "title": about_me_title(), "subtitle": "section-1" })} ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "AboutMeSection", $$AboutMeSection, {})} ` })} ${renderComponent($$result2, "ContainerTitle", $$ContainerTitle, { "title": work_experience_title(), "subtitle": "section-2" })} ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "WorkExperienceTimeline", $$WorkExperienceTimeline, {})} ` })} ${renderComponent($$result2, "ContainerTitle", $$ContainerTitle, { "title": last_projects_title(), "subtitle": "section-3" })} ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "ProjectsPreviewContainer", $$ProjectsPreviewContainer, {})} ` })} ${renderComponent($$result2, "Container", $$Container, { "className": "h-fit py-4 pb-12 text-base/7 text-gray-500 [&_a]:underline [&_a:hover]:text-blue-500" }, { "default": ($$result3) => renderTemplate`${unescapeHTML(
    footer_text({
      figma: '<a href="https://www.figma.com" title="Figma website">Figma</a>',
      trae: '<a href="https://trae.ai" title="TRAE website">TRAE</a>',
      astro: '<a href="https://astro.build" title="Astro website">Astro.js</a>',
      tailwind: '<a href="https://tailwindcss.com" title="Tailwind CSS website">Tailwind CSS</a>',
      vercel: '<a href="https://vercel.com" title="Vercel website">Vercel</a>'
    })
  )}` })} ` })}`;
}, "/Users/gerag18/Documents/GitHub-HT/Portfolio-V2/src/pages/index.astro", void 0);

const $$file = "/Users/gerag18/Documents/GitHub-HT/Portfolio-V2/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
