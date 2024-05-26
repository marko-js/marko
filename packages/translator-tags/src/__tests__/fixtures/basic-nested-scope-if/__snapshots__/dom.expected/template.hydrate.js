// size: 605 (min) 344 (brotli)

import {
  registerRenderer as t,
  createRenderer as o,
  register as n,
  on as s,
  value as i,
  intersections as m,
  inConditionalScope as c,
  closure as r,
  data as u,
  queueSource as a,
  queueEffect as e,
  conditional as k,
  init as b,
} from "@marko/runtime-tags/dom";
const d = r(1, (t, o) => u(t[0], o)),
  p = t(
    "wsLhspZq",
    o("<span>The button was clicked <!> times.</span>", "Db%", void 0, [d]),
  ),
  f = n("4kIxMgRk", (t) =>
    s(
      t[0],
      "click",
      ((t) => {
        const {
          _: { 1: o },
        } = t;
        return function () {
          a(t._, v, o + 1);
        };
      })(t),
    ),
  ),
  g = r(1, (t, o) => {
    u(t[1], o), e(t, f);
  }),
  h = t("Mzm8JomH", o("<button> </button>", " D ", void 0, [g])),
  l = k(0),
  v = i(1, (t, o) => l(t, o < 3 ? h : p), m([l, c(g, 0), c(d, 0)]));
b();
