import { isVoid, classValue, styleValue } from "../common/helpers";

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
  return val && nonVoidStringAttr(name, val);
}

function nonVoidUntypedAttr(name: string, val: unknown) {
  switch (typeof val) {
    case "string":
      return nonVoidStringAttr(name, val);
    case "boolean":
      return ` ${name}`;
    case "number":
      return ` ${name}=${val}`;
    case "object":
      if (val instanceof RegExp) {
        return nonVoidStringAttr(name, val.source);
      }
    default:
      return nonVoidStringAttr(name, val + "");
  }
}

function nonVoidStringAttr(name: string, val: string) {
  const len = val.length;

  if (len === 0) {
    return ` ${name}`;
  }

  const result = ` ${name}=`;
  let i = 0;
  do {
    switch (val[i]) {
      case '"':
        return result + quoteValue(val, i + 1, "'", "&#39;");
      case "'":
      case ">":
      case " ":
      case "\t":
      case "\n":
      case "\r":
      case "\f":
        return result + quoteValue(val, i + 1, '"', "&#34;");
      default:
        i++;
        break;
    }
  } while (i < len);

  return result + val;
}

function quoteValue(
  val: string,
  startPos: number,
  quote: string,
  escaped: string
) {
  let result = quote;
  let lastPos = 0;

  for (let i = startPos, len = val.length; i < len; i++) {
    if (val[i] === quote) {
      result += val.slice(lastPos, i) + escaped;
      lastPos = i + 1;
    }
  }

  return result + (lastPos ? val.slice(lastPos) : val) + quote;
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
