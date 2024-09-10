// size: 542 (min) 318 (brotli)

import {
  createTemplate as i,
  createRenderer as d,
  value as o,
  data as n,
  dynamicTagAttrs as t,
  register as c,
  on as r,
  queueSource as m,
  queueEffect as v,
  conditional as a,
  init as s,
} from "@marko/runtime-tags/dom";
const u = () => {},
  b = o(3, (i, d) => n(i[0], d)),
  e = o(2, (i, d) => b(i, d.id));
var f = i(
  d(
    "<div>Id is <!></div>",
    "Db%l",
    u,
    void 0,
    void 0,
    o(1, (i, d) => e(i, d[0])),
  ),
  "a",
);
const k = t(1),
  l = a(1, (i) => k(i, () => ({ id: "dynamic" })), k),
  g = c("b0", (i) =>
    r(
      i[0],
      "click",
      ((i) => {
        const { 2: d } = i;
        return function () {
          m(i, p, d === f ? "div" : f);
        };
      })(i),
    ),
  ),
  p = o(
    2,
    (i, d) => {
      v(i, g), l(i, d);
    },
    l,
  );
s();
