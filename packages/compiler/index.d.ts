import { Diagnostic, TaglibLookup } from "@marko/compiler/babel-utils";
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
  api: undefined | string;
}

// Each field follows the flag that produces it; an omitted flag may be set by
// `configure`, so only `code` (on unless disabled) is assumed.
export interface CompileResult<C extends Config = Config> {
  ast: C extends { ast: true }
    ? types.File
    : C extends { ast: false }
      ? null
      : types.File | null;
  code: C extends { code: false } ? null : string;
  map: C extends { code: false }
    ? null
    : C extends { sourceMaps: true | "both" }
      ? SourceMap
      : C extends { sourceMaps: false | "inline" }
        ? null
        : SourceMap | null;
  meta: MarkoMeta;
}

export const version: string;

export const globalConfig: Config;

export function configure(config: Config): void;

export function compile<C extends Config = Config>(
  src: string,
  filename: string,
  config?: C,
): Promise<CompileResult<C>>;

export function compileSync<C extends Config = Config>(
  src: string,
  filename: string,
  config?: C,
): CompileResult<C>;

export function compileFile<C extends Config = Config>(
  filename: string,
  config?: C,
): Promise<CompileResult<C>>;

export function compileFileSync<C extends Config = Config>(
  filename: string,
  config?: C,
): CompileResult<C>;

export function getRuntimeEntryFiles(
  output: string,
  translator?: string | undefined,
): string[];

export function getRuntimeVersion(translator?: unknown): string;

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
