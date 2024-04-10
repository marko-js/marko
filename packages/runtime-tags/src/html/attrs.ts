import { classValue, isVoid, styleValue } from "../common/helpers";

export function classAttr(val: unknown) {
  return stringAttr("class", classValue(val));
}

export function styleAttr(val: unknown) {
  return stringAttr("style", styleValue(val));
}

export function attr(name: string, val: unknown) {
  return isVoid(val) ? "" : nonVoidAttr(name, val);
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
      default:
        // https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
        // Avoids outputting attribute names that would be invalid or
        // be an event handler / renderBody.
        if (!(isVoid(val) || /^on[A-Z-]|^renderBody$|[\s/>"'=]/.test(name))) {
          result += nonVoidAttr(name, val);
        }
        break;
    }
  }

  return result;
}

function stringAttr(name: string, val: string) {
  return val && ` ${name}=${escapeAttrValue(val)}`;
}

function nonVoidAttr(name: string, val: unknown) {
  switch (typeof val) {
    case "string":
      return ` ${name + attrAssignment(val)}`;
    case "boolean":
      return ` ${name}`;
    case "number":
      return ` ${name}=${val}`;
    case "object":
      if (val instanceof RegExp) {
        return ` ${name + attrAssignment(val.source)}`;
      }
      break;
  }

  return ` ${name + attrAssignment(val + "")}`;
}

function attrAssignment(val: string) {
  return val ? `=${escapeAttrValue(val)}` : "";
}

function escapeAttrValue(val: string) {
  for (let i = 0; i < val.length; i++) {
    switch (val[i]) {
      case '"':
        return escapeQuotes(val, i + 1, "'", "&#39;");
      case "'":
      case ">":
      case " ":
      case "\t":
      case "\n":
      case "\r":
      case "\f":
        return escapeQuotes(val, i + 1, '"', "&#34;");
    }
  }

  return val;
}

function escapeQuotes(
  val: string,
  startPos: number,
  quote: string,
  escaped: string,
) {
  let result = quote;
  let lastPos = 0;

  for (let i = startPos; i < val.length; i++) {
    if (val[i] === quote) {
      result += val.slice(lastPos, i) + escaped;
      lastPos = i + 1;
    }
  }

  return result + (lastPos ? val.slice(lastPos) : val) + quote;
}
