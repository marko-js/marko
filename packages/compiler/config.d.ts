type EntryKind = "page" | "load" | "update" | "persisted";
type LinkedEntryKind = "page" | "load";
declare const Config: {
  /** `"hydrate"` is deprecated, use `output: "dom", entry: "page"` instead. */
  output?: "html" | "dom" | "migrate" | "source" | "hydrate";
  /**
   * Which derived artifact to compile for this template (default: the module
   * itself). All kinds share the template's cached analysis.
   *
   * - `"page"` — (html/dom) page-entry facade: links assets and, for dom,
   *   bootstraps hydration (`init()`).
   * - `"load"` — (dom) lazy-tag facade: ready-gated wrapper the `<load>`
   *   machinery imports instead of the module.
   * - `"update"` — (dom, requires `persisted`) compiled merge program:
   *   per-section `(patch, live)` functions that place an update render's
   *   payload into live scopes; what `x.marko?update` resolves to.
   * - `"persisted"` — (dom, requires `persisted`) the template's persisted
   *   support module: the full render graph (renderers, walks, signals)
   *   registered for update applies to resolve by id, loaded with the first
   *   persisted navigation; what `x.marko?persisted` resolves to (imported
   *   by the update entry).
   */
  entry?: EntryKind;
  linkAssets?: {
    runtime: string;
    onAsset(kind: LinkedEntryKind, file: string, id: string): void;
  };
  errorRecovery?: boolean;
  applyFixes?: Map<number, unknown>;
  stripTypes?: boolean;
  runtimeId?: string | null;
  ast?: boolean;
  code?: boolean;
  writeVersionComment?: boolean;
  ignoreUnrecognizedTags?: boolean;
  sourceMaps?: boolean | "inline" | "both";
  translator?: any;
  fileSystem?: Pick<
    typeof import("fs"),
    "statSync" | "readFileSync" | "readdirSync"
  >;
  modules?: "esm" | "cjs";
  resolveVirtualDependency?:
    | ((
        filename: string,
        dep: { virtualPath: string; code: string; map?: any },
      ) => string | undefined | null)
    | null;
  hydrateIncludeImports?: RegExp | ((request: string) => boolean);
  hydrateInit?: boolean;
  optimize?: boolean;
  optimizeKnownTemplates?: string[];
  /**
   * Compiles output capable of persisted (single-page server-first update)
   * renders: request-time serialize guards distinguish marker/spine emission
   * from value emission so a render with `$global.persisted` set serializes
   * resume markers for request-derived content without their values. Pure
   * feature flag — constant across a build; the `entry` option selects which
   * per-template artifact each compile emits.
   *
   * `"fragments"` additionally commits the build to fragment-delivered
   * divergence (the @marko/run persisted router's contract): `?persisted`
   * entries stop registering content renderers and dynamic-tag replay
   * signals — the fills-path construction of never-rendered content those
   * registrations existed for — so server-only construction material
   * tree-shakes out of navigation chunks. A dynamic tag whose renderer
   * changes in an update without a fragment entry fails the apply loudly
   * (feeding the router's full-navigation fallback) instead of silently
   * keeping the stale branch.
   */
  persisted?: boolean | "fragments";
  cache?: Map<unknown, unknown>;
  hot?: boolean;
  /** @deprecated */
  meta?: boolean;
  babelConfig?: {
    ast?: boolean | null;
    code?: boolean | null;
    comments?: boolean | null;
    compact?: boolean | "auto" | null;
    caller?: { name?: string; [x: string]: unknown };
    minified?: boolean | null;
    [x: string]: unknown;
  };
};

export = Config;
