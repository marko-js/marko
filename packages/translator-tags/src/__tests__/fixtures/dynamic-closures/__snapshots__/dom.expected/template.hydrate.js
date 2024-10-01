// size: 473 (min) 256 (brotli)

import {
  registerSubscriber as c,
  dynamicClosure as o,
  data as n,
  registerRenderer as t,
  createRenderer as m,
  register as b,
  on as i,
  queueSource as r,
  value as l,
  dynamicSubscribers as s,
  init as u,
} from "@marko/runtime-tags/dom";
c(
  "b0",
  o(
    4,
    (c, o) => n(c[2], o),
    (c) => c._._,
  ),
);
const a = c(
    "b1",
    o(4, (c, o) => n(c[2], o)),
  ),
  f = o(3, (c, o) => n(c[1], o));
t(
  "b2",
  m(
    "<!> <!> <!>",
    "%c%c%",
    (c) => {
      n(c[0], 1);
    },
    () => [f, a],
  ),
);
const k = l(4, null, () => s(4));
b("b3", (c) =>
  i(c[0], "click", function () {
    r(c, k, 4);
  }),
),
  u();
