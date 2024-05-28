// size: 266 (min) 171 (brotli)

import {
  register as o,
  on as t,
  queueSource as c,
  value as r,
  data as m,
  queueEffect as n,
  init as s,
} from "@marko/runtime-tags/dom";
const i = o("c", (o) => {
    const { 2: r } = o;
    t(
      o[0],
      "click",
      r <= 1 &&
        ((o) => {
          const { 2: t } = o;
          return () => {
            c(o, a, t + 1);
          };
        })(o),
    );
  }),
  a = r(2, (o, t) => {
    m(o[1], t), n(o, i);
  });
s();
