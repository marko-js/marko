// size: 519 (min) 297 (brotli)

import * as t from "@marko/runtime-tags/dom";
import { init as a } from "@marko/runtime-tags/dom";
const i = () => {},
  o = t.value(3, (a, i) => t.data(a[0], i)),
  d = t.value(2, (t, a) => o(t, a.id)),
  e = t.value(1, (t, a) => d(t, a[0]));
var m = t.createTemplate(
  "a",
  "<div>Id is <!></div>",
  "Db%l",
  i,
  void 0,
  () => e,
);
const n = t.dynamicTagAttrs(1),
  r = t.conditional(
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
          s(t, a === m ? "div" : m);
        };
      })(a),
    ),
  ),
  s = t.state(
    2,
    (t, a) => {
      c(t), r(t, a);
    },
    () => r,
  );
a();
