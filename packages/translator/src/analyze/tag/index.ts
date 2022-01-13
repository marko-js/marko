import type { types as t } from "@marko/compiler";
import analyzeTagNameType, { TagNameTypes } from "../util/tag-name-type";
import NativeTag from "./native-tag";
import CustomTag from "./custom-tag";
import analyzeAttributeTags from "../util/nested-attribute-tags";

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
    const type = analyzeTagNameType(tag);

    if (type === TagNameTypes.NativeTag) {
      // NativeTag.exit(tag);
      return;
    }

    analyzeAttributeTags(tag);
    switch (type) {
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
