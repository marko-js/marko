// size: 267 (min) 171 (brotli)

import {
  register as o,
  on as t,
  queueSource as r,
  value as c,
  data as m,
  queueEffect as n,
  init as s,
} from "@marko/runtime-tags/dom";
const a = o("a1", (o) => {
    const { 2: c } = o;
    t(
      o[0],
      "click",
      c <= 1 &&
        ((o) => {
          const { 2: t } = o;
          return () => {
            r(o, i, t + 1);
          };
        })(o),
    );
  }),
  i = c(2, (o, t) => {
    m(o[1], t), n(o, a);
  });
s();
