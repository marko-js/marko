// size: 670 (min) 316 (brotli)

import {
  registerSubscriber as a,
  dynamicClosure as n,
  data as l,
  registerRenderer as o,
  createRenderer as i,
  value as d,
  intersections as s,
  inConditionalScope as u,
  dynamicSubscribers as m,
  closure as p,
  conditional as v,
} from "@marko/runtime-tags/dom";
const r = o(
    "a1",
    i("<span> </span>", "D ", void 0, [
      a(
        "a0",
        n(
          5,
          (a, n) => l(a[0], n),
          (a) => a._._,
        ),
      ),
    ]),
  ),
  t = o(
    "a3",
    i("<span> </span>", "D ", void 0, [
      a(
        "a2",
        n(
          4,
          (a, n) => l(a[0], n),
          (a) => a._._,
        ),
      ),
    ]),
  ),
  D = v(1),
  _ = v(0),
  b = p(5, (a, n) => D(a, n ? r : null), void 0, D),
  c = p(4, (a, n) => _(a, n ? t : null), void 0, _),
  e = o("a4", i("<!><!><!><!>", "D%b%D", void 0, [c, b])),
  f = v(0),
  g = d(5, null, s([u(b, 0), m(5)])),
  k = d(4, null, s([u(c, 0), m(4)])),
  h = d(3, (a, n) => f(a, n ? e : null), f);
s([h, k, g]);
