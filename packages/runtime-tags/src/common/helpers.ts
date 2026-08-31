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
  if (Object.hasOwn(knownWrongAttrs, name)) return knownWrongAttrs[name];

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

const warnedStyleKeys = MARKO_DEBUG ? new Set<string>() : undefined;
export function stringifyStyleObject(name: string, value: unknown) {
  if (
    MARKO_DEBUG &&
    /[A-Z]/.test(name) &&
    !name.includes("-") &&
    !warnedStyleKeys!.has(name)
  ) {
    // Runtime counterpart to the compile-time check, for dynamic style objects.
    warnedStyleKeys!.add(name);
    console.warn(
      `\`${name}\` is not a CSS property name; \`style\` object keys are written verbatim, so it renders as invalid CSS. Use \`${name
        .replace(/[A-Z]/g, (m) => "-" + m.toLowerCase())
        .replace(/^ms-/, "-ms-")}\`.`,
    );
  }
  // `NaN`/`0n` fail the falsiness check below (only numeric 0 is
  // special-cased), silently dropping the whole declaration.
  if (
    MARKO_DEBUG &&
    (value !== value || (typeof value === "bigint" && !value))
  ) {
    console.warn(
      `The \`${name}\` style value \`${value !== value ? "NaN" : "0n"}\` drops the declaration; convert it to a string or number to render it.`,
    );
  }
  // Escape `;`/`\` in name and value so neither can inject another declaration
  // (SSR); other chars aren't structural in a style attribute. `width:0` renders.
  return value || value === 0
    ? escapeStyleAttr(name) + ":" + escapeStyleAttr(value + "")
    : "";
}

const unsafeStyleAttrReg = /[\\;]/g;
const replaceUnsafeStyleAttr = (c: string) => (c === ";" ? "\\3B " : "\\\\");
function escapeStyleAttr(str: string) {
  return unsafeStyleAttrReg.test(str)
    ? str.replace(unsafeStyleAttrReg, replaceUnsafeStyleAttr)
    : str;
}

export function escapeStyleValue(str: string) {
  let closers = "";
  // `;` and `{` are hex escaped so escaped values never contain them raw, which
  // `_style_rule_item` relies on: a raw `{` opens a rule and a raw `;` ends a declaration.
  const result = str.replace(/[\\"'{};<>]|\/(?=\*)/g, (c) =>
    c === "<" ? "\\3C " : c === ";" ? "\\3B " : c === "{" ? "\\7B " : "\\" + c,
  );
  for (const c of result) {
    if (c === "(") closers = ")" + closers;
    else if (c === "[") closers = "]" + closers;
    else if (c === closers[0]) closers = closers.slice(1);
  }
  return result + closers;
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

// The runtime lowercases event names, but the types accept only the exact DOM
// camelCase spelling (eg `onKeyDown`) — deliberate; type-check flags the rest.
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

export function isPromise(value: unknown): value is Promise<unknown> {
  return (
    value != null && typeof (value as Promise<unknown>).then === "function"
  );
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
        // Any other truthy non-renderer (a bare object/function or a non-renderer
        // `.default`) renders body-only by design, e.g. `<${navigator}>x</>`; don't throw.
      }
    }
    if (RendererProp.Id in normalized) {
      return normalized;
    }
  }
}

/*
  This opaque function decodes scope accessors that are encoded as integers in
  the range 0 <= n <= 34657. Encoded numbers are decoded to a base-36 string
  where the first character is guaranteed to be a lowercase letter and
  subsequent characters are lowercase letters or numeric digits.

  It works by checking the input against 3 ranges, offsetting it by the number
  of base-36 outputs which are invalid identifiers and converting that value to
  a base-36 string:

      Range                       Offset                  Decoded
      ---------------------------------------------------------------
      [0, 26)                     10                      a ... z
      [ , 26 + 26*36)             10*36 - 26              a0 ... zz
      [ , 26 + 26*36 + 26*36*36)  10*36*36 - 26*36 - 26   a00 ... zzz
*/
export const decodeAccessor = (num: number): string =>
  (num + (num < 26 ? 10 : num < 962 ? 334 : 11998)).toString(36);

// Branch (control flow) support latch. A `let` written only by
// `withBranches` folds away with it, dropping guarded branch handling from
// bundles without branches; an object property would defeat that analysis.
export let branchesEnabled: undefined | 1;

export function withBranches<T>(runtime?: T) {
  branchesEnabled = 1;
  return runtime as T;
}

// Dynamic html support latch, same idea: only `_html` writes it, so resume's
// html range handling folds out of bundles without unescaped placeholders.
export let dynamicHtmlEnabled: undefined | 1;

export function withDynamicHtml<T>(runtime: T) {
  dynamicHtmlEnabled = 1;
  return runtime;
}
