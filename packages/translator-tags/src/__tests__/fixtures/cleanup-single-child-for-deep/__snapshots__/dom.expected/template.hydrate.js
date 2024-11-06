// size: 1257 (min) 593 (brotli)

import {
  register as n,
  getAbortSignal as o,
  value as i,
  intersection as t,
  resetAbortSignal as d,
  queueEffect as l,
  data as r,
  createRenderer as v,
  on as c,
  dynamicClosure as e,
  inChild as s,
  closure as u,
  state as $,
  intersections as b,
  inLoopScope as m,
  loopOf as a,
  init as D,
} from "@marko/runtime-tags/dom";
const f = "<div> </div>",
  _ = n("a0", (n) => {
    o(n, 0).onabort = ((n) => {
      const { 3: o, 4: i } = n;
      return () => {
        i(`destroyed ${o}`);
      };
    })(n);
  }),
  g = t(2, (n) => {
    d(n, 0), l(n, _);
  }),
  k = i(4, null, () => g),
  h = i(
    3,
    (n, o) => r(n[0], o),
    () => g,
  );
n(
  "b0",
  (n) =>
    function (o) {
      n[1].innerHTML += "\n" + o;
    },
);
const p = t(
    2,
    (n) => {
      const {
        _: { 3: o },
        2: i,
      } = n;
      h(n[0], `${o}.${i}`);
    },
    () => s(0, h),
  ),
  y = e(
    4,
    (n, o) => k(n[0], o),
    (n) => n._._,
    () => s(0, k),
  ),
  H = u(3, null, void 0, () => p),
  L = i(2, null, () => p),
  M = i(
    1,
    (n, o) => L(n, o[0]),
    () => L,
  ),
  T = a(
    1,
    n(
      "b1",
      v(
        `<div>${f}</div>`,
        "D/D l&",
        (n) => {
          n[0];
        },
        () => [y, H],
        void 0,
        () => M,
      ),
    ),
  ),
  j = u(
    4,
    (n, o) => k(n[0], o),
    void 0,
    () => s(0, k),
  ),
  q = i(
    3,
    (n, o) => h(n[0], `${o}`),
    () => b([s(0, h), m(H, 1)]),
  ),
  w = u(
    3,
    (n, o) => T(n, [o]),
    void 0,
    () => T,
  ),
  x = i(
    2,
    (n, o) => q(n, o[0]),
    () => q,
  ),
  z = a(
    2,
    n(
      "b2",
      v(
        `<div>${f}<!></div>`,
        "D/D l&%",
        (n) => {
          n[0];
        },
        () => [j, w],
        void 0,
        () => x,
      ),
    ),
  ),
  A = n("b3", (n) =>
    c(
      n[0],
      "click",
      ((n) => {
        const { 3: o } = n;
        return function () {
          B(n, o.length ? o.slice(0, -1) : [1, 2, 3]);
        };
      })(n),
    ),
  ),
  B = $(
    3,
    (n, o) => {
      l(n, A), z(n, [o]);
    },
    () => b([z, m(w, 2)]),
  );
D();
