// size: 898 (min) 459 (brotli)

import {
  effect as n,
  getAbortSignal as o,
  value as t,
  intersection as i,
  resetAbortSignal as r,
  data as c,
  register as s,
  createRenderer as e,
  on as d,
  closure as l,
  inChild as u,
  state as a,
  loopOf as m,
  init as p,
} from "@marko/runtime-tags/dom";
const b = n("a0", (n) => {
    const { 5: t, 6: i } = n;
    i(`mounted ${t}`),
      (o(n, 0).onabort = ((n) => {
        const { 5: o, 6: t } = n;
        return () => {
          t(`destroyed ${o}`);
        };
      })(n));
  }),
  v = i(2, (n) => {
    r(n, 0), b(n);
  }),
  f = t(6, null, () => v),
  D = t(
    5,
    (n, o) => {
      c(n[0], o), c(n[1], o), c(n[2], o);
    },
    () => v,
  );
s(
  "b0",
  (n) =>
    function (o) {
      n[1].innerHTML += "\n" + o;
    },
);
const g = l(
    4,
    (n, o) => f(n[0], o),
    void 0,
    () => u(0, f),
  ),
  k = t(
    2,
    (n, o) => D(n[0], o),
    () => u(0, D),
  ),
  $ = t(
    1,
    (n, o) => k(n, o[0]),
    () => k,
  ),
  h = m(
    2,
    s(
      "b1",
      e(
        "<div> </div><span> </span><p> </p>",
        "/D lD lD l&",
        (n) => {
          n[0];
        },
        () => [g],
        void 0,
        () => $,
      ),
    ),
  ),
  y = n("b2", (n) =>
    d(
      n[0],
      "click",
      ((n) => {
        const { 3: o } = n;
        return function () {
          H(n, o.length ? o.slice(0, -1) : [1, 2, 3]);
        };
      })(n),
    ),
  ),
  H = a(
    3,
    (n, o) => {
      y(n), h(n, [o]);
    },
    () => h,
  );
p();
