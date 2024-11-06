// size: 781 (min) 363 (brotli)

import {
  createTemplate as i,
  createRenderer as o,
  value as v,
  data as d,
  dynamicTagAttrs as a,
  register as l,
  on as n,
  state as t,
  queueEffect as c,
  conditional as r,
  intersection as s,
  init as u,
} from "@marko/runtime-tags/dom";
const e = () => {},
  m = v(3, (i, o) => d(i[0], o)),
  h = v(2, (i, o) => m(i, o.value)),
  b = v(1, (i, o) => h(i, o[0]));
var f = i(
  o("<div>Child 1 has <!></div>", "Db%l", e, void 0, void 0, () => b),
  "a",
);
const k = () => {},
  C = v(3, (i, o) => d(i[0], o)),
  D = v(2, (i, o) => C(i, o.value)),
  g = v(1, (i, o) => D(i, o[0]));
var p = i(
  o("<div>Child 2 has <!></div>", "Db%l", k, void 0, void 0, () => g),
  "b",
);
const j = a(0),
  q = s(
    2,
    (i) => {
      const { 3: o } = i;
      j(i, () => ({ value: o }));
    },
    () => j,
  ),
  w = r(0, null, () => q),
  x = l("c0", (i) =>
    n(
      i[1],
      "click",
      ((i) => {
        const { 2: o } = i;
        return function () {
          y(i, o === f ? p : f);
        };
      })(i),
    ),
  ),
  y = t(
    2,
    (i, o) => {
      c(i, x), w(i, o);
    },
    () => w,
  );
u();
