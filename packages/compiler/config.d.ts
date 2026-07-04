type EntryKind = "page" | "load";
declare const Config: {
  /** `"hydrate"` is deprecated, use `output: "dom", entry: "page"` instead. */
  output?: "html" | "dom" | "migrate" | "source" | "hydrate";
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
   * resume markers for request-derived content without their values.
   *
   * `"update"` (with `output: "dom"`) compiles the template's update entry
   * (`?update` virtual module) instead: merge functions that apply a
   * persisted update-render patch to live scopes, sharing signals and branch
   * content with the main dom module through the resume registry.
   *
   * `"register"` (with `output: "dom"`) compiles the template's register
   * entry (`?register` virtual module, imported by the generated `?update`
   * entry): the persisted dom module including the registry registrations
   * update entries resolve pieces from. The main (`true`) dom compile omits
   * them so hydration bundles only retain what resume references.
   */
  persisted?: boolean | "update" | "register";
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
