// size: 881 (min) 401 (brotli)

import {
  register as n,
  on as t,
  registerSubscriber as o,
  dynamicClosure as u,
  data as c,
  queueEffect as i,
  registerRenderer as l,
  createRenderer as r,
  value as a,
  dynamicSubscribers as _,
  inConditionalScope as d,
  queueSource as b,
  closure as e,
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
          b(n._._, j, t + 1);
        };
      })(n),
    ),
  ),
  k = l(
    "a2",
    r("<button id=count> </button>", " D ", void 0, [
      o(
        "a1",
        u(
          4,
          (n, t) => {
            c(n[1], t), i(n, f);
          },
          (n) => n._._,
        ),
      ),
    ]),
  ),
  v = m(1),
  D = n("a3", (n) =>
    t(
      n[0],
      "click",
      ((n) => {
        const {
          _: { 3: t },
        } = n;
        return function () {
          b(n._, q, !t);
        };
      })(n),
    ),
  ),
  g = e(
    3,
    (n, t) => {
      i(n, D), v(n, t ? k : null);
    },
    void 0,
    v,
  ),
  p = l("a4", r("<button id=inner></button><!><!>", " b%D", void 0, [g])),
  h = m(1),
  j = a(4, null, _(4)),
  q = a(3, null, d(g, 1)),
  w = n("a5", (n) =>
    t(
      n[0],
      "click",
      ((n) => {
        const { 2: t } = n;
        return function () {
          b(n, x, !t);
        };
      })(n),
    ),
  ),
  x = a(
    2,
    (n, t) => {
      i(n, w), h(n, t ? p : null);
    },
    h,
  );
s();
