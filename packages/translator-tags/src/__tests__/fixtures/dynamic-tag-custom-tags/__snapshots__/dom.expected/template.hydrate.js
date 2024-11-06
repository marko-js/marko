// size: 814 (min) 336 (brotli)

import * as e from "@marko/runtime-tags/dom";
import { init as a } from "@marko/runtime-tags/dom";
const t = () => {},
  o = e.value(3, (a, t) => e.data(a[0], t)),
  r = e.value(2, (e, a) => o(e, a.value)),
  i = e.value(1, (e, a) => r(e, a[0]));
var v = e.createTemplate(
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
const d = () => {},
  n = e.value(3, (a, t) => e.data(a[0], t)),
  c = e.value(2, (e, a) => n(e, a.value)),
  l = e.value(1, (e, a) => c(e, a[0]));
var m = e.createTemplate(
  e.createRenderer(
    "<div>Child 2 has <!></div>",
    "Db%l",
    d,
    void 0,
    void 0,
    () => l,
  ),
  "b",
);
const s = e.dynamicTagAttrs(0),
  u = e.intersection(
    2,
    (e) => {
      const { 3: a } = e;
      s(e, () => ({ value: a }));
    },
    () => s,
  ),
  f = e.conditional(0, 0, () => u),
  h = e.effect("c0", (a) =>
    e.on(
      a[1],
      "click",
      ((e) => {
        const { 2: a } = e;
        return function () {
          p(e, a === v ? m : v);
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
