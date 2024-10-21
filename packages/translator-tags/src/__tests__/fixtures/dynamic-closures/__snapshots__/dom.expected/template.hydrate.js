// size: 460 (min) 255 (brotli)

import {
  registerSubscriber as c,
  dynamicClosure as o,
  data as n,
  register as t,
  createRendererWithOwner as m,
  on as b,
  queueSource as i,
  value as r,
  dynamicSubscribers as l,
  init as s,
} from "@marko/runtime-tags/dom";
c(
  "b0",
  o(
    4,
    (c, o) => n(c[2], o),
    (c) => c._._,
  ),
);
const u = c(
    "b1",
    o(4, (c, o) => n(c[2], o)),
  ),
  a = o(3, (c, o) => n(c[1], o));
t(
  "b2",
  m(
    "<!> <!> <!>",
    "%c%c%",
    (c) => {
      n(c[0], 1);
    },
    () => [a, u],
  ),
);
const f = r(4, null, () => l(4));
t("b3", (c) =>
  b(c[0], "click", function () {
    i(c, f, 4);
  }),
),
  s();
