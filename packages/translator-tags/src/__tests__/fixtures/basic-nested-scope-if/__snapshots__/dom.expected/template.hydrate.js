// size: 605 (min) 335 (brotli)

import {
  registerRenderer as t,
  createRenderer as o,
  register as n,
  on as a,
  closure as i,
  data as c,
  queueSource as s,
  queueEffect as m,
  value as r,
  intersections as u,
  inConditionalScope as e,
  conditional as b,
  init as d,
} from "@marko/runtime-tags/dom";
const k = i(1, (t, o) => c(t[0], o)),
  p = t(
    "a0",
    o("<span>The button was clicked <!> times.</span>", "Db%", void 0, () => [
      k,
    ]),
  ),
  f = n("a1", (t) =>
    a(
      t[0],
      "click",
      ((t) => {
        const {
          _: { 1: o },
        } = t;
        return function () {
          s(t._, _, o + 1);
        };
      })(t),
    ),
  ),
  l = i(1, (t, o) => {
    c(t[1], o), m(t, f);
  }),
  v = t(
    "a2",
    o("<button> </button>", " D ", void 0, () => [l]),
  ),
  D = b(0),
  _ = r(
    1,
    (t, o) => D(t, o < 3 ? v : p),
    () => u([D, e(l, 0), e(k, 0)]),
  );
d();
