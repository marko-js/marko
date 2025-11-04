import { types as t } from "@marko/compiler";
import type { MarkoTagExtra } from "@marko/compiler/babel-types";
import {
  getProgram,
  isNativeTag,
  loadFileForTag,
  resolveTagImport,
} from "@marko/compiler/babel-utils";

import { isCoreTag } from "./is-core-tag";

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

export default function analyzeTagNameType(
  tag: t.NodePath<t.MarkoTag>,
  allowDynamic?: boolean,
) {
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
      extra.tagNameNullable = extra.tagNameDynamic = false;
    } else if (name.isTemplateLiteral() && !name.node.expressions.length) {
      extra.tagNameType = TagNameType.NativeTag;
      extra.tagNameNullable = extra.tagNameDynamic = false;
    } else if (name.isIdentifier()) {
      analyzeExpressionTagName(name, extra);
      extra.tagNameDynamic = !extra.tagNameImported;
    } else {
      analyzeExpressionTagName(name, extra);
      extra.tagNameDynamic = true;
    }

    if (
      !extra.tagNameDynamic &&
      extra.tagNameType === TagNameType.CustomTag &&
      !isCoreTag(tag)
    ) {
      const childFile = loadFileForTag(tag);
      if (!childFile) {
        extra.tagNameType = TagNameType.DynamicTag;
        extra.tagNameDynamic = true;
      } else if (childFile.ast.program.extra!.featureType === "class") {
        extra.tagNameType = TagNameType.DynamicTag;
        extra.tagNameDynamic = true;
        extra.featureType = "class";
        (getProgram().node.extra ??= {}).needsCompat = true;
      }
    }
  }

  return !allowDynamic && extra.tagNameDynamic
    ? TagNameType.DynamicTag
    : extra.tagNameType!;
}

function analyzeExpressionTagName(
  name: t.NodePath<t.Expression>,
  extra: MarkoTagExtra,
) {
  const pending = [name] as t.NodePath<t.Expression>[];
  let path: (typeof pending)[0] | undefined;
  let type: TagNameType | undefined;
  let nullable = false;
  let tagNameImported: string | false | undefined;

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
        type === undefined ||
        type === TagNameType.NativeTag
          ? TagNameType.NativeTag
          : TagNameType.DynamicTag;
    } else if (path.isStringLiteral() || path.isTemplateLiteral()) {
      type =
        type === undefined || type === TagNameType.NativeTag
          ? TagNameType.NativeTag
          : TagNameType.DynamicTag;
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
          if (type === undefined) {
            type = TagNameType.CustomTag;
            tagNameImported = resolvedImport;
          } else if (type === TagNameType.NativeTag) {
            type = TagNameType.DynamicTag;
            tagNameImported = undefined;
          } else if (tagNameImported !== resolvedImport) {
            tagNameImported = undefined;
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
  extra.tagNameType = type ?? TagNameType.DynamicTag;
  extra.tagNameNullable = nullable;

  if (type === TagNameType.CustomTag && tagNameImported) {
    extra.tagNameImported = tagNameImported;
  }
}
