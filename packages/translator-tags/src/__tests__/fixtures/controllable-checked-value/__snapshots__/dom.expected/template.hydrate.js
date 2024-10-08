// size: 351 (min) 175 (brotli)

import {
  register as n,
  checkedValueChangeEffect as o,
  queueSource as t,
  value as c,
  checkedValueAttr as i,
  data as m,
  init as a,
} from "@marko/runtime-tags/dom";
const f = c(4, (n, o) => {
  i(n[0], o, !0, "a"), i(n[1], o, !0, "b"), i(n[2], o, !0, "c"), m(n[3], o);
});
n("a0", (n) => {
  o(n[0], function (o) {
    t(n, f, o);
  }),
    o(n[1], function (o) {
      t(n, f, o);
    }),
    o(n[2], function (o) {
      t(n, f, o);
    });
}),
  a();
