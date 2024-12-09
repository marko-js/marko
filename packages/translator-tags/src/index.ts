import type { Config } from "@marko/compiler";

import coreTagLib from "./core";
import { extractVisitors } from "./util/visitors";
import MarkoCDATA from "./visitors/cdata";
import MarkoComment from "./visitors/comment";
import MarkoDeclaration from "./visitors/declaration";
import MarkoDocumentType from "./visitors/document-type";
import Function from "./visitors/function";
import ImportDeclaration from "./visitors/import-declaration";
import MarkoPlaceholder from "./visitors/placeholder";
import Program from "./visitors/program";
import ReferencedIdentifier from "./visitors/referenced-identifier";
import MarkoScriptlet from "./visitors/scriptlet";
import MarkoTag from "./visitors/tag";
import MarkoText from "./visitors/text";

const visitors = extractVisitors({
  Program,
  Function,
  ReferencedIdentifier,
  ImportDeclaration,
  MarkoDocumentType,
  MarkoDeclaration,
  MarkoCDATA,
  MarkoText,
  MarkoTag,
  MarkoPlaceholder,
  MarkoScriptlet,
  MarkoComment,
});

export { default as internalEntryBuilder } from "./util/entry-builder";
export const { transform, analyze, translate } = visitors;
export const taglibs = [
  [
    __dirname,
    {
      ...coreTagLib,
      migrate: visitors.migrate,
    },
  ],
];

export function getRuntimeEntryFiles(
  output: Config["output"],
  optimize: boolean,
) {
  return [
    `@marko/runtime-tags${optimize ? "" : "/debug"}/${output === "html" ? "html" : "dom"}`,
  ];
}

declare module "@marko/compiler/dist/types" {
  // This is extended by individual helpers.
  export interface ProgramExtra {}
  export interface FunctionExpressionExtra {}
  export interface ArrowFunctionExpressionExtra {}
  export interface MarkoTagExtra {}
  export interface MarkoTagBodyExtra {}
  export interface MarkoAttributeExtra {}
  export interface MarkoSpreadAttributeExtra {}
  export interface MarkoPlaceholderExtra {}

  export interface Program {
    extra: ProgramExtra & NodeExtra;
  }

  export interface FunctionDeclaration {
    extra?: FunctionDeclarationExtra & NodeExtra;
  }

  export interface FunctionExpression {
    extra?: FunctionExpressionExtra & NodeExtra;
  }

  export interface ArrowFunctionExpression {
    extra?: ArrowFunctionExpressionExtra & NodeExtra;
  }

  export interface MarkoTag {
    extra?: MarkoTagExtra & NodeExtra;
  }

  export interface MarkoTagBody {
    extra?: MarkoTagBodyExtra & NodeExtra;
  }

  export interface MarkoAttribute {
    extra?: MarkoAttributeExtra & NodeExtra;
  }

  export interface MarkoSpreadAttribute {
    extra?: MarkoSpreadAttributeExtra & NodeExtra;
  }

  export interface MarkoPlaceholder {
    extra?: MarkoPlaceholderExtra & NodeExtra;
  }
}
