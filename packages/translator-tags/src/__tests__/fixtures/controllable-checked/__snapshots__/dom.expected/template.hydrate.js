// size: 261 (min) 184 (brotli)

import {
  register as n,
  checkedChangeEffect as o,
  queueSource as t,
  value as i,
  checkedAttr as m,
  data as r,
  init as a,
} from "@marko/runtime-tags/dom";
const c = i(2, (n, o) => {
  m(n[0], o, function (n) {
    o = n;
  }),
    r(n[1], String(o));
});
n("a0", (n) =>
  o(n[0], function (o) {
    t(n, c, o);
  }),
),
  a();
