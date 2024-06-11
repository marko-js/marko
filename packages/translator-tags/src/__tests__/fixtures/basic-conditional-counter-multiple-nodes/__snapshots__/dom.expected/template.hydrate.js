// size: 549 (min) 294 (brotli)

import {
  registerRenderer as n,
  createRenderer as o,
  register as t,
  on as c,
  value as i,
  queueEffect as r,
  inConditionalScope as u,
  closure as a,
  data as m,
  queueSource as s,
  conditional as e,
  init as l,
} from "@marko/runtime-tags/dom";
const f = a(4, (n, o) => m(n[0], o)),
  k = n("a2", o("The count is <!>", "b%", void 0, [f])),
  d = e(2),
  b = t("a3", (n) =>
    c(
      n[0],
      "click",
      ((n) => {
        const { 4: o } = n;
        return function () {
          s(n, g, o + 1);
        };
      })(n),
    ),
  ),
  g = i(4, (n, o) => r(n, b), u(f, 2)),
  h = t("a4", (n) =>
    c(
      n[1],
      "click",
      ((n) => {
        const { 3: o } = n;
        return function () {
          s(n, p, !o);
        };
      })(n),
    ),
  ),
  p = i(
    3,
    (n, o) => {
      r(n, h), d(n, o ? k : null);
    },
    d,
  );
l();
