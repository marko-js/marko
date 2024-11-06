// size: 544 (min) 305 (brotli)

import * as t from "@marko/runtime-tags/dom";
import { init as a } from "@marko/runtime-tags/dom";
const e = () => {},
  i = t.value(3, (a, e) => t.data(a[0], e)),
  o = t.value(2, (t, a) => i(t, a.id)),
  r = t.value(1, (t, a) => o(t, a[0]));
var d = t.createTemplate(
  t.createRenderer("<div>Id is <!></div>", "Db%l", e, void 0, void 0, () => r),
  "a",
);
const n = t.dynamicTagAttrs(1),
  m = t.conditional(
    1,
    (t) => n(t, () => ({ id: "dynamic" })),
    () => n,
  ),
  c = t.effect("b0", (a) =>
    t.on(
      a[0],
      "click",
      ((t) => {
        const { 2: a } = t;
        return function () {
          s(t, a === d ? "div" : d);
        };
      })(a),
    ),
  ),
  s = t.state(
    2,
    (t, a) => {
      c(t), m(t, a);
    },
    () => m,
  );
a();
