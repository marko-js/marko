// size: 584 (min) 325 (brotli)

import {
  registerRenderer as t,
  createRenderer as o,
  register as n,
  on as c,
  value as i,
  intersections as s,
  inConditionalScope as e,
  closure as m,
  data as r,
  queueSource as u,
  queueEffect as a,
  conditional as d,
  init as b,
} from "@marko/runtime-tags/dom";
const k = m(1, (t, o) => r(t[0], o)),
  p = t(
    "c",
    o("<span>The button was clicked <!> times.</span>", "Db%", void 0, [k]),
  ),
  f = n("d", (t) =>
    c(
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
    r(t[1], o), a(t, f);
  }),
  v = t("e", o("<button> </button>", " D ", void 0, [l])),
  D = d(0),
  _ = i(1, (t, o) => D(t, o < 3 ? v : p), s([D, e(l, 0), e(k, 0)]));
b();
