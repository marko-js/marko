// size: 545 (min) 332 (brotli)

import {
  createTemplate as i,
  createRenderer as d,
  value as o,
  data as n,
  dynamicTagAttrs as c,
  register as t,
  on as r,
  queueSource as m,
  queueEffect as v,
  conditional as s,
  init as a,
} from "@marko/runtime-tags/dom";
const u = o(3, (i, d) => n(i[0], d)),
  f = o(2, (i, d) => u(i, d.id));
var e = i(
  d(
    "<div>Id is <!></div>",
    "Db%l",
    function () {},
    void 0,
    void 0,
    o(1, (i, d) => f(i, d[0])),
  ),
  "d",
);
const k = c(1),
  l = s(1, (i) => k(i, () => ({ id: "dynamic" })), k),
  b = t("c", (i) =>
    r(
      i[0],
      "click",
      ((i) => {
        const { 2: d } = i;
        return function () {
          m(i, g, d === e ? "div" : e);
        };
      })(i),
    ),
  ),
  g = o(
    2,
    (i, d) => {
      v(i, b), l(i, d);
    },
    l,
  );
a();
