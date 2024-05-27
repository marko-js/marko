// size: 752 (min) 369 (brotli)

import {
  createTemplate as i,
  createRenderer as o,
  value as n,
  data as v,
  dynamicTagAttrs as d,
  register as t,
  on as c,
  queueSource as l,
  queueEffect as a,
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
  "d",
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
  "e",
);
const C = d(0),
  D = u(
    0,
    null,
    r(2, (i) => {
      const { 3: o } = i;
      C(i, () => ({ value: o }));
    }),
  ),
  g = t("c", (i) =>
    c(
      i[1],
      "click",
      ((i) => {
        const { 2: o } = i;
        return function () {
          l(i, p, o === f ? k : f);
        };
      })(i),
    ),
  ),
  p = n(
    2,
    (i, o) => {
      a(i, g), D(i, o);
    },
    D,
  );
s();
