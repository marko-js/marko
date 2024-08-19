// size: 448 (min) 229 (brotli)

import {
  register as t,
  lifecycle as n,
  on as o,
  queueSource as r,
  value as c,
  data as u,
  queueEffect as i,
  init as s,
} from "@marko/runtime-tags/dom";
const e = c(4, (t, n) => u(t[1], n)),
  m = (t) => {
    const { 3: n } = t;
    return function () {
      this.cur = n;
    };
  },
  a = (t) => {
    const { 3: n } = t;
    return function () {
      r(t, e, this.cur), (this.cur = n);
    };
  },
  f = t("a0", (t) => {
    n(t, 4, { onMount: m(t), onUpdate: a(t) }),
      o(
        t[2],
        "click",
        ((t) => {
          const { 3: n } = t;
          return function () {
            r(t, h, n + 1);
          };
        })(t),
      );
  }),
  h = c(3, (t, n) => {
    u(t[0], n), i(t, f);
  });
s();
