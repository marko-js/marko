// size: 557 (min) 322 (brotli)

import {
  register as t,
  createRenderer as o,
  effect as n,
  on as a,
  closure as i,
  data as c,
  state as s,
  intersections as m,
  inConditionalScope as r,
  conditional as u,
  init as e,
} from "@marko/runtime-tags/dom";
const b = i(1, (t, o) => c(t[0], o)),
  d = t(
    "a0",
    o("<span>The button was clicked <!> times.</span>", "Db%", void 0, () => [
      b,
    ]),
  ),
  k = n("a1", (t) =>
    a(
      t[0],
      "click",
      ((t) => {
        const {
          _: { 1: o },
        } = t;
        return function () {
          v(t._, o + 1);
        };
      })(t),
    ),
  ),
  p = i(1, (t, o) => {
    c(t[1], o), k(t);
  }),
  f = t(
    "a2",
    o("<button> </button>", " D ", void 0, () => [p]),
  ),
  l = u(0),
  v = s(
    1,
    (t, o) => l(t, o < 3 ? f : d),
    () => m([l, r(p, 0), r(b, 0)]),
  );
e();
