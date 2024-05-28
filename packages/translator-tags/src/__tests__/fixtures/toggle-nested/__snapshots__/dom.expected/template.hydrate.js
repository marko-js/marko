// size: 665 (min) 315 (brotli)

import {
  registerSubscriber as n,
  dynamicClosure as l,
  data as o,
  registerRenderer as d,
  createRenderer as i,
  value as a,
  intersections as s,
  inConditionalScope as u,
  dynamicSubscribers as m,
  closure as p,
  conditional as v,
} from "@marko/runtime-tags/dom";
const r = d(
    "c",
    i("<span> </span>", "D ", void 0, [
      n(
        "b",
        l(
          5,
          (n, l) => o(n[0], l),
          (n) => n._._,
        ),
      ),
    ]),
  ),
  t = d(
    "e",
    i("<span> </span>", "D ", void 0, [
      n(
        "d",
        l(
          4,
          (n, l) => o(n[0], l),
          (n) => n._._,
        ),
      ),
    ]),
  ),
  D = v(1),
  _ = v(0),
  b = p(5, (n, l) => D(n, l ? r : null), void 0, D),
  c = p(4, (n, l) => _(n, l ? t : null), void 0, _),
  e = d("f", i("<!><!><!><!>", "D%b%D", void 0, [c, b])),
  f = v(0),
  g = a(5, null, s([u(b, 0), m(5)])),
  k = a(4, null, s([u(c, 0), m(4)])),
  h = a(3, (n, l) => f(n, l ? e : null), f);
s([h, k, g]);
