export const DEFAULT_RUNTIME_ID = "M";
export const DEFAULT_RENDER_ID = "_";

export const DYNAMIC_TAG_SCRIPT_REGISTER_ID = MARKO_DEBUG
  ? "_dynamicTagScript"
  : "d";

export const DYNAMIC_TAG_VAR_REGISTER_ID = MARKO_DEBUG ? "_dynamicTagVar" : "e";

// Frame-scoped var resolving an index in the frame's bind table.
export const BIND_FRAME_VAR = MARKO_DEBUG ? "bind" : "b";
