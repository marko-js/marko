// size: 491 (min) 270 (brotli)

import * as n from "@marko/runtime-tags/dom";
import { init as t } from "@marko/runtime-tags/dom";
const e = n.effect("a0", (t) => {
    (t._[1].innerHTML += "\nmounted"),
      (n.getAbortSignal(t, 0).onabort = () => {
        t._[1].innerHTML += "\ndestroyed";
      });
  }),
  r = (t) => {
    n.resetAbortSignal(t, 0), e(t);
  },
  o = n.register(
    "a1",
    n.createRenderer("<div>a</div><span>b</span><p>c</p>", "", r),
  ),
  a = n.conditional(2, 0),
  i = n.effect("a2", (t) =>
    n.on(
      t[0],
      "click",
      ((n) => {
        const { 3: t } = n;
        return function () {
          m(n, !t);
        };
      })(t),
    ),
  ),
  m = n.state(3, (n, t) => {
    i(n), a(n, t ? o : null);
  });
t();
