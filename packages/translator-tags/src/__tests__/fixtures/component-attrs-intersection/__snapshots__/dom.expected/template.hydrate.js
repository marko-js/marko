// size: 350 (min) 211 (brotli)

import {
  value as n,
  intersection as o,
  data as t,
  register as c,
  on as r,
  state as m,
  queueEffect as i,
  inChild as s,
  init as u,
} from "@marko/runtime-tags/dom";
const l = o(2, (n) => {
    const { 3: o, 4: c } = n;
    t(n[0], o);
  }),
  a = n(3, null, () => l),
  e = c("b0", (n) =>
    r(
      n[1],
      "click",
      ((n) => {
        const { 2: o } = n;
        return function () {
          f(n, o + 1);
        };
      })(n),
    ),
  ),
  f = m(
    2,
    (n, o) => {
      i(n, e), a(n[0], o);
    },
    () => s(0, a),
  );
u();
