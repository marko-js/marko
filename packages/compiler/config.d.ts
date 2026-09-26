type EntryKind = "page" | "load";
declare const Config: {
  /** `"hydrate"` is deprecated; Marko 6 resumes rather than hydrates. Prefer `output: "dom", entry: "page"` for new page entries, noting that unlike `"hydrate"` it also enables taglib translators. */
  output?: "html" | "dom" | "migrate" | "source" | "hydrate";
  /** Compiles a page or lazy-load entry instead of a module; requires `linkAssets`. */
  entry?: EntryKind;
  linkAssets?: {
    runtime: string;
    onAsset(kind: EntryKind, file: string, id: string): void;
  };
  errorRecovery?: boolean;
  applyFixes?: Map<number, unknown>;
  stripTypes?: boolean;
  runtimeId?: string | null;
  ast?: boolean;
  code?: boolean;
  /** Implemented by the Marko 5 (class API) translator only; currently inert under the Marko 6 translator. */
  writeVersionComment?: boolean;
  /** Implemented by the Marko 5 (class API) translator only; currently inert under the Marko 6 translator. */
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
  /** Implemented by the Marko 5 (class API) translator only; currently inert under the Marko 6 translator. */
  hydrateInit?: boolean;
  optimize?: boolean;
  optimizeKnownTemplates?: string[];
  /** Overrides the template id (by default derived from the path relative to the cwd's package root), not child
   * register ids, which still derive from that path. Must not start with `_`, `-`, `$C_` or `$compat_`, which runtime-owned ids use. */
  getTemplateId?(request: string): string;
  /** Share one only across compiles whose config differs in nothing but `output` and `entry`. It rechecks each template's content and
   * its dependencies' mtimes, but taglib discovery is cached apart: after adding or removing files or editing `marko.json`, clear it and call `taglib.clearCaches()`. */
  cache?: Map<unknown, unknown>;
  hot?: boolean;
  /** @deprecated Marko 5 (class API) only; currently inert under Marko 6. */
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
