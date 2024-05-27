// size: 198 (min) 136 (brotli)

import {
  register as o,
  queueSource as t,
  value as m,
  data as r,
  init as i,
} from "@marko/runtime-tags/dom";
import s from "./test-log";
const e = m(3, (o, t) => r(o[0], t));
o("e", (o) => t(o, e, JSON.stringify(s))), i();
