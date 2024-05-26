// size: 917 (min) 442 (brotli)

import {
  register as n,
  on as o,
  registerSubscriber as t,
  dynamicClosure as u,
  data as i,
  queueEffect as c,
  registerRenderer as r,
  createRenderer as l,
  value as _,
  dynamicSubscribers as b,
  inConditionalScope as m,
  queueSource as d,
  closure as s,
  conditional as e,
  init as k,
} from "@marko/runtime-tags/dom";
const f = n("9oJMoY/u", (n) =>
    o(
      n[0],
      "click",
      ((n) => {
        const {
          _: {
            _: { 4: o },
          },
        } = n;
        return function () {
          d(n._._, O, o + 1);
        };
      })(n),
    ),
  ),
  v = r(
    "I7+sr80A",
    l("<button id=count> </button>", " D ", void 0, [
      t(
        "C+Vp7Pow",
        u(
          4,
          (n, o) => {
            i(n[1], o), c(n, f);
          },
          (n) => n._._,
        ),
      ),
    ]),
  ),
  a = e(1),
  p = n("RObkSOLJ", (n) =>
    o(
      n[0],
      "click",
      ((n) => {
        const {
          _: { 3: o },
        } = n;
        return function () {
          d(n._, R, !o);
        };
      })(n),
    ),
  ),
  B = s(
    3,
    (n, o) => {
      c(n, p), a(n, o ? v : null);
    },
    void 0,
    a,
  ),
  D = r("mqmVZBUB", l("<button id=inner></button><!><!>", " b%D", void 0, [B])),
  J = e(1),
  O = _(4, null, b(4)),
  R = _(3, null, m(B, 1)),
  V = n("biWTuxiR", (n) =>
    o(
      n[0],
      "click",
      ((n) => {
        const { 2: o } = n;
        return function () {
          d(n, g, !o);
        };
      })(n),
    ),
  ),
  g = _(
    2,
    (n, o) => {
      c(n, V), J(n, o ? D : null);
    },
    J,
  );
k();
