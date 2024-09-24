import { classValue, isVoid, styleValue } from "../common/helpers";
import { type Accessor, AccessorChar } from "../common/types";
import { ensureScopeWithId } from "./writer";

export function classAttr(val: unknown) {
  return stringAttr("class", classValue(val));
}

export function styleAttr(val: unknown) {
  return stringAttr("style", styleValue(val));
}

// @ts-expect-error the following function is not yet implemented
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function valueAttr_select(val: unknown, multiple: boolean) {
  // TODO: need to cause all child options to render with correct selected attribute
}

export function checkedValueAttr(checkedValue: unknown, value: unknown) {
  return checkedValue === value ? ` checked` : "";
}

export function checkedValuesAttr(checkedValues: unknown[], value: unknown) {
  return checkedValues?.includes(value) ? ` checked` : "";
}

export function attr(name: string, val: unknown) {
  return isVoid(val) ? "" : nonVoidAttr(name, val);
}

export function attrs(
  data: Record<string, unknown>,
  elementAccessor?: Accessor,
  scopeId?: number,
) {
  let result = "";
  let events: undefined | Record<string, unknown>;

  for (const name in data) {
    const val = data[name];

    switch (name) {
      case "class":
        result += classAttr(val);
        break;
      case "style":
        result += styleAttr(val);
        break;
      case "value":
        // TODO: need to somehow know what type of element this is
        if (name /* el.tagName === "INPUT"*/) {
          result += stringAttr("value", val as string);
        } /*if (el.tagName === "SELECT")*/ else {
          result += valueAttr_select(val, !!data.multiple);
        }
        break;
      case "checkedValue":
        result += checkedValueAttr(val, data.value);
        break;
      case "checkedValues":
        result += checkedValuesAttr(val as unknown[], data.value);
        break;
      default:
        if (!isVoid(val)) {
          if (controllableChangeAttrs.has(name)) {
            (events ??= {})[name] = val;
          } else if (/^on[A-Z-]/.test(name)) {
            (events ??= {})[
              name[2] === "-" ? name.slice(3) : name.slice(2).toLowerCase()
            ] = val;
          } else if (!/^renderBody$|[\s/>"'=]/.test(name)) {
            result += nonVoidAttr(name, val);
          }
        }
        break;
    }
  }

  if (events && elementAccessor) {
    ensureScopeWithId(scopeId!)[
      (elementAccessor + AccessorChar.EventAttributes) as any
    ] = events;
  }

  return result;
}

const controllableChangeAttrs = new Set([
  "valueChange",
  "checkedChange",
  "checkedValueChange",
  "checkedValuesChange",
  "openChange",
]);

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

const unsafeAttrChars = /["'>\s]/g;
export function escapeAttrValue(str: string) {
  if (unsafeAttrChars.test(str)) {
    const c = str[unsafeAttrChars.lastIndex - 1];
    unsafeAttrChars.lastIndex = 0;

    return c === '"'
      ? `'${str.replace(/'/g, "&#39;")}'`
      : `"${str.replace(/"/g, "&#34;")}"`;
  }

  return str;
}
