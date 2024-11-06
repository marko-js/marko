// size: 577 (min) 303 (brotli)

import * as t from "@marko/runtime-tags/dom";
import { init as e } from "@marko/runtime-tags/dom";
const r = t.value(2, (e, r) => t.data(e[0], r)),
  o = t.value(1, (t, e) => r(t, e[0])),
  n = t.register(
    "a0",
    t.createRenderer("<li> </li>", "D ", void 0, void 0, () => o),
  ),
  a = t.loopOf(0, n),
  c = t.effect("a1", (e) =>
    t.on(
      e[2],
      "click",
      ((t) => {
        const { 4: e } = t;
        return function () {
          i(t, [].concat(e).reverse());
        };
      })(e),
    ),
  ),
  i = t.state(4, (t, e) => {
    c(t),
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
  m = t.state(3, (e, r) => {
    t.attr(e[0], "hidden", !r), f(e);
  });
e();
