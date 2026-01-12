
import type { MiddlewareNext } from 'astro';
import { paraglideMiddleware } from './paraglide/server.js';

export function onRequest({ request }, next: MiddlewareNext) {
  return paraglideMiddleware(request, () => next());
}