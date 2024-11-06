// size: 453 (min) 273 (brotli)

import {
  dynamicTagAttrs as t,
  effect as o,
  on as n,
  registerSubscriber as c,
  dynamicClosure as r,
  data as u,
  register as b,
  createRendererWithOwner as i,
  state as m,
  dynamicSubscribers as s,
  init as l,
} from "@marko/runtime-tags/dom";
t(0);
const a = o("b0", (t) =>
    n(
      t[0],
      "click",
      ((t) => {
        const {
          _: { 1: o },
        } = t;
        return function () {
          e(t._, o + 1);
        };
      })(t),
    ),
  ),
  d = c(
    "b1",
    r(1, (t, o) => {
      u(t[1], o), a(t);
    }),
  );
t(
  0,
  b(
    "b2",
    i("<button> </button>", " D ", void 0, () => [d]),
  ),
);
const e = m(1, null, () => s(1));
l();
