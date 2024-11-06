// size: 764 (min) 333 (brotli)

import * as a from "@marko/runtime-tags/dom";
import { init as t } from "@marko/runtime-tags/dom";
const e = () => {},
  o = a.value(3, (t, e) => a.data(t[0], e)),
  i = a.value(2, (a, t) => o(a, t.value)),
  l = a.value(1, (a, t) => i(a, t[0]));
var v = a.createTemplate(
  "a",
  "<div>Child 1 has <!></div>",
  "Db%l",
  e,
  void 0,
  () => l,
);
const n = () => {},
  r = a.value(3, (t, e) => a.data(t[0], e)),
  c = a.value(2, (a, t) => r(a, t.value)),
  d = a.value(1, (a, t) => c(a, t[0]));
var m = a.createTemplate(
  "b",
  "<div>Child 2 has <!></div>",
  "Db%l",
  n,
  void 0,
  () => d,
);
const s = a.dynamicTagAttrs(0),
  u = a.intersection(
    2,
    (a) => {
      const { 3: t } = a;
      s(a, () => ({ value: t }));
    },
    () => s,
  ),
  f = a.conditional(0, 0, () => u),
  h = a.effect("c0", (t) =>
    a.on(
      t[1],
      "click",
      ((a) => {
        const { 2: t } = a;
        return function () {
          p(a, t === v ? m : v);
        };
      })(t),
    ),
  ),
  p = a.state(
    2,
    (a, t) => {
      h(a), f(a, t);
    },
    () => f,
  );
t();
