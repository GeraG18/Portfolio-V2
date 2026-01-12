const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": undefined, "SSR": true};
const baseLocale = "en";
const locales = (
  /** @type {const} */
  ["en", "es"]
);
const cookieName = "PARAGLIDE_LOCALE";
const cookieMaxAge = 3456e4;
const strategy = [
  "cookie",
  "globalVariable",
  "baseLocale"
];
let serverAsyncLocalStorage = void 0;
const isServer = Object.assign(__vite_import_meta_env__, { _: process.env._, LANG: process.env.LANG })?.SSR ?? typeof window === "undefined";
function overwriteServerAsyncLocalStorage(value) {
  serverAsyncLocalStorage = value;
}
globalThis.__paraglide = {};
let _locale;
let localeInitiallySet = false;
let getLocale = () => {
  let locale;
  if (serverAsyncLocalStorage) {
    const locale2 = serverAsyncLocalStorage?.getStore()?.locale;
    if (locale2) {
      return locale2;
    }
  }
  for (const strat of strategy) {
    if (strat === "cookie") {
      locale = extractLocaleFromCookie();
    } else if (strat === "baseLocale") {
      locale = baseLocale;
    } else if (strat === "globalVariable" && _locale !== void 0) {
      locale = _locale;
    } else if (isCustomStrategy(strat) && customClientStrategies.has(strat)) {
      const handler = customClientStrategies.get(strat);
      if (handler) {
        const result = handler.getLocale();
        if (result instanceof Promise) {
          continue;
        }
        locale = result;
      }
    }
    if (locale !== void 0) {
      const asserted = assertIsLocale(locale);
      if (!localeInitiallySet) {
        _locale = asserted;
        localeInitiallySet = true;
        setLocale(asserted, { reload: false });
      }
      return asserted;
    }
  }
  throw new Error("No locale found. Read the docs https://inlang.com/m/gerre34r/library-inlang-paraglideJs/errors#no-locale-found");
};
const navigateOrReload = (newLocation) => {
  {
    window.location.reload();
  }
};
let setLocale = (newLocale, options) => {
  const optionsWithDefaults = {
    reload: true,
    ...options
  };
  let currentLocale;
  try {
    currentLocale = getLocale();
  } catch {
  }
  const customSetLocalePromises = [];
  for (const strat of strategy) {
    if (strat === "globalVariable") {
      _locale = newLocale;
    } else if (strat === "cookie") {
      if (isServer || typeof document === "undefined" || typeof window === "undefined") {
        continue;
      }
      const cookieString = `${cookieName}=${newLocale}; path=/; max-age=${cookieMaxAge}`;
      document.cookie = cookieString;
    } else if (strat === "baseLocale") {
      continue;
    } else if (isCustomStrategy(strat) && customClientStrategies.has(strat)) {
      const handler = customClientStrategies.get(strat);
      if (handler) {
        let result = handler.setLocale(newLocale);
        if (result instanceof Promise) {
          result = result.catch((error) => {
            throw new Error(`Custom strategy "${strat}" setLocale failed.`, {
              cause: error
            });
          });
          customSetLocalePromises.push(result);
        }
      }
    }
  }
  const runReload = () => {
    if (!isServer && optionsWithDefaults.reload && window.location && newLocale !== currentLocale) {
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
let getUrlOrigin = () => {
  if (serverAsyncLocalStorage) {
    return serverAsyncLocalStorage.getStore()?.origin ?? "http://fallback.com";
  } else if (typeof window !== "undefined") {
    return window.location.origin;
  }
  return "http://fallback.com";
};
function isLocale(locale) {
  if (typeof locale !== "string")
    return false;
  return !locale ? false : locales.some((item) => item.toLowerCase() === locale.toLowerCase());
}
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
const extractLocaleFromRequest = (request) => {
  let locale;
  for (const strat of strategy) {
    if (strat === "cookie") {
      locale = request.headers.get("cookie")?.split("; ").find((c) => c.startsWith(cookieName + "="))?.split("=")[1];
    } else if (strat === "globalVariable") {
      locale = _locale;
    } else if (strat === "baseLocale") {
      return baseLocale;
    } else if (strat === "localStorage") {
      continue;
    } else if (isCustomStrategy(strat)) {
      continue;
    }
    if (locale !== void 0) {
      if (!isLocale(locale)) {
        locale = void 0;
      } else {
        return assertIsLocale(locale);
      }
    }
  }
  throw new Error("No locale found. There is an error in your strategy. Try adding 'baseLocale' as the very last strategy. Read more here https://inlang.com/m/gerre34r/library-inlang-paraglideJs/errors#no-locale-found");
};
const extractLocaleFromRequestAsync = async (request) => {
  let locale;
  for (const strat of strategy) {
    if (isCustomStrategy(strat) && customServerStrategies.has(strat)) {
      const handler = customServerStrategies.get(strat);
      if (handler) {
        locale = await handler.getLocale(request);
      }
      if (locale !== void 0 && isLocale(locale)) {
        return assertIsLocale(locale);
      }
    }
  }
  locale = extractLocaleFromRequest(request);
  return assertIsLocale(locale);
};
function extractLocaleFromCookie() {
  if (typeof document === "undefined" || !document.cookie) {
    return;
  }
  const match = document.cookie.match(new RegExp(`(^| )${cookieName}=([^;]+)`));
  const locale = match?.[2];
  if (isLocale(locale)) {
    return locale;
  }
  return void 0;
}
let cachedUrl;
let cachedLocale;
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
function defaultUrlPatternExtractLocale(url) {
  const urlObj = new URL(url, "http://dummy.com");
  const pathSegments = urlObj.pathname.split("/").filter(Boolean);
  if (pathSegments.length > 0) {
    const potentialLocale = pathSegments[0];
    if (isLocale(potentialLocale)) {
      return potentialLocale;
    }
  }
  return baseLocale;
}
function localizeUrl(url, options) {
  {
    return localizeUrlDefaultPattern(url, options);
  }
}
function localizeUrlDefaultPattern(url, options) {
  const urlObj = typeof url === "string" ? new URL(url, getUrlOrigin()) : new URL(url);
  const locale = options?.locale ?? getLocale();
  const currentLocale = extractLocaleFromUrl(urlObj);
  if (currentLocale === locale) {
    return urlObj;
  }
  const pathSegments = urlObj.pathname.split("/").filter(Boolean);
  if (pathSegments.length > 0 && isLocale(pathSegments[0])) {
    pathSegments.shift();
  }
  if (locale === baseLocale) {
    urlObj.pathname = "/" + pathSegments.join("/");
  } else {
    urlObj.pathname = "/" + locale + "/" + pathSegments.join("/");
  }
  return urlObj;
}
function deLocalizeUrl(url) {
  {
    return deLocalizeUrlDefaultPattern(url);
  }
}
function deLocalizeUrlDefaultPattern(url) {
  const urlObj = typeof url === "string" ? new URL(url, getUrlOrigin()) : new URL(url);
  const pathSegments = urlObj.pathname.split("/").filter(Boolean);
  if (pathSegments.length > 0 && isLocale(pathSegments[0])) {
    urlObj.pathname = "/" + pathSegments.slice(1).join("/");
  }
  return urlObj;
}
async function shouldRedirect(input = {}) {
  const locale = (
    /** @type {ReturnType<typeof assertIsLocale>} */
    await resolveLocale(input)
  );
  if (!strategy.includes("url")) {
    return { shouldRedirect: false, locale, redirectUrl: void 0 };
  }
  const currentUrl = resolveUrl(input);
  const localizedUrl = localizeUrl(currentUrl.href, { locale });
  const shouldRedirectToLocalizedUrl = normalizeUrl(localizedUrl.href) !== normalizeUrl(currentUrl.href);
  return {
    shouldRedirect: shouldRedirectToLocalizedUrl,
    locale,
    redirectUrl: shouldRedirectToLocalizedUrl ? localizedUrl : void 0
  };
}
async function resolveLocale(input) {
  if (input.locale) {
    return assertIsLocale(input.locale);
  }
  if (input.request) {
    return extractLocaleFromRequestAsync(input.request);
  }
  return getLocale();
}
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
function normalizeUrl(url) {
  const urlObj = new URL(url);
  urlObj.pathname = urlObj.pathname.replace(/\/$/, "");
  return urlObj.href;
}
function trackMessageCall(safeModuleId, locale) {
  if (isServer === false)
    return;
  const store = serverAsyncLocalStorage?.getStore();
  if (store) {
    store.messageCalls?.add(`${safeModuleId}:${locale}`);
  }
}
const customServerStrategies = /* @__PURE__ */ new Map();
const customClientStrategies = /* @__PURE__ */ new Map();
function isCustomStrategy(strategy2) {
  return typeof strategy2 === "string" && /^custom-[A-Za-z0-9_-]+$/.test(strategy2);
}

export { strategy as a, serverAsyncLocalStorage as b, deLocalizeUrl as d, getLocale as g, locales as l, overwriteServerAsyncLocalStorage as o, shouldRedirect as s, trackMessageCall as t };
