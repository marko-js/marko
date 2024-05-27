// size: 546 (min) 285 (brotli)

import {
  registerRenderer as n,
  createRenderer as o,
  register as t,
  on as c,
  value as i,
  queueEffect as r,
  inConditionalScope as u,
  closure as e,
  data as m,
  queueSource as s,
  conditional as f,
  init as l,
} from "@marko/runtime-tags/dom";
const d = e(4, (n, o) => m(n[0], o)),
  k = n("d", o("The count is <!>", "b%", void 0, [d])),
  a = f(2),
  b = t("e", (n) =>
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
  g = i(4, (n, o) => r(n, b), u(d, 2)),
  h = t("f", (n) =>
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
      r(n, h), a(n, o ? k : null);
    },
    a,
  );
l();
