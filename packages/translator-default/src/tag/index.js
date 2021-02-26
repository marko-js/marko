import nodePath from "path";
import { types as t } from "@marko/compiler";
import {
  getTagDef,
  isDynamicTag,
  isAttributeTag,
  isMacroTag,
  isNativeTag,
  findAttributeTags,
  assertNoVar
} from "@marko/babel-utils";
import markoModules from "@marko/compiler/modules";
import nativeTag from "./native-tag";
import dynamicTag from "./dynamic-tag";
import attributeTag from "./attribute-tag";
import customTag from "./custom-tag";
import macroTag from "./macro-tag";
import attributeTranslators from "./attribute";
import { getKeyManager } from "../util/key-manager";
import { enter, exit } from "../util/plugin-hooks";
import { optimizeStaticVDOM } from "../util/optimize-vdom-create";

export default {
  enter(path) {
    assertNoVar(path);
    const tagDef = getTagDef(path);

    if (tagDef) {
      if (tagDef.codeGeneratorModulePath) {
        const {
          node,
          hub: { file }
        } = path;
        file.metadata.marko.watchFiles.push(tagDef.codeGeneratorModulePath);
        tagDef.codeGenerator = markoModules.require(
          tagDef.codeGeneratorModulePath
        );
        enter(tagDef.codeGenerator, path, t);

        if (path.node !== node) {
          return;
        }
      }
    }

    for (const attr of path.get("attributes")) {
      if (attr.isMarkoAttribute()) {
        const { node } = path;
        attributeTranslators.enter(attr);
        if (path.node !== node) {
          return;
        }
      }
    }

    if (path.hub.file.markoOpts.ignoreUnrecognizedTags && !tagDef) {
      findAttributeTags(path).forEach(child => {
        child.set(
          "name",
          t.stringLiteral(`at_${child.get("name.value").node.slice(1)}`)
        );
      });
    }

    getKeyManager(path).resolveKey(path);
    optimizeStaticVDOM(path);
  },
  exit(path) {
    let isUnknownDynamic = false;
    let isDynamicNullable = false;

    if (isDynamicTag(path)) {
      const name = path.get("name");
      const types = findDynamicTagTypes(name);
      if (types && !(types.string && types.component)) {
        if (!name.isIdentifier()) {
          const tagIdentifier = path.scope.generateUidIdentifier(`tagName`);
          path.insertBefore(
            t.variableDeclaration("const", [
              t.variableDeclarator(tagIdentifier, name.node)
            ])
          );

          name.replaceWith(tagIdentifier);
        }

        isDynamicNullable = types.empty;
        path.node._isDynamicString = types.string;
      } else {
        isUnknownDynamic = true;
      }
    }

    for (const attr of path.get("attributes")) {
      if (attr.isMarkoAttribute()) {
        const { node } = path;
        attributeTranslators.exit(attr);
        if (path.node !== node) {
          return;
        }
      }
    }

    if (isUnknownDynamic) {
      return dynamicTag(path);
    }

    if (isAttributeTag(path)) {
      return attributeTag(path);
    }

    if (isMacroTag(path)) {
      return macroTag(path);
    }

    const tagDef = getTagDef(path);

    if (tagDef) {
      const { codeGenerator } = tagDef;
      const { node } = path;

      exit(codeGenerator, path, t);

      if (path.node !== node) {
        return;
      }
    }

    if (isNativeTag(path)) {
      return nativeTag(path, isDynamicNullable);
    } else {
      return customTag(path, isDynamicNullable);
    }
  }
};

const HANDLE_BINDINGS = ["module", "var", "let", "const"];
function findDynamicTagTypes(root) {
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
