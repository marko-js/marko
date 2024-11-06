// size: 471 (min) 261 (brotli)

import * as t from "@marko/runtime-tags/dom";
import { init as e } from "@marko/runtime-tags/dom";
const n = t.effect("a0", (e) => {
    (e._[1].innerHTML += "\nmounted"),
      (t.getAbortSignal(e, 0).onabort = () => {
        e._[1].innerHTML += "\ndestroyed";
      });
  }),
  r = (e) => {
    t.resetAbortSignal(e, 0), n(e);
  },
  o = t.register("a1", t.createRenderer("<div>child</div>", "", r)),
  i = t.conditional(2),
  a = t.effect("a2", (e) =>
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
    a(t), i(t, e ? o : null);
  });
e();
