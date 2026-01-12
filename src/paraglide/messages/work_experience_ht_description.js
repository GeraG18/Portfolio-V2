/* eslint-disable */
import { getLocale, trackMessageCall, experimentalMiddlewareLocaleSplitting, isServer } from '../runtime.js';
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
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.work_experience_ht_description(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("work_experience_ht_description", locale)
	if (locale === "en") return en_work_experience_ht_description(inputs)
	return es_work_experience_ht_description(inputs)
};
export { work_experience_ht_description as "work_experience.ht_description" }