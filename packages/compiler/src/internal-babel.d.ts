import type { codeFrameColumns as baseCodeFrameColumns } from "@babel/code-frame";
// The compiler's own view of `@marko/compiler/internal/babel`, which its
// `tsconfig.json` maps the module to: its exports (never one it lacks), typed
// with Marko's Babel types (the ones `@marko/compiler` publishes). The
// published `index.ts` stubs Babel's packages instead, so that its consumers
// need none of Babel's typings. Babel's other types come straight from its
// packages, with `import type`.
import type {
  BabelFileResult,
  ConfigAPI,
  TransformOptions as BabelTransformOptions,
} from "@babel/core";
import type { GeneratorOptions, GeneratorResult } from "@babel/generator";

import type * as MarkoTypes from "../babel-types";
import type baseTraverse from "../dist/traverse";

export {
  createConfigItem,
  loadPartialConfig,
  loadPartialConfigAsync,
} from "@babel/core";
export { parse, parseExpression } from "@babel/parser";
export { NodePath } from "../babel-types";
export * as types from "../babel-types";

/** Babel's code frame, which also takes the first line's number (`startLine`). */
export declare const codeFrameColumns: (
  rawLines: string,
  location: Parameters<typeof baseCodeFrameColumns>[1],
  options?: Parameters<typeof baseCodeFrameColumns>[2] & { startLine?: number },
) => string;

/** Babel's options, where `inputSourceMap` also takes `false` (none), as Babel does. */
type TransformOptions = Omit<BabelTransformOptions, "inputSourceMap"> & {
  inputSourceMap?: BabelTransformOptions["inputSourceMap"] | false;
};
export declare const transformSync: (
  code: string,
  opts?: TransformOptions,
) => BabelFileResult | null;
export declare const transformAsync: (
  code: string,
  opts?: TransformOptions,
) => Promise<BabelFileResult | null>;

/** Babel's own `File`, the class `@babel/core` keeps internal. */
export declare const File: new (
  options: MarkoTypes.BabelFile["opts"],
  input: { code: string; ast: MarkoTypes.File },
) => MarkoTypes.BabelFile & { scope: MarkoTypes.Scope };

/** `traverse`, with its internal last argument, which visits `parent` itself too. */
export declare const traverse: typeof baseTraverse &
  (<S>(
    parent: MarkoTypes.Node,
    opts: MarkoTypes.TraverseOptions<S>,
    scope: MarkoTypes.Scope,
    state: S,
    parentPath: MarkoTypes.NodePath,
    visitSelf: boolean,
  ) => void);

export declare const generator: (
  ast: MarkoTypes.Node,
  opts?: GeneratorOptions,
  code?: string,
) => GeneratorResult;

/** A Babel plugin's module: called with Babel's API and the plugin's options. */
type Plugin = (
  api: ConfigAPI,
  options: object,
) => { visitor: MarkoTypes.Visitor };
export declare const pluginTransformModulesCommonjs: Plugin;
export declare const pluginTransformTypeScript: Plugin;

declare module "@babel/core" {
  /** What Marko's plugin adds to a compile's metadata. */
  interface BabelFileMetadata {
    marko: import("@marko/compiler").MarkoMeta;
  }
}
