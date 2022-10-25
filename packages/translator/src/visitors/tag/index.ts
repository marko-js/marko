import { types as t } from "@marko/compiler";
import {
  assertNoArgs,
  getTagDef,
  isNativeTag,
  Plugin,
} from "@marko/babel-utils";
import analyzeTagNameType, { TagNameTypes } from "../../util/tag-name-type";
import * as hooks from "../../util/plugin-hooks";
import NativeTag from "./native-tag";
import CustomTag from "./custom-tag";
import DynamicTag from "./dynamic-tag";
import AttributeTag from "./attribute-tag";
import analyzeAttributeTags from "../../util/nested-attribute-tags";

export default {
  analyze: {
    enter(tag: t.NodePath<t.MarkoTag>) {
      const tagDef = getTagDef(tag);
      const hook = tagDef?.analyzer?.hook as Plugin;

      if (hook) {
        hooks.enter(hook, tag);
        return;
      }

      switch (analyzeTagNameType(tag)) {
        case TagNameTypes.NativeTag:
          NativeTag.analyze.enter(tag);
          break;
        case TagNameTypes.CustomTag:
          CustomTag.analyze.enter(tag);
          break;
        case TagNameTypes.AttributeTag:
          // AttributeTag.analyze.enter(tag);
          break;
        case TagNameTypes.DynamicTag:
          // DynamicTag.analyze.enter(tag);
          break;
      }
    },
    exit(tag: t.NodePath<t.MarkoTag>) {
      const tagDef = getTagDef(tag);
      const type = analyzeTagNameType(tag);
      const hook = tagDef?.analyzer?.hook as Plugin;

      if (hook) {
        hooks.exit(hook, tag);
        return;
      }

      if (type === TagNameTypes.NativeTag) {
        // NativeTag.analyze.exit(tag);
        return;
      }

      analyzeAttributeTags(tag);
      switch (type) {
        case TagNameTypes.CustomTag:
          CustomTag.analyze.exit(tag);
          break;
        case TagNameTypes.AttributeTag:
          // AttributeTag.analyze.exit(tag);
          break;
        case TagNameTypes.DynamicTag:
          // DynamicTag.analyze.exit(tag);
          break;
      }
    },
  },
  translate: {
    enter(tag: t.NodePath<t.MarkoTag>) {
      const tagDef = getTagDef(tag);
      const extra = tag.node.extra;

      assertNoArgs(tag);

      if (tagDef?.translator) {
        if (tagDef.translator.path) {
          tag.hub.file.metadata.marko.watchFiles.push(tagDef.translator.path);
        }
        hooks.enter(tagDef.translator.hook, tag);
        return;
      }

      for (const attr of tag.get("attributes")) {
        if (attr.isMarkoAttribute()) {
          if (attr.node.arguments) {
            throw attr.buildCodeFrameError(
              `Unsupported arguments on the "${attr.node.name}" attribute.`
            );
          }

          if (attr.node.modifier) {
            if (isNativeTag(attr.parentPath as t.NodePath<t.MarkoTag>)) {
              attr.node.name += `:${attr.node.modifier}`;
            } else {
              throw attr.buildCodeFrameError(
                `Unsupported modifier "${attr.node.modifier}".`
              );
            }
          }
        }
      }

      if (
        extra.tagNameDynamic &&
        extra.tagNameNullable &&
        !tag.get("name").isIdentifier()
      ) {
        const tagNameId = tag.scope.generateUidIdentifier("tagName");
        const [tagNameVarPath] = tag.insertBefore(
          t.variableDeclaration("const", [
            t.variableDeclarator(tagNameId, tag.node.name),
          ])
        );

        tagNameVarPath.skip();
        tag.set("name", tagNameId);
      }

      switch (extra.tagNameType) {
        case TagNameTypes.NativeTag:
          NativeTag.translate.enter(tag);
          break;
        case TagNameTypes.CustomTag:
          CustomTag.translate.enter(tag);
          break;
        case TagNameTypes.DynamicTag:
          DynamicTag.translate.enter(tag);
          break;
        case TagNameTypes.AttributeTag:
          AttributeTag.translate.enter(tag);
          break;
      }
    },

    exit(tag: t.NodePath<t.MarkoTag>) {
      const translator = getTagDef(tag)?.translator;

      if (translator) {
        hooks.exit(translator.hook, tag);
        return;
      }

      switch (tag.node.extra.tagNameType) {
        case TagNameTypes.NativeTag:
          NativeTag.translate.exit(tag);
          break;
        case TagNameTypes.CustomTag:
          CustomTag.translate.exit(tag);
          break;
        case TagNameTypes.DynamicTag:
          DynamicTag.translate.exit(tag);
          break;
        case TagNameTypes.AttributeTag:
          AttributeTag.translate.exit(tag);
          break;
      }
    },
  },
};
