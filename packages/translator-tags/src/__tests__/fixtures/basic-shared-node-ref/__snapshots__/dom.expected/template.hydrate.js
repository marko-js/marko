// size: 584 (min) 302 (brotli)

import * as t from "@marko/runtime-tags/dom";
import { init as e } from "@marko/runtime-tags/dom";
const o = t.value(2, (e, o) => t.data(e[0], o)),
  r = t.value(1, (t, e) => o(t, e[0])),
  n = t.register(
    "a0",
    t.createRenderer("<li> </li>", "D ", void 0, void 0, void 0, () => r),
  ),
  a = t.loopOf(0, n),
  i = t.effect("a1", (e) =>
    t.on(
      e[2],
      "click",
      ((t) => {
        const { 4: e } = t;
        return function () {
          c(t, [].concat(e).reverse());
        };
      })(e),
    ),
  ),
  c = t.state(4, (t, e) => {
    i(t),
      a(t, [
        e,
        function (t) {
          return t;
        },
      ]);
  }),
  f = t.effect("a2", (e) =>
    t.on(
      e[1],
      "click",
      ((t) => {
        const { 3: e } = t;
        return function () {
          m(t, !e);
        };
      })(e),
    ),
  ),
  m = t.state(3, (e, o) => {
    t.attr(e[0], "hidden", !o), f(e);
  });
e();
