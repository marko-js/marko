// size: 612 (min) 331 (brotli)

import * as t from "@marko/runtime-tags/dom";
import { init as a } from "@marko/runtime-tags/dom";
const e = t.dynamicTagAttrs(2),
  n = t.intersection(
    3,
    (t) => {
      const { 4: a, 5: n } = t;
      e(t, () => ({ count: n, name: a.name }));
    },
    () => e,
  ),
  o = t.effect("a0", (a) =>
    t.on(
      a[0],
      "click",
      ((t) => {
        const { 5: a } = t;
        return function () {
          r(t, a + 1);
        };
      })(a),
    ),
  ),
  r = t.state(
    5,
    (a, e) => {
      t.data(a[1], e), o(a);
    },
    () => n,
  ),
  i = t.value(5, (a, e) => t.data(a[0], e)),
  m = t.value(4, (a, e) => t.data(a[1], e)),
  c = t.value(3, (t, a) => {
    m(t, a.count), i(t, a.name);
  }),
  d = t.value(2, (t, a) => c(t, a[0]));
t.register(
  "b0",
  t.createRendererWithOwner(
    "<div>Count (<!>): <!></div>",
    "Db%c%",
    void 0,
    void 0,
    () => d,
  ),
),
  a();
