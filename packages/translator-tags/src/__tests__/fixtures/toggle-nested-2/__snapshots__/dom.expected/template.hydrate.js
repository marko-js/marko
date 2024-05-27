// size: 875 (min) 402 (brotli)

import {
  register as n,
  on as t,
  registerSubscriber as o,
  dynamicClosure as u,
  data as i,
  queueEffect as c,
  registerRenderer as l,
  createRenderer as r,
  value as _,
  dynamicSubscribers as d,
  inConditionalScope as e,
  queueSource as b,
  closure as f,
  conditional as m,
  init as s,
} from "@marko/runtime-tags/dom";
const k = n("e", (n) =>
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
          b(n._._, p, t + 1);
        };
      })(n),
    ),
  ),
  v = l(
    "g",
    r("<button id=count> </button>", " D ", void 0, [
      o(
        "f",
        u(
          4,
          (n, t) => {
            i(n[1], t), c(n, k);
          },
          (n) => n._._,
        ),
      ),
    ]),
  ),
  a = m(1),
  g = n("h", (n) =>
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
  D = f(
    3,
    (n, t) => {
      c(n, g), a(n, t ? v : null);
    },
    void 0,
    a,
  ),
  h = l("i", r("<button id=inner></button><!><!>", " b%D", void 0, [D])),
  j = m(1),
  p = _(4, null, d(4)),
  q = _(3, null, e(D, 1)),
  w = n("j", (n) =>
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
  x = _(
    2,
    (n, t) => {
      c(n, w), j(n, t ? h : null);
    },
    j,
  );
s();
