// size: 943 (min) 491 (brotli)

import {
  register as n,
  getAbortSignal as o,
  value as t,
  intersections as c,
  data as i,
  intersection as r,
  resetAbortSignal as s,
  queueEffect as e,
  closure as d,
  inChild as l,
  registerRenderer as u,
  createRenderer as a,
  inLoopScope as m,
  on as p,
  queueSource as b,
  loopOf as v,
  init as f,
} from "@marko/runtime-tags/dom";
const D = n("a0", (n) => {
    const { 5: t, 6: c } = n;
    c(`mounted ${t}`),
      (o(n, 0).onabort = ((n) => {
        const { 5: o, 6: t } = n;
        return () => {
          t(`destroyed ${o}`);
        };
      })(n));
  }),
  g = r(2, (n) => {
    s(n, 0), e(n, D);
  }),
  k = t(6, null, g),
  $ = t(
    5,
    (n, o) => {
      i(n[0], o), i(n[1], o), i(n[2], o);
    },
    g,
  );
c([$, k]),
  n(
    "b0",
    (n) =>
      function (o) {
        n[1].innerHTML += "\n" + o;
      },
  );
const h = d(4, (n, o) => k(n[0], o), void 0, l(0, k)),
  y = t(2, (n, o) => $(n[0], o), l(0, $)),
  H = v(
    2,
    u(
      "b1",
      a(
        "<div> </div><span> </span><p> </p>",
        "/D lD lD l&",
        (n) => {
          n[0];
        },
        [h],
        void 0,
        t(1, (n, o) => y(n, o[0]), y),
      ),
    ),
  );
m(h, 2);
const L = n("b2", (n) =>
    p(
      n[0],
      "click",
      ((n) => {
        const { 3: o } = n;
        return function () {
          b(n, M, o.length ? o.slice(0, -1) : [1, 2, 3]);
        };
      })(n),
    ),
  ),
  M = t(
    3,
    (n, o) => {
      e(n, L), H(n, [o]);
    },
    H,
  );
f();
