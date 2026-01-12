/* eslint-disable */
import { getLocale, trackMessageCall, experimentalMiddlewareLocaleSplitting, isServer } from '../runtime.js';
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
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.work_experience_cii_description(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("work_experience_cii_description", locale)
	if (locale === "en") return en_work_experience_cii_description(inputs)
	return es_work_experience_cii_description(inputs)
};
export { work_experience_cii_description as "work_experience.cii_description" }