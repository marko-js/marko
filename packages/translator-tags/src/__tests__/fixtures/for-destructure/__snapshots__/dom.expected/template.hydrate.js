// size: 615 (min) 339 (brotli)

import {
  register as i,
  createRenderer as c,
  on as t,
  value as n,
  state as o,
  queueEffect as r,
  loopOf as a,
  data as e,
  init as d,
} from "@marko/runtime-tags/dom";
const s = n(5, (i, c) => e(i[1], c)),
  m = n(4, (i, c) => e(i[0], c)),
  v = n(3, (i, c) => {
    m(i, c.name), s(i, c.description);
  }),
  u = n(2, (i, c) => v(i, c[0])),
  p = a(
    0,
    i(
      "a0",
      c("<div><!>: <!></div>", "D%c%", void 0, void 0, void 0, () => u),
    ),
  ),
  f = i("a1", (i) => {
    t(
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
      t(
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
  k = o(3, (i, c) => {
    r(i, f), p(i, [c]);
  });
d();
