// size: 198 (min) 137 (brotli)

import {
  register as o,
  queueSource as t,
  value as m,
  data as r,
  init as i,
} from "@marko/runtime-tags/dom";
import s from "./test-log";
const f = m(2, (o, t) => r(o[0], t));
o("c", (o) => t(o, f, JSON.stringify(s))), i();
