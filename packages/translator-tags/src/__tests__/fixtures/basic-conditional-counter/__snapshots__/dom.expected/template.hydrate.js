// size: 547 (min) 292 (brotli)

import {
  registerRenderer as n,
  createRenderer as o,
  register as t,
  on as c,
  value as r,
  queueEffect as a,
  inConditionalScope as i,
  closure as s,
  data as u,
  queueSource as m,
  conditional as l,
  init as e,
} from "@marko/runtime-tags/dom";
const f = s(4, (n, o) => u(n[0], o)),
  k = n("a2", o("<span> </span>", "D ", void 0, [f])),
  p = l(2),
  d = t("a3", (n) =>
    c(
      n[0],
      "click",
      ((n) => {
        const { 4: o } = n;
        return function () {
          m(n, g, o + 1);
        };
      })(n),
    ),
  ),
  g = r(4, (n, o) => a(n, d), i(f, 2)),
  v = t("a4", (n) =>
    c(
      n[1],
      "click",
      ((n) => {
        const { 3: o } = n;
        return function () {
          m(n, D, !o);
        };
      })(n),
    ),
  ),
  D = r(
    3,
    (n, o) => {
      a(n, v), p(n, o ? k : null);
    },
    p,
  );
e();
