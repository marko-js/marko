// size: 486 (min) 268 (brotli)

import {
  register as n,
  queueSource as t,
  value as o,
  data as r,
  lifecycle as c,
  on as u,
  queueEffect as i,
  init as s,
} from "@marko/runtime-tags/dom";
const e = n("LPO3Dfve", (n) => {
    const { 3: t } = n;
    return function () {
      this.cur = t;
    };
  }),
  f = n("aZfvFuwW", (n) => {
    const { 3: o } = n;
    return function () {
      t(n, m, this.cur), (this.cur = o);
    };
  }),
  m = o(4, (n, t) => r(n[1], t)),
  a = n("nJi9FlJX", (n) => {
    c(n, 4, { onMount: e(n), onUpdate: f(n) }),
      u(
        n[2],
        "click",
        ((n) => {
          const { 3: o } = n;
          return function () {
            t(n, h, o + 1);
          };
        })(n),
      );
  }),
  h = o(3, (n, t) => {
    r(n[0], t), i(n, a);
  });
s();
