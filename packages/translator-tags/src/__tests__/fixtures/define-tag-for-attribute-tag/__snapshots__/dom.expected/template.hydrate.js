// size: 522 (min) 294 (brotli)

import {
  value as e,
  classAttr as n,
  conditional as t,
  register as r,
  createRenderer as o,
  inChild as c,
  on as d,
  queueSource as i,
  queueEffect as s,
  bindRenderer as g,
  init as h,
} from "@marko/runtime-tags/dom";
const m = t(1),
  a = e(
    3,
    (e, t) => {
      n(e[0], { selected: t.thing.selected }), m(e, t.thing.renderBody);
    },
    m,
  ),
  l = r("b0", o("<span>The thing</span>", "")),
  p = e(3, (e, n) => a(e[0], { thing: n }), c(0, a)),
  u = r("b1", (e) =>
    d(
      e[1],
      "click",
      ((e) => {
        const { 2: n } = e;
        return function () {
          i(e, b, !n);
        };
      })(e),
    ),
  ),
  b = e(
    2,
    (e, n) => {
      s(e, u), p(e, { selected: n, renderBody: g(e, l) });
    },
    p,
  );
h();
