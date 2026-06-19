// MVP of the single-page server-first update controller (HTML tier).
//
// See ../../docs/single-page-server-first-updates.md. This implements the *client
// apply path* for the "streamed HTML" tier: the server sends a navigation update
// describing the new outlet HTML (self-contained, including any resume <script>s),
// and the client swaps it in without reloading the document — guarding on the build
// hash and falling back to a full navigation whenever it cannot safely apply.
//
// Layering (most→least important): the shared wire contract lives in `common/spa`;
// this module is the DOM-side pipeline split into three seams —
//   navigate()          orchestration: fetch → apply → history, with fallback
//   fetchUpdate()       transport: turn a request into a ServerUpdate
//   applyServerUpdate() apply: guard, swap, run resume scripts, update title
// plus executeScripts() (run injected resume payloads). The seams let a prefetched
// or streamed update be applied without re-fetching, and keep apply host-agnostic.
//
// Out of MVP scope (future work): the state+discriminant tier and `updates` chunk,
// partial-render generation on the server, prefetch-on-intent, and link/popstate glue.

import {
  isReloadRequired,
  type ServerUpdate,
  SPA_BUILD_HEADER,
  SPA_NAV_HEADER,
  SPA_RELOAD_HEADER,
} from "../common/spa";

export type { ServerUpdate } from "../common/spa";

export interface NavigateOptions {
  /** The build hash the loaded client was built with. */
  build: string;
  /** The outlet element (or selector) to update. */
  target: Element | string;
  /** `fetch` implementation (defaults to global). */
  fetchImpl?: typeof fetch;
  /** Document (defaults to global). */
  doc?: Document;
  /** History (defaults to global). */
  history?: Pick<History, "pushState">;
  /** Location used for the full-reload fallback (defaults to global). */
  location?: Pick<Location, "assign">;
  /** Resume hook for reactive islands in the new content. */
  resume?: (target: Element) => void;
  /** Execute injected resume <script>s. Default: true. */
  runScripts?: boolean;
  /** Extra request headers. */
  headers?: Record<string, string>;
}

/**
 * Navigate to `url` server-first: fetch a navigation update, guard the build hash,
 * apply it in place, and record history — falling back to a full document
 * navigation on a reload directive, a build mismatch, or any error.
 * Returns `true` if the navigation was applied in place.
 */
export async function navigate(
  url: string,
  options: NavigateOptions,
): Promise<boolean> {
  const loc = options.location || location;

  let update: ServerUpdate;
  try {
    update = await fetchUpdate(url, options);
  } catch {
    loc.assign(url);
    return false;
  }

  const applied = applyServerUpdate(update, {
    build: options.build,
    target: options.target,
    doc: options.doc,
    runScripts: options.runScripts,
    resume: options.resume,
    onReload: () => loc.assign(url),
  });

  if (applied) {
    (options.history || history).pushState({}, "", update.url || url);
  }
  return applied;
}

export interface FetchUpdateOptions {
  /** The build hash the loaded client was built with. */
  build: string;
  /** `fetch` implementation (defaults to global). */
  fetchImpl?: typeof fetch;
  /** Extra request headers. */
  headers?: Record<string, string>;
}

/**
 * Transport seam: request a navigation update for `url`. A reload directive header
 * is normalized into a `reload` update so callers only deal with `ServerUpdate`.
 * Throws on network/parse failure (the caller decides the fallback).
 */
export async function fetchUpdate(
  url: string,
  options: FetchUpdateOptions,
): Promise<ServerUpdate> {
  const fetchImpl = options.fetchImpl || fetch;
  const res = await fetchImpl(url, {
    headers: {
      [SPA_NAV_HEADER]: "1",
      [SPA_BUILD_HEADER]: options.build,
      ...options.headers,
    },
  });

  if (headerValue(res, SPA_RELOAD_HEADER)) {
    return { build: options.build, reload: true };
  }

  return (await res.json()) as ServerUpdate;
}

export interface ApplyOptions {
  /** The build hash the loaded client was built with. */
  build: string;
  /** The outlet element (or a selector resolved against `doc`) to update. */
  target: Element | string;
  /** Document used for title updates / selector resolution. Defaults to the target's. */
  doc?: Document;
  /** Execute <script>s found in the injected HTML (resume payloads). Default: true. */
  runScripts?: boolean;
  /** Hook to resume reactive islands in the swapped subtree (wire init/initEmbedded). */
  resume?: (target: Element) => void;
  /** Called instead of applying when the update cannot be safely applied. */
  onReload: (url?: string) => void;
}

/**
 * Apply seam: apply a server navigation update to the live document.
 * Returns `true` if applied in place, `false` if it fell back to a reload.
 */
export function applyServerUpdate(
  update: ServerUpdate,
  options: ApplyOptions,
): boolean {
  if (isReloadRequired(update, options.build)) {
    options.onReload(update.url);
    return false;
  }

  const target = resolveTarget(options.target, options.doc);
  const doc = options.doc || target.ownerDocument!;

  if (update.html != null) {
    target.innerHTML = update.html;
    if (options.runScripts !== false) {
      executeScripts(target, doc);
    }
    options.resume?.(target);
  }

  if (update.title != null) {
    doc.title = update.title;
  }

  return true;
}

/**
 * Re-execute <script> elements inside `container`. Markup assigned via innerHTML does
 * not run its scripts, so resume payloads streamed in an HTML fragment must be
 * re-created as live <script> nodes (in document order) to execute.
 */
export function executeScripts(container: Element, doc: Document): void {
  for (const old of [...container.querySelectorAll("script")]) {
    const next = doc.createElement("script");
    for (const { name, value } of [...old.attributes]) {
      next.setAttribute(name, value);
    }
    next.textContent = old.textContent;
    old.replaceWith(next);
  }
}

function resolveTarget(target: Element | string, doc?: Document): Element {
  if (typeof target !== "string") return target;
  const el = (doc || document).querySelector(target);
  if (!el) throw new Error(`Navigation target not found: ${target}`);
  return el;
}

function headerValue(res: unknown, name: string): string | null {
  const headers = (res as { headers?: { get?(n: string): string | null } })
    .headers;
  return headers && typeof headers.get === "function"
    ? headers.get(name)
    : null;
}
