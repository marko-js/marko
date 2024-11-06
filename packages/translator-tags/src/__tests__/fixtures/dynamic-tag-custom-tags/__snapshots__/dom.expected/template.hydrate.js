// size: 760 (min) 357 (brotli)

import {
  createTemplate as i,
  createRenderer as o,
  value as v,
  data as d,
  dynamicTagAttrs as a,
  effect as l,
  on as n,
  state as t,
  conditional as c,
  intersection as r,
  init as s,
} from "@marko/runtime-tags/dom";
const u = () => {},
  e = v(3, (i, o) => d(i[0], o)),
  m = v(2, (i, o) => e(i, o.value)),
  h = v(1, (i, o) => m(i, o[0]));
var b = i(
  o("<div>Child 1 has <!></div>", "Db%l", u, void 0, void 0, () => h),
  "a",
);
const f = () => {},
  k = v(3, (i, o) => d(i[0], o)),
  C = v(2, (i, o) => k(i, o.value)),
  D = v(1, (i, o) => C(i, o[0]));
var g = i(
  o("<div>Child 2 has <!></div>", "Db%l", f, void 0, void 0, () => D),
  "b",
);
const p = a(0),
  j = r(
    2,
    (i) => {
      const { 3: o } = i;
      p(i, () => ({ value: o }));
    },
    () => p,
  ),
  q = c(0, null, () => j),
  w = l("c0", (i) =>
    n(
      i[1],
      "click",
      ((i) => {
        const { 2: o } = i;
        return function () {
          x(i, o === b ? g : b);
        };
      })(i),
    ),
  ),
  x = t(
    2,
    (i, o) => {
      w(i), q(i, o);
    },
    () => q,
  );
s();
