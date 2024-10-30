// size: 479 (min) 308 (brotli)

import {
  dynamicTagAttrs as t,
  register as o,
  on as n,
  registerSubscriber as c,
  dynamicClosure as r,
  data as u,
  queueEffect as b,
  createRendererWithOwner as i,
  queueSource as m,
  value as s,
  dynamicSubscribers as l,
  init as a,
} from "@marko/runtime-tags/dom";
t(0);
const d = o("b0", (t) =>
    n(
      t[0],
      "click",
      ((t) => {
        const {
          _: { 1: o },
        } = t;
        return function () {
          m(t._, f, o + 1);
        };
      })(t),
    ),
  ),
  e = c(
    "b1",
    r(1, (t, o) => {
      u(t[1], o), b(t, d);
    }),
  );
t(
  0,
  o(
    "b2",
    i("<button> </button>", " D ", void 0, () => [e]),
  ),
);
const f = s(1, null, () => l(1));
a();
