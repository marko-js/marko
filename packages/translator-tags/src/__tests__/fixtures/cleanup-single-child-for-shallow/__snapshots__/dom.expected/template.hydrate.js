// size: 893 (min) 478 (brotli)

import {
  register as n,
  getAbortSignal as o,
  value as t,
  intersections as c,
  data as i,
  intersection as r,
  resetAbortSignal as e,
  queueEffect as s,
  closure as d,
  inChild as u,
  registerRenderer as l,
  createRenderer as m,
  inLoopScope as a,
  on as b,
  queueSource as v,
  loopOf as f,
  init as g,
} from "@marko/runtime-tags/dom";
const k = n("a0", (n) => {
    const { 3: t, 4: c } = n;
    c(`mounted ${t}`),
      (o(n, 0).onabort = ((n) => {
        const { 3: o, 4: t } = n;
        return () => {
          t(`destroyed ${o}`);
        };
      })(n));
  }),
  $ = r(2, (n) => {
    e(n, 0), s(n, k);
  }),
  h = t(4, null, $),
  p = t(3, (n, o) => i(n[0], o), $);
c([p, h]),
  n(
    "b0",
    (n) =>
      function (o) {
        n[1].innerHTML += "\n" + o;
      },
  );
const y = d(4, (n, o) => h(n[0], o), void 0, u(0, h)),
  D = t(2, (n, o) => p(n[0], o), u(0, p)),
  H = f(
    2,
    l(
      "b1",
      m(
        "<div> </div>",
        "/D l&",
        (n) => {
          n[0];
        },
        [y],
        void 0,
        t(1, (n, o) => D(n, o[0]), D),
      ),
    ),
  );
a(y, 2);
const L = n("b2", (n) =>
    b(
      n[0],
      "click",
      ((n) => {
        const { 3: o } = n;
        return function () {
          v(n, M, o.length ? o.slice(0, -1) : [1, 2, 3]);
        };
      })(n),
    ),
  ),
  M = t(
    3,
    (n, o) => {
      s(n, L), H(n, [o]);
    },
    H,
  );
g();
