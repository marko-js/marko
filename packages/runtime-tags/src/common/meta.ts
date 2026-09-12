export const DEFAULT_RUNTIME_ID = "M";
export const DEFAULT_RENDER_ID = "_";

// Runtime-owned register ids start with `_`: `encodeTemplateId` never emits
// it first, so they cannot collide with a template's optimized id.
export const DYNAMIC_TAG_SCRIPT_REGISTER_ID = MARKO_DEBUG
  ? "_dynamicTagScript"
  : "_d";

export const DYNAMIC_TAG_VAR_REGISTER_ID = MARKO_DEBUG
  ? "_dynamicTagVar"
  : "_e";

export const PLACEHOLDER_DISMISS_REGISTER_ID = MARKO_DEBUG
  ? "_placeholderDismiss"
  : "_f";
// Rebuilds a registered content value from an in-band template.
export const CONTENT_REGISTER_ID = MARKO_DEBUG ? "_content" : "_c";

// Flush-scoped var resolving an index in the flush's bind table.
export const BIND_FLUSH_VAR = MARKO_DEBUG ? "bind" : "b";
// Flush-scoped var holding the page render, where ready batches land.
export const RENDER_FLUSH_VAR = MARKO_DEBUG ? "render" : "R";
