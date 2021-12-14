import type { types as t } from "@marko/compiler";
import analyzeTagNameType, { TagNameTypes } from "../util/tag-name-type";
import NativeTag from "./native-tag";
import CustomTag from "./custom-tag";

export default {
  enter(tag: t.NodePath<t.MarkoTag>) {
    switch (analyzeTagNameType(tag)) {
      case TagNameTypes.NativeTag:
        NativeTag.enter(tag);
        break;
      case TagNameTypes.CustomTag:
        CustomTag.enter(tag);
        break;
      case TagNameTypes.AttributeTag:
        // AttributeTag.enter(tag);
        break;
      case TagNameTypes.DynamicTag:
        // DynamicTag.enter(tag);
        break;
    }
  },
  exit(tag: t.NodePath<t.MarkoTag>) {
    switch (analyzeTagNameType(tag)) {
      case TagNameTypes.NativeTag:
        // NativeTag.exit(tag);
        break;
      case TagNameTypes.CustomTag:
        // CustomTag.exit(tag);
        break;
      case TagNameTypes.AttributeTag:
        // AttributeTag.exit(tag);
        break;
      case TagNameTypes.DynamicTag:
        // DynamicTag.exit(tag);
        break;
    }
  },
};
