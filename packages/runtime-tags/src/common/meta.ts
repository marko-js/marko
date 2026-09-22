export const DEFAULT_RUNTIME_ID = "M";
export const DEFAULT_RENDER_ID = "_";

// Runtime-owned register ids start with `_`: `encodeTemplateId` never emits
// it first, so they cannot collide with a template's optimized id.
export const DYNAMIC_TAG_SCRIPT_REGISTER_ID = MARKO_DEBUG
  ? "_dynamicTagScript"
  : "_d";

// A prefix for an id per tag accessor: `-` starts no template id and no other
// runtime id, so one char stays unique once the accessor follows it.
export const DYNAMIC_TAG_VAR_REGISTER_ID = MARKO_DEBUG ? "_dynamicTagVar" : "-";

export const PLACEHOLDER_DISMISS_REGISTER_ID = MARKO_DEBUG
  ? "_placeholderDismiss"
  : "_f";
// Rebuilds a registered content value from an in-band template.
export const CONTENT_REGISTER_ID = MARKO_DEBUG ? "_content" : "_c";
