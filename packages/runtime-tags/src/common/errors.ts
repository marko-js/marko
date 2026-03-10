import { AccessorProp, type Scope } from "./types";

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

export function _assert_init(scope: Scope, accessor: string) {
  if (MARKO_DEBUG && (scope[AccessorProp.Creating] || !(accessor in scope))) {
    try {
      // @ts-expect-error create a browser uninitialized variable error, and then update the message.
      __UNINITIALIZED__;
      const __UNINITIALIZED__ = 1;
    } catch (err: any) {
      err.message = err.message.replaceAll("__UNINITIALIZED__", accessor);
      throw err;
    }
    throw new ReferenceError(
      `Cannot access "${accessor}" before initialization.`,
    );
  }
  return scope[accessor];
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
