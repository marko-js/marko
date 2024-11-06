// size: 406 (min) 213 (brotli)

import {
  effect as t,
  lifecycle as n,
  on as o,
  state as r,
  data as c,
  init as u,
} from "@marko/runtime-tags/dom";
const i = r(4, (t, n) => c(t[1], n)),
  s = (t) => {
    const { 3: n } = t;
    return function () {
      this.cur = n;
    };
  },
  e = (t) => {
    const { 3: n } = t;
    return function () {
      i(t, this.cur), (this.cur = n);
    };
  },
  m = t("a0", (t) => {
    n(t, 4, { onMount: s(t), onUpdate: e(t) }),
      o(
        t[2],
        "click",
        ((t) => {
          const { 3: n } = t;
          return function () {
            a(t, n + 1);
          };
        })(t),
      );
  }),
  a = r(3, (t, n) => {
    c(t[0], n), m(t);
  });
u();
