/* eslint-disable */
import { getLocale, trackMessageCall, experimentalMiddlewareLocaleSplitting, isServer } from '../runtime.js';
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
export const footer_text = (inputs, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.footer_text(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("footer_text", locale)
	if (locale === "en") return en_footer_text(inputs)
	return es_footer_text(inputs)
};