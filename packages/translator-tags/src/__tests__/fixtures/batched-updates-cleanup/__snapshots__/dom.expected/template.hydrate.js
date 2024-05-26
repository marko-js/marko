// size: 477 (min) 290 (brotli)

import {
  registerRenderer as n,
  createRenderer as o,
  value as t,
  inConditionalScope as i,
  register as r,
  on as c,
  closure as l,
  data as m,
  queueSource as s,
  queueEffect as u,
  conditional as a,
  init as e,
} from "@marko/runtime-tags/dom";
const f = l(3, (n, o) => m(n[0], o)),
  p = n("iBth9GLf", o("<span> </span>", "D ", void 0, [f])),
  d = a(1),
  k = t(3, null, i(f, 1)),
  v = r("1weYvNxY", (n) =>
    c(
      n[0],
      "click",
      ((n) => {
        const { 2: o } = n;
        return function () {
          s(n, k, "bye"), s(n, Y, !o);
        };
      })(n),
    ),
  ),
  Y = t(
    2,
    (n, o) => {
      u(n, v), d(n, o ? p : null);
    },
    d,
  );
e();
