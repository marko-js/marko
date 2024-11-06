// size: 227 (min) 154 (brotli)

import {
  effect as o,
  on as t,
  state as r,
  data as c,
  init as m,
} from "@marko/runtime-tags/dom";
const n = o("a0", (o) => {
    const { 2: r } = o;
    t(
      o[0],
      "click",
      r <= 1 &&
        ((o) => {
          const { 2: t } = o;
          return () => {
            s(o, t + 1);
          };
        })(o),
    );
  }),
  s = r(2, (o, t) => {
    c(o[1], t), n(o);
  });
m();
