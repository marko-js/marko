import { types as t } from "@marko/babel-types";
import { getTagDef } from "@marko/babel-utils";

const EMPTY_ARR = [];

export function getAttrs(path, noCamel, skipRenderBody) {
  const { node, hub } = path;
  const {
    attributes,
    body: { body },
    hasDynamicAttributeTags
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

      if (attrDef) {
        if (attrDef.targetProperty) {
          const key = attrDef.targetProperty;

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
        }
      }

      if (!noCamel) {
        targetProperty = camelCase(targetProperty);
      }

      foundProperties[targetProperty] = true;
      targetProperties.push(
        t.objectProperty(t.stringLiteral(targetProperty), value)
      );
    } else {
      properties.push(t.spreadElement(value));
    }
  }

  if (!skipRenderBody && childLen) {
    if (hasDynamicAttributeTags) {
      path.insertBefore(body);
    } else {
      if (node.params) {
        if (!hub._hasTagParams && !isIgnoredTagParams(path)) {
          hub._hasTagParams = true;
        }
      }

      properties.push(
        t.objectProperty(
          t.stringLiteral("renderBody"),
          t.arrowFunctionExpression(
            [t.identifier("out"), ...(node.params || EMPTY_ARR)],
            t.blockStatement(body)
          )
        )
      );
    }
  }

  // Default parameters
  tagDef &&
    tagDef.forEachAttribute &&
    tagDef.forEachAttribute(attr => {
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
          t.booleanLiteral(once)
        ];

        if (args.length > 1) {
          parts.push(t.arrayExpression(args.slice(1)));
        }

        return t.arrayExpression(parts);
      })
    )
  ];
}

export function evaluateAttr(attr) {
  const name = attr.get("name").node;
  const value = attr.get("value");
  let confident = false;
  let computed = undefined;

  if (name) {
    if (value.isRegExpLiteral()) {
      confident = true;
      computed = value.get("pattern").node;
    } else {
      const evaluated = value.evaluate();
      ({ confident, value: computed } = evaluated);

      if (computed === true) {
        computed = "";
      } else if (computed != null && computed !== false) {
        computed = computed + "";
      }
    }
  }

  return {
    confident,
    computed
  };
}

function camelCase(string) {
  return string.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
}

function isIgnoredTagParams(path) {
  const tagNamePath = path.get("name");

  if (!tagNamePath.isStringLiteral()) {
    return path.get("_isMacroTagCall").node || false;
  }

  const tagName = tagNamePath.get("value").node;

  return (
    tagName === "for" ||
    tagName === "macro" ||
    ((tagName === "@then" || tagName === "@catch") &&
      path.parentPath.parentPath
        .get("name")
        .isStringLiteral({ value: "await" }))
  );
}
