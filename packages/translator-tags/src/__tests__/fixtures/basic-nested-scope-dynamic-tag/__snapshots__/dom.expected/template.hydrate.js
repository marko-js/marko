// size: 487 (min) 278 (brotli)

import {
  register as t,
  on as o,
  registerSubscriber as n,
  dynamicClosure as c,
  data as r,
  queueEffect as u,
  registerRenderer as b,
  createRenderer as i,
  dynamicTagAttrs as m,
  queueSource as s,
  value as l,
  dynamicSubscribers as a,
  init as d,
} from "@marko/runtime-tags/dom";
const e = t("b0", (t) =>
    o(
      t[0],
      "click",
      ((t) => {
        const {
          _: { 1: o },
        } = t;
        return function () {
          s(t._, k, o + 1);
        };
      })(t),
    ),
  ),
  f = n(
    "b1",
    c(1, (t, o) => {
      r(t[1], o), u(t, e);
    }),
  );
m(
  0,
  b(
    "b2",
    i("<button> </button>", " D ", void 0, () => [f]),
  ),
);
const k = l(1, null, () => a(1));
d();
