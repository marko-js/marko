// size: 462 (min) 244 (brotli)

import {
  registerSubscriber as c,
  dynamicClosure as o,
  data as n,
  registerRenderer as t,
  createRenderer as m,
  value as b,
  dynamicSubscribers as i,
  register as r,
  on as l,
  queueSource as s,
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
);
t(
  "b2",
  m(
    "<!> <!> <!>",
    "%c%c%",
    (c) => {
      n(c[0], 1);
    },
    [o(3, (c, o) => n(c[1], o)), a],
  ),
);
const f = b(4, null, i(4));
i(3),
  r("b3", (c) =>
    l(c[0], "click", function () {
      s(c, f, 4);
    }),
  ),
  u();
