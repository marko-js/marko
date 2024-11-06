// size: 876 (min) 405 (brotli)

import {
  register as n,
  on as t,
  registerSubscriber as o,
  dynamicClosure as u,
  data as c,
  queueEffect as i,
  createRenderer as l,
  closure as r,
  state as a,
  dynamicSubscribers as _,
  inConditionalScope as d,
  conditional as b,
  init as e,
} from "@marko/runtime-tags/dom";
const m = n("a0", (n) =>
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
          h(n._._, t + 1);
        };
      })(n),
    ),
  ),
  s = o(
    "a1",
    u(
      4,
      (n, t) => {
        c(n[1], t), i(n, m);
      },
      (n) => n._._,
    ),
  ),
  f = n(
    "a2",
    l("<button id=count> </button>", " D ", void 0, () => [s]),
  ),
  k = b(1),
  v = n("a3", (n) =>
    t(
      n[0],
      "click",
      ((n) => {
        const {
          _: { 3: t },
        } = n;
        return function () {
          j(n._, !t);
        };
      })(n),
    ),
  ),
  D = r(
    3,
    (n, t) => {
      i(n, v), k(n, t ? f : null);
    },
    void 0,
    () => k,
  ),
  g = n(
    "a4",
    l("<button id=inner></button><!><!>", " b%D", void 0, () => [D]),
  ),
  p = b(1),
  h = a(4, null, () => _(4)),
  j = a(3, null, () => d(D, 1)),
  q = n("a5", (n) =>
    t(
      n[0],
      "click",
      ((n) => {
        const { 2: t } = n;
        return function () {
          w(n, !t);
        };
      })(n),
    ),
  ),
  w = a(
    2,
    (n, t) => {
      i(n, q), p(n, t ? g : null);
    },
    () => p,
  );
e();
