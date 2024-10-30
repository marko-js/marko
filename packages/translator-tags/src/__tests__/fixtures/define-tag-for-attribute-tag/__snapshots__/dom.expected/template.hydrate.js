// size: 586 (min) 322 (brotli)

import {
  dynamicTagAttrs as e,
  value as n,
  classAttr as t,
  conditional as r,
  register as o,
  createRendererWithOwner as c,
  on as d,
  queueSource as i,
  queueEffect as s,
  inChild as g,
  init as h,
} from "@marko/runtime-tags/dom";
const m = e(1),
  a = r(
    1,
    (e) => m(e, () => ({})),
    () => m,
  ),
  l = n(
    3,
    (e, n) => {
      t(e[0], { selected: n.thing.selected }), a(e, n.thing.renderBody);
    },
    () => a,
  ),
  p = o("b0", c("<span>The thing</span>", "")),
  u = n(
    3,
    (e, n) => l(e[0], { thing: n }),
    () => g(0, l),
  ),
  b = o("b1", (e) =>
    d(
      e[1],
      "click",
      ((e) => {
        const { 2: n } = e;
        return function () {
          i(e, f, !n);
        };
      })(e),
    ),
  ),
  f = n(
    2,
    (e, n) => {
      s(e, b), u(e, { selected: n, renderBody: p(e) });
    },
    () => u,
  );
h();
