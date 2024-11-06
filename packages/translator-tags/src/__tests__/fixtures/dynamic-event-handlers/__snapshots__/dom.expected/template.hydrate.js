// size: 248 (min) 164 (brotli)

import {
  register as o,
  on as t,
  state as r,
  data as c,
  queueEffect as m,
  init as n,
} from "@marko/runtime-tags/dom";
const s = o("a0", (o) => {
    const { 2: r } = o;
    t(
      o[0],
      "click",
      r <= 1 &&
        ((o) => {
          const { 2: t } = o;
          return () => {
            a(o, t + 1);
          };
        })(o),
    );
  }),
  a = r(2, (o, t) => {
    c(o[1], t), m(o, s);
  });
n();
