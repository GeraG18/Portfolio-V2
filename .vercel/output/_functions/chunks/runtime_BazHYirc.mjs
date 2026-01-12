/* eslint-disable */


/**
 * The project's base locale.
 *
 * @example
 *   if (locale === baseLocale) {
 *     // do something
 *   }
 */
const baseLocale = "en";
/**
 * The project's locales that have been specified in the settings.
 *
 * @example
 *   if (locales.includes(userSelectedLocale) === false) {
 *     throw new Error('Locale is not available');
 *   }
 */
const locales = /** @type {const} */ (["en", "es"]);
/** @type {string} */
const cookieName = "PARAGLIDE_LOCALE";
/** @type {number} */
const cookieMaxAge = 34560000;
/**
 * @type {Array<"cookie" | "baseLocale" | "globalVariable" | "url" | "preferredLanguage" | "localStorage" | `custom-${string}`>}
 */
const strategy = [
  "cookie",
  "globalVariable",
  "baseLocale"
];
/**
 * @typedef {{
 * 		getStore(): {
 *   		locale?: Locale,
 * 			origin?: string,
 * 			messageCalls?: Set<string>
 *   	} | undefined,
 * 		run: (store: { locale?: Locale, origin?: string, messageCalls?: Set<string>},
 *    cb: any) => any
 * }} ParaglideAsyncLocalStorage
 */
/**
 * Server side async local storage that is set by `serverMiddleware()`.
 *
 * The variable is used to retrieve the locale and origin in a server-side
 * rendering context without effecting other requests.
 *
 * @type {ParaglideAsyncLocalStorage | undefined}
 */
let serverAsyncLocalStorage = undefined;
const isServer = typeof window === 'undefined';
/**
 * Sets the server side async local storage.
 *
 * The function is needed because the `runtime.js` file
 * must define the `serverAsyncLocalStorage` variable to
 * avoid a circular import between `runtime.js` and
 * `server.js` files.
 *
 * @param {ParaglideAsyncLocalStorage | undefined} value
 */
function overwriteServerAsyncLocalStorage(value) {
    serverAsyncLocalStorage = value;
}

globalThis.__paraglide = {};

/**
 * This is a fallback to get started with a custom
 * strategy and avoid type errors.
 *
 * The implementation is overwritten
 * by \`overwriteGetLocale()\` and \`defineSetLocale()\`.
 *
 * @type {Locale|undefined}
 */
let _locale;
let localeInitiallySet = false;
/**
 * Get the current locale.
 *
 * @example
 *   if (getLocale() === 'de') {
 *     console.log('Germany 🇩🇪');
 *   } else if (getLocale() === 'nl') {
 *     console.log('Netherlands 🇳🇱');
 *   }
 *
 * @type {() => Locale}
 */
let getLocale = () => {
    /** @type {string | undefined} */
    let locale;
    // if running in a server-side rendering context
    // retrieve the locale from the async local storage
    if (serverAsyncLocalStorage) {
        const locale = serverAsyncLocalStorage?.getStore()?.locale;
        if (locale) {
            return locale;
        }
    }
    for (const strat of strategy) {
        if (strat === "cookie") {
            locale = extractLocaleFromCookie();
        }
        else if (strat === "baseLocale") {
            locale = baseLocale;
        }
        else if (strat === "globalVariable" &&
            _locale !== undefined) {
            locale = _locale;
        }
        else if (isCustomStrategy(strat) && customClientStrategies.has(strat)) {
            const handler = customClientStrategies.get(strat);
            if (handler) {
                const result = handler.getLocale();
                // Handle both sync and async results - skip async in sync getLocale
                if (result instanceof Promise) {
                    // Can't await in sync function, skip async strategies
                    continue;
                }
                locale = result;
            }
        }
        // check if match, else continue loop
        if (locale !== undefined) {
            const asserted = assertIsLocale(locale);
            if (!localeInitiallySet) {
                _locale = asserted;
                // https://github.com/opral/inlang-paraglide-js/issues/455
                localeInitiallySet = true;
                setLocale(asserted, { reload: false });
            }
            return asserted;
        }
    }
    throw new Error("No locale found. Read the docs https://inlang.com/m/gerre34r/library-inlang-paraglideJs/errors#no-locale-found");
};

/**
 * Navigates to the localized URL, or reloads the current page
 *
 * @param {string} [newLocation] The new location
 * @return {undefined}
 */
const navigateOrReload = (newLocation) => {
    {
        // reload the page to reflect the new locale
        window.location.reload();
    }
};
/**
 * @typedef {(newLocale: Locale, options?: { reload?: boolean }) => void | Promise<void>} SetLocaleFn
 */
/**
 * Set the locale.
 *
 * Set locale reloads the site by default on the client. Reloading
 * can be disabled by passing \`reload: false\` as an option. If
 * reloading is disabled, you need to ensure that the UI is updated
 * to reflect the new locale.
 *
 * If any custom strategy's \`setLocale\` function is async, then this
 * function will become async as well.
 *
 * @example
 *   setLocale('en');
 *
 * @example
 *   setLocale('en', { reload: false });
 *
 * @type {SetLocaleFn}
 */
let setLocale = (newLocale, options) => {
    const optionsWithDefaults = {
        reload: true,
        ...options,
    };
    // locale is already set
    // https://github.com/opral/inlang-paraglide-js/issues/430
    /** @type {Locale | undefined} */
    let currentLocale;
    try {
        currentLocale = getLocale();
    }
    catch {
        // do nothing, no locale has been set yet.
    }
    /** @type {Array<Promise<any>>} */
    const customSetLocalePromises = [];
    for (const strat of strategy) {
        if (strat === "globalVariable") {
            // a default for a custom strategy to get started quickly
            // is likely overwritten by `defineSetLocale()`
            _locale = newLocale;
        }
        else if (strat === "cookie") {
            if (isServer ||
                typeof document === "undefined" ||
                typeof window === "undefined") {
                continue;
            }
            // set the cookie
            const cookieString = `${cookieName}=${newLocale}; path=/; max-age=${cookieMaxAge}`;
            document.cookie = cookieString;
        }
        else if (strat === "baseLocale") {
            // nothing to be set here. baseLocale is only a fallback
            continue;
        }
        else if (isCustomStrategy(strat) && customClientStrategies.has(strat)) {
            const handler = customClientStrategies.get(strat);
            if (handler) {
                let result = handler.setLocale(newLocale);
                // Handle async setLocale
                if (result instanceof Promise) {
                    result = result.catch((error) => {
                        throw new Error(`Custom strategy "${strat}" setLocale failed.`, {
                            cause: error,
                        });
                    });
                    customSetLocalePromises.push(result);
                }
            }
        }
    }
    const runReload = () => {
        if (!isServer &&
            optionsWithDefaults.reload &&
            window.location &&
            newLocale !== currentLocale) {
            navigateOrReload();
        }
    };
    if (customSetLocalePromises.length) {
        return Promise.all(customSetLocalePromises).then(() => {
            runReload();
        });
    }
    runReload();
    return;
};

/**
 * The origin of the current URL.
 *
 * Defaults to "http://y.com" in non-browser environments. If this
 * behavior is not desired, the implementation can be overwritten
 * by `overwriteGetUrlOrigin()`.
 *
 * @type {() => string}
 */
let getUrlOrigin = () => {
    if (serverAsyncLocalStorage) {
        return serverAsyncLocalStorage.getStore()?.origin ?? "http://fallback.com";
    }
    else if (typeof window !== "undefined") {
        return window.location.origin;
    }
    return "http://fallback.com";
};

/**
 * Check if something is an available locale.
 *
 * @example
 *   if (isLocale(params.locale)) {
 *     setLocale(params.locale);
 *   } else {
 *     setLocale('en');
 *   }
 *
 * @param {any} locale
 * @returns {locale is Locale}
 */
function isLocale(locale) {
    if (typeof locale !== "string")
        return false;
    return !locale
        ? false
        : locales.some((item) => item.toLowerCase() === locale.toLowerCase());
}

/**
 * Asserts that the input is a locale.
 *
 * @param {any} input - The input to check.
 * @returns {Locale} The input if it is a locale.
 * @throws {Error} If the input is not a locale.
 */
function assertIsLocale(input) {
    if (typeof input !== "string") {
        throw new Error(`Invalid locale: ${input}. Expected a string.`);
    }
    const lowerInput = input.toLowerCase();
    const matchedLocale = locales.find((item) => item.toLowerCase() === lowerInput);
    if (!matchedLocale) {
        throw new Error(`Invalid locale: ${input}. Expected one of: ${locales.join(", ")}`);
    }
    return matchedLocale;
}

/**
 * Extracts a locale from a request.
 *
 * Use the function on the server to extract the locale
 * from a request.
 *
 * The function goes through the strategies in the order
 * they are defined. If a strategy returns an invalid locale,
 * it will fall back to the next strategy.
 *
 * Note: Custom server strategies are not supported in this synchronous version.
 * Use `extractLocaleFromRequestAsync` if you need custom server strategies with async getLocale methods.
 *
 * @example
 *   const locale = extractLocaleFromRequest(request);
 *
 * @type {(request: Request) => Locale}
 */
const extractLocaleFromRequest = (request) => {
    /** @type {string|undefined} */
    let locale;
    for (const strat of strategy) {
        if (strat === "cookie") {
            locale = request.headers
                .get("cookie")
                ?.split("; ")
                .find((c) => c.startsWith(cookieName + "="))
                ?.split("=")[1];
        }
        else if (strat === "globalVariable") {
            locale = _locale;
        }
        else if (strat === "baseLocale") {
            return baseLocale;
        }
        else if (strat === "localStorage") {
            continue;
        }
        else if (isCustomStrategy(strat)) {
            // Custom strategies are not supported in sync version
            // Use extractLocaleFromRequestAsync for custom server strategies
            continue;
        }
        if (locale !== undefined) {
            if (!isLocale(locale)) {
                locale = undefined;
            }
            else {
                return assertIsLocale(locale);
            }
        }
    }
    throw new Error("No locale found. There is an error in your strategy. Try adding 'baseLocale' as the very last strategy. Read more here https://inlang.com/m/gerre34r/library-inlang-paraglideJs/errors#no-locale-found");
};

/**
 * Asynchronously extracts a locale from a request.
 *
 * This function supports async custom server strategies, unlike the synchronous
 * `extractLocaleFromRequest`. Use this function when you have custom server strategies
 * that need to perform asynchronous operations (like database calls) in their getLocale method.
 *
 * The function first processes any custom server strategies asynchronously, then falls back
 * to the synchronous `extractLocaleFromRequest` for all other strategies.
 *
 * @see {@link https://github.com/opral/inlang-paraglide-js/issues/527#issuecomment-2978151022}
 *
 * @example
 *   // Basic usage
 *   const locale = await extractLocaleFromRequestAsync(request);
 *
 * @example
 *   // With custom async server strategy
 *   defineCustomServerStrategy("custom-database", {
 *     getLocale: async (request) => {
 *       const userId = extractUserIdFromRequest(request);
 *       return await getUserLocaleFromDatabase(userId);
 *     }
 *   });
 *
 *   const locale = await extractLocaleFromRequestAsync(request);
 *
 * @type {(request: Request) => Promise<Locale>}
 */
const extractLocaleFromRequestAsync = async (request) => {
    /** @type {string|undefined} */
    let locale;
    // Process custom strategies first, in order
    for (const strat of strategy) {
        if (isCustomStrategy(strat) && customServerStrategies.has(strat)) {
            const handler = customServerStrategies.get(strat);
            if (handler) {
                /** @type {string|undefined} */
                locale = await handler.getLocale(request);
            }
            // If we got a valid locale from this custom strategy, use it
            if (locale !== undefined && isLocale(locale)) {
                return assertIsLocale(locale);
            }
        }
    }
    // If no custom strategy provided a valid locale, fall back to sync version
    locale = extractLocaleFromRequest(request);
    return assertIsLocale(locale);
};

/**
 * Extracts a cookie from the document.
 *
 * Will return undefined if the document is not available or if the cookie is not set.
 * The `document` object is not available in server-side rendering, so this function should not be called in that context.
 *
 * @returns {string | undefined}
 */
function extractLocaleFromCookie() {
    if (typeof document === "undefined" || !document.cookie) {
        return;
    }
    const match = document.cookie.match(new RegExp(`(^| )${cookieName}=([^;]+)`));
    const locale = match?.[2];
    if (isLocale(locale)) {
        return locale;
    }
    return undefined;
}

/**
 * If extractLocaleFromUrl is called many times on the same page and the URL
 * hasn't changed, we don't need to recompute it every time which can get expensive.
 * We might use a LRU cache if needed, but for now storing only the last result is enough.
 * https://github.com/opral/monorepo/pull/3575#discussion_r2066731243
 */
/** @type {string|undefined} */
let cachedUrl;
/** @type {Locale|undefined} */
let cachedLocale;
/**
 * Extracts the locale from a given URL using native URLPattern.
 *
 * @param {URL|string} url - The full URL from which to extract the locale.
 * @returns {Locale|undefined} The extracted locale, or undefined if no locale is found.
 */
function extractLocaleFromUrl(url) {
    const urlString = typeof url === "string" ? url : url.href;
    if (cachedUrl === urlString) {
        return cachedLocale;
    }
    let result;
    {
        result = defaultUrlPatternExtractLocale(url);
    }
    cachedUrl = urlString;
    cachedLocale = result;
    return result;
}
/**
 * https://github.com/opral/inlang-paraglide-js/issues/381
 *
 * @param {URL|string} url - The full URL from which to extract the locale.
 * @returns {Locale|undefined} The extracted locale, or undefined if no locale is found.
 */
function defaultUrlPatternExtractLocale(url) {
    const urlObj = new URL(url, "http://dummy.com");
    const pathSegments = urlObj.pathname.split("/").filter(Boolean);
    if (pathSegments.length > 0) {
        const potentialLocale = pathSegments[0];
        if (isLocale(potentialLocale)) {
            return potentialLocale;
        }
    }
    // everything else has to be the base locale
    return baseLocale;
}

/**
 * Lower-level URL localization function, primarily used in server contexts.
 *
 * This function is designed for server-side usage where you need precise control
 * over URL localization, such as in middleware or request handlers. It works with
 * URL objects and always returns absolute URLs.
 *
 * For client-side UI components, use `localizeHref()` instead, which provides
 * a more convenient API with relative paths and automatic locale detection.
 *
 * @example
 * ```typescript
 * // Server middleware example
 * app.use((req, res, next) => {
 *   const url = new URL(req.url, `${req.protocol}://${req.headers.host}`);
 *   const localized = localizeUrl(url, { locale: "de" });
 *
 *   if (localized.href !== url.href) {
 *     return res.redirect(localized.href);
 *   }
 *   next();
 * });
 * ```
 *
 * @example
 * ```typescript
 * // Using with URL patterns
 * const url = new URL("https://example.com/about");
 * localizeUrl(url, { locale: "de" });
 * // => URL("https://example.com/de/about")
 *
 * // Using with domain-based localization
 * const url = new URL("https://example.com/store");
 * localizeUrl(url, { locale: "de" });
 * // => URL("https://de.example.com/store")
 * ```
 *
 * @param {string | URL} url - The URL to localize. If string, must be absolute.
 * @param {Object} [options] - Options for localization
 * @param {string} [options.locale] - Target locale. If not provided, uses getLocale()
 * @returns {URL} The localized URL, always absolute
 */
function localizeUrl(url, options) {
    {
        return localizeUrlDefaultPattern(url, options);
    }
}
/**
 * https://github.com/opral/inlang-paraglide-js/issues/381
 *
 * @param {string | URL} url
 * @param {Object} [options]
 * @param {string} [options.locale]
 * @returns {URL}
 */
function localizeUrlDefaultPattern(url, options) {
    const urlObj = typeof url === "string" ? new URL(url, getUrlOrigin()) : new URL(url);
    const locale = options?.locale ?? getLocale();
    const currentLocale = extractLocaleFromUrl(urlObj);
    // If current locale matches target locale, no change needed
    if (currentLocale === locale) {
        return urlObj;
    }
    const pathSegments = urlObj.pathname.split("/").filter(Boolean);
    // If current path starts with a locale, remove it
    if (pathSegments.length > 0 && isLocale(pathSegments[0])) {
        pathSegments.shift();
    }
    // For base locale, don't add prefix
    if (locale === baseLocale) {
        urlObj.pathname = "/" + pathSegments.join("/");
    }
    else {
        // For other locales, add prefix
        urlObj.pathname = "/" + locale + "/" + pathSegments.join("/");
    }
    return urlObj;
}
/**
 * Low-level URL de-localization function, primarily used in server contexts.
 *
 * This function is designed for server-side usage where you need precise control
 * over URL de-localization, such as in middleware or request handlers. It works with
 * URL objects and always returns absolute URLs.
 *
 * For client-side UI components, use `deLocalizeHref()` instead, which provides
 * a more convenient API with relative paths.
 *
 * @example
 * ```typescript
 * // Server middleware example
 * app.use((req, res, next) => {
 *   const url = new URL(req.url, `${req.protocol}://${req.headers.host}`);
 *   const baseUrl = deLocalizeUrl(url);
 *
 *   // Store the base URL for later use
 *   req.baseUrl = baseUrl;
 *   next();
 * });
 * ```
 *
 * @example
 * ```typescript
 * // Using with URL patterns
 * const url = new URL("https://example.com/de/about");
 * deLocalizeUrl(url); // => URL("https://example.com/about")
 *
 * // Using with domain-based localization
 * const url = new URL("https://de.example.com/store");
 * deLocalizeUrl(url); // => URL("https://example.com/store")
 * ```
 *
 * @param {string | URL} url - The URL to de-localize. If string, must be absolute.
 * @returns {URL} The de-localized URL, always absolute
 */
function deLocalizeUrl(url) {
    {
        return deLocalizeUrlDefaultPattern(url);
    }
}
/**
 * De-localizes a URL using the default pattern (/:locale/*)
 * @param {string|URL} url
 * @returns {URL}
 */
function deLocalizeUrlDefaultPattern(url) {
    const urlObj = typeof url === "string" ? new URL(url, getUrlOrigin()) : new URL(url);
    const pathSegments = urlObj.pathname.split("/").filter(Boolean);
    // If first segment is a locale, remove it
    if (pathSegments.length > 0 && isLocale(pathSegments[0])) {
        urlObj.pathname = "/" + pathSegments.slice(1).join("/");
    }
    return urlObj;
}

/**
 * @typedef {object} ShouldRedirectServerInput
 * @property {Request} request
 * @property {string | URL} [url]
 * @property {ReturnType<typeof assertIsLocale>} [locale]
 *
 * @typedef {object} ShouldRedirectClientInput
 * @property {undefined} [request]
 * @property {string | URL} [url]
 * @property {ReturnType<typeof assertIsLocale>} [locale]
 *
 * @typedef {ShouldRedirectServerInput | ShouldRedirectClientInput} ShouldRedirectInput
 *
 * @typedef {object} ShouldRedirectResult
 * @property {boolean} shouldRedirect - Indicates whether the consumer should perform a redirect.
 * @property {ReturnType<typeof assertIsLocale>} locale - Locale resolved using the configured strategies.
 * @property {URL | undefined} redirectUrl - Destination URL when a redirect is required.
 */
/**
 * Determines whether a redirect is required to align the current URL with the active locale.
 *
 * This helper mirrors the logic that powers `paraglideMiddleware`, but works in both server
 * and client environments. It evaluates the configured strategies in order, computes the
 * canonical localized URL, and reports when the current URL does not match.
 *
 * When called in the browser without arguments, the current `window.location.href` is used.
 *
 * @example
 * // Client side usage (e.g. TanStack Router beforeLoad hook)
 * async function beforeLoad({ location }) {
 *   const decision = await shouldRedirect({ url: location.href });
 *
 *   if (decision.shouldRedirect) {
 *     throw redirect({ to: decision.redirectUrl.href });
 *   }
 * }
 *
 * @example
 * // Server side usage with a Request
 * export async function handle(request) {
 *   const decision = await shouldRedirect({ request });
 *
 *   if (decision.shouldRedirect) {
 *     return Response.redirect(decision.redirectUrl, 307);
 *   }
 *
 *   return render(request, decision.locale);
 * }
 *
 * @param {ShouldRedirectInput} [input]
 * @returns {Promise<ShouldRedirectResult>}
 */
async function shouldRedirect(input = {}) {
    const locale = /** @type {ReturnType<typeof assertIsLocale>} */ (await resolveLocale(input));
    if (!strategy.includes("url")) {
        return { shouldRedirect: false, locale, redirectUrl: undefined };
    }
    const currentUrl = resolveUrl(input);
    const localizedUrl = localizeUrl(currentUrl.href, { locale });
    const shouldRedirectToLocalizedUrl = normalizeUrl(localizedUrl.href) !== normalizeUrl(currentUrl.href);
    return {
        shouldRedirect: shouldRedirectToLocalizedUrl,
        locale,
        redirectUrl: shouldRedirectToLocalizedUrl ? localizedUrl : undefined,
    };
}
/**
 * Resolves the locale either from the provided input or by using the configured strategies.
 *
 * @param {ShouldRedirectInput} input
 * @returns {Promise<ReturnType<typeof assertIsLocale>>}
 */
async function resolveLocale(input) {
    if (input.locale) {
        return assertIsLocale(input.locale);
    }
    if (input.request) {
        return extractLocaleFromRequestAsync(input.request);
    }
    return getLocale();
}
/**
 * Resolves the current URL from the provided input or runtime context.
 *
 * @param {ShouldRedirectInput} input
 * @returns {URL}
 */
function resolveUrl(input) {
    if (input.request) {
        return new URL(input.request.url);
    }
    if (input.url instanceof URL) {
        return new URL(input.url.href);
    }
    if (typeof input.url === "string") {
        return new URL(input.url, getUrlOrigin());
    }
    if (typeof window !== "undefined" && window?.location?.href) {
        return new URL(window.location.href);
    }
    throw new Error("shouldRedirect() requires either a request, an absolute URL, or must run in a browser environment.");
}
/**
 * Normalize url for comparison by stripping the trailing slash.
 *
 * @param {string} url
 * @returns {string}
 */
function normalizeUrl(url) {
    const urlObj = new URL(url);
    urlObj.pathname = urlObj.pathname.replace(/\/$/, "");
    return urlObj.href;
}

/**
 * @param {string} safeModuleId
 * @param {Locale} locale
 */
function trackMessageCall(safeModuleId, locale) {
    if (isServer === false)
        return;
    const store = serverAsyncLocalStorage?.getStore();
    if (store) {
        store.messageCalls?.add(`${safeModuleId}:${locale}`);
    }
}

/**
 * @typedef {"cookie" | "baseLocale" | "globalVariable" | "url" | "preferredLanguage" | "localStorage"} BuiltInStrategy
 */
/**
 * @typedef {`custom_${string}`} CustomStrategy
 */
/**
 * @typedef {BuiltInStrategy | CustomStrategy} Strategy
 */
/**
 * @typedef {Array<Strategy>} Strategies
 */
/**
 * @typedef {{ getLocale: (request?: Request) => Promise<string | undefined> | (string | undefined) }} CustomServerStrategyHandler
 */
/**
 * @typedef {{ getLocale: () => Promise<string|undefined> | (string | undefined), setLocale: (locale: string) => Promise<void> | void }} CustomClientStrategyHandler
 */
/** @type {Map<string, CustomServerStrategyHandler>} */
const customServerStrategies = new Map();
/** @type {Map<string, CustomClientStrategyHandler>} */
const customClientStrategies = new Map();
/**
 * Checks if the given strategy is a custom strategy.
 *
 * @param {any} strategy The name of the custom strategy to validate.
 * Must be a string that starts with "custom-" followed by alphanumeric characters, hyphens, or underscores.
 * @returns {boolean} Returns true if it is a custom strategy, false otherwise.
 */
function isCustomStrategy(strategy) {
    return (typeof strategy === "string" && /^custom-[A-Za-z0-9_-]+$/.test(strategy));
}

// ------ TYPES ------

/**
 * A locale that is available in the project.
 *
 * @example
 *   setLocale(request.locale as Locale)
 *
 * @typedef {(typeof locales)[number]} Locale
 */

/**
 * A branded type representing a localized string.
 *
 * Message functions return this type instead of `string`, enabling TypeScript
 * to distinguish translated strings from regular strings at compile time.
 * This allows you to enforce that only properly localized content is used
 * in your UI components.
 *
 * Since `LocalizedString` is a branded subtype of `string`, it remains fully
 * backward compatible—you can pass it anywhere a `string` is expected.
 *
 * @example
 *   // Enforce localized strings in your components
 *   function PageTitle(props: { title: LocalizedString }) {
 *     return <h1>{props.title}</h1>
 *   }
 *
 *   // ✅ Correct: using a message function
 *   <PageTitle title={m.welcome_title()} />
 *
 *   // ❌ Type error: raw strings are not LocalizedString
 *   <PageTitle title="Welcome" />
 *
 * @example
 *   // LocalizedString is assignable to string (backward compatible)
 *   const localized: LocalizedString = m.greeting()
 *   const str: string = localized  // ✅ works fine
 *
 *   // But string is not assignable to LocalizedString
 *   const raw: LocalizedString = "Hello"  // ❌ Type error
 *
 * @example
 *   // Catches accidental string concatenation
 *   function showMessage(msg: LocalizedString) { ... }
 *
 *   showMessage(m.hello())                    // ✅
 *   showMessage("Hello " + userName)          // ❌ Type error
 *   showMessage(m.hello_user({ name: userName }))  // ✅ use params instead
 *
 * @typedef {string & { readonly __brand: 'LocalizedString' }} LocalizedString
 */

export { strategy as a, serverAsyncLocalStorage as b, deLocalizeUrl as d, getLocale as g, locales as l, overwriteServerAsyncLocalStorage as o, shouldRedirect as s, trackMessageCall as t };
