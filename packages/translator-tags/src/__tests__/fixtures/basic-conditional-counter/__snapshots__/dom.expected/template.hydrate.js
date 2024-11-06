// size: 528 (min) 262 (brotli)

import * as t from "@marko/runtime-tags/dom";
import { init as n } from "@marko/runtime-tags/dom";
const o = t.closure(4, (n, o) => t.data(n[0], o)),
  e = t.register(
    "a0",
    t.createRenderer("<span> </span>", "D ", void 0, () => [o]),
  ),
  r = t.conditional(2, 0),
  a = t.effect("a1", (n) =>
    t.on(
      n[0],
      "click",
      ((t) => {
        const { 4: n } = t;
        return function () {
          c(t, n + 1);
        };
      })(n),
    ),
  ),
  c = t.state(
    4,
    (t, n) => a(t),
    () => t.inConditionalScope(o, 2),
  ),
  i = t.effect("a2", (n) =>
    t.on(
      n[1],
      "click",
      ((t) => {
        const { 3: n } = t;
        return function () {
          s(t, !n);
        };
      })(n),
    ),
  ),
  s = t.state(
    3,
    (t, n) => {
      i(t), r(t, n ? e : null);
    },
    () => r,
  );
n();
