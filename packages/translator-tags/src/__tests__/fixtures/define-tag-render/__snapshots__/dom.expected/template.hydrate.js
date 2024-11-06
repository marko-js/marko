// size: 506 (min) 293 (brotli)

import * as t from "@marko/runtime-tags/dom";
import { init as a } from "@marko/runtime-tags/dom";
const e = t.effect("a0", (a) =>
    t.on(
      a[2],
      "click",
      ((t) => {
        const { 7: a } = t;
        return function () {
          r(t, a + 1);
        };
      })(a),
    ),
  ),
  r = t.state(7, (a, r) => {
    t.data(a[1], r), t.data(a[3], r), e(a);
  }),
  o = t.value(6, (a, e) => t.data(a[0], e)),
  n = t.value(5, (t, a) => o(t, a.name)),
  i = t.value(4, (t, a) => n(t, a[0])),
  m = (t) => {
    r(t, 1);
  };
t.register(
  "a1",
  t.createRendererWithOwner(
    "<div>Hello <!> <!></div><button> </button>",
    "Db%c%l D ",
    m,
    void 0,
    () => i,
  ),
),
  t.dynamicTagAttrs(0),
  a();
