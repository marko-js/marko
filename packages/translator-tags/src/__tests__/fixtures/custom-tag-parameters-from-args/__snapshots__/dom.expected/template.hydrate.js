// size: 690 (min) 338 (brotli)

import * as t from "@marko/runtime-tags/dom";
import { init as e } from "@marko/runtime-tags/dom";
const a = t.dynamicTagAttrs(3, void 0, 1),
  i = t.intersection(
    3,
    (t) => {
      const { 6: e, 7: i } = t;
      a(t, () => [e, i]);
    },
    () => a,
  ),
  n = t.effect("a0", (e) =>
    t.on(
      e[0],
      "click",
      ((t) => {
        const { 6: e, 7: a } = t;
        return function () {
          s(t, e + 1), r(t, a + 1);
        };
      })(e),
    ),
  ),
  o = t.intersection(2, (t) => {
    n(t);
  }),
  r = t.state(
    7,
    (e, a) => t.data(e[2], a),
    () => t.intersections([o, i]),
  ),
  s = t.state(
    6,
    (e, a) => t.data(e[1], a),
    () => t.intersections([o, i]),
  ),
  c = t.value(4, (e, a) => t.data(e[1], a)),
  d = t.value(3, (e, a) => t.data(e[0], a)),
  m = t.value(2, (t, e) => {
    d(t, e[0]), c(t, e[1]);
  });
t.register(
  "b0",
  t.createRendererWithOwner(
    "<div>Counts: <!>,<!></div>",
    "Db%c%",
    void 0,
    void 0,
    () => m,
  ),
),
  e();
