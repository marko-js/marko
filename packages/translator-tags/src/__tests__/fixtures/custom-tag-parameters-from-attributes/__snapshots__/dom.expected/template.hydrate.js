// size: 641 (min) 352 (brotli)

import {
  dynamicTagAttrs as n,
  register as o,
  on as t,
  value as c,
  intersections as i,
  intersection as m,
  conditional as u,
  queueSource as a,
  data as d,
  queueEffect as r,
  createRenderer as e,
  init as s,
} from "@marko/runtime-tags/dom";
const v = n(2),
  l = m(3, (n) => {
    const { 4: o, 5: t } = n;
    v(n, () => ({ count: t, name: o.name }));
  }),
  b = u(2, null, l),
  f = o("a0", (n) =>
    t(
      n[0],
      "click",
      ((n) => {
        const { 5: o } = n;
        return function () {
          a(n, k, o + 1);
        };
      })(n),
    ),
  ),
  k = c(
    5,
    (n, o) => {
      d(n[1], o), r(n, f);
    },
    l,
  );
i([l, b]);
const g = c(5, (n, o) => d(n[0], o)),
  p = c(4, (n, o) => d(n[1], o)),
  C = c(3, (n, o) => {
    p(n, o.count), g(n, o.name);
  });
o(
  "b0",
  e(
    "<div>Count (<!>): <!></div>",
    "Db%c%",
    void 0,
    void 0,
    void 0,
    c(2, (n, o) => C(n, o[0])),
  ),
),
  s();
