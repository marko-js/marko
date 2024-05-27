// size: 464 (min) 247 (brotli)

import {
  registerSubscriber as c,
  dynamicClosure as o,
  data as n,
  registerRenderer as t,
  createRenderer as m,
  value as i,
  dynamicSubscribers as r,
  register as f,
  on as l,
  queueSource as s,
  init as u,
} from "@marko/runtime-tags/dom";
c(
  "d",
  o(
    4,
    (c, o) => n(c[2], o),
    (c) => c._._,
  ),
);
const a = c(
  "e",
  o(4, (c, o) => n(c[2], o)),
);
t(
  "f",
  m(
    "<!> <!> <!>",
    "%c%c%",
    (c) => {
      n(c[0], 1);
    },
    [o(3, (c, o) => n(c[1], o)), a],
  ),
);
const d = i(4, null, r(4));
r(3);
f("g", (c) =>
  l(
    c[0],
    "click",
    ((c) =>
      function () {
        s(c, d, 4);
      })(c),
  ),
),
  u();
