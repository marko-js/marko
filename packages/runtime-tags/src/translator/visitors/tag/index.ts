import { types as t } from "@marko/compiler";
import {
  getTagDef,
  isNativeTag,
  type Plugin,
} from "@marko/compiler/babel-utils";

import { generateUid, generateUidIdentifier } from "../../util/generate-uid";
import { getMarkoRoot, isMarko } from "../../util/get-root";
import { isOutputHTML } from "../../util/marko-config";
import * as hooks from "../../util/plugin-hooks";
import analyzeTagNameType, { TagNameType } from "../../util/tag-name-type";
import type { TemplateVisitor } from "../../util/visitors";
import withPreviousLocation from "../../util/with-previous-location";
import AttributeTag from "./attribute-tag";
import CustomTag from "./custom-tag";
import DynamicTag from "./dynamic-tag";
import NativeTag from "./native-tag";

type StringOrIdPath = t.NodePath<t.StringLiteral> | t.NodePath<t.Identifier>;
const TAG_NAME_IDENTIFIER_REG = /^[A-Z][a-zA-Z0-9_$]*$/;
const BINDING_CHANGE_HANDLER = new WeakMap<
  t.Identifier,
  t.MarkoAttribute | t.Identifier
>();

export default {
  transform: {
    enter(tag) {
      const { node } = tag;
      const { name, attributes } = tag.node;
      let crawl = false;

      if (t.isStringLiteral(name)) {
        const tagName = name.value;
        if (
          tag.scope.getBinding(tagName) &&
          TAG_NAME_IDENTIFIER_REG.test(tagName)
        ) {
          node.name = withPreviousLocation(t.identifier(tagName), name);
          crawl = true;
        }
      }

      for (let i = 0; i < attributes.length; i++) {
        const attr = attributes[i];
        if (t.isMarkoAttribute(attr) && attr.bound) {
          attr.bound = false;
          attributes.splice(++i, 0, getChangeHandler(tag, attr));

          crawl = true;
        }
      }

      if (crawl) {
        tag.scope.crawl();
      }
    },
  },
  analyze: {
    enter(tag) {
      const tagDef = getTagDef(tag);
      const type = analyzeTagNameType(tag);
      const hook = tagDef?.analyzer?.hook as Plugin;

      if (hook) {
        hooks.enter(hook, tag);
        return;
      }

      if (type === TagNameType.NativeTag) {
        NativeTag.analyze.enter(tag);
        return;
      }

      switch (type) {
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
    exit(tag) {
      const hook = getTagDef(tag)?.analyzer?.hook as Plugin;

      if (hook) {
        hooks.exit(hook, tag);
        return;
      }

      // switch (analyzeTagNameType(tag)) {
      //   case TagNameType.NativeTag:
      //     // NativeTag.analyze.exit(tag);
      //     break;
      //   case TagNameType.CustomTag:
      //     // CustomTag.analyze.exit(tag);
      //     break;
      //   case TagNameType.AttributeTag:
      //     // AttributeTag.analyze.exit(tag);
      //     break;
      //   case TagNameType.DynamicTag:
      //     // DynamicTag.analyze.exit(tag);
      //     break;
      // }
    },
  },
  translate: {
    enter(tag) {
      const tagDef = getTagDef(tag);
      const extra = tag.node.extra!;

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
              `Unsupported arguments on the \`${attr.node.name}\` attribute.`,
            );
          }

          if (attr.node.modifier) {
            if (isNativeTag(attr.parentPath as t.NodePath<t.MarkoTag>)) {
              attr.node.name += `:${attr.node.modifier}`;
            } else {
              throw attr.buildCodeFrameError(
                `Unsupported modifier \`${attr.node.modifier}\`.`,
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
        const tagNameId = generateUidIdentifier("tagName");
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
          NativeTag.translate.enter(tag);
          break;
        case TagNameType.CustomTag:
          CustomTag.translate.enter(tag);
          break;
        case TagNameType.DynamicTag:
          DynamicTag.translate.enter(tag);
          break;
        case TagNameType.AttributeTag:
          AttributeTag.translate.enter(tag);
          break;
      }
    },

    exit(tag) {
      const translator = getTagDef(tag)?.translator;

      if (translator) {
        hooks.exit(translator.hook, tag);
        return;
      }

      switch (tag.node.extra!.tagNameType) {
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
} satisfies TemplateVisitor<t.MarkoTag>;

function getChangeHandler(
  tag: t.NodePath<t.MarkoTag>,
  attr: t.MarkoAttribute,
): t.MarkoAttribute {
  const attrName = attr.name;
  const changeAttrName = attrName + "Change";

  if (t.isIdentifier(attr.value)) {
    const binding = tag.scope.getBinding(attr.value.name);
    if (!binding)
      return t.markoAttribute(
        changeAttrName,
        buildChangeHandlerFunction(attr.value),
      );

    const existingChangedAttr = BINDING_CHANGE_HANDLER.get(binding.identifier);
    if (!existingChangedAttr) {
      const bindingIdentifierPath =
        binding.path.getOuterBindingIdentifierPaths()[binding.identifier.name];
      const changeAttrExpr = bindingIdentifierPath
        ? bindingIdentifierPath.parentPath === binding.path
          ? buildChangeHandlerFunction(attr.value)
          : bindingIdentifierPath.parentPath!.isObjectProperty()
            ? getChangeHandlerFromObjectPattern(
                bindingIdentifierPath.parentPath!,
              )
            : undefined
        : undefined;

      if (!changeAttrExpr) {
        throw tag.hub.buildError(attr.value, "Unable to bind to value.");
      }

      const changeHandlerAttr = t.markoAttribute(
        changeAttrName,
        changeAttrExpr,
      );
      BINDING_CHANGE_HANDLER.set(binding.identifier, changeHandlerAttr);
      return changeHandlerAttr;
    }

    if (existingChangedAttr.type === "Identifier") {
      return t.markoAttribute(
        changeAttrName,
        withPreviousLocation(
          t.identifier(existingChangedAttr.name),
          attr.value,
        ),
      );
    }

    const markoRoot = isMarko(binding.path)
      ? binding.path
      : getMarkoRoot(binding.path);

    if (!(markoRoot?.isMarkoTag() || markoRoot?.isMarkoTagBody())) {
      throw tag.hub.buildError(attr.value, "Unable to bind to value.");
    }

    const changeHandlerId = generateUid(changeAttrName);
    const changeHandlerConst = t.markoTag(
      t.stringLiteral("const"),
      [t.markoAttribute("value", existingChangedAttr.value, null, null, true)],
      t.markoTagBody([]),
      null,
      t.identifier(changeHandlerId),
    );
    BINDING_CHANGE_HANDLER.set(
      binding.identifier,
      (existingChangedAttr.value = t.identifier(changeHandlerId)),
    );

    if (markoRoot.isMarkoTag()) {
      markoRoot.insertAfter(changeHandlerConst);
    } else {
      markoRoot.unshiftContainer("body", changeHandlerConst);
    }

    return t.markoAttribute(
      changeAttrName,
      withPreviousLocation(t.identifier(changeHandlerId), attr.value),
    );
  } else if (t.isMemberExpression(attr.value)) {
    const prop = attr.value.property;
    if (!t.isPrivateName(attr.value.property)) {
      return t.markoAttribute(
        changeAttrName,
        t.memberExpression(
          t.cloneNode(attr.value.object),
          prop.type === "Identifier"
            ? withPreviousLocation(t.identifier(prop.name + "Change"), prop)
            : t.binaryExpression(
                "+",
                t.cloneNode(prop),
                t.stringLiteral("Change"),
              ),
          prop.type !== "Identifier",
        ),
      );
    }
  }

  throw tag.hub.buildError(
    attr.value,
    "Attributes may only be bound to identifiers or member expressions",
  );
}

function buildChangeHandlerFunction(id: t.Identifier) {
  const newId = "_new_" + id.name;
  return t.arrowFunctionExpression(
    [withPreviousLocation(t.identifier(newId), id)],
    t.blockStatement([
      t.expressionStatement(
        t.assignmentExpression(
          "=",
          withPreviousLocation(t.identifier(id.name), id),
          withPreviousLocation(t.identifier(newId), id),
        ),
      ),
    ]),
  );
}

function getChangeHandlerFromObjectPattern(
  parent: t.NodePath<t.ObjectProperty>,
) {
  let changeKey: t.Identifier;
  const pattern = parent.parentPath as t.NodePath<t.ObjectPattern>;
  if (parent.node.computed) {
    changeKey = generateUidIdentifier(`dynamicChange`);
    pattern.pushContainer(
      "properties",
      t.objectProperty(
        t.binaryExpression(
          "+",
          parent.get("key").node,
          t.stringLiteral("Change"),
        ),
        changeKey,
        true,
      ),
    );
  } else {
    const key = parent.get("key") as StringOrIdPath;
    const searchKey = `${getStringOrIdentifierValue(key)}Change`;
    for (const prop of pattern.get("properties")) {
      if (prop.isObjectProperty()) {
        const propKey = prop.get("key");
        const propValue = prop.get("value");
        if (
          !prop.node.computed &&
          getStringOrIdentifierValue(propKey as StringOrIdPath) === searchKey &&
          propValue.isIdentifier()
        ) {
          changeKey = propValue.node;
          break;
        }
      }
    }

    if (!changeKey!) {
      pattern.unshiftContainer(
        "properties",
        t.objectProperty(
          t.stringLiteral(searchKey),
          (changeKey = generateUidIdentifier(searchKey)),
        ),
      );
    }
  }

  return changeKey;
}

function getStringOrIdentifierValue(path: StringOrIdPath) {
  return path.isStringLiteral() ? path.node.value : path.node.name;
}
