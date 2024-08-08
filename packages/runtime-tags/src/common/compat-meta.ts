const prefix = MARKO_DEBUG ? "$compat_" : "$C_";
export const RENDERER_REGISTER_ID = prefix + (MARKO_DEBUG ? "renderer" : "r");
export const SET_SCOPE_REGISTER_ID = prefix + (MARKO_DEBUG ? "setScope" : "s");
