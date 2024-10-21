// size: 448 (min) 265 (brotli)

import {
  register as t,
  on as o,
  registerSubscriber as n,
  dynamicClosure as c,
  data as r,
  queueEffect as u,
  createRendererWithOwner as b,
  queueSource as i,
  value as m,
  dynamicSubscribers as s,
  init as l,
} from "@marko/runtime-tags/dom";
const a = t("b0", (t) =>
    o(
      t[0],
      "click",
      ((t) => {
        const {
          _: { 1: o },
        } = t;
        return function () {
          i(t._, e, o + 1);
        };
      })(t),
    ),
  ),
  d = n(
    "b1",
    c(1, (t, o) => {
      r(t[1], o), u(t, a);
    }),
  );
t(
  "b2",
  b("<button> </button>", " D ", void 0, () => [d]),
);
const e = m(1, null, () => s(1));
l();
