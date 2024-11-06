// size: 513 (min) 293 (brotli)

import * as t from "@marko/runtime-tags/dom";
import { init as a } from "@marko/runtime-tags/dom";
const e = t.effect("a0", (a) =>
    t.on(
      a[2],
      "click",
      ((t) => {
        const { 7: a } = t;
        return function () {
          o(t, a + 1);
        };
      })(a),
    ),
  ),
  o = t.state(7, (a, o) => {
    t.data(a[1], o), t.data(a[3], o), e(a);
  }),
  r = t.value(6, (a, e) => t.data(a[0], e)),
  n = t.value(5, (t, a) => r(t, a.name)),
  i = t.value(4, (t, a) => n(t, a[0])),
  m = (t) => {
    o(t, 1);
  };
t.register(
  "a1",
  t.createRendererWithOwner(
    "<div>Hello <!> <!></div><button> </button>",
    "Db%c%l D ",
    m,
    void 0,
    void 0,
    () => i,
  ),
),
  t.dynamicTagAttrs(0),
  a();
