import { c as createComponent, r as renderComponent, a as renderScript, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_GOUyW78n.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_DdN2PxwL.mjs';
/* empty css                               */
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  let seo = {
    title: `Error 404 | Gerardo G.`,
    description: `La ruta a la que intentaste acceder no existe :(`,
    openGraph: {
      basic: {
        title: `Error 404 | Gerardo G.`,
        type: "website",
        image: "/SEO.svg"
      }
    },
    extend: {
      meta: [
        { name: "description", content: `La ruta a la que intentaste acceder no existe :(` }
      ]
    }
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "seo": seo, "data-astro-cid-zetdm5md": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-zetdm5md> <div class="flex flex-col z-[600] items-center justify-center fixed left-0 bottom-0 md:static w-[100vw] h-[6rem] md:h-[100vh] md:w-[8rem]" data-astro-cid-zetdm5md> <!-- <NavigationBack icon='arrow_back' tooltip='Volver a inicio' href='/'/> --> </div> <div id="block-container" class="container !overflow-x-hidden !overflow-y-auto gap-4 max-w-screen-xl !mx-2.5 md:!mx-20 2xl:!mx-auto" data-astro-cid-zetdm5md> <h1 data-astro-cid-zetdm5md>:-(</h1> <h1 class="text-start" data-astro-cid-zetdm5md>ERROR <span class="text-gradient" data-astro-cid-zetdm5md>404</span></h1> <div class="flex flex-col items-center justify-center" data-astro-cid-zetdm5md> <p class="text-center" data-astro-cid-zetdm5md>¿De verdad intentaste ir a "<span id="pageRoute" data-astro-cid-zetdm5md></span>"?</p> <p class="text-center" data-astro-cid-zetdm5md>Siento decepcionarte, pero aquí no hay nada.</p> </div> </div> <div class="items-center justify-center relative hidden md:flex flex-col h-[100vh] w-[8rem]" data-astro-cid-zetdm5md> <!-- <ScrollNumber/> --> <!-- <EmailDecorator/> --> </div> <!-- <ScrollCTA/> --> </main> ` })} ${renderScript($$result, "/Users/gerag18/Documents/GitHub-HT/Portfolio-V2/src/pages/404.astro?astro&type=script&index=0&lang.ts")} `;
}, "/Users/gerag18/Documents/GitHub-HT/Portfolio-V2/src/pages/404.astro", void 0);

const $$file = "/Users/gerag18/Documents/GitHub-HT/Portfolio-V2/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$404,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
