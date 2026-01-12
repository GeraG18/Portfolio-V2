import { c as createComponent, m as maybeRenderHead, a as renderScript, e as addAttribute, b as renderTemplate, d as createAstro, g as renderSlot, r as renderComponent, f as renderHead } from './astro/server_GOUyW78n.mjs';
import 'piccolore';
import 'clsx';
import { g as getLocale, l as locales, t as trackMessageCall } from './runtime_BazHYirc.mjs';
/* empty css                         */
/* empty css                         */
import { p as portfolio_description, a as portfolio_title, $ as $$SEO } from './SEO_CxsZYzAf.mjs';

const $$LanguageSwitcher = createComponent(($$result, $$props, $$slots) => {
  const currentLocale = getLocale();
  const localeNames = { en: "English", es: "Espa\xF1ol" };
  return renderTemplate`${maybeRenderHead()}<div class="relative"> <button id="lang-toggle" type="button" class="grid grid-cols-[auto_auto] items-center gap-1 rounded-full px-4 py-2 text-left text-sm/6 text-gray-700 border border-gray-700 lg:hover:bg-gray-700 lg:hover:text-white transition-colors duration-150"> <span class="font-medium">${currentLocale.toUpperCase()}</span> <svg class="w-4 h-4 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path> </svg> </button> <div id="lang-dropdown" class="absolute right-0 mt-2 w-48 rounded-xl border border-gray-200 bg-white shadow-lg py-2 z-50 hidden"> ${locales.map((lang) => {
    const isCurrent = currentLocale === lang;
    return renderTemplate`<button type="button"${addAttribute(lang, "data-lang")}${addAttribute(`lang-option flex items-center justify-between w-full px-4 py-3 transition-colors duration-150 text-left ${isCurrent ? "bg-blue-50/80 text-blue-500 font-medium" : "hover:bg-blue-50"}`, "class")}> <div class="flex items-center gap-3"> <div> <div class="font-medium">${localeNames[lang]}</div> <div class="text-xs font-mono text-gray-500">${lang.toUpperCase()}</div> </div> </div> ${isCurrent && renderTemplate`<svg class="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path> </svg>`} </button>`;
  })} </div> </div> ${renderScript($$result, "/Users/gerag18/Documents/GitHub-HT/Portfolio-V2/src/components/ui/LanguageSwitcher.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/gerag18/Documents/GitHub-HT/Portfolio-V2/src/components/ui/LanguageSwitcher.astro", void 0);

const $$Astro$4 = createAstro();
const $$LinkButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$LinkButton;
  const { href, id, width, target, extraClasses } = Astro2.props;
  const actualClasses = `
grid grid-cols-[auto_auto] items-center gap-1 rounded-full px-4 py-2 text-left text-sm/6 text-gray-700 border border-gray-700 lg:hover:bg-gray-700 lg:hover:text-white
`;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(id, "id")} role="link"${addAttribute(href, "href")}${addAttribute(target, "target")}${addAttribute((extraClasses || "") + " " + actualClasses + " !w-" + width, "class")} data-astro-cid-2ylaoqqh> ${renderSlot($$result, $$slots["default"])} </a> `;
}, "/Users/gerag18/Documents/GitHub-HT/Portfolio-V2/src/components/ui/LinkButton.astro", void 0);

const $$Astro$3 = createAstro();
const $$LogoIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$LogoIcon;
  const { className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(className, "class")} width="834" height="854" viewBox="0 0 834 854" fill="currentColor" xmlns="http://www.w3.org/2000/svg"> <path d="M427 853.959C191.174 853.959 0 662.784 0 426.959C0 191.133 195.674 0 431.5 0H625H833.5L649.5 185.959L431.5 185C297.847 185 185 293.306 185 426.959C185 560.612 304.847 673.459 438.5 673.459H646V672.959V535.809V513.959H393.656L565.66 341.959H646H833V513.959V672.959V853.959H646H427Z" fill="currentColor"></path> </svg>`;
}, "/Users/gerag18/Documents/GitHub-HT/Portfolio-V2/src/components/ui/LogoIcon.astro", void 0);

/* eslint-disable */
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

const en_nav_send_mail = /** @type {(inputs: {}) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Send Mail`)
};

const es_nav_send_mail = /** @type {(inputs: {}) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enviar correo`)
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
const nav_send_mail = (inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	trackMessageCall("nav_send_mail", locale);
	if (locale === "en") return en_nav_send_mail()
	return es_nav_send_mail()
};

const $$Astro$2 = createAstro();
const $$NavigationBar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$NavigationBar;
  return renderTemplate`${maybeRenderHead()}<header class="fixed top-0 w-full transition duration-300 h-16 z-50 border-b border-b-gray-200 px-4" x-data="{ scrolled: false }" x-init="window.onscroll = () => { scrolled = (document.body.scrollTop > 42 || document.documentElement.scrollTop > 42) }" :class="{ 'bg-white/70 backdrop-blur-sm': scrolled, 'bg-transparent': !scrolled }"> <nav class="px-2.5 w-full h-full lg:mx-auto *max-w-5xl flex flex-row items-center justify-between" :class="{ 'border-x border-x-transparent': scrolled, ' border-x border-x-gray-200': !scrolled }"> <a${addAttribute("/", "href")} class="flex flex-row gap-2 items-center justify-center"> <div class="flex items-center justify-center p-1.5 bg-(--text) rounded-full w-10 h-10"> ${renderComponent($$result, "LogoIcon", $$LogoIcon, { "className": "w-3/4 h-3/4 text-white mr-0.5" })} </div> <div class="flex flex-col items-start justify-center gap-0"> <span class="hidden md:block text-start title uppercase leading-4">Gerardo Gallegos Jr</span> <span class="hidden md:block text-start title uppercase leading-4">SOFTWARE DEVELOPER</span> </div> </a> <div class="flex flex-row items-center justify-center gap-2"> ${renderComponent($$result, "LinkButton", $$LinkButton, { "target": "_blank", "width": "[14rem]", "id": "send-mail-button", "href": "mailto:gera.ga.dev@gmail.com" }, { "default": ($$result2) => renderTemplate`${nav_send_mail()}<span class="material-symbols-rounded">
send
</span> ` })} ${renderComponent($$result, "LanguageSwitcher", $$LanguageSwitcher, {})} </div> </nav> </header> ${renderScript($$result, "/Users/gerag18/Documents/GitHub-HT/Portfolio-V2/src/components/NavigationBar.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/gerag18/Documents/GitHub-HT/Portfolio-V2/src/components/NavigationBar.astro", void 0);

const $$Astro$1 = createAstro();
const $$CursorDecorator = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CursorDecorator;
  return renderTemplate`${maybeRenderHead()}<div id="blendCursor" class="fixed pointer-events-none z-9999 rounded-full opacity-0 transition-all duration-200 bg-white mix-blend-difference scale-100" data-astro-cid-qdiyphsw></div> ${renderScript($$result, "/Users/gerag18/Documents/GitHub-HT/Portfolio-V2/src/components/ui/CursorDecorator.astro?astro&type=script&index=0&lang.ts")} `;
}, "/Users/gerag18/Documents/GitHub-HT/Portfolio-V2/src/components/ui/CursorDecorator.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { seo } = Astro2.props;
  return renderTemplate`<html${addAttribute(getLocale(), "lang")}> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><!-- FONTS --><link href="https://fonts.googleapis.com/css2?family=Exo:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=Kode+Mono:wght@400..700&display=swap" rel="stylesheet"><meta name="generator"${addAttribute(Astro2.generator, "content")}>${renderComponent($$result, "SEO", $$SEO, { ...seo, "title": seo?.title ?? portfolio_title(), "description": seo?.description ?? portfolio_description() })}${renderHead()}</head> <body> <main class="relative"> ${renderComponent($$result, "NavigationBar", $$NavigationBar, {})} ${renderComponent($$result, "CursorDecorator", $$CursorDecorator, {})} ${renderSlot($$result, $$slots["default"])} </main> </body></html>`;
}, "/Users/gerag18/Documents/GitHub-HT/Portfolio-V2/src/layouts/Layout.astro", void 0);

export { $$Layout as $, $$LinkButton as a };
