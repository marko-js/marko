// size: 463 (min) 278 (brotli)

import {
  registerRenderer as n,
  createRenderer as o,
  value as t,
  inConditionalScope as c,
  register as r,
  on as i,
  closure as l,
  data as m,
  queueSource as s,
  queueEffect as u,
  conditional as a,
  init as d,
} from "@marko/runtime-tags/dom";
const e = l(3, (n, o) => m(n[0], o)),
  p = n("c", o("<span> </span>", "D ", void 0, [e])),
  f = a(1),
  k = t(3, null, c(e, 1)),
  b = r("d", (n) =>
    i(
      n[0],
      "click",
      ((n) => {
        const { 2: o } = n;
        return function () {
          s(n, k, "bye"), s(n, g, !o);
        };
      })(n),
    ),
  ),
  g = t(
    2,
    (n, o) => {
      u(n, b), f(n, o ? p : null);
    },
    f,
  );
d();
