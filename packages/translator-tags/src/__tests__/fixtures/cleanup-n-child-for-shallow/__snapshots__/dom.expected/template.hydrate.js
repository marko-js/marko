// size: 937 (min) 483 (brotli)

import {
  register as n,
  getAbortSignal as o,
  value as t,
  intersection as i,
  resetAbortSignal as r,
  queueEffect as c,
  data as s,
  registerRenderer as e,
  createRenderer as d,
  on as l,
  closure as u,
  inChild as a,
  queueSource as m,
  loopOf as p,
  init as b,
} from "@marko/runtime-tags/dom";
const v = n("a0", (n) => {
    const { 5: t, 6: i } = n;
    i(`mounted ${t}`),
      (o(n, 0).onabort = ((n) => {
        const { 5: o, 6: t } = n;
        return () => {
          t(`destroyed ${o}`);
        };
      })(n));
  }),
  f = i(2, (n) => {
    r(n, 0), c(n, v);
  }),
  D = t(6, null, () => f),
  g = t(
    5,
    (n, o) => {
      s(n[0], o), s(n[1], o), s(n[2], o);
    },
    () => f,
  );
n(
  "b0",
  (n) =>
    function (o) {
      n[1].innerHTML += "\n" + o;
    },
);
const k = u(
    4,
    (n, o) => D(n[0], o),
    void 0,
    () => a(0, D),
  ),
  $ = t(
    2,
    (n, o) => g(n[0], o),
    () => a(0, g),
  ),
  h = t(
    1,
    (n, o) => $(n, o[0]),
    () => $,
  ),
  y = p(
    2,
    e(
      "b1",
      d(
        "<div> </div><span> </span><p> </p>",
        "/D lD lD l&",
        (n) => {
          n[0];
        },
        () => [k],
        void 0,
        () => h,
      ),
    ),
  ),
  H = n("b2", (n) =>
    l(
      n[0],
      "click",
      ((n) => {
        const { 3: o } = n;
        return function () {
          m(n, L, o.length ? o.slice(0, -1) : [1, 2, 3]);
        };
      })(n),
    ),
  ),
  L = t(
    3,
    (n, o) => {
      c(n, H), y(n, [o]);
    },
    () => y,
  );
b();
