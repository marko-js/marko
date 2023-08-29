import { types as t } from "@marko/compiler";
import { isNativeTag, loadFileForTag } from "@marko/babel-utils";

declare module "@marko/compiler/dist/types" {
  export interface MarkoTagExtra {
    tagNameType: TagNameTypes;
    tagNameNullable: boolean;
    tagNameDynamic: boolean;
  }
}

export enum TagNameTypes {
  NativeTag,
  CustomTag,
  DynamicTag,
  AttributeTag,
}

const MARKO_FILE_REG = /^<.*>$|\.marko$/;

export default function analyzeTagNameType(tag: t.NodePath<t.MarkoTag>) {
  const extra = (tag.node.extra ??= {} as typeof tag.node.extra);

  if (extra.tagNameType === undefined) {
    const name = tag.get("name");

    if (name.isStringLiteral()) {
      extra.tagNameType =
        name.node.value[0] === "@"
          ? TagNameTypes.AttributeTag
          : isNativeTag(tag)
          ? TagNameTypes.NativeTag
          : TagNameTypes.CustomTag;

      if (extra.tagNameType === TagNameTypes.CustomTag) {
        const childFile = loadFileForTag(tag);
        const childProgram = childFile?.ast.program;
        if (childProgram?.extra.___featureType === "class") {
          extra.tagNameType = TagNameTypes.DynamicTag;
        }
      }

      extra.tagNameNullable = extra.tagNameNullable = false;
    } else {
      const pending = [name] as t.NodePath<t.Expression>[];
      let path: (typeof pending)[0] | undefined;
      let type: TagNameTypes | undefined = undefined;
      let nullable = false;

      while ((path = pending.pop()) && type !== TagNameTypes.DynamicTag) {
        if (path.isConditionalExpression()) {
          pending.push(path.get("test"));
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
              ? TagNameTypes.DynamicTag
              : TagNameTypes.NativeTag;
        } else if (path.isStringLiteral() || path.isTemplateLiteral()) {
          type =
            type !== undefined /* && type !== TagNameTypes.NativeTag */
              ? TagNameTypes.DynamicTag
              : TagNameTypes.NativeTag;
        } else if (path.isNullLiteral()) {
          nullable = true;
        } else if (path.isIdentifier()) {
          if (path.node.name === "undefined") {
            nullable = true;
            continue;
          }

          const binding = path.scope.getBinding(path.node.name);

          if (!binding) {
            type = TagNameTypes.DynamicTag;
            continue;
          }

          if (binding.kind === "module") {
            const decl = binding.path.parent as t.ImportDeclaration;
            if (
              MARKO_FILE_REG.test(decl.source.value) &&
              decl.specifiers.some((it) => t.isImportDefaultSpecifier(it))
            ) {
              type =
                type !== undefined && type !== TagNameTypes.CustomTag
                  ? TagNameTypes.DynamicTag
                  : TagNameTypes.CustomTag;
            } else {
              type = TagNameTypes.DynamicTag;
            }

            continue;
          }

          const bindingTag = binding.path as t.NodePath<t.MarkoTag>;

          if (
            bindingTag.isMarkoTag() &&
            (binding.kind as typeof binding.kind & "local") === "local"
          ) {
            const bindingTagName = (
              bindingTag.get("name").node as t.StringLiteral
            ).value;
            if (bindingTagName === "tag") {
              // treat <tag/name> as a custom tag.
              type =
                type !== undefined && type !== TagNameTypes.CustomTag
                  ? TagNameTypes.DynamicTag
                  : TagNameTypes.CustomTag;
              continue;
            }

            if (bindingTagName === "const") {
              pending.push(
                (
                  bindingTag.get(
                    "attributes"
                  )[0] as t.NodePath<t.MarkoAttribute>
                ).get("value")
              );
              continue;
            }

            if (bindingTagName === "let") {
              type = TagNameTypes.DynamicTag;
              continue;
              // TODO: Optimize for when we are certain that this is either always a string or always a custom tag
            }

            continue;
          }

          type = TagNameTypes.DynamicTag;
        } else {
          type = TagNameTypes.DynamicTag;
        }
      }

      // DOM implementation requires non strings actually be a dynamic tag call.
      extra.tagNameType = type!;
      extra.tagNameNullable = nullable;
      extra.tagNameDynamic = true;
    }

    if (extra.tagNameType === undefined) {
      extra.tagNameType = TagNameTypes.DynamicTag;
    }
  }

  return extra.tagNameType;
}
