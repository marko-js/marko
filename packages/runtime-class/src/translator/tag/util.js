import { types as t } from "@marko/compiler";
import {
  computeNode,
  findParentTag,
  getTagDef,
  importNamed,
  isAttributeTag,
} from "@marko/compiler/babel-utils";
import classToString from "marko/src/runtime/helpers/class-value";
import styleToString from "marko/src/runtime/helpers/style-value";

export function getAttrs(path, preserveNames, isAttrTag) {
  const { node } = path;
  const {
    extra,
    attributes,
    attributeTags,
    body: { body, params },
  } = node;
  const attrsLen = attributes.length;
  const childLen = body.length;
  const properties = [];
  const targetObjects = {};
  const tagDef = getTagDef(path);
  const foundProperties = {};
  const hasAttributeTags = !!attributeTags.length;
  const isTagsAPI = findRootTag(path)?.node.extra?.featureType === "tags";
  const isTagsAttrTag = isTagsAPI && isAttrTag;
  const renderBodyKey = isTagsAPI ? "content" : "renderBody";

  for (let i = 0; i < attrsLen; i++) {
    const { name, value } = attributes[i];

    if (name) {
      const attrDef = getAttrDef(tagDef, name);
      let targetProperties = properties;
      let targetProperty;

      if (attrDef?.dynamicAttribute && attrDef.targetProperty) {
        const key = attrDef.targetProperty;
        let targetObject = targetObjects[key];

        if (!targetObject) {
          properties.push(
            t.objectProperty(
              t.stringLiteral(key),
              (targetObject = targetObjects[key] = t.objectExpression([])),
            ),
          );
        }

        targetProperties = targetObject.properties;
        targetProperty = keepsDashes(attrDef) ? name : camelCase(name);
      } else {
        targetProperty = getAttrProperty(attrDef, name, preserveNames);
      }

      foundProperties[targetProperty] = true;
      targetProperties.push(
        t.objectProperty(t.stringLiteral(targetProperty), value),
      );
    } else {
      mergeSpread(properties, value);
    }
  }

  // `attr-tag.js` › `i` stores a returned body as `renderBody`, so a Tags
  // attribute tag keeps its body keyed even beside nested attribute tags.
  if (childLen && (!hasAttributeTags || isTagsAttrTag)) {
    properties.push(
      t.objectProperty(
        t.stringLiteral(renderBodyKey),
        t.arrowFunctionExpression(
          [t.identifier("out"), ...params],
          t.blockStatement(body),
        ),
      ),
    );
  }

  // Default parameters
  if (tagDef?.attributes) {
    for (const name in tagDef.attributes) {
      const attr = tagDef.attributes[name];
      if (attr.defaultValue !== undefined && !attr.dynamicAttribute) {
        const property = getAttrProperty(attr, name, preserveNames);
        if (!foundProperties[property]) {
          properties.push(
            t.objectProperty(
              t.stringLiteral(property),
              t.stringLiteral(attr.defaultValue + ""),
            ),
          );
        }
      }
    }
  }

  let attrsObject =
    properties.length === 0
      ? t.nullLiteral()
      : !hasAttributeTags &&
          !isAttrTag &&
          properties.length === 1 &&
          t.isSpreadElement(properties[0])
        ? properties[0].argument
        : t.objectExpression(properties);

  if (hasAttributeTags) {
    let attrTagBody = attributeTags;

    if (body.length && !isTagsAttrTag) {
      attrTagBody = attrTagBody.concat(
        t.returnStatement(
          t.arrowFunctionExpression(
            [t.identifier("out"), ...params],
            t.blockStatement(body),
          ),
        ),
      );
    }

    const attrTagFn = t.arrowFunctionExpression(
      [],
      t.blockStatement(attrTagBody),
    );

    attrsObject = t.callExpression(
      importNamed(
        path.hub.file,
        "marko/src/runtime/helpers/attr-tag.js",
        "i",
        "marko_render_input",
      ),
      properties.length === 0 ? [attrTagFn] : [attrTagFn, attrsObject],
    );
  }

  return attrsObject;
}

export function buildEventHandlerArray(path) {
  const { handlers } = path.node;
  if (!handlers) {
    return [];
  }

  return [
    t.arrayExpression(
      Object.entries(handlers).map(([eventName, { arguments: args, once }]) => {
        const parts = [
          t.stringLiteral(eventName),
          args[0],
          t.booleanLiteral(once),
        ];

        if (args.length > 1) {
          parts.push(t.arrayExpression(args.slice(1)));
        }

        return t.arrayExpression(parts);
      }),
    ),
  ];
}

export function evaluateAttr(attr) {
  const computed = computeNode(attr.node.value);
  if (computed) {
    const { value } = computed;
    switch (attr.node.name) {
      case "class":
        return {
          value: classToString(value)?.replace(/\s+/, " ").trim(),
        };
      case "style":
        return {
          value: styleToString(value)
            ?.replace(/\s+/, " ")
            .trim()
            .replace(/;$/, ""),
        };
    }

    if (value == null || value === false) {
      return { value: undefined };
    }

    if (value === true) {
      return { value: "" };
    }

    if (typeof value === "object") {
      switch (value.toString) {
        case Object.prototype.toString:
        case Array.prototype.toString:
          return { value: JSON.stringify(value) };
        case RegExp.prototype.toString:
          return { value: value.source };
      }
    }

    return { value: value + "" };
  }
}

function camelCase(string) {
  return string.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
}

function findLastIndex(arr, check) {
  for (let i = arr.length; i--;) {
    if (check(arr[i])) {
      return i;
    }
  }

  return -1;
}

function mergeSpread(properties, value) {
  if (t.isObjectExpression(value)) {
    for (const prop of value.properties) {
      if (t.isSpreadElement(prop)) {
        mergeSpread(properties, prop.argument);
      } else {
        properties.push(prop);
      }
    }
  } else {
    properties.push(t.spreadElement(value));
  }
}

function findRootTag(tag) {
  let cur = tag;

  while (isAttributeTag(cur)) {
    cur = findParentTag(cur);
  }

  return cur;
}

// A declared attribute, else the `*` attribute, else one whose pattern matches.
function getAttrDef(tagDef, name) {
  if (!tagDef) return;
  const attr =
    tagDef.attributes && (tagDef.attributes[name] || tagDef.attributes["*"]);
  if (attr || !tagDef.patternAttributes) return attr;
  for (const patternAttr of tagDef.patternAttributes) {
    if (patternAttr.pattern.test(name)) return patternAttr;
  }
}

// The input property an attribute is passed as: camelCased unless its name is
// kept, and renamed by a declared target property.
function getAttrProperty(attrDef, name, preserveNames) {
  if (!attrDef) return preserveNames ? name : camelCase(name);
  if (attrDef.targetProperty) {
    return keepsDashes(attrDef)
      ? attrDef.targetProperty
      : camelCase(attrDef.targetProperty);
  }
  return preserveNames ||
    attrDef.preserveName === true ||
    attrDef.removeDashes === false
    ? name
    : camelCase(name);
}

function keepsDashes(attrDef) {
  return attrDef.preserveName !== false && attrDef.removeDashes !== true;
}
