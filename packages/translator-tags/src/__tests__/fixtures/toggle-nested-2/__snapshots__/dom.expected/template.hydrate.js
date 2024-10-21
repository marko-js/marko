// size: 899 (min) 407 (brotli)

import {
  register as n,
  on as t,
  registerSubscriber as o,
  dynamicClosure as u,
  data as c,
  queueEffect as i,
  createRenderer as l,
  queueSource as r,
  closure as a,
  value as _,
  dynamicSubscribers as d,
  inConditionalScope as b,
  conditional as e,
  init as m,
} from "@marko/runtime-tags/dom";
const s = n("a0", (n) =>
    t(
      n[0],
      "click",
      ((n) => {
        const {
          _: {
            _: { 4: t },
          },
        } = n;
        return function () {
          r(n._._, j, t + 1);
        };
      })(n),
    ),
  ),
  f = o(
    "a1",
    u(
      4,
      (n, t) => {
        c(n[1], t), i(n, s);
      },
      (n) => n._._,
    ),
  ),
  k = n(
    "a2",
    l("<button id=count> </button>", " D ", void 0, () => [f]),
  ),
  v = e(1),
  D = n("a3", (n) =>
    t(
      n[0],
      "click",
      ((n) => {
        const {
          _: { 3: t },
        } = n;
        return function () {
          r(n._, q, !t);
        };
      })(n),
    ),
  ),
  g = a(
    3,
    (n, t) => {
      i(n, D), v(n, t ? k : null);
    },
    void 0,
    () => v,
  ),
  p = n(
    "a4",
    l("<button id=inner></button><!><!>", " b%D", void 0, () => [g]),
  ),
  h = e(1),
  j = _(4, null, () => d(4)),
  q = _(3, null, () => b(g, 1)),
  w = n("a5", (n) =>
    t(
      n[0],
      "click",
      ((n) => {
        const { 2: t } = n;
        return function () {
          r(n, x, !t);
        };
      })(n),
    ),
  ),
  x = _(
    2,
    (n, t) => {
      i(n, w), h(n, t ? p : null);
    },
    () => h,
  );
m();
