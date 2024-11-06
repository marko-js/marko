// size: 460 (min) 283 (brotli)

import {
  dynamicTagAttrs as t,
  register as o,
  on as n,
  registerSubscriber as c,
  dynamicClosure as r,
  data as u,
  queueEffect as b,
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
      u(t[1], o), b(t, a);
    }),
  );
t(
  0,
  o(
    "b2",
    i("<button> </button>", " D ", void 0, () => [d]),
  ),
);
const e = m(1, null, () => s(1));
l();
