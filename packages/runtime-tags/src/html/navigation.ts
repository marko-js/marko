// Server-side helper for the single-page server-first update system: turn a Marko
// render of the navigation outlet into a `ServerUpdate` the client can apply.
//
// See ../../docs/single-page-server-first-updates.md. For the MVP/HTML tier the
// outlet is rendered as an embedded render (a self-describing HTML fragment carrying
// its own resume <script>s); the client resumes it with `initEmbedded(readyId)`.
//
// This helper is transport-agnostic and runtime-light: it only consumes the render's
// async-iterable chunk stream, so it neither imports the HTML runtime internals nor
// touches the DOM, and is unit-testable with any chunk source.

import {
  isNavigationRequest,
  requestBuild,
  type ServerUpdate,
  type SpaRequestHeaders,
} from "../common/spa";

/** The minimal shape of a Marko render result this helper consumes. */
export interface NavigationRenderable {
  render(input?: unknown): AsyncIterable<string>;
}

export interface RenderNavigationOptions {
  /** Build hash to stamp the update with (must match the client's loaded build). */
  build: string;
  /** Canonical URL for the client to record in history. */
  url?: string;
  /** New document title, if it changed. */
  title?: string;
  /**
   * The embedded render's ready id, so the client resumes with
   * `initEmbedded(readyId, runtimeId)`. Omit for a static (non-resumable) fragment.
   */
  readyId?: string;
  /** Runtime id of the render (defaults to the client's). */
  runtimeId?: string;
}

/**
 * Render `template` with `input` and collect it into a `ServerUpdate`. The template
 * is expected to be an embedded render so the produced HTML is a self-describing,
 * resumable fragment.
 */
export async function renderNavigationUpdate(
  template: NavigationRenderable,
  input: unknown,
  options: RenderNavigationOptions,
): Promise<ServerUpdate> {
  let html = "";
  for await (const chunk of template.render(input)) {
    html += chunk;
  }

  return {
    build: options.build,
    url: options.url,
    title: options.title,
    readyId: options.readyId,
    runtimeId: options.runtimeId,
    html,
  };
}

/** Build a reload directive for the stateless full-reload fallback. */
export function reloadDirective(url?: string): ServerUpdate {
  return { build: "", url, reload: true };
}

/**
 * The stateless server decision for a request, discriminated for the HTTP layer:
 *   "full"   — not a navigation request; render and respond with the full document.
 *   "reload" — a navigation request from a stale build; respond with `X-Marko-Reload`.
 *   "update" — a navigation request on the current build; respond with the JSON update.
 */
export type NavigationResult =
  | { kind: "full" }
  | { kind: "reload"; update: ServerUpdate }
  | { kind: "update"; update: ServerUpdate };

export interface HandleNavigationOptions extends RenderNavigationOptions {
  /** The incoming request headers (web `Headers`, a `Map`, or a record). */
  headers: SpaRequestHeaders;
}

/**
 * Turnkey server entry: given a request, decide whether to serve a full document, a
 * reload directive, or a rendered navigation update. Pure over (request, build,
 * render) — the server keeps no per-client state.
 */
export async function handleNavigation(
  template: NavigationRenderable,
  input: unknown,
  options: HandleNavigationOptions,
): Promise<NavigationResult> {
  if (!isNavigationRequest(options.headers)) {
    return { kind: "full" };
  }
  if (requestBuild(options.headers) !== options.build) {
    return { kind: "reload", update: reloadDirective(options.url) };
  }
  return {
    kind: "update",
    update: await renderNavigationUpdate(template, input, options),
  };
}
