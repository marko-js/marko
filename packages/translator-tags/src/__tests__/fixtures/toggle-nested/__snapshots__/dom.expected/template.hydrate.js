// size: 520 (min) 239 (brotli)

import {
  registerSubscriber as a,
  dynamicClosure as o,
  data as n,
  registerRenderer as i,
  createRenderer as d,
  closure as s,
  conditional as m,
} from "@marko/runtime-tags/dom";
const p = a(
    "a0",
    o(
      5,
      (a, o) => n(a[0], o),
      (a) => a._._,
    ),
  ),
  v = i(
    "a1",
    d("<span> </span>", "D ", void 0, () => [p]),
  ),
  l = a(
    "a2",
    o(
      4,
      (a, o) => n(a[0], o),
      (a) => a._._,
    ),
  ),
  r = i(
    "a3",
    d("<span> </span>", "D ", void 0, () => [l]),
  ),
  t = m(1),
  D = m(0),
  _ = s(
    5,
    (a, o) => t(a, o ? v : null),
    void 0,
    () => t,
  ),
  u = s(
    4,
    (a, o) => D(a, o ? r : null),
    void 0,
    () => D,
  );
i(
  "a4",
  d("<!><!><!><!>", "D%b%D", void 0, () => [u, _]),
);
