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
