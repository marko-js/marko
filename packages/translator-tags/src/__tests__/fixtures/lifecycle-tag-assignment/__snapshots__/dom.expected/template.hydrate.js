// size: 468 (min) 231 (brotli)

import {
  register as t,
  queueSource as n,
  value as o,
  data as r,
  lifecycle as c,
  on as u,
  queueEffect as i,
  init as s,
} from "@marko/runtime-tags/dom";
const a = t("a0", (t) => {
    const { 3: n } = t;
    return function () {
      this.cur = n;
    };
  }),
  e = t("a1", (t) => {
    const { 3: o } = t;
    return function () {
      n(t, m, this.cur), (this.cur = o);
    };
  }),
  m = o(4, (t, n) => r(t[1], n)),
  f = t("a3", (t) => {
    c(t, 4, { onMount: a(t), onUpdate: e(t) }),
      u(
        t[2],
        "click",
        ((t) => {
          const { 3: o } = t;
          return function () {
            n(t, h, o + 1);
          };
        })(t),
      );
  }),
  h = o(3, (t, n) => {
    r(t[0], n), i(t, f);
  });
s();
