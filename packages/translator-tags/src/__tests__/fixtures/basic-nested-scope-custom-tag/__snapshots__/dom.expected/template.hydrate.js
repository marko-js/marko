// size: 463 (min) 273 (brotli)

import {
  register as t,
  on as o,
  registerSubscriber as n,
  dynamicClosure as i,
  data as c,
  queueEffect as u,
  registerRenderer as m,
  createRenderer as r,
  value as d,
  dynamicSubscribers as f,
  queueSource as s,
  init as b,
} from "@marko/runtime-tags/dom";
const k = t("ibmdBFfO", (t) =>
  o(
    t[0],
    "click",
    ((t) => {
      const {
        _: { 1: o },
      } = t;
      return function () {
        s(t._, l, o + 1);
      };
    })(t),
  ),
);
m(
  "710cJdfq",
  r("<button> </button>", " D ", void 0, [
    n(
      "qi7pYkui",
      i(1, (t, o) => {
        c(t[1], o), u(t, k);
      }),
    ),
  ]),
);
const l = d(1, null, f(1));
b();
