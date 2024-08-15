// size: 244 (min) 166 (brotli)

import {
  register as o,
  queueSource as t,
  value as r,
  data as m,
  init as n,
} from "@marko/runtime-tags/dom";
import i from "./test-log";
o(
  "a0",
  (o) =>
    function () {
      i.const += "rendered";
    },
);
const e = r(3, (o, t) => m(o[0], t));
o("a1", (o) => t(o, e, JSON.stringify(i))), n();
