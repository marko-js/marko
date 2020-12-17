import { Visitor } from "@marko/babel-types";
import analyzeTagNameType, { TagNameTypes } from "./tag-name-type";
import analyzeNestedAttributeTags from "./nested-attribute-tags";

declare module "@marko/babel-types" {
  // This is extended by individual helpers.
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface MarkoTagExtra {}

  export interface MarkoTag {
    extra: MarkoTagExtra & Record<string, unknown>;
  }
}

export default {
  MarkoTag(tag) {
    const extra = (tag.node.extra ??= {} as typeof tag.node.extra);
    analyzeTagNameType(tag);

    if (extra.tagNameType !== TagNameTypes.NativeTag) {
      analyzeNestedAttributeTags(tag);
    }
  }
} as Visitor;
