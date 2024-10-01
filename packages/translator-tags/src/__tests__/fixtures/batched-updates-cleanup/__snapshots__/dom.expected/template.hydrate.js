// size: 483 (min) 300 (brotli)

import {
  registerRenderer as n,
  createRenderer as o,
  register as t,
  on as a,
  closure as r,
  data as c,
  queueSource as i,
  value as l,
  queueEffect as m,
  conditional as s,
  inConditionalScope as u,
  init as e,
} from "@marko/runtime-tags/dom";
const p = r(3, (n, o) => c(n[0], o)),
  d = n(
    "a0",
    o("<span> </span>", "D ", void 0, () => [p]),
  ),
  f = s(1),
  k = l(3, null, () => u(p, 1)),
  b = t("a1", (n) =>
    a(
      n[0],
      "click",
      ((n) => {
        const { 2: o } = n;
        return function () {
          i(n, k, "bye"), i(n, g, !o);
        };
      })(n),
    ),
  ),
  g = l(
    2,
    (n, o) => {
      m(n, b), f(n, o ? d : null);
    },
    () => f,
  );
e();
