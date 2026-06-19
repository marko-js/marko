// MVP of the single-page server-first update controller (HTML tier).
//
// See docs/single-page-server-first-updates.md. This implements the *client apply
// path* for the "streamed HTML" tier: the server sends a navigation update describing
// the new outlet HTML (self-contained, including any resume <script>s), and the client
// swaps it in without reloading the document — guarding on the build hash and falling
// back to a full navigation whenever it cannot safely apply.
//
// Scope of this MVP:
//   * build-hash guard + always-correct full-reload fallback
//   * outlet content swap with document continuity (no page reload)
//   * execution of resume <script>s contained in the injected HTML
//   * a `resume` hook where the reactive runtime (init/initEmbedded) is wired in
//
// Deliberately out of scope (future work): the state+discriminant tier, partial-render
// generation on the server, prefetch-on-intent, and link/popstate interception glue.
//
// The module takes its DOM/host dependencies (document, history, location, fetch) via
// options so it is host-agnostic and fully testable.

const NAV_HEADER = "x-marko-nav";
const BUILD_HEADER = "x-marko-build";
const RELOAD_HEADER = "x-marko-reload";

/** A navigation update produced by the server for the HTML tier. */
export interface ServerUpdate {
  /** Build hash the update was produced against. */
  build: string;
  /** Canonical URL to record in history (defaults to the requested url). */
  url?: string;
  /** New document title, if changed. */
  title?: string;
  /** New outlet HTML (self-describing; may contain resume <script>s). */
  html?: string;
  /** Explicit request to do a full reload instead of applying. */
  reload?: boolean;
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
 * Apply a server navigation update to the live document.
 * Returns `true` if applied in place, `false` if it fell back to a reload.
 */
export function applyServerUpdate(
  update: ServerUpdate,
  options: ApplyOptions,
): boolean {
  // Always-correct fallback: a stale client must never apply mismatched HTML/state.
  if (update.reload || update.build !== options.build) {
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
  const doc = options.doc || document;
  const loc = options.location || location;
  const fetchImpl = options.fetchImpl || fetch;
  const fallback = () => {
    loc.assign(url);
    return false;
  };

  let update: ServerUpdate;
  try {
    const res = await fetchImpl(url, {
      headers: {
        [NAV_HEADER]: "1",
        [BUILD_HEADER]: options.build,
        ...options.headers,
      },
    });

    if (headerValue(res, RELOAD_HEADER)) {
      return fallback();
    }

    update = (await res.json()) as ServerUpdate;
  } catch {
    return fallback();
  }

  const applied = applyServerUpdate(update, {
    build: options.build,
    target: options.target,
    doc,
    runScripts: options.runScripts,
    resume: options.resume,
    onReload: () => {
      loc.assign(url);
    },
  });

  if (applied) {
    (options.history || history).pushState({}, "", update.url || url);
  }
  return applied;
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
