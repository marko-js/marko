type EntryKind = "page" | "load" | "persisted" | "renderers";
type LinkedEntryKind = "page" | "load";
declare const Config: {
  /** `"hydrate"` is deprecated; Marko 6 resumes rather than hydrates. Prefer `output: "dom", entry: "page"` for new page entries, noting that unlike `"hydrate"` it also enables taglib translators. */
  output?: "html" | "dom" | "migrate" | "source" | "hydrate";
  /** Derived artifact to compile: the "page"/"load" entry facades,
   * "persisted" (the `x.marko?persisted` update graph), or "renderers" (the
   * server-side construction-triple map); all share one analysis. */
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
  /** Build-constant flag enabling persisted (single-page server-first update)
   * output; a render with `$global.persisted` set then emits patch frames. */
  persisted?: boolean;
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
