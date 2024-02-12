import {
  type Plugin,
  assertNoArgs,
  assertAttributesOrArgs,
  assertAttributesOrSingleArg,
  getTagDef,
  isNativeTag,
} from "@marko/babel-utils";
import { types as t } from "@marko/compiler";
import { isOutputHTML } from "../../util/marko-config";
import analyzeAttributeTags from "../../util/nested-attribute-tags";
import * as hooks from "../../util/plugin-hooks";
import analyzeTagNameType, { TagNameType } from "../../util/tag-name-type";
import AttributeTag from "./attribute-tag";
import CustomTag from "./custom-tag";
import DynamicTag from "./dynamic-tag";
import NativeTag from "./native-tag";

export default {
  analyze: {
    enter(tag: t.NodePath<t.MarkoTag>) {
      const tagDef = getTagDef(tag);
      const type = analyzeTagNameType(tag);
      const hook = tagDef?.analyzer?.hook as Plugin;

      if (hook) {
        hooks.enter(hook, tag);
        return;
      }

      switch (type) {
        case TagNameType.NativeTag:
          NativeTag.analyze.enter(tag);
          break;
        case TagNameType.CustomTag:
          CustomTag.analyze.enter(tag);
          break;
        case TagNameType.AttributeTag:
          AttributeTag.analyze.enter(tag);
          break;
        case TagNameType.DynamicTag:
          DynamicTag.analyze.enter(tag);
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

      if (type === TagNameType.NativeTag) {
        // NativeTag.analyze.exit(tag);
        return;
      }

      analyzeAttributeTags(tag);
      switch (type) {
        case TagNameType.CustomTag:
          CustomTag.analyze.exit(tag);
          break;
        case TagNameType.AttributeTag:
          // AttributeTag.analyze.exit(tag);
          break;
        case TagNameType.DynamicTag:
          DynamicTag.analyze.exit(tag);
          break;
      }
    },
  },
  translate: {
    enter(tag: t.NodePath<t.MarkoTag>) {
      const tagDef = getTagDef(tag);
      const extra = tag.node.extra;

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
              `Unsupported arguments on the "${attr.node.name}" attribute.`,
            );
          }

          if (attr.node.modifier) {
            if (isNativeTag(attr.parentPath as t.NodePath<t.MarkoTag>)) {
              attr.node.name += `:${attr.node.modifier}`;
            } else {
              throw attr.buildCodeFrameError(
                `Unsupported modifier "${attr.node.modifier}".`,
              );
            }
          }
        }
      }

      if (
        extra.tagNameDynamic &&
        extra.tagNameNullable &&
        !tag.get("name").isIdentifier() &&
        isOutputHTML()
      ) {
        const tagNameId = tag.scope.generateUidIdentifier("tagName");
        const [tagNameVarPath] = tag.insertBefore(
          t.variableDeclaration("const", [
            t.variableDeclarator(tagNameId, tag.node.name),
          ]),
        );

        tagNameVarPath.skip();
        tag.set("name", tagNameId);
      }

      switch (extra.tagNameType) {
        case TagNameType.NativeTag:
          assertNoArgs(tag);
          NativeTag.translate.enter(tag);
          break;
        case TagNameType.CustomTag:
          assertAttributesOrSingleArg(tag);
          CustomTag.translate.enter(tag);
          break;
        case TagNameType.DynamicTag:
          assertAttributesOrArgs(tag);
          DynamicTag.translate.enter(tag);
          break;
        case TagNameType.AttributeTag:
          assertNoArgs(tag);
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
        case TagNameType.NativeTag:
          NativeTag.translate.exit(tag);
          break;
        case TagNameType.CustomTag:
          CustomTag.translate.exit(tag);
          break;
        case TagNameType.DynamicTag:
          DynamicTag.translate.exit(tag);
          break;
        case TagNameType.AttributeTag:
          AttributeTag.translate.exit(tag);
          break;
      }
    },
  },
};
