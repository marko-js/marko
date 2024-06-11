// size: 546 (min) 321 (brotli)

import {
  createTemplate as i,
  createRenderer as o,
  value as d,
  data as n,
  dynamicTagAttrs as t,
  register as c,
  on as r,
  queueSource as m,
  queueEffect as v,
  conditional as a,
  init as s,
} from "@marko/runtime-tags/dom";
const u = d(3, (i, o) => n(i[0], o)),
  f = d(2, (i, o) => u(i, o.id));
var b = i(
  o(
    "<div>Id is <!></div>",
    "Db%l",
    function () {},
    void 0,
    void 0,
    d(1, (i, o) => f(i, o[0])),
  ),
  "a",
);
const e = t(1),
  k = a(1, (i) => e(i, () => ({ id: "dynamic" })), e),
  l = c("b1", (i) =>
    r(
      i[0],
      "click",
      ((i) => {
        const { 2: o } = i;
        return function () {
          m(i, g, o === b ? "div" : b);
        };
      })(i),
    ),
  ),
  g = d(
    2,
    (i, o) => {
      v(i, l), k(i, o);
    },
    k,
  );
s();
