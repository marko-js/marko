// size: 180 (min) 142 (brotli)

import {
  register as o,
  state as t,
  data as m,
  init as r,
} from "@marko/runtime-tags/dom";
import i from "./test-log";
const s = t(2, (o, t) => m(o[0], t));
o("a0", (o) => s(o, JSON.stringify(i))), r();
