// size: 391 (min) 238 (brotli)

import {
  register as t,
  on as n,
  value as o,
  inLoopScope as c,
  queueSource as l,
  closure as i,
  intersection as r,
  attr as a,
  init as e,
} from "@marko/runtime-tags/dom";
const m = r(2, (t) => {
  const {
    _: { 1: n },
    3: o,
  } = t;
  a(t[0], "data-selected", n === o), a(t[0], "data-multiple", o % n == 0);
});
t("M0KirTnz", (t) =>
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
const s = o(1, null, c(i(1, null, void 0, m), 0));
e();
