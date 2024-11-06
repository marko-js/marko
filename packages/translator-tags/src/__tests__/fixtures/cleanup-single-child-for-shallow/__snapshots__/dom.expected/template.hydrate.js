// size: 848 (min) 437 (brotli)

import {
  effect as n,
  getAbortSignal as o,
  value as t,
  intersection as i,
  resetAbortSignal as r,
  data as c,
  register as e,
  createRenderer as d,
  on as s,
  closure as u,
  inChild as l,
  state as m,
  loopOf as a,
  init as b,
} from "@marko/runtime-tags/dom";
const v = n("a0", (n) => {
    const { 3: t, 4: i } = n;
    i(`mounted ${t}`),
      (o(n, 0).onabort = ((n) => {
        const { 3: o, 4: t } = n;
        return () => {
          t(`destroyed ${o}`);
        };
      })(n));
  }),
  f = i(2, (n) => {
    r(n, 0), v(n);
  }),
  g = t(4, null, () => f),
  k = t(
    3,
    (n, o) => c(n[0], o),
    () => f,
  );
e(
  "b0",
  (n) =>
    function (o) {
      n[1].innerHTML += "\n" + o;
    },
);
const $ = u(
    4,
    (n, o) => g(n[0], o),
    void 0,
    () => l(0, g),
  ),
  h = t(
    2,
    (n, o) => k(n[0], o),
    () => l(0, k),
  ),
  p = t(
    1,
    (n, o) => h(n, o[0]),
    () => h,
  ),
  y = a(
    2,
    e(
      "b1",
      d(
        "<div> </div>",
        "/D l&",
        (n) => {
          n[0];
        },
        () => [$],
        void 0,
        () => p,
      ),
    ),
  ),
  D = n("b2", (n) =>
    s(
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
  H = m(
    3,
    (n, o) => {
      D(n), y(n, [o]);
    },
    () => y,
  );
b();
