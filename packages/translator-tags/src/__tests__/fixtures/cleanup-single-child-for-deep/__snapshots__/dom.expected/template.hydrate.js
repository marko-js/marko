// size: 1287 (min) 602 (brotli)

import {
  register as n,
  getAbortSignal as o,
  value as i,
  intersection as t,
  resetAbortSignal as d,
  queueEffect as l,
  data as r,
  registerRenderer as v,
  createRenderer as c,
  on as e,
  dynamicClosure as s,
  inChild as u,
  closure as $,
  queueSource as b,
  intersections as m,
  inLoopScope as a,
  loopOf as D,
  init as f,
} from "@marko/runtime-tags/dom";
const _ = "<div> </div>",
  g = n("a0", (n) => {
    o(n, 0).onabort = ((n) => {
      const { 3: o, 4: i } = n;
      return () => {
        i(`destroyed ${o}`);
      };
    })(n);
  }),
  k = t(2, (n) => {
    d(n, 0), l(n, g);
  }),
  h = i(4, null, () => k),
  p = i(
    3,
    (n, o) => r(n[0], o),
    () => k,
  );
n(
  "b0",
  (n) =>
    function (o) {
      n[1].innerHTML += "\n" + o;
    },
);
const y = t(
    2,
    (n) => {
      const {
        _: { 3: o },
        2: i,
      } = n;
      p(n[0], `${o}.${i}`);
    },
    () => u(0, p),
  ),
  H = s(
    4,
    (n, o) => h(n[0], o),
    (n) => n._._,
    () => u(0, h),
  ),
  L = $(3, null, void 0, () => y),
  M = i(2, null, () => y),
  T = i(
    1,
    (n, o) => M(n, o[0]),
    () => M,
  ),
  j = D(
    1,
    v(
      "b1",
      c(
        `<div>${_}</div>`,
        "D/D l&",
        (n) => {
          n[0];
        },
        () => [H, L],
        void 0,
        () => T,
      ),
    ),
  ),
  q = $(
    4,
    (n, o) => h(n[0], o),
    void 0,
    () => u(0, h),
  ),
  w = i(
    3,
    (n, o) => p(n[0], `${o}`),
    () => m([u(0, p), a(L, 1)]),
  ),
  x = $(
    3,
    (n, o) => j(n, [o]),
    void 0,
    () => j,
  ),
  z = i(
    2,
    (n, o) => w(n, o[0]),
    () => w,
  ),
  A = D(
    2,
    v(
      "b2",
      c(
        `<div>${_}<!></div>`,
        "D/D l&%",
        (n) => {
          n[0];
        },
        () => [q, x],
        void 0,
        () => z,
      ),
    ),
  ),
  B = n("b3", (n) =>
    e(
      n[0],
      "click",
      ((n) => {
        const { 3: o } = n;
        return function () {
          b(n, C, o.length ? o.slice(0, -1) : [1, 2, 3]);
        };
      })(n),
    ),
  ),
  C = i(
    3,
    (n, o) => {
      l(n, B), A(n, [o]);
    },
    () => m([A, a(x, 2)]),
  );
f();
