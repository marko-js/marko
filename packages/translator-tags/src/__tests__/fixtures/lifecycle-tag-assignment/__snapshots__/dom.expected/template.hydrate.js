// size: 434 (min) 212 (brotli)

import * as t from "@marko/runtime-tags/dom";
import { init as n } from "@marko/runtime-tags/dom";
const o = t.state(4, (n, o) => t.data(n[1], o)),
  r = (t) => {
    const { 3: n } = t;
    return function () {
      this.cur = n;
    };
  },
  c = (t) => {
    const { 3: n } = t;
    return function () {
      o(t, this.cur), (this.cur = n);
    };
  },
  a = t.effect("a0", (n) => {
    t.lifecycle(n, 4, { onMount: r(n), onUpdate: c(n) }),
      t.on(
        n[2],
        "click",
        ((t) => {
          const { 3: n } = t;
          return function () {
            e(t, n + 1);
          };
        })(n),
      );
  }),
  e = t.state(3, (n, o) => {
    t.data(n[0], o), a(n);
  });
n();
