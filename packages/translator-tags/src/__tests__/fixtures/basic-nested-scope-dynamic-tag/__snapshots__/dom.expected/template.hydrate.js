// size: 474 (min) 281 (brotli)

import {
  register as t,
  on as o,
  registerSubscriber as n,
  dynamicClosure as c,
  data as r,
  queueEffect as u,
  createRendererWithOwner as b,
  dynamicTagAttrs as i,
  queueSource as m,
  value as s,
  dynamicSubscribers as l,
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
          m(t._, f, o + 1);
        };
      })(t),
    ),
  ),
  e = n(
    "b1",
    c(1, (t, o) => {
      r(t[1], o), u(t, d);
    }),
  );
i(
  0,
  t(
    "b2",
    b("<button> </button>", " D ", void 0, () => [e]),
  ),
);
const f = s(1, null, () => l(1));
a();
