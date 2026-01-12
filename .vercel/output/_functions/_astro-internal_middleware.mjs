import { o as overwriteServerAsyncLocalStorage, s as shouldRedirect, a as strategy, d as deLocalizeUrl, b as serverAsyncLocalStorage } from './chunks/runtime_CvrDTCWp.mjs';
import 'es-module-lexer';
import './chunks/astro-designed-error-pages_BNBTBPxS.mjs';
import 'piccolore';
import './chunks/astro/server_GOUyW78n.mjs';
import 'clsx';
import 'cookie';
import { s as sequence } from './chunks/index_g_nrCXps.mjs';

/* eslint-disable */


/**
 * Server middleware that handles locale-based routing and request processing.
 *
 * This middleware performs several key functions:
 *
 * 1. Determines the locale for the incoming request using configured strategies
 * 2. Handles URL localization and redirects (only for document requests)
 * 3. Maintains locale state using AsyncLocalStorage to prevent request interference
 *
 * When URL strategy is used:
 *
 * - The locale is extracted from the URL for all request types
 * - If URL doesn't match the determined locale, redirects to localized URL (only for document requests)
 * - De-localizes URLs before passing to server (e.g., `/fr/about` → `/about`)
 *
 * @template T - The return type of the resolve function
 *
 * @param {Request} request - The incoming request object
 * @param {(args: { request: Request, locale: import("./runtime.js").Locale }) => T | Promise<T>} resolve - Function to handle the request. The callback receives:
 *   - `request`: A modified request with a delocalized URL when the URL strategy is used (e.g., `/fr/about` → `/about`).
 *      If your framework handles URL localization itself (e.g., TanStack Router's `rewrite` option), use the original
 *      request instead to avoid redirect loops.
 *   - `locale`: The determined locale for this request.
 * @param {{ onRedirect:(response: Response) => void }} [callbacks] - Callbacks to handle events from middleware
 * @returns {Promise<Response>}
 *
 * @example
 * ```typescript
 * // Basic usage in metaframeworks like NextJS, SvelteKit, Astro, Nuxt, etc.
 * export const handle = async ({ event, resolve }) => {
 *   return paraglideMiddleware(event.request, ({ request, locale }) => {
 *     // let the framework further resolve the request
 *     return resolve(request);
 *   });
 * };
 * ```
 *
 * @example
 * ```typescript
 * // Usage in a framework like Express JS or Hono
 * app.use(async (req, res, next) => {
 *   const result = await paraglideMiddleware(req, ({ request, locale }) => {
 *     // If a redirect happens this won't be called
 *     return next(request);
 *   });
 * });
 * ```
 *
 * @example
 * ```typescript
 * // Usage in serverless environments like Cloudflare Workers
 * // ⚠️ WARNING: This should ONLY be used in serverless environments like Cloudflare Workers.
 * // Disabling AsyncLocalStorage in traditional server environments risks cross-request pollution where state from
 * // one request could leak into another concurrent request.
 * export default {
 *   fetch: async (request) => {
 *     return paraglideMiddleware(
 *       request,
 *       ({ request, locale }) => handleRequest(request, locale),
 *       { disableAsyncLocalStorage: true }
 *     );
 *   }
 * };
 * ```
 *
 * @example
 * ```typescript
 * // Usage with frameworks that handle URL localization/delocalization themselves
 * //
 * // Some frameworks like TanStack Router handle URL localization and delocalization
 * // themselves via their own rewrite APIs (e.g., `rewrite.input`/`rewrite.output`).
 * //
 * // When the framework handles this, the middleware's URL delocalization is not needed.
 * // Using the modified `request` from the callback would cause a redirect loop because
 * // both the middleware and the framework would attempt to delocalize the URL.
 * //
 * // Solution: Pass the original request to the handler instead of the modified one.
 * // The middleware still handles locale detection, cookies, and AsyncLocalStorage context.
 * //
 * // ❌ WRONG - causes redirect loop when framework handles URL rewriting:
 * // paraglideMiddleware(req, ({ request }) => handler.fetch(request))
 * //
 * // ✅ CORRECT - use original request when framework handles URL localization:
 * // paraglideMiddleware(req, () => handler.fetch(req))
 *
 * * *
 * export default {
 *   fetch(req: Request): Promise<Response> {
 *     // TanStack Router handles URL rewriting via deLocalizeUrl/localizeUrl
 *     // so we pass the original `req` instead of the modified `request`
 *     return paraglideMiddleware(req, () => handler.fetch(req))
 *   },
 * }
 * ```
 */
async function paraglideMiddleware(request, resolve, callbacks) {
    if (!serverAsyncLocalStorage) {
        const { AsyncLocalStorage } = await import('async_hooks');
        overwriteServerAsyncLocalStorage(new AsyncLocalStorage());
    }
    else if (!serverAsyncLocalStorage) {
        overwriteServerAsyncLocalStorage(createMockAsyncLocalStorage());
    }
    const decision = await shouldRedirect({ request });
    const locale = decision.locale;
    const origin = new URL(request.url).origin;
    // if the client makes a request to a URL that doesn't match
    // the localizedUrl, redirect the client to the localized URL
    if (request.headers.get("Sec-Fetch-Dest") === "document" &&
        decision.shouldRedirect &&
        decision.redirectUrl) {
        // Create headers object with Vary header if preferredLanguage strategy is used
        /** @type {Record<string, string>} */
        const headers = {};
        if (strategy.includes("preferredLanguage")) {
            headers["Vary"] = "Accept-Language";
        }
        const response = new Response(null, {
            status: 307,
            headers: {
                Location: decision.redirectUrl.href,
                ...headers,
            },
        });
        return response;
    }
    // If the strategy includes "url", we need to de-localize the URL
    // before passing it to the server middleware.
    //
    // The middleware is responsible for mapping a localized URL to the
    // de-localized URL e.g. `/en/about` to `/about`. Otherwise,
    // the server can't render the correct page.
    let newRequest;
    if (strategy.includes("url")) {
        newRequest = new Request(deLocalizeUrl(request.url), request);
    }
    else {
        // Some metaframeworks (NextJS) require a new Request object
        // https://github.com/opral/inlang-paraglide-js/issues/411
        // However, some frameworks (TanStack Start 1.143+) use custom Request
        // implementations that cannot be cloned with `new Request(request)`
        // https://github.com/opral/paraglide-js/issues/573
        // Try to clone the request, but fall back to the original if cloning fails
        try {
            newRequest = new Request(request);
        }
        catch {
            newRequest = request;
        }
    }
    // the message functions that have been called in this request
    /** @type {Set<string>} */
    const messageCalls = new Set();
    const response = await serverAsyncLocalStorage?.run({ locale, origin, messageCalls }, () => resolve({ locale, request: newRequest }));
    return response;
}
/**
 * Creates a mock AsyncLocalStorage implementation for environments where
 * native AsyncLocalStorage is not available or disabled.
 *
 * This mock implementation mimics the behavior of the native AsyncLocalStorage
 * but doesn't require the async_hooks module. It's designed to be used in
 * environments like Cloudflare Workers where AsyncLocalStorage is not available.
 *
 * @returns {import("./runtime.js").ParaglideAsyncLocalStorage}
 */
function createMockAsyncLocalStorage() {
    /** @type {any} */
    let currentStore = undefined;
    return {
        getStore() {
            return currentStore;
        },
        async run(store, callback) {
            currentStore = store;
            try {
                return await callback();
            }
            finally {
                currentStore = undefined;
            }
        },
    };
}

function onRequest$1({ request }, next) {
  return paraglideMiddleware(request, () => next());
}

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
