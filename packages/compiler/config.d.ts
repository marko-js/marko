declare const Config: {
  output?: "html" | "dom" | "hydrate" | "migrate" | "source";
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
