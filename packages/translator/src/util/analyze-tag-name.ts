import { types as t, NodePath } from "@marko/babel-types";
import { isNativeTag } from "@marko/babel-utils";

export const enum TagNameTypes {
  NativeTag,
  CustomTag,
  DynamicTag,
  AttributeTag
}
type TagNameInfo = { type: TagNameTypes; nullable: boolean; dynamic: boolean };
const HANDLE_BINDINGS = ["module", "var", "let", "const"];
const MARKO_FILE_REG = /^<.*>$|\.marko$/;
const CACHE = new WeakMap<NodePath<t.MarkoTag>, TagNameInfo>();
const KNOWN_COMPONENTS = new WeakSet<t.Identifier>();

export function markIdentifierAsComponent(node: t.Identifier) {
  KNOWN_COMPONENTS.add(node);
  return node;
}

export default function analyzeTagName(tag: NodePath<t.MarkoTag>) {
  let cached = CACHE.get(tag);
  if (cached) {
    return cached;
  }

  const name = tag.get("name");

  if (name.isStringLiteral()) {
    cached = {
      type:
        name.node.value[0] === "@"
          ? TagNameTypes.AttributeTag
          : isNativeTag(tag)
          ? TagNameTypes.NativeTag
          : TagNameTypes.CustomTag,
      nullable: false,
      dynamic: false
    };
  } else {
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
          if (type === undefined || type === TagNameTypes.NativeTag) {
            type = TagNameTypes.NativeTag;
          } else {
            type = TagNameTypes.DynamicTag;
          }
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
          } else {
            const binding = curPath.scope.getBinding(curPath.node.name);

            if (!binding) {
              type = TagNameTypes.DynamicTag;
            } else if (
              KNOWN_COMPONENTS.has(binding.path.node as t.Identifier)
            ) {
              type =
                type !== undefined && type !== TagNameTypes.CustomTag
                  ? TagNameTypes.DynamicTag
                  : TagNameTypes.CustomTag;
            } else if (!HANDLE_BINDINGS.includes(binding.kind)) {
              type = TagNameTypes.DynamicTag;
            } else if (binding.kind === "module") {
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
            } else {
              const initialValue = (binding.path as NodePath<t.VariableDeclarator>).get(
                "init"
              );
              if (initialValue.node) {
                pending.push(initialValue);
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
          }
          break;
        }

        default:
          type = TagNameTypes.DynamicTag;
          break;
      }
    }

    cached = { type: type!, nullable, dynamic: true };
  }

  CACHE.set(tag, cached);
  return cached;
}
