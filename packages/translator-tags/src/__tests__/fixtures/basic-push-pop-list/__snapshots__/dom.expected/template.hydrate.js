// size: 581 (min) 307 (brotli)

import * as t from "@marko/runtime-tags/dom";
import { init as e } from "@marko/runtime-tags/dom";
const o = t.value(2, (e, o) => t.data(e[0], o)),
  r = t.value(1, (t, e) => o(t, e[0])),
  n = t.register(
    "a0",
    t.createRenderer(" ", " ", void 0, void 0, void 0, () => r),
  ),
  a = t.effect("a1", (e) =>
    t.on(
      e[1],
      "click",
      ((t) => {
        const { 3: e, 4: o } = t;
        return function () {
          const r = e + 1;
          f(t, r), m(t, [...o, r]);
        };
      })(e),
    ),
  ),
  c = t.intersection(2, (t) => {
    a(t);
  }),
  i = t.loopOf(0, n),
  s = t.effect("a2", (e) =>
    t.on(
      e[2],
      "click",
      ((t) => {
        const { 4: e } = t;
        return function () {
          m(t, e.slice(0, -1));
        };
      })(e),
    ),
  ),
  m = t.state(
    4,
    (t, e) => {
      s(t), i(t, [e]);
    },
    () => c,
  ),
  f = t.state(3, 0, () => c);
e();
