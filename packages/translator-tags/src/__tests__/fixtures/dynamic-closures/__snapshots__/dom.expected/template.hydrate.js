// size: 486 (min) 265 (brotli)

import {
  dynamicTagAttrs as c,
  registerSubscriber as o,
  dynamicClosure as n,
  data as t,
  register as m,
  createRendererWithOwner as b,
  on as i,
  queueSource as r,
  value as l,
  dynamicSubscribers as s,
  init as u,
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
const a = o(
    "b1",
    n(4, (c, o) => t(c[2], o)),
  ),
  f = n(3, (c, o) => t(c[1], o));
m(
  "b2",
  b(
    "<!> <!> <!>",
    "%c%c%",
    (c) => {
      t(c[0], 1);
    },
    () => [f, a],
  ),
);
const k = l(4, null, () => s(4));
m("b3", (c) =>
  i(c[0], "click", function () {
    r(c, k, 4);
  }),
),
  u();
