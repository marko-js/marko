// size: 273 (min) 188 (brotli)

import {
  register as o,
  on as t,
  queueSource as r,
  value as c,
  data as m,
  queueEffect as n,
  init as s,
} from "@marko/runtime-tags/dom";
const i = o("NKly80L2", (o) => {
    const { 2: c } = o;
    t(
      o[0],
      "click",
      c <= 1 &&
        ((o) => {
          const { 2: t } = o;
          return () => {
            r(o, a, t + 1);
          };
        })(o),
    );
  }),
  a = c(2, (o, t) => {
    m(o[1], t), n(o, i);
  });
s();
