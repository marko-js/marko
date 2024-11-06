// size: 535 (min) 312 (brotli)

import {
  createTemplate as i,
  createRenderer as d,
  value as o,
  data as n,
  dynamicTagAttrs as t,
  effect as c,
  on as r,
  state as m,
  conditional as v,
  init as a,
} from "@marko/runtime-tags/dom";
const s = () => {},
  u = o(3, (i, d) => n(i[0], d)),
  b = o(2, (i, d) => u(i, d.id)),
  e = o(1, (i, d) => b(i, d[0]));
var f = i(
  d("<div>Id is <!></div>", "Db%l", s, void 0, void 0, () => e),
  "a",
);
const k = t(1),
  l = v(
    1,
    (i) => k(i, () => ({ id: "dynamic" })),
    () => k,
  ),
  g = c("b0", (i) =>
    r(
      i[0],
      "click",
      ((i) => {
        const { 2: d } = i;
        return function () {
          p(i, d === f ? "div" : f);
        };
      })(i),
    ),
  ),
  p = m(
    2,
    (i, d) => {
      g(i), l(i, d);
    },
    () => l,
  );
a();
