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

// Frame-scoped var resolving an index in the frame's bind table.
export const BIND_FRAME_VAR = MARKO_DEBUG ? "bind" : "b";

// A template's lazy ready-channel id (the client half of the translator's
// `getReadyId`; MARKO_DEBUG pairs with the compile's optimize flag).
export const toReadyId = (templateId: string) =>
  (MARKO_DEBUG ? "ready:" : "_") + templateId;

// Frame-scoped var delivering ready-channel patch data: an explicit call the
// patch-ready feature installs, so a frame never touches the live page's
// ready record directly (and a runtime without the feature rejects the frame).
export const READY_FRAME_VAR = MARKO_DEBUG ? "ready" : "y";
