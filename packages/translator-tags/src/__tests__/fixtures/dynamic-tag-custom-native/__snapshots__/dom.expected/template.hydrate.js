// size: 559 (min) 335 (brotli)

import {
  createTemplate as i,
  createRenderer as o,
  value as d,
  data as n,
  dynamicTagAttrs as c,
  register as t,
  on as m,
  queueSource as r,
  queueEffect as v,
  conditional as a,
  init as s,
} from "@marko/runtime-tags/dom";
const u = d(3, (i, o) => n(i[0], o)),
  f = d(2, (i, o) => u(i, o.id));
var e = i(
  o(
    "<div>Id is <!></div>",
    "Db%l",
    function () {},
    void 0,
    void 0,
    d(1, (i, o) => f(i, o[0])),
  ),
  "Mp34cKmF",
);
const k = c(1),
  l = a(1, (i) => k(i, () => ({ id: "dynamic" })), k),
  p = t("QIzwaA1+", (i) =>
    m(
      i[0],
      "click",
      ((i) => {
        const { 2: o } = i;
        return function () {
          r(i, I, o === e ? "div" : e);
        };
      })(i),
    ),
  ),
  I = d(
    2,
    (i, o) => {
      v(i, p), l(i, o);
    },
    l,
  );
s();
