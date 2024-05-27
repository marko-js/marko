// size: 465 (min) 230 (brotli)

import {
  register as t,
  queueSource as n,
  value as o,
  data as c,
  lifecycle as r,
  on as u,
  queueEffect as i,
  init as s,
} from "@marko/runtime-tags/dom";
const e = t("b", (t) => {
    const { 3: n } = t;
    return function () {
      this.cur = n;
    };
  }),
  m = t("c", (t) => {
    const { 3: o } = t;
    return function () {
      n(t, f, this.cur), (this.cur = o);
    };
  }),
  f = o(4, (t, n) => c(t[1], n)),
  a = t("e", (t) => {
    r(t, 4, { onMount: e(t), onUpdate: m(t) }),
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
    c(t[0], n), i(t, a);
  });
s();
