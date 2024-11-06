// size: 608 (min) 327 (brotli)

import {
  register as i,
  createRenderer as c,
  effect as t,
  on as n,
  value as o,
  state as r,
  loopOf as a,
  data as e,
  init as d,
} from "@marko/runtime-tags/dom";
const s = o(5, (i, c) => e(i[1], c)),
  m = o(4, (i, c) => e(i[0], c)),
  v = o(3, (i, c) => {
    m(i, c.name), s(i, c.description);
  }),
  u = o(2, (i, c) => v(i, c[0])),
  p = a(
    0,
    i(
      "a0",
      c("<div><!>: <!></div>", "D%c%", void 0, void 0, void 0, () => u),
    ),
  ),
  f = t("a1", (i) => {
    n(
      i[1],
      "click",
      ((i) => {
        const { 3: c } = i;
        return function () {
          k(i, [
            ...c,
            { name: "JavaScript", description: "Java, but scriptier" },
          ]);
        };
      })(i),
    ),
      n(
        i[2],
        "click",
        ((i) => {
          const { 3: c } = i;
          return function () {
            k(i, c.slice(0, -1));
          };
        })(i),
      );
  }),
  k = r(3, (i, c) => {
    f(i), p(i, [c]);
  });
d();
