import { compat } from "@marko/runtime-tags/debug/html";

import { p } from "./runtime-html.js";
export const s = p(compat);
export const f = (id, fn, component) =>
  compat.registerClassFunction(id, fn, component.id);
