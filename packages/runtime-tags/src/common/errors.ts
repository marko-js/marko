import {
  getControllableAttrError,
  getWrongAttrSuggestion,
  htmlAttrNameReg,
} from "./helpers";

const lowercaseEventHandlerReg = /^on[a-z]/;

export function assertValidAttrName(name: string, tagName: string) {
  if (htmlAttrNameReg.test(name)) {
    throw new Error(`Invalid attribute name: ${JSON.stringify(name)}`);
  }
  const suggestion = getWrongAttrSuggestion(name);
  if (suggestion) {
    throw new Error(
      `\`${name}\` is not a valid attribute, did you mean \`${suggestion}\`?`,
    );
  }
  const controllableError = getControllableAttrError(name, tagName);
  if (controllableError) {
    throw new Error(controllableError);
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

    if (attrs.checkedValue) {
      (exclusiveAttrs ||= []).push("checkedValue");

      if (attrs.checked) {
        exclusiveAttrs.push("checked");
      }
    } else if (attrs.checkedValueChange) {
      (exclusiveAttrs ||= []).push("checkedValueChange");
      if (attrs.checked) {
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

export function assertValidEventHandlerAttr(name: string, value: unknown) {
  if (
    value &&
    typeof value !== "string" &&
    lowercaseEventHandlerReg.test(name)
  ) {
    throw new Error(
      `The \`${name}\` attribute must be a string or a falsey value (\`null\`, \`undefined\`, \`false\`, \`0\`, …), but received type "${typeof value}". To attach an event listener, use the \`on${name[2].toUpperCase()}${name.slice(3)}\` event handler instead.`,
    );
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
