import { SourceMap } from "magic-string";
import { TaglibLookup } from "@marko/babel-utils";
import * as types from "./babel-types";
export { types };

type Dep = {
  type: string;
  code: string;
  path: string;
  startPos?: number;
  endPos?: number;
  require?: boolean;
  virtualPath?: string;
  [x: string]: unknown;
};

export type Config = {
  output?: "html" | "dom" | "hydrate" | "migrate" | "source";
  runtimeId?: string | null;
  ast?: boolean;
  code?: boolean;
  writeVersionComment?: boolean;
  ignoreUnrecognizedTags?: boolean;
  sourceMaps?: boolean | "inline" | "both";
  translator?: any;
  fileSystem?: typeof import("fs");
  modules?: "esm" | "cjs";
  resolveVirtualDependency?:
    | ((
        filename: string,
        dep: { virtualPath: string; code: string; map?: SourceMap }
      ) => string)
    | null;
  hydrateIncludeImports?: RegExp | ((request: string) => boolean);
  optimize?: boolean;
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

export type MarkoMeta = {
  id: string;
  component?: string;
  watchFiles: string[];
  tags?: string[];
  deps: Array<string | Dep>;
};

export type CompileResult = {
  ast: types.File;
  code: string;
  map: SourceMap;
  meta: MarkoMeta;
};

export function configure(config: Config): void;

export function compile(
  src: string,
  filename: string,
  config?: Config
): Promise<CompileResult>;

export function compileSync(
  src: string,
  filename: string,
  config?: Config
): CompileResult;

export function compileFile(
  filename: string,
  config?: Config
): Promise<CompileResult>;

export function compileFileSync(
  filename: string,
  config?: Config
): CompileResult;

export function getRuntimeEntryFiles(
  output: string,
  translator?: string | undefined
): string[];

export namespace taglib {
  export function excludeDir(dirname: string): void;
  export function excludePackage(packageName: string): void;
  export function register(id: string, props: { [x: string]: unknown }): void;
  export function buildLookup(
    dirname: string,
    translator?: unknown
  ): TaglibLookup;
  export function clearCaches(): void;
}
