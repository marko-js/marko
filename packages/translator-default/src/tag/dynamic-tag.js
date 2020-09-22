import nodePath from "path";
import { types as t } from "@marko/babel-types";
import { importDefault } from "@marko/babel-utils";
import { getAttrs, buildEventHandlerArray } from "./util";
import withPreviousLocation from "../util/with-previous-location";
import nativeTag from "./native-tag";
import customTag from "./custom-tag";

const HANDLE_BINDINGS = ["module", "var", "let", "const"];

export default function(path) {
  const {
    node,
    hub: { file }
  } = path;
  const { key, arguments: args, properties: tagProperties } = node;

  const name = path.get("name");
  const types = findTypes(name);

  if (types && !(types.string && types.component)) {
    let tagIdentifier;
    if (name.isIdentifier()) {
      tagIdentifier = name;
    } else {
      tagIdentifier = path.scope.generateUidIdentifier(`tagName`);
      path.insertBefore(
        t.variableDeclaration("const", [
          t.variableDeclarator(tagIdentifier, name.node)
        ])
      );

      name.replaceWith(tagIdentifier);
    }

    path.set("isNullable", types.empty);

    if (types.string) {
      nativeTag(path);
    } else {
      customTag(path);
    }

    return;
  }

  const foundAttrs = getAttrs(path, true);
  let renderBodyProp;
  let attrsLen = t.isNullLiteral(foundAttrs) ? 0 : 1;

  if (t.isObjectExpression(foundAttrs)) {
    const renderBodyIndex = foundAttrs.properties.findIndex(
      prop => prop.key && prop.key.value === "renderBody"
    );

    attrsLen = foundAttrs.properties.length;

    if (renderBodyIndex > -1) {
      renderBodyProp = foundAttrs.properties[renderBodyIndex];
      foundAttrs.properties.splice(renderBodyIndex, 1);
      attrsLen--;
    }
  }

  const dynamicTagRenderCall = t.callExpression(
    importDefault(
      file,
      `marko/src/runtime/helpers/dynamic-tag`,
      "marko_dynamic_tag"
    ),
    [
      t.identifier("out"),
      name.node,
      attrsLen ? t.arrowFunctionExpression([], foundAttrs) : t.nullLiteral(),
      renderBodyProp ? renderBodyProp.value : t.nullLiteral(),
      args && args.length ? t.arrayExpression(args) : t.nullLiteral(),
      tagProperties.length
        ? t.objectExpression(tagProperties)
        : t.nullLiteral(),
      file._componentDefIdentifier,
      key,
      ...buildEventHandlerArray(path)
    ]
  );

  path.replaceWith(withPreviousLocation(dynamicTagRenderCall, node));
}

function findTypes(root) {
  const pending = [root];
  const types = {
    string: false,
    empty: false,
    component: false
  };

  let path;
  while ((path = pending.pop())) {
    switch (path.type) {
      case "ConditionalExpression":
        pending.push(path.get("consequent"));

        if (path.get("alternate").node) {
          pending.push(path.get("alternate"));
        }
        break;

      case "LogicalExpression":
        if (path.get("operator").node === "||") {
          pending.push(path.get("left"));
        } else {
          types.empty = true;
        }

        pending.push(path.get("right"));
        break;

      case "AssignmentExpression":
        pending.push(path.get("right"));
        break;

      case "BinaryExpression":
        if (path.get("operator").node !== "+") {
          return false;
        }

        types.string = true;
        break;

      case "StringLiteral":
      case "TemplateLiteral":
        types.string = true;
        break;

      case "NullLiteral":
        types.empty = true;
        break;

      case "Identifier":
        if (path.get("name").node === "undefined") {
          types.empty = true;
        } else {
          const binding = path.scope.getBinding(path.node.name);

          if (!binding || !HANDLE_BINDINGS.includes(binding.kind)) {
            return false;
          }

          if (binding.kind === "module") {
            const importSourcePath = binding.path.parentPath.get("source");
            if (
              importSourcePath.isStringLiteral() &&
              isMarkoFile(importSourcePath.get("value").node)
            ) {
              types.component = true;
            } else {
              return false;
            }
          } else {
            const initialValue = binding.path.get("init");
            if (initialValue.node) {
              pending.push(initialValue);
            } else {
              types.empty = true;
            }

            const assignments = binding.constantViolations;
            if (assignments && assignments.length) {
              for (const assignment of assignments) {
                const operator = assignment.get("operator").node;
                if (operator === "=") {
                  pending.push(assignment.get("right"));
                } else if (operator === "+=") {
                  types.string = true;
                } else {
                  return false;
                }
              }
            }
          }
        }
        break;

      default:
        return false;
    }
  }

  return types;
}

function isMarkoFile(request) {
  return nodePath.extname(request) === ".marko" || /^<.*>$/.test(request);
}
