// size: 442 (min) 255 (brotli)

import {
  register as t,
  on as o,
  registerSubscriber as n,
  dynamicClosure as c,
  data as r,
  queueEffect as u,
  registerRenderer as i,
  createRenderer as m,
  value as s,
  dynamicSubscribers as d,
  queueSource as e,
  init as f,
} from "@marko/runtime-tags/dom";
const l = t("d", (t) =>
  o(
    t[0],
    "click",
    ((t) => {
      const {
        _: { 1: o },
      } = t;
      return function () {
        e(t._, a, o + 1);
      };
    })(t),
  ),
);
i(
  "f",
  m("<button> </button>", " D ", void 0, [
    n(
      "e",
      c(1, (t, o) => {
        r(t[1], o), u(t, l);
      }),
    ),
  ]),
);
const a = s(1, null, d(1));
f();
