// size: 471 (min) 273 (brotli)

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
  value as s,
  dynamicSubscribers as l,
  queueSource as a,
  init as d,
} from "@marko/runtime-tags/dom";
const e = t("b1", (t) =>
  o(
    t[0],
    "click",
    ((t) => {
      const {
        _: { 1: o },
      } = t;
      return function () {
        a(t._, f, o + 1);
      };
    })(t),
  ),
);
m(
  0,
  b(
    "b3",
    i("<button> </button>", " D ", void 0, [
      n(
        "b2",
        c(1, (t, o) => {
          r(t[1], o), u(t, e);
        }),
      ),
    ]),
  ),
);
const f = s(1, null, l(1));
d();
