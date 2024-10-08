// size: 921 (min) 409 (brotli)

import {
  register as n,
  on as t,
  registerSubscriber as o,
  dynamicClosure as u,
  data as c,
  queueEffect as i,
  registerRenderer as l,
  createRenderer as r,
  queueSource as a,
  closure as _,
  value as d,
  dynamicSubscribers as b,
  inConditionalScope as e,
  conditional as m,
  init as s,
} from "@marko/runtime-tags/dom";
const f = n("a0", (n) =>
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
          a(n._._, q, t + 1);
        };
      })(n),
    ),
  ),
  k = o(
    "a1",
    u(
      4,
      (n, t) => {
        c(n[1], t), i(n, f);
      },
      (n) => n._._,
    ),
  ),
  v = l(
    "a2",
    r("<button id=count> </button>", " D ", void 0, () => [k]),
  ),
  D = m(1),
  g = n("a3", (n) =>
    t(
      n[0],
      "click",
      ((n) => {
        const {
          _: { 3: t },
        } = n;
        return function () {
          a(n._, w, !t);
        };
      })(n),
    ),
  ),
  p = _(
    3,
    (n, t) => {
      i(n, g), D(n, t ? v : null);
    },
    void 0,
    () => D,
  ),
  h = l(
    "a4",
    r("<button id=inner></button><!><!>", " b%D", void 0, () => [p]),
  ),
  j = m(1),
  q = d(4, null, () => b(4)),
  w = d(3, null, () => e(p, 1)),
  x = n("a5", (n) =>
    t(
      n[0],
      "click",
      ((n) => {
        const { 2: t } = n;
        return function () {
          a(n, y, !t);
        };
      })(n),
    ),
  ),
  y = d(
    2,
    (n, t) => {
      i(n, x), j(n, t ? h : null);
    },
    () => j,
  );
s();
