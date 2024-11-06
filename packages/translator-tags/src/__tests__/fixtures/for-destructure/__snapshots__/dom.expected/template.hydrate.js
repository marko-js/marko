// size: 633 (min) 321 (brotli)

import * as t from "@marko/runtime-tags/dom";
import { init as e } from "@marko/runtime-tags/dom";
const a = t.value(5, (e, a) => t.data(e[1], a)),
  r = t.value(4, (e, a) => t.data(e[0], a)),
  i = t.value(3, (t, e) => {
    r(t, e.name), a(t, e.description);
  }),
  o = t.value(2, (t, e) => i(t, e[0])),
  n = t.register(
    "a0",
    t.createRenderer("<div><!>: <!></div>", "D%c%", void 0, void 0, () => o),
  ),
  c = t.loopOf(0, n),
  m = t.effect("a1", (e) => {
    t.on(
      e[1],
      "click",
      ((t) => {
        const { 3: e } = t;
        return function () {
          s(t, [
            ...e,
            { name: "JavaScript", description: "Java, but scriptier" },
          ]);
        };
      })(e),
    ),
      t.on(
        e[2],
        "click",
        ((t) => {
          const { 3: e } = t;
          return function () {
            s(t, e.slice(0, -1));
          };
        })(e),
      );
  }),
  s = t.state(3, (t, e) => {
    m(t), c(t, [e]);
  });
e();
