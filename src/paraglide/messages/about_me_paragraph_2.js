/* eslint-disable */
import { getLocale, trackMessageCall, experimentalMiddlewareLocaleSplitting, isServer } from '../runtime.js';
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
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.about_me_paragraph_2(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("about_me_paragraph_2", locale)
	if (locale === "en") return en_about_me_paragraph_2(inputs)
	return es_about_me_paragraph_2(inputs)
};
export { about_me_paragraph_2 as "about_me.paragraph_2" }