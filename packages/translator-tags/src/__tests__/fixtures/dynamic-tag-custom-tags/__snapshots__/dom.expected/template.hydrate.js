// size: 753 (min) 345 (brotli)

import {
  createTemplate as i,
  createRenderer as o,
  value as n,
  data as v,
  dynamicTagAttrs as t,
  register as c,
  on as d,
  queueSource as a,
  queueEffect as l,
  conditional as u,
  intersection as r,
  init as s,
} from "@marko/runtime-tags/dom";
const e = n(3, (i, o) => v(i[0], o)),
  m = n(2, (i, o) => e(i, o.value));
var f = i(
  o(
    "<div>Child 1 has <!></div>",
    "Db%l",
    function () {},
    void 0,
    void 0,
    n(1, (i, o) => m(i, o[0])),
  ),
  "a",
);
const h = n(3, (i, o) => v(i[0], o)),
  b = n(2, (i, o) => h(i, o.value));
var k = i(
  o(
    "<div>Child 2 has <!></div>",
    "Db%l",
    function () {},
    void 0,
    void 0,
    n(1, (i, o) => b(i, o[0])),
  ),
  "b",
);
const C = t(0),
  D = u(
    0,
    null,
    r(2, (i) => {
      const { 3: o } = i;
      C(i, () => ({ value: o }));
    }),
  ),
  g = c("c0", (i) =>
    d(
      i[1],
      "click",
      ((i) => {
        const { 2: o } = i;
        return function () {
          a(i, p, o === f ? k : f);
        };
      })(i),
    ),
  ),
  p = n(
    2,
    (i, o) => {
      l(i, g), D(i, o);
    },
    D,
  );
s();
