export const DEFAULT_RUNTIME_ID = "M";
export const DEFAULT_RENDER_ID = "_";

export const DYNAMIC_TAG_SCRIPT_REGISTER_ID = MARKO_DEBUG
  ? "_dynamicTagScript"
  : "d";

export const DYNAMIC_TAG_VAR_REGISTER_ID = MARKO_DEBUG ? "_dynamicTagVar" : "e";

// Frame-scoped var resolving a patch frame's bind-deposit references.
export const BIND_DEPOSIT_FRAME_VAR = MARKO_DEBUG ? "bindDeposit" : "b";
