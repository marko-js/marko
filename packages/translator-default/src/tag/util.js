import { types as t } from "@marko/compiler";
import { computeNode, getTagDef } from "@marko/babel-utils";
import classToString from "marko/src/runtime/helpers/class-value";
import styleToString from "marko/src/runtime/helpers/style-value";

export function getAttrs(path, preserveNames, skipRenderBody) {
  const { node } = path;
  const {
    attributes,
    body: { body, params },
    hasDynamicAttrTags,
  } = node;
  const attrsLen = attributes.length;
  const childLen = body.length;
  const properties = [];
  const targetObjects = {};
  const tagDef = getTagDef(path);
  const foundProperties = {};

  for (let i = 0; i < attrsLen; i++) {
    const { name, value } = attributes[i];

    if (name) {
      const attrDef = tagDef && tagDef.getAttribute(name);
      let targetProperties = properties;
      let targetProperty = name;
      let preserveName = preserveNames;

      if (attrDef) {
        if (attrDef.targetProperty) {
          const key = attrDef.targetProperty;
          preserveName =
            attrDef.preserveName !== false && attrDef.removeDashes !== true;

          if (attrDef.dynamicAttribute) {
            let targetObject = targetObjects[key];

            if (!targetObject) {
              properties.push(
                t.objectProperty(
                  t.stringLiteral(key),
                  (targetObject = targetObjects[key] = t.objectExpression([]))
                )
              );
            }

            targetProperties = targetObject.properties;
          } else {
            targetProperty = key;
          }
        } else if (
          !preserveName &&
          (attrDef.preserveName === true || attrDef.removeDashes === false)
        ) {
          preserveName = true;
        }
      }

      if (!preserveName) {
        targetProperty = camelCase(targetProperty);
      }

      foundProperties[targetProperty] = true;
      targetProperties.push(
        t.objectProperty(t.stringLiteral(targetProperty), value)
      );
    } else {
      mergeSpread(properties, value);
    }
  }

  if (!skipRenderBody && childLen) {
    let endDynamicAttrTagsIndex = -1;

    if (hasDynamicAttrTags) {
      endDynamicAttrTagsIndex = findLastIndex(
        body,
        ({ value }) => value === "END_ATTRIBUTE_TAGS"
      );
      path
        .insertBefore(body.slice(0, endDynamicAttrTagsIndex))
        .map((child) => child.skip());
    }

    if (!hasDynamicAttrTags || endDynamicAttrTagsIndex !== childLen - 1) {
      properties.push(
        t.objectProperty(
          t.stringLiteral("renderBody"),
          t.arrowFunctionExpression(
            [t.identifier("out"), ...params],
            t.blockStatement(
              hasDynamicAttrTags
                ? body.slice(endDynamicAttrTagsIndex + 1)
                : body
            )
          )
        )
      );
    }
  }

  // Default parameters
  tagDef &&
    tagDef.forEachAttribute &&
    tagDef.forEachAttribute((attr) => {
      if (foundProperties[attr.name] || attr.dynamicAttribute) {
        return;
      }

      if (attr.defaultValue !== undefined) {
        properties.push(
          t.objectProperty(
            t.stringLiteral(attr.name),
            t.stringLiteral(attr.defaultValue + "")
          )
        );
      } else if (attr.required) {
        throw path
          .get("name")
          .buildCodeFrameError(`The "${attr.name}" attribute is required.`);
      }
    });

  if (properties.length === 0) {
    return t.nullLiteral();
  }

  if (properties.length === 1 && t.isSpreadElement(properties[0])) {
    return properties[0].argument;
  }

  return t.objectExpression(properties);
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
      })
    ),
  ];
}

export function evaluateAttr(attr) {
  if (attr.node.name) {
    const computed = computeNode(attr.node.value);
    if (computed) {
      const { value } = computed;
      switch (attr.node.name) {
        case "class":
          return {
            value: classToString(value)
              ?.replace(/(\s)\s/, "$1")
              .trim(),
          };
        case "style":
          return {
            value: styleToString(value)
              ?.replace(/(\s)\s/, "$1")
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
}

function camelCase(string) {
  return string.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
}

function findLastIndex(arr, check) {
  for (let i = arr.length; i--; ) {
    if (check(arr[i])) {
      return i;
    }
  }
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
