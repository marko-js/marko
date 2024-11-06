// size: 817 (min) 337 (brotli)

import * as e from "@marko/runtime-tags/dom";
import { init as a } from "@marko/runtime-tags/dom";
const t = () => {},
  o = e.value(3, (a, t) => e.data(a[0], t)),
  r = e.value(2, (e, a) => o(e, a.value)),
  i = e.value(1, (e, a) => r(e, a[0]));
var l = e.createTemplate(
  e.createRenderer(
    "<div>Child 1 has <!></div>",
    "Db%l",
    t,
    void 0,
    void 0,
    () => i,
  ),
  "a",
);
const n = () => {},
  v = e.value(3, (a, t) => e.data(a[0], t)),
  d = e.value(2, (e, a) => v(e, a.value)),
  c = e.value(1, (e, a) => d(e, a[0]));
var u = e.createTemplate(
  e.createRenderer(
    "<div>Child 2 has <!></div>",
    "Db%l",
    n,
    void 0,
    void 0,
    () => c,
  ),
  "b",
);
const m = e.dynamicTagAttrs(0),
  s = e.intersection(
    2,
    (e) => {
      const { 3: a } = e;
      m(e, () => ({ value: a }));
    },
    () => m,
  ),
  f = e.conditional(0, null, () => s),
  h = e.effect("c0", (a) =>
    e.on(
      a[1],
      "click",
      ((e) => {
        const { 2: a } = e;
        return function () {
          p(e, a === l ? u : l);
        };
      })(a),
    ),
  ),
  p = e.state(
    2,
    (e, a) => {
      h(e), f(e, a);
    },
    () => f,
  );
a();
