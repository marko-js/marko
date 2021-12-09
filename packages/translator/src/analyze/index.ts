/* eslint-disable @typescript-eslint/no-empty-interface */
import type { types as t } from "@marko/compiler";

import evaluate from "./evaluate";
import { startSection } from "./sections";
import trackCustomTagReferences from "./references";
import { visitNativeTag, visitPlaceholder } from "./track-visitors";
import analyzeTagNameType, { TagNameTypes } from "./tag-name-type";

declare module "@marko/compiler/dist/types" {
  // This is extended by individual helpers.
  export interface ProgramExtra {}
  export interface IdentifierExtra {}
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
  Program(program) {
    startSection(program);
  },
  MarkoTag(tag) {
    if (analyzeTagNameType(tag) === TagNameTypes.NativeTag) {
      for (const attr of tag.get("attributes")) evaluate(attr);
      visitNativeTag(tag);
    } else {
      trackCustomTagReferences(tag);
    }
  },
  MarkoTagBody(body) {
    if (
      body.get("body").length &&
      analyzeTagNameType(body.parentPath as t.NodePath<t.MarkoTag>) !==
        TagNameTypes.NativeTag
    ) {
      startSection(body);
    }
  },
  MarkoPlaceholder(placeholder) {
    evaluate(placeholder);
    visitPlaceholder(placeholder);
  },
} as t.Visitor;
