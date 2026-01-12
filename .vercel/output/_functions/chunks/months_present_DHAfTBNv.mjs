import { g as getLocale, t as trackMessageCall } from './runtime_BazHYirc.mjs';

/* eslint-disable */
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

const en_months_present = /** @type {(inputs: {}) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Present`)
};

const es_months_present = /** @type {(inputs: {}) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Actualidad`)
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
const months_present = (inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	trackMessageCall("months_present", locale);
	if (locale === "en") return en_months_present()
	return es_months_present()
};

export { months_present as m };
