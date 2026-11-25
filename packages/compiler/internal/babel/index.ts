// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="./modules.d.ts" />

declare module "@babel/core" {
  export const File: any;
}

export { codeFrameColumns } from "@babel/code-frame";
export {
  createConfigItem,
  File,
  loadPartialConfig,
  loadPartialConfigAsync,
  transformAsync,
  transformSync,
} from "@babel/core";
export { generate as generator } from "@babel/generator";
export { parse, parseExpression } from "@babel/parser";
export { NodePath, traverse } from "@babel/traverse";

// A static default import (not `* as`, not `createRequire`): this file is the rolldown
// entry for `dist/babel.js`, and a CJS default import keeps the runtime-patched Marko nodes.
import typesModule from "@babel/types";

export const types = typesModule as typeof import("@babel/types");
