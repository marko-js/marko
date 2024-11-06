// size: 427 (min) 222 (brotli)

import {
  register as t,
  lifecycle as n,
  on as o,
  state as r,
  data as c,
  queueEffect as u,
  init as i,
} from "@marko/runtime-tags/dom";
const s = r(4, (t, n) => c(t[1], n)),
  e = (t) => {
    const { 3: n } = t;
    return function () {
      this.cur = n;
    };
  },
  m = (t) => {
    const { 3: n } = t;
    return function () {
      s(t, this.cur), (this.cur = n);
    };
  },
  a = t("a0", (t) => {
    n(t, 4, { onMount: e(t), onUpdate: m(t) }),
      o(
        t[2],
        "click",
        ((t) => {
          const { 3: n } = t;
          return function () {
            f(t, n + 1);
          };
        })(t),
      );
  }),
  f = r(3, (t, n) => {
    c(t[0], n), u(t, a);
  });
i();
