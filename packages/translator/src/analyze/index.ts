/* eslint-disable @typescript-eslint/no-empty-interface */
import type { types as t } from "@marko/compiler";
import analyzeReferences from "./references";
import analyzeTagNameType, { TagNameTypes } from "./tag-name-type";
import analyzeNestedAttributeTags from "./nested-attribute-tags";
import analyzeEventHandlers from "./event-handlers";

declare module "@marko/compiler/dist/types" {
  // This is extended by individual helpers.
  export interface ProgramExtra {}
  export interface MarkoTagExtra {}
  export interface MarkoTagBodyExtra {}
  export interface MarkoAttributeExtra {}
  export interface MarkoSpreadAttributeExtra {}
  export interface MarkoPlaceholderExtra {}

  export interface Program {
    extra: ProgramExtra & Record<string, unknown>;
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

export default [
  analyzeReferences,
  {
    Program(program) {
      program.node.extra ??= {} as typeof program.node.extra;
    },
    MarkoTag: {
      enter(tag) {
        const extra = (tag.node.extra ??= {} as typeof tag.node.extra);
        analyzeTagNameType(tag);

        if (extra.tagNameType === TagNameTypes.NativeTag) {
          analyzeEventHandlers(tag);
        }
      },
      exit(tag) {
        if (tag.node.extra.tagNameType !== TagNameTypes.NativeTag) {
          analyzeNestedAttributeTags(tag);
        }
      },
    },
    MarkoPlaceholder(placeholder) {
      placeholder.node.extra ??= {} as typeof placeholder.node.extra;
    },
  },
] as t.Visitor[];
