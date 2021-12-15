/* eslint-disable @typescript-eslint/no-empty-interface */
import type { types as t } from "@marko/compiler";
import Program from "./program";
import MarkoTag from "./tag";
import MarkoPlaceholder from "./placeholder";

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

export default {
  Program,
  MarkoTag,
  MarkoPlaceholder,
} as t.Visitor;
