// size: 467 (min) 259 (brotli)

import {
  dynamicTagAttrs as c,
  registerSubscriber as o,
  dynamicClosure as n,
  data as t,
  register as m,
  createRendererWithOwner as b,
  on as i,
  state as r,
  dynamicSubscribers as l,
  init as s,
} from "@marko/runtime-tags/dom";
c(0);
o(
  "b0",
  n(
    4,
    (c, o) => t(c[2], o),
    (c) => c._._,
  ),
);
const u = o(
    "b1",
    n(4, (c, o) => t(c[2], o)),
  ),
  a = n(3, (c, o) => t(c[1], o));
m(
  "b2",
  b(
    "<!> <!> <!>",
    "%c%c%",
    (c) => {
      t(c[0], 1);
    },
    () => [u, a],
  ),
);
const f = r(4, null, () => l(4));
m("b3", (c) =>
  i(c[0], "click", function () {
    f(c, 4);
  }),
),
  s();
