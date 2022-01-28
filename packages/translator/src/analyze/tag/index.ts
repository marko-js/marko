import type { types as t } from "@marko/compiler";
import { getTagDef, Plugin } from "@marko/babel-utils";
import * as hooks from "../../util/plugin-hooks";
import analyzeAttributeTags from "../util/nested-attribute-tags";
import analyzeTagNameType, { TagNameTypes } from "../util/tag-name-type";
import NativeTag from "./native-tag";
import CustomTag from "./custom-tag";

export default {
  enter(tag: t.NodePath<t.MarkoTag>) {
    const tagDef = getTagDef(tag);
    const hook = tagDef?.analyzer?.hook as Plugin;

    if (hook) {
      hooks.enter(hook, tag);
    }

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
    const tagDef = getTagDef(tag);
    const type = analyzeTagNameType(tag);
    const hook = tagDef?.analyzer?.hook as Plugin;

    if (hook) {
      hooks.exit(hook, tag);
    }

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
