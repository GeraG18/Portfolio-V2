/* eslint-disable */
import { getLocale, trackMessageCall, experimentalMiddlewareLocaleSplitting, isServer } from '../runtime.js';
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
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.about_me_paragraph_1(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("about_me_paragraph_1", locale)
	if (locale === "en") return en_about_me_paragraph_1(inputs)
	return es_about_me_paragraph_1(inputs)
};
export { about_me_paragraph_1 as "about_me.paragraph_1" }