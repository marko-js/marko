// size: 605 (min) 303 (brotli)

import * as t from "@marko/runtime-tags/dom";
import { init as e } from "@marko/runtime-tags/dom";
const o = t.closure(1, (e, o) => t.data(e[0], o)),
  n = t.register(
    "a0",
    t.createRenderer(
      "<span>The button was clicked <!> times.</span>",
      "Db%",
      void 0,
      () => [o],
    ),
  ),
  r = t.effect("a1", (e) =>
    t.on(
      e[0],
      "click",
      ((t) => {
        const {
          _: { 1: e },
        } = t;
        return function () {
          s(t._, e + 1);
        };
      })(e),
    ),
  ),
  i = t.closure(1, (e, o) => {
    t.data(e[1], o), r(e);
  }),
  a = t.register(
    "a2",
    t.createRenderer("<button> </button>", " D ", void 0, () => [i]),
  ),
  c = t.conditional(0),
  s = t.state(
    1,
    (t, e) => c(t, e < 3 ? a : n),
    () =>
      t.intersections([
        c,
        t.inConditionalScope(i, 0),
        t.inConditionalScope(o, 0),
      ]),
  );
e();
