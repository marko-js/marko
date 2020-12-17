import { types as t, NodePath } from "@marko/babel-types";
import { isNativeTag } from "@marko/babel-utils";

declare module "@marko/babel-types" {
  export interface MarkoTagExtra {
    tagNameType: TagNameTypes;
    tagNameNullable: boolean;
    tagNameDynamic: boolean;
  }
}

export const enum TagNameTypes {
  NativeTag,
  CustomTag,
  DynamicTag,
  AttributeTag
}

const MARKO_FILE_REG = /^<.*>$|\.marko$/;

export default function analyzeTagNameType(tag: NodePath<t.MarkoTag>) {
  const name = tag.get("name");
  const { extra } = tag.node;

  if (name.isStringLiteral()) {
    extra.tagNameType =
      name.node.value[0] === "@"
        ? TagNameTypes.AttributeTag
        : isNativeTag(tag)
        ? TagNameTypes.NativeTag
        : TagNameTypes.CustomTag;

    extra.tagNameNullable = extra.tagNameNullable = false;
    return;
  }

  const pending = [name] as NodePath<any>[];
  let path: typeof pending[0] | undefined;
  let type: TagNameTypes | undefined = undefined;
  let nullable = false;

  while ((path = pending.pop()) && type !== TagNameTypes.DynamicTag) {
    switch (path.type) {
      case "ConditionalExpression": {
        const curPath = path as NodePath<t.ConditionalExpression>;
        pending.push(curPath.get("consequent"));

        if (curPath.node.alternate) {
          pending.push(curPath.get("alternate"));
        }
        break;
      }

      case "LogicalExpression": {
        const curPath = path as NodePath<t.LogicalExpression>;
        if (curPath.node.operator === "||") {
          pending.push(curPath.get("left"));
        } else {
          nullable = true;
        }

        pending.push(curPath.get("right"));
        break;
      }

      case "AssignmentExpression":
        pending.push((path as NodePath<t.AssignmentExpression>).get("right"));
        break;

      case "BinaryExpression":
        type =
          (path as NodePath<t.BinaryExpression>).node.operator !== "+" ||
          (type !== undefined && type !== TagNameTypes.NativeTag)
            ? TagNameTypes.DynamicTag
            : TagNameTypes.NativeTag;

        break;

      case "StringLiteral":
      case "TemplateLiteral":
        type =
          type !== undefined && type !== TagNameTypes.NativeTag
            ? TagNameTypes.DynamicTag
            : TagNameTypes.NativeTag;
        break;

      case "NullLiteral":
        nullable = true;
        break;

      case "Identifier": {
        const curPath = path as NodePath<t.Identifier>;
        if (curPath.node.name === "undefined") {
          nullable = true;
          break;
        }

        const binding = curPath.scope.getBinding(curPath.node.name);

        if (!binding) {
          type = TagNameTypes.DynamicTag;
          break;
        }

        if (binding.kind === "module") {
          const decl = binding.path.parent as t.ImportDeclaration;
          if (
            MARKO_FILE_REG.test(decl.source.value) &&
            decl.specifiers.some(it => t.isImportDefaultSpecifier(it))
          ) {
            type =
              type !== undefined && type !== TagNameTypes.CustomTag
                ? TagNameTypes.DynamicTag
                : TagNameTypes.CustomTag;
          } else {
            type = TagNameTypes.DynamicTag;
          }

          break;
        }

        const bindingPath = binding.path;
        const bindingTag = bindingPath.parentPath as NodePath<t.MarkoTag>;

        if (bindingTag.isMarkoTag() && bindingPath.key === "var") {
          const bindingTagName = (bindingTag.get("name")
            .node as t.StringLiteral).value;
          if (bindingTagName === "tag") {
            // treat <tag/name> as a custom tag.
            type =
              type !== undefined && type !== TagNameTypes.CustomTag
                ? TagNameTypes.DynamicTag
                : TagNameTypes.CustomTag;
            break;
          }

          if (bindingTagName === "const") {
            pending.push(
              (bindingTag.get(
                "attributes"
              )[0] as NodePath<t.MarkoAttribute>).get("value")
            );
            break;
          }

          if (bindingTagName === "let") {
            const defaultAttr = bindingTag.get("attributes")[0];

            if (defaultAttr.node) {
              pending.push(
                (defaultAttr as NodePath<t.MarkoAttribute>).get("value")
              );
            } else {
              nullable = true;
            }

            const assignments = binding.constantViolations;
            for (let i = assignments.length; i--; ) {
              const assignment = assignments[
                i
              ] as NodePath<t.AssignmentExpression>;
              const { operator } = assignment.node;
              if (operator === "=") {
                pending.push(assignment.get("right"));
              } else if (operator === "+=") {
                type =
                  type !== undefined && type !== TagNameTypes.NativeTag
                    ? TagNameTypes.DynamicTag
                    : TagNameTypes.NativeTag;
              } else {
                type = TagNameTypes.DynamicTag;
                break;
              }
            }
          }

          break;
        }

        type = TagNameTypes.DynamicTag;
        break;
      }

      default:
        type = TagNameTypes.DynamicTag;
        break;
    }
  }

  extra.tagNameType = type!;
  extra.tagNameNullable = nullable;
  extra.tagNameDynamic = true;
}
