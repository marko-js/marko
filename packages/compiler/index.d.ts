import { Diagnostic, TaglibLookup } from "@marko/babel-utils";
import { SourceMap } from "magic-string";

import * as types from "./babel-types";
export { types };

type _Config = typeof import("./config");
export interface Config extends _Config {}
interface Dep {
  type: string;
  path: string;
  [x: string]: unknown;
}

interface VirtualDep {
  type: string;
  code: string;
  virtualPath: string;
  startPos?: number;
  endPos?: number;
  [x: string]: unknown;
}

export interface MarkoMeta {
  id: string;
  component?: string;
  watchFiles: string[];
  tags?: string[];
  deps: Array<string | Dep | VirtualDep>;
  analyzedTags?: [string, ...string[]];
  diagnostics: Diagnostic[];
}

export interface CompileResult {
  ast: types.File;
  code: string;
  map: SourceMap;
  meta: MarkoMeta;
}

export function configure(config: Config): void;

export function compile(
  src: string,
  filename: string,
  config?: Config,
): Promise<CompileResult>;

export function compileSync(
  src: string,
  filename: string,
  config?: Config,
): CompileResult;

export function compileFile(
  filename: string,
  config?: Config,
): Promise<CompileResult>;

export function compileFileSync(
  filename: string,
  config?: Config,
): CompileResult;

export function getRuntimeEntryFiles(
  output: string,
  translator?: string | undefined,
): string[];

export namespace taglib {
  export function resolveOptionalTaglibs(
    taglibIds: string[],
  ): [id: string, props: { [x: string]: unknown }][];
  export function excludeDir(dirname: string): void;
  export function excludePackage(packageName: string): void;
  export function register(id: string): void;
  export function register(id: string, props: { [x: string]: unknown }): void;
  export function buildLookup(
    dirname: string,
    translator?: unknown,
    onError?: (err: Error) => void,
  ): TaglibLookup;
  export function clearCaches(): void;
}
