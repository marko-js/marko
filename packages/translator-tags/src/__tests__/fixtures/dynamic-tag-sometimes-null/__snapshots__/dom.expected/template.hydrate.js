// size: 394 (min) 255 (brotli)

import {
  register as n,
  createRenderer as o,
  dynamicTagAttrs as t,
  on as r,
  queueSource as c,
  value as i,
  queueEffect as m,
  conditional as e,
  init as u,
} from "@marko/runtime-tags/dom";
const d = n("YUefkqVS", o("Body Content", "")),
  f = t(0, d),
  k = e(0, (n) => f(n, () => ({})), f),
  l = n("zSMGIWj6", (n) =>
    r(
      n[1],
      "click",
      ((n) => {
        const { 2: o } = n;
        return function () {
          c(n, s, o ? null : "div");
        };
      })(n),
    ),
  ),
  s = i(
    2,
    (n, o) => {
      m(n, l), k(n, o || d);
    },
    k,
  );
u();
