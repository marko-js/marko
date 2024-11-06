// size: 556 (min) 323 (brotli)

import {
  createTemplate as i,
  createRenderer as d,
  value as o,
  data as n,
  dynamicTagAttrs as t,
  register as c,
  on as r,
  state as m,
  queueEffect as v,
  conditional as a,
  init as s,
} from "@marko/runtime-tags/dom";
const u = () => {},
  b = o(3, (i, d) => n(i[0], d)),
  e = o(2, (i, d) => b(i, d.id)),
  f = o(1, (i, d) => e(i, d[0]));
var k = i(
  d("<div>Id is <!></div>", "Db%l", u, void 0, void 0, () => f),
  "a",
);
const l = t(1),
  g = a(
    1,
    (i) => l(i, () => ({ id: "dynamic" })),
    () => l,
  ),
  p = c("b0", (i) =>
    r(
      i[0],
      "click",
      ((i) => {
        const { 2: d } = i;
        return function () {
          y(i, d === k ? "div" : k);
        };
      })(i),
    ),
  ),
  y = m(
    2,
    (i, d) => {
      v(i, p), g(i, d);
    },
    () => g,
  );
s();
