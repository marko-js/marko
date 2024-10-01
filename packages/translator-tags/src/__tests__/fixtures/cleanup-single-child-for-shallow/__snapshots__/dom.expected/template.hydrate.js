// size: 887 (min) 458 (brotli)

import {
  register as n,
  getAbortSignal as o,
  value as t,
  intersection as i,
  resetAbortSignal as r,
  queueEffect as c,
  data as e,
  registerRenderer as d,
  createRenderer as s,
  on as u,
  closure as l,
  inChild as m,
  queueSource as a,
  loopOf as b,
  init as v,
} from "@marko/runtime-tags/dom";
const f = n("a0", (n) => {
    const { 3: t, 4: i } = n;
    i(`mounted ${t}`),
      (o(n, 0).onabort = ((n) => {
        const { 3: o, 4: t } = n;
        return () => {
          t(`destroyed ${o}`);
        };
      })(n));
  }),
  g = i(2, (n) => {
    r(n, 0), c(n, f);
  }),
  k = t(4, null, () => g),
  $ = t(
    3,
    (n, o) => e(n[0], o),
    () => g,
  );
n(
  "b0",
  (n) =>
    function (o) {
      n[1].innerHTML += "\n" + o;
    },
);
const h = l(
    4,
    (n, o) => k(n[0], o),
    void 0,
    () => m(0, k),
  ),
  p = t(
    2,
    (n, o) => $(n[0], o),
    () => m(0, $),
  ),
  y = t(
    1,
    (n, o) => p(n, o[0]),
    () => p,
  ),
  D = b(
    2,
    d(
      "b1",
      s(
        "<div> </div>",
        "/D l&",
        (n) => {
          n[0];
        },
        () => [h],
        void 0,
        () => y,
      ),
    ),
  ),
  H = n("b2", (n) =>
    u(
      n[0],
      "click",
      ((n) => {
        const { 3: o } = n;
        return function () {
          a(n, L, o.length ? o.slice(0, -1) : [1, 2, 3]);
        };
      })(n),
    ),
  ),
  L = t(
    3,
    (n, o) => {
      c(n, H), D(n, [o]);
    },
    () => D,
  );
v();
