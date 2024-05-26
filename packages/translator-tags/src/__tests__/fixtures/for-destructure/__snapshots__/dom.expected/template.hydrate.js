// size: 627 (min) 341 (brotli)

import {
  register as i,
  createRenderer as t,
  on as c,
  value as o,
  queueSource as n,
  queueEffect as r,
  loopOf as e,
  data as s,
  init as a,
} from "@marko/runtime-tags/dom";
const d = o(5, (i, t) => s(i[1], t)),
  m = o(4, (i, t) => s(i[0], t)),
  v = o(3, (i, t) => {
    m(i, t.name), d(i, t.description);
  }),
  u = e(
    0,
    i(
      "7swXtCmY",
      t(
        "<div><!>: <!></div>",
        "D%c%",
        void 0,
        void 0,
        void 0,
        o(2, (i, t) => v(i, t[0])),
      ),
    ),
  ),
  p = i("boz4JJ9D", (i) => {
    c(
      i[1],
      "click",
      ((i) => {
        const { 3: t } = i;
        return function () {
          n(i, J, [
            ...t,
            { name: "JavaScript", description: "Java, but scriptier" },
          ]);
        };
      })(i),
    ),
      c(
        i[2],
        "click",
        ((i) => {
          const { 3: t } = i;
          return function () {
            n(i, J, t.slice(0, -1));
          };
        })(i),
      );
  }),
  J = o(3, (i, t) => {
    r(i, p), u(i, [t]);
  });
a();
