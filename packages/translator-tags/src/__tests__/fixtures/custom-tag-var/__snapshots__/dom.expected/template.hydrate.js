// size: 349 (min) 228 (brotli)

import {
  register as o,
  on as t,
  queueSource as c,
  value as n,
  data as r,
  queueEffect as m,
  tagVarSignal as i,
  registerBoundSignal as s,
  init as u,
} from "@marko/runtime-tags/dom";
const a = o("EMsB2Rcx", (o) =>
    t(
      o[0],
      "click",
      ((o) => {
        const { 2: t } = o;
        return function () {
          c(o, e, t + 1);
        };
      })(o),
    ),
  ),
  e = n(
    2,
    (o, t) => {
      r(o[1], t), m(o, a), i(o, t);
    },
    i,
  );
s(
  "pAyRIyjW",
  n(2, (o, t) => r(o[1], t)),
),
  u();
