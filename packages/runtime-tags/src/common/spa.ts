// Shared wire contract for single-page server-first updates.
// See ../../docs/single-page-server-first-updates.md.
//
// This lives in `common/` because both runtimes depend on it: the HTML runtime
// (server: producing navigation updates) and the DOM runtime (client: applying
// them). Keeping the header names, payload shape, and the reload predicate in one
// place keeps the stateless client/server contract from drifting.

/** Request header marking a navigation (vs a full document) request. */
export const SPA_NAV_HEADER = "x-marko-nav";
/** Request header carrying the client's loaded build hash. */
export const SPA_BUILD_HEADER = "x-marko-build";
/** Response header directing the client to perform a full reload instead. */
export const SPA_RELOAD_HEADER = "x-marko-reload";

/** A navigation update produced by the server for the streamed-HTML tier. */
export interface ServerUpdate {
  /** Build hash the update was produced against. */
  build: string;
  /** Canonical URL to record in history (defaults to the requested url). */
  url?: string;
  /** New document title, if changed. */
  title?: string;
  /** New outlet HTML (self-describing; may contain resume <script>s). */
  html?: string;
  /**
   * The embedded render's ready id. When present, the client resumes the swapped
   * fragment with `initEmbedded(readyId, runtimeId)`; when absent it resumes via
   * `init(runtimeId)`. Omitted entirely for static (non-resumable) fragments.
   */
  readyId?: string;
  /** Runtime id of the render (defaults to the client's). */
  runtimeId?: string;
  /** Explicit request to do a full reload instead of applying. */
  reload?: boolean;
}

/**
 * Whether an update must fall back to a full reload rather than apply in place —
 * the always-correct guard: a stale client (build mismatch) or an explicit reload
 * directive never applies mismatched HTML/state.
 */
export function isReloadRequired(
  update: ServerUpdate,
  clientBuild: string,
): boolean {
  return !!update.reload || update.build !== clientBuild;
}

/**
 * Request headers, as a web `Headers`/`Map` (anything with `get`) or a plain record
 * (e.g. Node's `IncomingMessage.headers`). Header names are matched lower-case.
 */
export type SpaRequestHeaders =
  | { get(name: string): string | null | undefined }
  | Record<string, string | string[] | undefined>;

/** Read a single header value across the supported header shapes. */
export function readHeader(
  headers: SpaRequestHeaders,
  name: string,
): string | undefined {
  const getter = headers as { get?(n: string): string | null | undefined };
  if (typeof getter.get === "function") {
    const value = getter.get(name);
    return value == null ? undefined : String(value);
  }
  const value = (headers as Record<string, string | string[] | undefined>)[
    name
  ];
  return Array.isArray(value)
    ? value[0]
    : value == null
      ? undefined
      : String(value);
}

/** Whether the request asked for a navigation update (vs a full document). */
export function isNavigationRequest(headers: SpaRequestHeaders): boolean {
  return !!readHeader(headers, SPA_NAV_HEADER);
}

/** The client's loaded build hash, as declared in the request. */
export function requestBuild(headers: SpaRequestHeaders): string | undefined {
  return readHeader(headers, SPA_BUILD_HEADER);
}
