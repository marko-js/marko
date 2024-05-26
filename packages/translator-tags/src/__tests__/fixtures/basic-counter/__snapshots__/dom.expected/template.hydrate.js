// size: 259 (min) 174 (brotli)

import {
  register as t,
  on as o,
  queueSource as n,
  value as r,
  data as c,
  queueEffect as m,
  init as i,
} from "@marko/runtime-tags/dom";
const e = t("eSP3qy+t", (t) =>
    o(
      t[0],
      "click",
      ((t) => {
        const { 2: o } = t;
        return function () {
          n(t, s, o + 1);
        };
      })(t),
    ),
  ),
  s = r(2, (t, o) => {
    c(t[1], o), m(t, e);
  });
i();
