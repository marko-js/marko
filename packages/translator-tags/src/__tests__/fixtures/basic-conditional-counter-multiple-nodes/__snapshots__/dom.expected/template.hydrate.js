// size: 567 (min) 311 (brotli)

import {
  registerRenderer as n,
  createRenderer as c,
  register as t,
  on as o,
  value as i,
  queueEffect as r,
  inConditionalScope as u,
  closure as l,
  data as m,
  queueSource as e,
  conditional as s,
  init as f,
} from "@marko/runtime-tags/dom";
const k = l(4, (n, c) => m(n[0], c)),
  a = n("GIanLnfl", c("The count is <!>", "b%", void 0, [k])),
  d = s(2),
  b = t("VelBWtAk", (n) =>
    o(
      n[0],
      "click",
      ((n) => {
        const { 4: c } = n;
        return function () {
          e(n, g, c + 1);
        };
      })(n),
    ),
  ),
  g = i(4, (n, c) => r(n, b), u(k, 2)),
  h = t("cdnFP4cm", (n) =>
    o(
      n[1],
      "click",
      ((n) => {
        const { 3: c } = n;
        return function () {
          e(n, p, !c);
        };
      })(n),
    ),
  ),
  p = i(
    3,
    (n, c) => {
      r(n, h), d(n, c ? a : null);
    },
    d,
  );
f();
