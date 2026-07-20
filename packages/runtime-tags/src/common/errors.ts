import { getWrongAttrSuggestion, htmlAttrNameReg } from "./helpers";

const lowercaseEventHandlerReg = /^on[a-z]/;

export function assertValidAttrValue(name: string, value: unknown) {
  if (
    value &&
    typeof value !== "string" &&
    lowercaseEventHandlerReg.test(name)
  ) {
    throw new Error(
      `The \`${name}\` attribute must be a string or a falsey value (\`null\`, \`undefined\`, \`false\`, \`0\`, …), but received type "${typeof value}". To attach an event listener, use the \`on${name[2].toUpperCase()}${name.slice(3)}\` event handler instead.`,
    );
  }

  if (typeof value === "function") {
    // Consumed handlers (events, applied controllable change handlers,
    // content) never reach the attribute writers, so a function here would
    // render as its source code.
    throw new Error(
      `The \`${name}\` attribute cannot be a function.${
        /Change$/.test(name)
          ? " A change handler is only used when its matching controllable attribute combination applies."
          : ""
      }`,
    );
  }

  const unrenderable = describeUnrenderable(value);
  if (unrenderable) {
    throw new Error(`The \`${name}\` attribute cannot be ${unrenderable}.`);
  }
}

export function assertValidTextValue(value: unknown) {
  const unrenderable = describeUnrenderable(value);
  if (unrenderable) {
    throw new Error(`Text content cannot be ${unrenderable}.`);
  }
}

function describeUnrenderable(value: unknown) {
  if (typeof value === "symbol") {
    return "a symbol";
  }

  if (typeof value === "object" && value !== null) {
    let stringified;
    try {
      stringified = `${value}`;
    } catch {
      stringified = "[object Object]";
    }
    if (/^\[object \w+\]$/.test(stringified)) {
      return stringified === "[object Promise]"
        ? "a promise (use the `<await>` tag to render its resolved value)"
        : stringified === "[object Object]"
          ? "a plain object (it would render as `[object Object]`)"
          : `a value that renders as \`${stringified}\``;
    }
  }
}

export function assertValidLoopKey(key: unknown, seenKeys?: Set<unknown>) {
  if (typeof key !== "string" && typeof key !== "number") {
    throw new Error(
      `A \`<for>\` tag's \`by\` attribute must return a string or number for each item, but received ${key === null ? "null" : `type "${typeof key}"`}.`,
    );
  }

  if (seenKeys) {
    if (seenKeys.has(key)) {
      throw new Error(
        `A \`<for>\` tag's \`by\` attribute must return a unique value for each item, but \`${key}\` was used more than once.`,
      );
    }
    seenKeys.add(key);
  }
}

export function assertValidList(value: unknown) {
  if (
    value &&
    typeof (value as Iterable<unknown>)[Symbol.iterator] !== "function"
  ) {
    throw new Error(
      `A \`<for>\` tag's \`of\` attribute must be an iterable, such as an array, but received ${describeForValue(value)}.`,
    );
  }
}

export function assertValidRangeBound(name: string, value: unknown) {
  // `isFinite` coerces like the range arithmetic, so a debug throw matches production.
  if (!isFinite(value as number)) {
    throw new Error(
      `A \`<for>\` tag's \`${name}\` attribute must be a finite number, but received ${describeForValue(value)}.`,
    );
  }
}

function describeForValue(value: unknown) {
  return typeof value === "number" || typeof value === "bigint"
    ? `\`${value}\``
    : value === null
      ? "null"
      : `type "${typeof value}"`;
}

export function assertValidAttrName(name: string) {
  if (htmlAttrNameReg.test(name)) {
    throw new Error(`Invalid attribute name: ${JSON.stringify(name)}`);
  }
  const suggestion = getWrongAttrSuggestion(name);
  if (suggestion) {
    throw new Error(
      `\`${name}\` is not a valid attribute, did you mean \`${suggestion}\`?`,
    );
  }
}

export function _el_read_error() {
  if (MARKO_DEBUG) {
    throw new Error(
      "Element references can only be read in scripts and event handlers.",
    );
  }
}

export function _hoist_read_error() {
  if (MARKO_DEBUG) {
    throw new Error(
      "Hoisted values can only be read in scripts and event handlers.",
    );
  }
}

export function _assert_hoist(value: unknown) {
  if (MARKO_DEBUG && typeof value !== "function") {
    throw new Error(
      `Hoisted values must be functions, received type "${typeof value}".`,
    );
  }
}

export function assertExclusiveAttrs(
  attrs: Record<string, unknown> | undefined,
  onError = throwErr,
) {
  if (attrs) {
    let exclusiveAttrs: undefined | string[];
    if (attrs.checkedChange) {
      (exclusiveAttrs ||= []).push("checkedChange");
    }

    if ("checkedValue" in attrs) {
      (exclusiveAttrs ||= []).push("checkedValue");

      if ("checked" in attrs) {
        exclusiveAttrs.push("checked");
      }
    } else if (attrs.checkedValueChange) {
      (exclusiveAttrs ||= []).push("checkedValueChange");
      if ("checked" in attrs) {
        exclusiveAttrs.push("checked");
      }
    }

    if (attrs.valueChange) {
      (exclusiveAttrs ||= []).push("valueChange");
    }

    if (exclusiveAttrs && exclusiveAttrs.length > 1) {
      onError(
        `The attributes ${joinWithAnd(exclusiveAttrs)} are mutually exclusive.`,
      );
    }
  }
}

export function assertHandlerIsFunction(name: string, value: unknown) {
  if (value && typeof value !== "function") {
    throw new Error(
      `The \`${name}\` handler must be a function or a falsey value (\`null\`, \`undefined\`, \`false\`, \`0\`, …), but received type "${typeof value}".`,
    );
  }
}

export function assertValidTagName(tagName: string) {
  if (!/^[a-z][a-z0-9._-]*$/i.test(tagName)) {
    throw new Error(
      `Invalid tag name: "${tagName}". Tag names must start with a letter and contain only letters, numbers, periods, hyphens, and underscores.`,
    );
  }
}

function throwErr(msg: string) {
  throw new Error(msg);
}

function joinWithAnd(a: string[]) {
  switch (a.length) {
    case 0:
      return "";
    case 1:
      return a[0];
    case 2:
      return `${a[0]} and ${a[1]}`;
    default:
      return `${a.slice(0, -1).join(", ")}, and ${a[a.length - 1]}`;
  }
}
