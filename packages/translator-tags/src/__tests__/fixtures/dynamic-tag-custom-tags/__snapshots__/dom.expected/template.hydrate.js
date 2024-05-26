// size: 773 (min) 370 (brotli)

import {
  createTemplate as o,
  createRenderer as i,
  value as n,
  data as t,
  dynamicTagAttrs as v,
  register as d,
  on as l,
  queueSource as c,
  queueEffect as a,
  conditional as r,
  intersection as u,
  init as s,
} from "@marko/runtime-tags/dom";
const m = n(3, (o, i) => t(o[0], i)),
  e = n(2, (o, i) => m(o, i.value));
var f = o(
  i(
    "<div>Child 1 has <!></div>",
    "Db%l",
    function () {},
    void 0,
    void 0,
    n(1, (o, i) => e(o, i[0])),
  ),
  "AjHOjoFw",
);
const h = n(3, (o, i) => t(o[0], i)),
  A = n(2, (o, i) => h(o, i.value));
var b = o(
  i(
    "<div>Child 2 has <!></div>",
    "Db%l",
    function () {},
    void 0,
    void 0,
    n(1, (o, i) => A(o, i[0])),
  ),
  "RlFAYEr0",
);
const g = v(0),
  j = r(
    0,
    null,
    u(2, (o) => {
      const { 3: i } = o;
      g(o, () => ({ value: i }));
    }),
  ),
  k = d("tARgpmVL", (o) =>
    l(
      o[1],
      "click",
      ((o) => {
        const { 2: i } = o;
        return function () {
          c(o, p, i === f ? b : f);
        };
      })(o),
    ),
  ),
  p = n(
    2,
    (o, i) => {
      a(o, k), j(o, i);
    },
    j,
  );
s();
