// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="./modules.d.ts" />

declare module "@babel/core" {
  export const File: any;
}

export { codeFrameColumns } from "@babel/code-frame";
export {
  File,
  loadPartialConfig,
  loadPartialConfigAsync,
  transformAsync,
  transformSync,
} from "@babel/core";
export { parse, parseExpression } from "@babel/parser";

import generatorModule from "@babel/generator";
import pluginSyntaxTypeScriptModule from "@babel/plugin-syntax-typescript";
import pluginTransformModulesCommonjsModule from "@babel/plugin-transform-modules-commonjs";
import pluginTransformTypeScriptModule from "@babel/plugin-transform-typescript";
import traverseModule from "@babel/traverse";
// Static default imports (not `* as` namespaces, not `createRequire`) on
// purpose: this file is the rolldown entry that bundles babel into
// `dist/babel.js`, so the imports must stay statically analyzable — and a
// CJS default import is the whole `module.exports`, which keeps the
// runtime-patched Marko AST additions that a namespace import would hide.
import typesModule from "@babel/types";

export const types = typesModule as typeof import("@babel/types");
export const generator = interopDefault(generatorModule);
export const pluginSyntaxTypeScript = interopDefault(
  pluginSyntaxTypeScriptModule,
);
export const pluginTransformModulesCommonjs = interopDefault(
  pluginTransformModulesCommonjsModule,
);
export const pluginTransformTypeScript = interopDefault(
  pluginTransformTypeScriptModule,
);
export const traverse = interopDefault(traverseModule);

function interopDefault(mod: any): any {
  return mod.default || mod;
}
