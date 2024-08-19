// size: 445 (min) 251 (brotli)

import {
  register as t,
  on as o,
  registerSubscriber as n,
  dynamicClosure as c,
  data as r,
  queueEffect as u,
  registerRenderer as b,
  createRenderer as i,
  value as m,
  dynamicSubscribers as s,
  queueSource as l,
  init as a,
} from "@marko/runtime-tags/dom";
const d = t("b0", (t) =>
  o(
    t[0],
    "click",
    ((t) => {
      const {
        _: { 1: o },
      } = t;
      return function () {
        l(t._, e, o + 1);
      };
    })(t),
  ),
);
b(
  "b2",
  i("<button> </button>", " D ", void 0, [
    n(
      "b1",
      c(1, (t, o) => {
        r(t[1], o), u(t, d);
      }),
    ),
  ]),
);
const e = m(1, null, s(1));
a();
