// size: 276 (min) 187 (brotli)

import {
  register as m,
  on as o,
  initValue as r,
  queueSource as t,
  value as c,
  data as n,
  queueEffect as i,
  init as s,
} from "@marko/runtime-tags/dom";
const a = m("mEl8BDJN", (m) =>
    o(
      m[0],
      "click",
      ((m) => {
        const { 6: o } = m;
        return () => (t(m, e, o + 1), o);
      })(m),
    ),
  ),
  e = c(6, (m, o) => {
    n(m[2], o), i(m, a);
  });
r(6, e), s();
