// size: 700 (min) 348 (brotli)

import {
  registerSubscriber as l,
  dynamicClosure as o,
  data as n,
  registerRenderer as d,
  createRenderer as i,
  value as m,
  intersections as p,
  inConditionalScope as s,
  dynamicSubscribers as a,
  closure as u,
  conditional as v,
} from "@marko/runtime-tags/dom";
const r = d(
    "JM1k1o0g",
    i("<span> </span>", "D ", void 0, [
      l(
        "pj+SLeFo",
        o(
          5,
          (l, o) => n(l[0], o),
          (l) => l._._,
        ),
      ),
    ]),
  ),
  t = d(
    "lp3m4Vl+",
    i("<span> </span>", "D ", void 0, [
      l(
        "VmHQ9TEs",
        o(
          4,
          (l, o) => n(l[0], o),
          (l) => l._._,
        ),
      ),
    ]),
  ),
  D = v(1),
  _ = v(0),
  b = u(5, (l, o) => D(l, o ? r : null), void 0, D),
  e = u(4, (l, o) => _(l, o ? t : null), void 0, _),
  f = d("ybdJ5yFf", i("<!><!><!><!>", "D%b%D", void 0, [e, b])),
  g = v(0),
  k = m(5, null, p([s(b, 0), a(5)])),
  y = m(4, null, p([s(e, 0), a(4)])),
  F = m(3, (l, o) => g(l, o ? f : null), g);
p([F, y, k]);
