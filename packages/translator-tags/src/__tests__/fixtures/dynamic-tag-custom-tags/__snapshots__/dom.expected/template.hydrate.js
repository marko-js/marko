// size: 745 (min) 354 (brotli)

import {
  createTemplate as i,
  createRenderer as o,
  value as v,
  data as d,
  dynamicTagAttrs as a,
  register as l,
  on as n,
  queueSource as t,
  queueEffect as c,
  conditional as r,
  intersection as s,
  init as u,
} from "@marko/runtime-tags/dom";
const e = () => {},
  m = v(3, (i, o) => d(i[0], o)),
  h = v(2, (i, o) => m(i, o.value));
var b = i(
  o(
    "<div>Child 1 has <!></div>",
    "Db%l",
    e,
    void 0,
    void 0,
    v(1, (i, o) => h(i, o[0])),
  ),
  "a",
);
const f = () => {},
  k = v(3, (i, o) => d(i[0], o)),
  C = v(2, (i, o) => k(i, o.value));
var D = i(
  o(
    "<div>Child 2 has <!></div>",
    "Db%l",
    f,
    void 0,
    void 0,
    v(1, (i, o) => C(i, o[0])),
  ),
  "b",
);
const g = a(0),
  p = r(
    0,
    null,
    s(2, (i) => {
      const { 3: o } = i;
      g(i, () => ({ value: o }));
    }),
  ),
  j = l("c0", (i) =>
    n(
      i[1],
      "click",
      ((i) => {
        const { 2: o } = i;
        return function () {
          t(i, q, o === b ? D : b);
        };
      })(i),
    ),
  ),
  q = v(
    2,
    (i, o) => {
      c(i, j), p(i, o);
    },
    p,
  );
u();
