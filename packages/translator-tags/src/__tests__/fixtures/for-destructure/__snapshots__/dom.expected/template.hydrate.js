// size: 640 (min) 306 (brotli)

import * as t from "@marko/runtime-tags/dom";
import { init as e } from "@marko/runtime-tags/dom";
const a = t.value(5, (e, a) => t.data(e[1], a)),
  i = t.value(4, (e, a) => t.data(e[0], a)),
  o = t.value(3, (t, e) => {
    i(t, e.name), a(t, e.description);
  }),
  r = t.value(2, (t, e) => o(t, e[0])),
  n = t.register(
    "a0",
    t.createRenderer(
      "<div><!>: <!></div>",
      "D%c%",
      void 0,
      void 0,
      void 0,
      () => r,
    ),
  ),
  c = t.loopOf(0, n),
  d = t.effect("a1", (e) => {
    t.on(
      e[1],
      "click",
      ((t) => {
        const { 3: e } = t;
        return function () {
          m(t, [
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
            m(t, e.slice(0, -1));
          };
        })(e),
      );
  }),
  m = t.state(3, (t, e) => {
    d(t), c(t, [e]);
  });
e();
