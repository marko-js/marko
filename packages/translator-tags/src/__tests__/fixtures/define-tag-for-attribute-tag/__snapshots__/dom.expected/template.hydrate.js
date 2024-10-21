// size: 529 (min) 318 (brotli)

import {
  value as e,
  classAttr as n,
  conditional as t,
  register as r,
  createRendererWithOwner as o,
  on as c,
  queueSource as d,
  queueEffect as i,
  inChild as s,
  init as g,
} from "@marko/runtime-tags/dom";
const h = t(1),
  m = e(
    3,
    (e, t) => {
      n(e[0], { selected: t.thing.selected }), h(e, t.thing.renderBody);
    },
    () => h,
  ),
  a = r("b0", o("<span>The thing</span>", "")),
  l = e(
    3,
    (e, n) => m(e[0], { thing: n }),
    () => s(0, m),
  ),
  p = r("b1", (e) =>
    c(
      e[1],
      "click",
      ((e) => {
        const { 2: n } = e;
        return function () {
          d(e, u, !n);
        };
      })(e),
    ),
  ),
  u = e(
    2,
    (e, n) => {
      i(e, p), l(e, { selected: n, renderBody: a(e) });
    },
    () => l,
  );
g();
