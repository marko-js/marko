// size: 587 (min) 326 (brotli)

import {
  registerRenderer as t,
  createRenderer as o,
  register as n,
  on as a,
  value as i,
  intersections as c,
  inConditionalScope as s,
  closure as m,
  data as r,
  queueSource as u,
  queueEffect as e,
  conditional as b,
  init as d,
} from "@marko/runtime-tags/dom";
const k = m(1, (t, o) => r(t[0], o)),
  p = t(
    "a1",
    o("<span>The button was clicked <!> times.</span>", "Db%", void 0, [k]),
  ),
  f = n("a2", (t) =>
    a(
      t[0],
      "click",
      ((t) => {
        const {
          _: { 1: o },
        } = t;
        return function () {
          u(t._, _, o + 1);
        };
      })(t),
    ),
  ),
  l = m(1, (t, o) => {
    r(t[1], o), e(t, f);
  }),
  v = t("a3", o("<button> </button>", " D ", void 0, [l])),
  D = b(0),
  _ = i(1, (t, o) => D(t, o < 3 ? v : p), c([D, s(l, 0), s(k, 0)]));
d();
