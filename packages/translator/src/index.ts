import type { types as t } from "@marko/compiler";
import coreTagLib from "./core";
import AssignmentExpression from "./visitors/assignment-expression";
import MarkoCDATA from "./visitors/cdata";
import MarkoComment from "./visitors/comment";
import MarkoDeclaration from "./visitors/declaration";
import MarkoDocumentType from "./visitors/document-type";
import ImportDeclaration from "./visitors/import-declaration";
import MarkoPlaceholder from "./visitors/placeholder";
import Program from "./visitors/program";
import ReferencedIdentifier from "./visitors/referenced-identifier";
import MarkoScriptlet from "./visitors/scriptlet";
import MarkoTag from "./visitors/tag";
import MarkoText from "./visitors/text";
import UpdateExpression from "./visitors/update-expression";

const visitors = {
  Program,
  AssignmentExpression,
  UpdateExpression,
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
};

const getVisitorOfType = (
  typename: "migrate" | "analyze" | "translate",
): t.Visitor =>
  Object.entries(visitors).reduce((visitor, [name, value]) => {
    if (typename in value) {
      visitor[name as any] = (value as any)[typename];
    }
    return visitor;
  }, {} as t.Visitor);

export const analyze = getVisitorOfType("analyze");
export const translate = getVisitorOfType("translate");
export const taglibs = [
  [
    __dirname,
    {
      ...coreTagLib,
      migrate: getVisitorOfType("migrate"),
    },
  ],
];

/* eslint-disable @typescript-eslint/no-empty-interface */
declare module "@marko/compiler/dist/types" {
  // This is extended by individual helpers.
  export interface ProgramExtra {}
  export interface IdentifierExtra {}
  export interface FunctionExpressionExtra {}
  export interface ArrowFunctionExpressionExtra {}
  export interface ExpressionExtra {}
  export interface MarkoTagExtra {}
  export interface MarkoTagBodyExtra {}
  export interface MarkoAttributeExtra {}
  export interface MarkoSpreadAttributeExtra {}
  export interface MarkoPlaceholderExtra {}

  export interface Program {
    extra: ProgramExtra & Record<string, unknown>;
  }

  export interface Identifier {
    extra: IdentifierExtra & Record<string, unknown>;
  }

  export interface FunctionExpression {
    extra: FunctionExpressionExtra & Record<string, unknown>;
  }

  export interface ArrowFunctionExpression {
    extra: ArrowFunctionExpressionExtra & Record<string, unknown>;
  }

  export interface MarkoTag {
    extra: MarkoTagExtra & Record<string, unknown>;
  }

  export interface MarkoTagBody {
    extra: MarkoTagBodyExtra & Record<string, unknown>;
  }

  export interface MarkoAttribute {
    extra: MarkoAttributeExtra & Record<string, unknown>;
  }

  export interface MarkoSpreadAttribute {
    extra: MarkoSpreadAttributeExtra & Record<string, unknown>;
  }

  export interface MarkoPlaceholder {
    extra: MarkoPlaceholderExtra & Record<string, unknown>;
  }
}
