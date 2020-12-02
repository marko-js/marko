import { types as t, NodePath } from "@marko/babel-types";
import {
  assertNoArgs,
  getTagDef,
  isNativeTag,
  Plugin
} from "@marko/babel-utils";
import { require as markoRequire } from "@marko/compiler/modules";
import analyzeTagName, { TagNameTypes } from "../util/analyze-tag-name";
import * as hooks from "../util/plugin-hooks";
import * as NativeTag from "./native-tag";
import * as CustomTag from "./custom-tag";
import * as DynamicTag from "./dynamic-tag";
import * as AttributeTag from "./attribute-tag";

declare module "@marko/babel-utils" {
  export interface TagDefinition {
    codeGenerator?: Plugin;
  }
}

export function enter(tag: NodePath<t.MarkoTag>) {
  const tagDef = getTagDef(tag);

  assertNoArgs(tag);

  if (tagDef) {
    if (tagDef.codeGeneratorModulePath) {
      tag.hub.file.metadata.marko.watchFiles.push(
        tagDef.codeGeneratorModulePath
      );
      hooks.enter(
        (tagDef.codeGenerator = markoRequire(tagDef.codeGeneratorModulePath)),
        tag
      );
      return;
    }
  }

  for (const attr of tag.get("attributes")) {
    if (attr.isMarkoAttribute()) {
      if (attr.node.arguments) {
        throw attr.buildCodeFrameError(
          `Unsupported arguments on the "${attr.node.name}" attribute.`
        );
      }

      if (attr.node.modifier) {
        if (isNativeTag(attr.parentPath as NodePath<t.MarkoTag>)) {
          attr.node.name += `:${attr.node.modifier}`;
        } else {
          throw attr.buildCodeFrameError(
            `Unsupported modifier "${attr.node.modifier}".`
          );
        }
      }
    }
  }

  const analyzed = analyzeTagName(tag);

  if (analyzed.dynamic && analyzed.nullable) {
    if (!tag.get("name").isIdentifier()) {
      const tagNameId = tag.scope.generateUidIdentifier("tagName");
      const [tagNameVarPath] = tag.insertBefore(
        t.variableDeclaration("const", [
          t.variableDeclarator(tagNameId, tag.node.name)
        ])
      );

      tagNameVarPath.skip();
      tag.set("name", tagNameId);
    }
  }

  switch (analyzed.type) {
    case TagNameTypes.NativeTag:
      NativeTag.enter(tag);
      break;
    case TagNameTypes.CustomTag:
      CustomTag.enter(tag);
      break;
    case TagNameTypes.DynamicTag:
      DynamicTag.enter(tag);
      break;
    case TagNameTypes.AttributeTag:
      AttributeTag.enter(tag);
      break;
  }
}

export function exit(tag: NodePath<t.MarkoTag>) {
  const codeGenerator = getTagDef(tag)?.codeGenerator;

  if (codeGenerator) {
    hooks.exit(codeGenerator, tag);
    return;
  }

  switch (analyzeTagName(tag).type) {
    case TagNameTypes.NativeTag:
      NativeTag.exit(tag);
      break;
    case TagNameTypes.CustomTag:
      CustomTag.exit(tag);
      break;
    case TagNameTypes.DynamicTag:
      DynamicTag.exit(tag);
      break;
    case TagNameTypes.AttributeTag:
      AttributeTag.exit(tag);
      break;
  }
}
