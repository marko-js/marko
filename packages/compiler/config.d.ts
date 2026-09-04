type EntryKind = "page" | "load";
declare const Config: {
  /** `"hydrate"` is deprecated; Marko 6 resumes rather than hydrates. Prefer `output: "dom", entry: "page"` for new page entries, noting that unlike `"hydrate"` it also enables taglib translators. */
  output?: "html" | "dom" | "migrate" | "source" | "hydrate";
  entry?: EntryKind;
  /** Enables translation for documents that persist across navigations. */
  persisted?: boolean;
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
  /** Overrides the default template id (the root-relative, percent-encoded path). */
  getTemplateId?(request: string): string;
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
