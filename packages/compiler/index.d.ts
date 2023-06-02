import { SourceMap } from "magic-string";
import { TaglibLookup, Diagnostic } from "@marko/babel-utils";
import * as types from "./babel-types";
export { types };

export type Config = typeof import("./config");

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

export type MarkoMeta = {
  id: string;
  component?: string;
  watchFiles: string[];
  tags?: string[];
  deps: Array<string | Dep>;
  diagnostics: Diagnostic[];
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
    translator?: unknown,
    onError?: (err: Error) => void
  ): TaglibLookup;
  export function clearCaches(): void;
}
