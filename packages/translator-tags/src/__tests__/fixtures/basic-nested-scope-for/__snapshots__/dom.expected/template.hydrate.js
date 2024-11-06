// size: 380 (min) 225 (brotli)

import {
  effect as t,
  on as n,
  state as o,
  inLoopScope as c,
  closure as l,
  intersection as a,
  attr as e,
  init as i,
} from "@marko/runtime-tags/dom";
const m = a(2, (t) => {
  const {
    _: { 1: n },
    3: o,
  } = t;
  e(t[0], "data-selected", n === o), e(t[0], "data-multiple", o % n == 0);
});
t("a0", (t) =>
  n(
    t[0],
    "click",
    ((t) => {
      const { 3: n } = t;
      return function () {
        s(t._, n);
      };
    })(t),
  ),
);
const r = l(1, null, void 0, () => m),
  s = o(1, null, () => c(r, 0));
i();
