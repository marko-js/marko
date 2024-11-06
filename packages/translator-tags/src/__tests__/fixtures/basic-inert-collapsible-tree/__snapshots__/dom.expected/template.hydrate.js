// size: 1199 (min) 545 (brotli)

import * as t from "@marko/runtime-tags/dom";
import { init as e } from "@marko/runtime-tags/dom";
const n = t.intersection(
    2,
    (t) => {
      const {
        _: { 6: e, 8: n },
      } = t;
      k(t[0], { comments: e.comments, path: n });
    },
    () => t.inChild(0, k),
  ),
  o = t.closure(8, null, void 0, () => n),
  i = t.closure(6, null, void 0, () => n),
  l = (t) => {
    t[0];
  },
  r = t.register(
    "a0",
    t.createRenderer("<ul></ul>", "/ b&", l, () => [o, i]),
  ),
  a = t.intersection(
    2,
    (t) => {
      const {
        _: { 2: e },
        7: n,
      } = t;
      m(t, `${e.path || "c"}-${n}`);
    },
    () => m,
  ),
  c = t.conditional(4),
  s = t.effect("a1", (e) =>
    t.on(
      e[2],
      "click",
      ((t) => {
        const { 9: e } = t;
        return function () {
          u(t, !e);
        };
      })(e),
    ),
  ),
  u = t.state(9, (e, n) => {
    t.attr(e[0], "hidden", !n), t.data(e[3], n ? "[-]" : "[+]"), s(e);
  }),
  m = t.value(
    8,
    (e, n) => t.attr(e[0], "id", n),
    () => t.inConditionalScope(o, 4),
  ),
  d = t.value(7, null, () => a),
  p = t.value(
    6,
    (e, n) => {
      t.data(e[1], n.text), c(e, n.comments ? r : null);
    },
    () => t.intersections([c, t.inConditionalScope(i, 4)]),
  ),
  v = t.value(
    5,
    (t, e) => {
      p(t, e[0]), d(t, e[1]);
    },
    () => t.intersections([p, d]),
  ),
  f = t.closure(2, null, void 0, () => a),
  g = (t) => {
    u(t, !0);
  },
  h = t.register(
    "a2",
    t.createRenderer(
      "<li><span> </span><button> </button><!></li>",
      " E l D l%",
      g,
      () => [f],
      void 0,
      () => v,
    ),
  ),
  b = t.loopOf(0, h),
  k = t.value(
    2,
    (t, e) => b(t, [e.comments]),
    () => t.intersections([b, t.inLoopScope(f, 0)]),
  );
e();
