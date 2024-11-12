// size: 488 (min) 250 (brotli)

import * as a from "@marko/runtime-tags/dom";
import { init as e } from "@marko/runtime-tags/dom";
const n = (e) => {
    a.data(e[0], e.$global.x);
  },
  t = a.register(
    "a0",
    a.createRenderer("<span class=hidden> </span>", "D ", n),
  ),
  r = (e) => {
    a.data(e[0], e.$global.x);
  },
  o = a.register("a1", a.createRenderer("<span> </span>", "D ", r)),
  s = a.conditional(1, 0),
  i = a.conditional(0, 0),
  l = a.effect("a2", (e) =>
    a.on(
      e[2],
      "click",
      ((a) => {
        const { 3: e } = a;
        return function () {
          c(a, !e);
        };
      })(e),
    ),
  ),
  c = a.state(3, (a, e) => {
    l(a), i(a, e ? o : null), s(a, e ? null : t);
  });
e();
