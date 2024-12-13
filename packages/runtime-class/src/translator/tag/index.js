import { types as t } from "@marko/compiler";
import {
  assertNoVar,
  findAttributeTags,
  getTagDef,
  isAttributeTag,
  isDynamicTag,
  isMacroTag,
  isNativeTag,
  isTransparentTag,
  resolveTagImport,
} from "@marko/compiler/babel-utils";
import nodePath from "path";

import { getKeyManager } from "../util/key-manager";
import { optimizeStaticVDOM } from "../util/optimize-vdom-create";
import { enter, exit } from "../util/plugin-hooks";
import attributeTranslators from "./attribute";
import attributeTag, { analyzeAttributeTags } from "./attribute-tag";
import customTag from "./custom-tag";
import dynamicTag from "./dynamic-tag";
import macroTag from "./macro-tag";
import nativeTag from "./native-tag";

export default {
  enter(path) {
    const tagDef = getTagDef(path);

    if (tagDef && tagDef.translator) {
      const { node } = path;
      enter(tagDef.translator.hook, path, t);

      if (path.node !== node) {
        return;
      }
    }

    assertNoVar(path);

    for (const attr of path.get("attributes")) {
      if (attr.isMarkoAttribute()) {
        const { node } = path;
        attributeTranslators.enter(attr);
        if (path.node !== node) {
          return;
        }
      }
    }

    if (!isAttributeTag(path)) {
      if (
        !tagDef &&
        path.hub.file.markoOpts.ignoreUnrecognizedTags &&
        (path.node.attributeTags.length || path.node.body.attributeTags) &&
        !isDynamicTag(path)
      ) {
        moveIgnoredAttrTags(path);
      }

      if (isDynamicTag(path) || !(isMacroTag(path) || isNativeTag(path))) {
        analyzeAttributeTags(path);
      }

      getKeyManager(path).resolveKey(path);
    }

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
              t.variableDeclarator(tagIdentifier, name.node),
            ]),
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

    if (tagDef && tagDef.translator) {
      const { node } = path;

      exit(tagDef.translator.hook, path, t);

      if (path.node !== node) {
        return;
      }
    }

    if (isNativeTag(path)) {
      return nativeTag(path, isDynamicNullable);
    } else {
      return customTag(path, isDynamicNullable);
    }
  },
};

const HANDLE_BINDINGS = ["module", "var", "let", "const"];
function findDynamicTagTypes(root) {
  const pending = [root];
  const types = {
    string: false,
    empty: false,
    component: false,
  };
  let tagNameImported;

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
            const importSource = binding.path.parent.source;
            if (
              t.isStringLiteral(importSource) &&
              isMarkoFile(importSource.value)
            ) {
              const resolvedImport =
                resolveTagImport(root.parentPath, importSource.value) ||
                importSource.value;

              if (tagNameImported === undefined) {
                tagNameImported = resolvedImport;
              } else if (
                tagNameImported &&
                tagNameImported !== resolvedImport
              ) {
                tagNameImported = null;
              }

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

  if (tagNameImported && !types.string) {
    (root.parent.extra ??= {}).tagNameImported = tagNameImported;
  }

  return types;
}

function isMarkoFile(request) {
  return nodePath.extname(request) === ".marko" || /^<.*>$/.test(request);
}

function moveIgnoredAttrTags(parentTag) {
  const attrTags = parentTag.node.body.attributeTags
    ? parentTag.get("body").get("body")
    : parentTag.get("attributeTags");

  if (!attrTags.length) return;

  for (const attrTag of attrTags) {
    if (attrTag.isMarkoTag()) {
      if (isAttributeTag(attrTag)) {
        attrTag.set(
          "name",
          t.stringLiteral(`at_${attrTag.get("name.value").node.slice(1)}`),
        );
      }

      moveIgnoredAttrTags(attrTag);
    }
  }

  parentTag.node.body.body = parentTag.node.attributeTags.concat(
    parentTag.node.body.body,
  );
  parentTag.node.attributeTags = [];
}
