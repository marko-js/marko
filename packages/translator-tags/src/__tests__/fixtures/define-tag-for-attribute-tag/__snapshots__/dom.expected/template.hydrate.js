// size: 540 (min) 308 (brotli)

import {
  value as e,
  classAttr as n,
  conditional as t,
  register as r,
  createRenderer as o,
  on as c,
  queueSource as d,
  queueEffect as i,
  bindRenderer as s,
  inChild as g,
  init as h,
} from "@marko/runtime-tags/dom";
const m = t(1),
  a = e(
    3,
    (e, t) => {
      n(e[0], { selected: t.thing.selected }), m(e, t.thing.renderBody);
    },
    () => m,
  ),
  l = r("b0", o("<span>The thing</span>", "")),
  p = e(
    3,
    (e, n) => a(e[0], { thing: n }),
    () => g(0, a),
  ),
  u = r("b1", (e) =>
    c(
      e[1],
      "click",
      ((e) => {
        const { 2: n } = e;
        return function () {
          d(e, b, !n);
        };
      })(e),
    ),
  ),
  b = e(
    2,
    (e, n) => {
      i(e, u), p(e, { selected: n, renderBody: s(e, l) });
    },
    () => p,
  );
h();
