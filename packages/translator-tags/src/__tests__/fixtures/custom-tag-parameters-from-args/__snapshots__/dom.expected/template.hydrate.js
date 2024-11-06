// size: 697 (min) 331 (brotli)

import * as t from "@marko/runtime-tags/dom";
import { init as e } from "@marko/runtime-tags/dom";
const i = t.dynamicTagAttrs(3, void 0, 1),
  a = t.intersection(
    3,
    (t) => {
      const { 6: e, 7: a } = t;
      i(t, () => [e, a]);
    },
    () => i,
  ),
  o = t.effect("a0", (e) =>
    t.on(
      e[0],
      "click",
      ((t) => {
        const { 6: e, 7: i } = t;
        return function () {
          s(t, e + 1), r(t, i + 1);
        };
      })(e),
    ),
  ),
  n = t.intersection(2, (t) => {
    o(t);
  }),
  r = t.state(
    7,
    (e, i) => t.data(e[2], i),
    () => t.intersections([n, a]),
  ),
  s = t.state(
    6,
    (e, i) => t.data(e[1], i),
    () => t.intersections([n, a]),
  ),
  c = t.value(4, (e, i) => t.data(e[1], i)),
  d = t.value(3, (e, i) => t.data(e[0], i)),
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
    void 0,
    () => m,
  ),
),
  e();
