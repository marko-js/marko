// size: 1095 (min) 562 (brotli)

import {
  register as n,
  createRenderer as t,
  effect as o,
  on as l,
  closure as m,
  state as c,
  attr as i,
  data as u,
  value as s,
  intersections as a,
  intersection as d,
  inChild as e,
  inConditionalScope as r,
  inLoopScope as p,
  conditional as v,
  loopOf as b,
  init as h,
} from "@marko/runtime-tags/dom";
const f = d(
    2,
    (n) => {
      const {
        _: { 6: t, 8: o },
      } = n;
      B(n[0], { comments: t.comments, path: o });
    },
    () => e(0, B),
  ),
  k = m(8, null, void 0, () => f),
  $ = m(6, null, void 0, () => f),
  _ = n(
    "a0",
    t(
      "<ul></ul>",
      "/ b&",
      (n) => {
        n[0];
      },
      () => [k, $],
    ),
  ),
  g = d(
    2,
    (n) => {
      const {
        _: { 2: t },
        7: o,
      } = n;
      j(n, `${t.path || "c"}-${o}`);
    },
    () => j,
  ),
  x = v(4),
  D = o("a1", (n) =>
    l(
      n[2],
      "click",
      ((n) => {
        const { 9: t } = n;
        return function () {
          E(n, !t);
        };
      })(n),
    ),
  ),
  E = c(9, (n, t) => {
    i(n[0], "hidden", !t), u(n[3], t ? "[-]" : "[+]"), D(n);
  }),
  j = s(
    8,
    (n, t) => i(n[0], "id", t),
    () => r(k, 4),
  ),
  q = s(7, null, () => g),
  w = s(
    6,
    (n, t) => {
      u(n[1], t.text), x(n, t.comments ? _ : null);
    },
    () => a([x, r($, 4)]),
  ),
  y = s(
    5,
    (n, t) => {
      w(n, t[0]), q(n, t[1]);
    },
    () => a([w, q]),
  ),
  z = m(2, null, void 0, () => g),
  A = b(
    0,
    n(
      "a2",
      t(
        "<li><span> </span><button> </button><!></li>",
        " E l D l%",
        (n) => {
          E(n, !0);
        },
        () => [z],
        void 0,
        () => y,
      ),
    ),
  ),
  B = s(
    2,
    (n, t) => A(n, [t.comments]),
    () => a([A, p(z, 0)]),
  );
h();
