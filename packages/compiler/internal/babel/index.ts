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
export { default as generator } from "@babel/generator";
export { parse, parseExpression } from "@babel/parser";
export { default as pluginSyntaxTypeScript } from "@babel/plugin-syntax-typescript";
export { default as pluginTransformModulesCommonjs } from "@babel/plugin-transform-modules-commonjs";
export { default as pluginTransformTypeScript } from "@babel/plugin-transform-typescript";
export { default as traverse } from "@babel/traverse";
export * as types from "@babel/types";
