import { compat } from "@marko/runtime-tags/debug/dom";

import { f as resumeClassFn, p } from "./runtime-dom.js";
p(compat);
export const f = (id, factory) => resumeClassFn(compat, id, factory);
