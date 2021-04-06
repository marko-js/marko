import { isVoid, classValue, styleValue } from "../common/helpers";
import { escapeAttrValue } from "./content";

export function classAttr(val: unknown) {
  return stringAttr("class", classValue(val));
}

export function styleAttr(val: unknown) {
  return stringAttr("style", styleValue(val));
}

export function attr(name: string, val: unknown) {
  return isVoid(val) ? "" : nonVoidUntypedAttr(name, val);
}

export function attrs(data: Record<string, unknown>) {
  let result = "";

  for (const name in data) {
    if (name[0] === "o" && name[1] === "n") {
      continue;
    }

    const val = data[name];

    switch (name) {
      case "class":
        result += classAttr(val);
        break;
      case "style":
        result += styleAttr(val);
        break;
      case "renderBody":
        break;
      default:
        if (!(isVoid(val) || isInvalidAttrName(name))) {
          result += nonVoidUntypedAttr(name, val);
        }
    }
  }

  return result;
}

function stringAttr(name: string, val: string) {
  return val && ` ${name}=${escapeAttrValue(val)}`;
}

function nonVoidUntypedAttr(name: string, val: unknown) {
  switch (typeof val) {
    case "string":
      return ` ${name + attrAssignment(val)}`;
    case "boolean":
      return ` ${name}`;
    case "number":
      return ` ${name}=${val}`;
    case "object":
      if (val instanceof RegExp) {
        return ` ${name}=${escapeAttrValue(val.source)}`;
      }
    // eslint-disable-next-line no-fallthrough
    default:
      return ` ${name + attrAssignment(val + "")}`;
  }
}

function attrAssignment(val: string) {
  return val ? `=${escapeAttrValue(val)}` : "";
}

// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
// Technically the above includes more invalid characters for attributes.
// In practice however the only character that does not become an attribute name
// is when there is a >.
function isInvalidAttrName(name: string) {
  for (let i = name.length; i--; ) {
    if (name[i] === ">") {
      return true;
    }
  }

  return false;
}
