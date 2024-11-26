import {
  isNativeTag,
  loadFileForTag,
  resolveTagImport,
} from "@marko/babel-utils";
import { types as t } from "@marko/compiler";
import type { MarkoTagExtra } from "@marko/compiler/babel-types";

import withPreviousLocation from "./with-previous-location";

declare module "@marko/compiler/dist/types" {
  export interface MarkoTagExtra {
    tagNameType?: TagNameType;
    tagNameNullable?: boolean;
    tagNameDynamic?: boolean;
    tagNameImported?: string;
  }
}

export enum TagNameType {
  NativeTag,
  CustomTag,
  DynamicTag,
  AttributeTag,
}

const MARKO_FILE_REG = /^<.*>$|\.marko$/;
const TAG_NAME_IDENTIFIER_REG = /^[A-Z][a-zA-Z0-9_$]*$/;

export default function analyzeTagNameType(tag: t.NodePath<t.MarkoTag>) {
  const extra = (tag.node.extra ??= {});

  if (extra.tagNameType === undefined) {
    const name = tag.get("name");

    if (name.isStringLiteral()) {
      extra.tagNameType =
        name.node.value[0] === "@"
          ? TagNameType.AttributeTag
          : isNativeTag(tag)
            ? TagNameType.NativeTag
            : TagNameType.CustomTag;

      if (extra.tagNameType === TagNameType.CustomTag) {
        const bindingName = name.node.value;
        const bindingIdentifier = tag.scope.getBinding(bindingName)?.identifier;
        if (
          bindingIdentifier &&
          TAG_NAME_IDENTIFIER_REG.test(bindingIdentifier.name)
        ) {
          const tagIdentifier = withPreviousLocation(
            t.identifier(bindingName),
            name.node,
          );
          tagIdentifier.extra = {
            referencedBindings: bindingIdentifier.extra?.binding,
          };
          analyzeExpressionTagName(name.replaceWith(tagIdentifier)[0], extra);
        }
      }

      extra.tagNameNullable = extra.tagNameNullable = false;
    } else {
      analyzeExpressionTagName(name, extra);
      // if (extra.tagNameType === TagNameType.NativeTag) {
      //   extra.tagNameType = TagNameType.DynamicTag;
      // }
    }

    if (extra.tagNameType === undefined) {
      extra.tagNameType = TagNameType.DynamicTag;
    }

    if (extra.tagNameType === TagNameType.CustomTag) {
      const childFile = loadFileForTag(tag);
      if (!childFile) {
        extra.tagNameType = TagNameType.DynamicTag;
      } else if (childFile.ast.program.extra!.featureType === "class") {
        extra.tagNameType = TagNameType.DynamicTag;
        extra.featureType = "class";
      }
    }
  }

  return extra.tagNameType;
}

function analyzeExpressionTagName(
  name: t.NodePath<t.Expression>,
  extra: MarkoTagExtra,
) {
  const pending = [name] as t.NodePath<t.Expression>[];
  let path: (typeof pending)[0] | undefined;
  let type: TagNameType | undefined;
  let nullable = false;
  let tagNameImported: string | undefined;

  while ((path = pending.pop()) && type !== TagNameType.DynamicTag) {
    if (path.isConditionalExpression()) {
      pending.push(path.get("consequent"));

      if (path.node.alternate) {
        pending.push(path.get("alternate"));
      }
    } else if (path.isLogicalExpression()) {
      if (path.node.operator === "||") {
        pending.push(path.get("left"));
      } else {
        nullable = true;
      }

      pending.push(path.get("right"));
    } else if (path.isAssignmentExpression()) {
      pending.push(path.get("right"));
    } else if (path.isBinaryExpression()) {
      type =
        path.node.operator !== "+" ||
        type !== undefined /* && type !== TagNameTypes.NativeTag*/
          ? TagNameType.DynamicTag
          : TagNameType.NativeTag;
    } else if (path.isStringLiteral() || path.isTemplateLiteral()) {
      type =
        type !== undefined /* && type !== TagNameTypes.NativeTag */
          ? TagNameType.DynamicTag
          : TagNameType.NativeTag;
    } else if (path.isNullLiteral()) {
      nullable = true;
    } else if (path.isIdentifier()) {
      if (path.node.name === "undefined") {
        nullable = true;
        continue;
      }

      const binding = path.scope.getBinding(path.node.name);

      if (!binding) {
        type = TagNameType.DynamicTag;
        continue;
      }

      if (binding.kind === "module") {
        const decl = binding.path.parent as t.ImportDeclaration;
        if (
          MARKO_FILE_REG.test(decl.source.value) &&
          decl.specifiers.some((it) => t.isImportDefaultSpecifier(it))
        ) {
          const resolvedImport =
            resolveTagImport(name, decl.source.value) || decl.source.value;
          if (
            type === TagNameType.NativeTag ||
            (tagNameImported && tagNameImported !== resolvedImport)
          ) {
            type = TagNameType.DynamicTag;
            tagNameImported = undefined;
          } else {
            type = TagNameType.CustomTag;
            tagNameImported = resolvedImport;
          }
        } else {
          type = TagNameType.DynamicTag;
        }

        continue;
      }

      const bindingTag = binding.path as t.NodePath<t.MarkoTag>;

      if (
        bindingTag.isMarkoTag() &&
        (binding.kind as typeof binding.kind & "local") === "local"
      ) {
        const bindingTagName = (bindingTag.get("name").node as t.StringLiteral)
          .value;

        if (bindingTagName === "const") {
          pending.push(
            (
              bindingTag.get("attributes")[0] as t.NodePath<t.MarkoAttribute>
            ).get("value"),
          );
          continue;
        }

        if (bindingTagName === "let") {
          type = TagNameType.DynamicTag;
          continue;
          // TODO: Optimize for when we are certain that this is either always a string or always a custom tag
        }

        continue;
      }

      type = TagNameType.DynamicTag;
    } else {
      type = TagNameType.DynamicTag;
    }
  }

  // DOM implementation requires non strings actually be a dynamic tag call.
  extra.tagNameType = type;
  extra.tagNameNullable = nullable;
  extra.tagNameDynamic = true;

  if (type === TagNameType.CustomTag && tagNameImported) {
    extra.tagNameImported = tagNameImported;
  }
}
