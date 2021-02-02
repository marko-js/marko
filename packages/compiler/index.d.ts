import { TaglibLookup } from "@marko/babel-utils";

export type Config = {
  output?: "html" | "dom";
  writeVersionComment?: boolean;
  ignoreUnrecognizedTags?: boolean;
  sourceMaps?: boolean;
  translator?: string;
  fileSystem?: typeof import("fs");
  modules?: "esm" | "cjs";
  optimize?: boolean;
  cache?: Map<unknown, unknown>;
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
  watchFiles?: string[];
  tags?: string[];
  deps: Array<
    | string
    | {
        type: string;
        code: string;
        path: string;
        require?: boolean;
        virtualPath?: string;
        [x: string]: unknown;
      }
  >;
};

export type CompileResult = {
  code: string;
  map?: unknown;
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

export namespace taglib {
  export function excludeDir(dirname: string): void;
  export function excludePackage(packageName: string): void;
  export function register(id: string, props: { [x:string]: unknown }): void;
  export function buildLookup(dirname: string, translator?: unknown): TaglibLookup
  export function clearCaches(): void;
}