import { RendererProp } from "./accessor.debug";

export const htmlAttrNameReg = /^[^a-z_]|[^a-z0-9._:-]/i;
export const userAttrNameReg = /^[^a-z_$]|[^a-z0-9._:-]/i;
const knownWrongAttrs: Record<string, string> = {
  className: "class",
  classList: "class",
  htmlFor: "for",
  acceptCharset: "accept-charset",
  httpEquiv: "http-equiv",
  defaultValue: "value",
  defaultChecked: "checked",
  dangerouslySetInnerHTML: "$!{html}",
  key: "<for by>",
  ref: "<tag/ref>",
  "v-if": "<if>",
  "v-else": "<else>",
  "v-else-if": "<else if>",
  "v-for": "<for>",
  "v-show": "<if>",
  "v-model": "value:=state",
  "v-bind": "...attrs",
  "v-html": "$!{html}",
  "v-text": "${text}",
};

export function getWrongAttrSuggestion(name: string): string | undefined {
  const exact = knownWrongAttrs[name];
  if (exact) return exact;

  const colon = name.indexOf(":");
  if (colon > 0) {
    const rest = name.slice(colon + 1);
    switch (name.slice(0, colon)) {
      case "class":
        return `class={ ${rest}: condition }`;
      case "style":
        return `style={ ${rest}: value }`;
      case "on":
      case "v-on":
        return `on${rest.charAt(0).toUpperCase()}${rest.slice(1)}`;
      case "bind":
      case "v-model":
        return `${rest}:=state`;
      case "v-bind":
        return rest;
    }
  }
}

export function _call<T>(fn: (v: T) => unknown, v: T): T {
  fn(v);
  return v;
}

export function stringifyClassObject(name: string, value: unknown) {
  return value ? name : "";
}

export function stringifyStyleObject(name: string, value: unknown) {
  return value || value === 0 ? name + ":" + value : "";
}

// TODO: turn into normal function declaration when resolved: https://github.com/oxc-project/oxc/issues/17364?issue=rolldown%7Crolldown%7C7666
export const toDelimitedString = function toDelimitedString(
  val: unknown,
  delimiter: string,
  stringify: (n: string, v: unknown) => string | undefined,
): string {
  let str = "";
  let sep = "";
  let part: string | undefined;
  if (val) {
    if (typeof val !== "object") {
      str += val;
    } else if (Array.isArray(val)) {
      for (const v of val) {
        part = toDelimitedString(v, delimiter, stringify);
        if (part) {
          str += sep + part;
          sep = delimiter;
        }
      }
    } else {
      for (const name in val as Record<string, unknown>) {
        part = stringify(name, (val as Record<string, unknown>)[name]);
        if (part) {
          str += sep + part;
          sep = delimiter;
        }
      }
    }
  }
  return str;
};

export function isEventHandler(name: string): name is `on${string}` {
  return /^on[A-Z-]/.test(name);
}
export function getEventHandlerName(name: `on${string}`) {
  return name[2] === "-" ? name.slice(3) : name.slice(2).toLowerCase();
}

export function isVoid(value: unknown) {
  return value == null || value === false;
}

export function isNotVoid(value: unknown) {
  return value != null && value !== false;
}

export function normalizeDynamicRenderer<Renderer>(
  value: any,
): Renderer | string | undefined {
  if (value) {
    if (typeof value === "string") return value;
    const normalized = value.content || value.default || value;
    if (MARKO_DEBUG) {
      const isRenderer =
        (typeof normalized === "object" || typeof normalized === "function") &&
        RendererProp.Id in normalized;
      if (!isRenderer) {
        if (value.content) {
          throw new Error(
            `A dynamic tag must be a string tag name (like \`"div"\`) or a Marko template/component, but received an object whose \`content\` is not a template/component.`,
          );
        }
        if (typeof value !== "object" && typeof value !== "function") {
          throw new Error(
            `A dynamic tag must be a string tag name (like \`"div"\`) or a Marko template/component, but received a ${typeof value}.`,
          );
        }
      }
    }
    if (RendererProp.Id in normalized) {
      return normalized;
    }
  }
}

/*
  This opaque function decodes scope accessors that are encoded as integers in
  the range 0 <= n < 34657. Encoded numbers are decoded to a base-36 string
  where the first character is guaranteed to be a lowercase letter and
  subsequent characters are lowercase letters or numeric digits.

  It works by checking the input against 3 ranges, offsetting it by the number
  of base-36 outputs which are invalid identifiers and converting that value to
  a base-36 string:

      Range                       Offset                  Decoded
      ---------------------------------------------------------------
      [0, 26)                     10                      a ... z
      [ , 26*36 - 26)             10*36 - 26              a0 ... zz
      [ , 26*36*36 - 26*36 - 26)  10*36*36 - 26*36 - 26   a00 ... zzz
*/
export const decodeAccessor = (num: number): string =>
  (num + (num < 26 ? 10 : num < 962 ? 334 : 11998)).toString(36);
