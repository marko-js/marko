// size: 465 (min) 291 (brotli)

import {
  registerRenderer as n,
  createRenderer as o,
  value as t,
  inConditionalScope as a,
  register as r,
  on as c,
  closure as i,
  data as l,
  queueSource as m,
  queueEffect as s,
  conditional as u,
  init as e,
} from "@marko/runtime-tags/dom";
const p = i(3, (n, o) => l(n[0], o)),
  d = n("a1", o("<span> </span>", "D ", void 0, [p])),
  f = u(1),
  k = t(3, null, a(p, 1)),
  b = r("a2", (n) =>
    c(
      n[0],
      "click",
      ((n) => {
        const { 2: o } = n;
        return function () {
          m(n, k, "bye"), m(n, g, !o);
        };
      })(n),
    ),
  ),
  g = t(
    2,
    (n, o) => {
      s(n, b), f(n, o ? d : null);
    },
    f,
  );
e();
