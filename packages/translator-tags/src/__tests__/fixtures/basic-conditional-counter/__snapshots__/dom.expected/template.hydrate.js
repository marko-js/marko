// size: 544 (min) 289 (brotli)

import {
  registerRenderer as n,
  createRenderer as o,
  register as t,
  on as c,
  value as r,
  queueEffect as i,
  inConditionalScope as s,
  closure as u,
  data as m,
  queueSource as a,
  conditional as e,
  init as f,
} from "@marko/runtime-tags/dom";
const l = u(4, (n, o) => m(n[0], o)),
  d = n("d", o("<span> </span>", "D ", void 0, [l])),
  k = e(2),
  p = t("e", (n) =>
    c(
      n[0],
      "click",
      ((n) => {
        const { 4: o } = n;
        return function () {
          a(n, g, o + 1);
        };
      })(n),
    ),
  ),
  g = r(4, (n, o) => i(n, p), s(l, 2)),
  v = t("f", (n) =>
    c(
      n[1],
      "click",
      ((n) => {
        const { 3: o } = n;
        return function () {
          a(n, D, !o);
        };
      })(n),
    ),
  ),
  D = r(
    3,
    (n, o) => {
      i(n, v), k(n, o ? d : null);
    },
    k,
  );
f();
