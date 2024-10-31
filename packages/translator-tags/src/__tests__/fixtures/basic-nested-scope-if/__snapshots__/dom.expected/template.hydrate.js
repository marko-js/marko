// size: 583 (min) 324 (brotli)

import {
  register as t,
  createRenderer as o,
  on as n,
  closure as a,
  data as i,
  queueSource as c,
  queueEffect as s,
  value as m,
  intersections as r,
  inConditionalScope as u,
  conditional as e,
  init as b,
} from "@marko/runtime-tags/dom";
const d = a(1, (t, o) => i(t[0], o)),
  k = t(
    "a0",
    o("<span>The button was clicked <!> times.</span>", "Db%", void 0, () => [
      d,
    ]),
  ),
  p = t("a1", (t) =>
    n(
      t[0],
      "click",
      ((t) => {
        const {
          _: { 1: o },
        } = t;
        return function () {
          c(t._, D, o + 1);
        };
      })(t),
    ),
  ),
  f = a(1, (t, o) => {
    i(t[1], o), s(t, p);
  }),
  l = t(
    "a2",
    o("<button> </button>", " D ", void 0, () => [f]),
  ),
  v = e(0),
  D = m(
    1,
    (t, o) => v(t, o < 3 ? l : k),
    () => r([v, u(f, 0), u(d, 0)]),
  );
b();
