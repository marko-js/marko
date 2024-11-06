// size: 618 (min) 326 (brotli)

import * as t from "@marko/runtime-tags/dom";
import { init as e } from "@marko/runtime-tags/dom";
const r = t.effect("a0", (e) => {
    const { 1: r } = e;
    r.write("mounted"),
      (t.getAbortSignal(e, 0).onabort = ((t) => {
        const { 1: e } = t;
        return () => {
          e.write("destroyed");
        };
      })(e));
  }),
  n = t.value(1, (e, n) => {
    t.resetAbortSignal(e, 0), r(e);
  }),
  o = t.register(
    "b0",
    (t) =>
      function (e) {
        t._[1].innerHTML = e;
      },
  ),
  i = (t) => {
    t[0], n(t[0], { write: o(t) });
  },
  a = t.register(
    "b1",
    t.createRenderer("<div>a</div><span>b</span><p>c</p>", "/d&", i),
  ),
  s = t.conditional(2),
  c = t.effect("b2", (e) =>
    t.on(
      e[0],
      "click",
      ((t) => {
        const { 3: e } = t;
        return function () {
          m(t, !e);
        };
      })(e),
    ),
  ),
  m = t.state(3, (t, e) => {
    c(t), s(t, e ? a : null);
  });
e();
