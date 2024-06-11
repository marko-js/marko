// size: 346 (min) 213 (brotli)

import {
  value as n,
  intersection as o,
  data as t,
  register as c,
  on as r,
  queueEffect as m,
  inChild as i,
  queueSource as s,
  init as u,
} from "@marko/runtime-tags/dom";
const l = o(2, (n) => {
    const { 3: o, 4: c } = n;
    t(n[0], o);
  }),
  a = n(3, null, l),
  e = c("b1", (n) =>
    r(
      n[1],
      "click",
      ((n) => {
        const { 2: o } = n;
        return function () {
          s(n, f, o + 1);
        };
      })(n),
    ),
  ),
  f = n(
    2,
    (n, o) => {
      m(n, e), a(n[0], o);
    },
    i(0, a),
  );
u();
