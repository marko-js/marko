// size: 385 (min) 226 (brotli)

import {
  register as t,
  on as n,
  value as o,
  inLoopScope as c,
  queueSource as l,
  closure as a,
  intersection as e,
  attr as i,
  init as m,
} from "@marko/runtime-tags/dom";
const r = e(2, (t) => {
  const {
    _: { 1: n },
    3: o,
  } = t;
  i(t[0], "data-selected", n === o), i(t[0], "data-multiple", o % n == 0);
});
t("a0", (t) =>
  n(
    t[0],
    "click",
    ((t) => {
      const { 3: n } = t;
      return function () {
        l(t._, s, n);
      };
    })(t),
  ),
);
const s = o(1, null, c(a(1, null, void 0, r), 0));
m();
