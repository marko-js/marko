// size: 199 (min) 148 (brotli)

import {
  register as o,
  queueSource as t,
  value as m,
  data as r,
  init as i,
} from "@marko/runtime-tags/dom";
import s from "./test-log";
const a = m(3, (o, t) => r(o[0], t));
o("a3", (o) => t(o, a, JSON.stringify(s))), i();
