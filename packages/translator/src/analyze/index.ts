import { types as t } from "@marko/compiler";
import analyzeReferences from "./references";
import analyzeTagNameType, { TagNameTypes } from "./tag-name-type";
import analyzeNestedAttributeTags from "./nested-attribute-tags";
import analyzeEventHandlers from "./event-handlers";

declare module "@marko/compiler/dist/types" {
  // This is extended by individual helpers.
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface ProgramExtra {}
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface MarkoTagExtra {}
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface MarkoTagBodyExtra {}
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface MarkoAttributeExtra {}
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface MarkoSpreadAttributeExtra {}
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
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
    MarkoTag(tag) {
      const extra = (tag.node.extra ??= {} as typeof tag.node.extra);
      analyzeTagNameType(tag);

      if (extra.tagNameType === TagNameTypes.NativeTag) {
        analyzeEventHandlers(tag);
      } else {
        analyzeNestedAttributeTags(tag);
      }
    },
    MarkoPlaceholder(placeholder) {
      placeholder.node.extra ??= {} as typeof placeholder.node.extra;
    }
  }
] as t.Visitor[];
