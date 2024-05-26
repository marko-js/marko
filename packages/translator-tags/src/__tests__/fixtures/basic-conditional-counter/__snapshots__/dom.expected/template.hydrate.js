// size: 565 (min) 333 (brotli)

import {
  registerRenderer as n,
  createRenderer as t,
  register as o,
  on as c,
  value as r,
  queueEffect as i,
  inConditionalScope as s,
  closure as m,
  data as u,
  queueSource as a,
  conditional as f,
  init as l,
} from "@marko/runtime-tags/dom";
const e = m(4, (n, t) => u(n[0], t)),
  k = n("DHsf3R0I", t("<span> </span>", "D ", void 0, [e])),
  p = f(2),
  d = o("bPBEMt8I", (n) =>
    c(
      n[0],
      "click",
      ((n) => {
        const { 4: t } = n;
        return function () {
          a(n, g, t + 1);
        };
      })(n),
    ),
  ),
  g = r(4, (n, t) => i(n, d), s(e, 2)),
  D = o("aSHCm3gQ", (n) =>
    c(
      n[1],
      "click",
      ((n) => {
        const { 3: t } = n;
        return function () {
          a(n, H, !t);
        };
      })(n),
    ),
  ),
  H = r(
    3,
    (n, t) => {
      i(n, D), p(n, t ? k : null);
    },
    p,
  );
l();
