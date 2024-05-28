// size: 468 (min) 267 (brotli)

import {
  register as t,
  on as o,
  registerSubscriber as n,
  dynamicClosure as c,
  data as r,
  queueEffect as u,
  registerRenderer as i,
  createRenderer as m,
  dynamicTagAttrs as s,
  value as d,
  dynamicSubscribers as e,
  queueSource as l,
  init as a,
} from "@marko/runtime-tags/dom";
const b = t("c", (t) =>
  o(
    t[0],
    "click",
    ((t) => {
      const {
        _: { 1: o },
      } = t;
      return function () {
        l(t._, f, o + 1);
      };
    })(t),
  ),
);
s(
  0,
  i(
    "e",
    m("<button> </button>", " D ", void 0, [
      n(
        "d",
        c(1, (t, o) => {
          r(t[1], o), u(t, b);
        }),
      ),
    ]),
  ),
);
const f = d(1, null, e(1));
a();
