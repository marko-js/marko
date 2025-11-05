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
