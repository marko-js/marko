// size: 335 (min) 204 (brotli)

import {
  register as n,
  on as o,
  queueSource as t,
  value as c,
  intersection as r,
  data as i,
  queueEffect as l,
  init as m,
} from "@marko/runtime-tags/dom";
const u = n("EaSaiDM2", (n) =>
    o(
      n[0],
      "click",
      ((n) => {
        const { 2: o, 3: c } = n;
        return function () {
          t(n, e, o + 1), t(n, s, c + 1);
        };
      })(n),
    ),
  ),
  a = r(2, (n) => {
    const { 2: o, 3: t } = n;
    i(n[1], o + t), l(n, u);
  }),
  s = c(3, null, a),
  e = c(2, null, a);
m();
