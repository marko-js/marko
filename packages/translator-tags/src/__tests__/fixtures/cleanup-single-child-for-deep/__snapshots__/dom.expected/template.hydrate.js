// size: 1232 (min) 606 (brotli)

import {
  register as n,
  getAbortSignal as o,
  value as i,
  intersections as t,
  data as d,
  intersection as c,
  resetAbortSignal as l,
  queueEffect as r,
  dynamicClosure as v,
  inChild as s,
  registerRenderer as e,
  createRenderer as u,
  closure as $,
  inLoopScope as b,
  dynamicSubscribers as m,
  on as a,
  loopOf as D,
  queueSource as f,
  init as _,
} from "@marko/runtime-tags/dom";
const g = "<div> </div>",
  k = n("a0", (n) => {
    o(n, 0).onabort = ((n) => {
      const { 3: o, 4: i } = n;
      return () => {
        i(`destroyed ${o}`);
      };
    })(n);
  }),
  h = c(2, (n) => {
    l(n, 0), r(n, k);
  }),
  p = i(4, null, h),
  y = i(3, (n, o) => d(n[0], o), h);
t([y, p]),
  n(
    "b0",
    (n) =>
      function (o) {
        n[1].innerHTML += "\n" + o;
      },
  );
const H = c(2, (n) => {
    const {
      _: { 3: o },
      2: i,
    } = n;
    y(n[0], `${o}.${i}`);
  }),
  L = v(
    4,
    (n, o) => p(n[0], o),
    (n) => n._._,
    s(0, p),
  ),
  M = $(3, null, void 0, H),
  T = i(2, null, H),
  j = D(
    1,
    e(
      "b1",
      u(
        `<div>${g}</div>`,
        "D/D l&",
        (n) => {
          n[0];
        },
        [L, M],
        void 0,
        i(1, (n, o) => T(n, o[0]), T),
      ),
    ),
  ),
  q = $(4, (n, o) => p(n[0], o), void 0, s(0, p)),
  w = i(3, (n, o) => y(n[0], `${o}`), t([s(0, y), b(M, 1)])),
  x = $(3, (n, o) => j(n, [o]), void 0, j),
  z = D(
    2,
    e(
      "b2",
      u(
        `<div>${g}<!></div>`,
        "D/D l&%",
        (n) => {
          n[0];
        },
        [q, x],
        void 0,
        i(2, (n, o) => w(n, o[0]), w),
      ),
    ),
  );
t([b(q, 2), m(4)]);
const A = n("b3", (n) =>
    a(
      n[0],
      "click",
      ((n) => {
        const { 3: o } = n;
        return function () {
          f(n, B, o.length ? o.slice(0, -1) : [1, 2, 3]);
        };
      })(n),
    ),
  ),
  B = i(
    3,
    (n, o) => {
      r(n, A), z(n, [o]);
    },
    t([z, b(x, 2)]),
  );
_();
