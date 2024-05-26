// size: 489 (min) 286 (brotli)

import {
  register as t,
  on as o,
  registerSubscriber as n,
  dynamicClosure as c,
  data as m,
  queueEffect as r,
  registerRenderer as u,
  createRenderer as i,
  dynamicTagAttrs as l,
  value as s,
  dynamicSubscribers as a,
  queueSource as f,
  init as b,
} from "@marko/runtime-tags/dom";
const d = t("zQflGZ92", (t) =>
  o(
    t[0],
    "click",
    ((t) => {
      const {
        _: { 1: o },
      } = t;
      return function () {
        f(t._, e, o + 1);
      };
    })(t),
  ),
);
l(
  0,
  u(
    "65wABB/R",
    i("<button> </button>", " D ", void 0, [
      n(
        "vEZ9EYma",
        c(1, (t, o) => {
          m(t[1], o), r(t, d);
        }),
      ),
    ]),
  ),
);
const e = s(1, null, a(1));
b();
