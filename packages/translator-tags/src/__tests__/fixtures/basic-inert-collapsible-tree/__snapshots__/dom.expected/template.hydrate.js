// size: 1189 (min) 542 (brotli)

import * as t from "@marko/runtime-tags/dom";
import { init as e } from "@marko/runtime-tags/dom";
const o = t.intersection(
    2,
    (t) => {
      const {
        _: { 6: e, 8: o },
      } = t;
      k(t[0], { comments: e.comments, path: o });
    },
    () => t.inChild(0, k),
  ),
  n = t.closure(8, 0, void 0, () => o),
  i = t.closure(6, 0, void 0, () => o),
  r = (t) => {
    t[0];
  },
  a = t.register(
    "a0",
    t.createRenderer("<ul></ul>", "/ b&", r, () => [n, i]),
  ),
  c = t.intersection(
    2,
    (t) => {
      const {
        _: { 2: e },
        7: o,
      } = t;
      d(t, `${e.path || "c"}-${o}`);
    },
    () => d,
  ),
  s = t.conditional(4, 0),
  l = t.effect("a1", (e) =>
    t.on(
      e[2],
      "click",
      ((t) => {
        const { 9: e } = t;
        return function () {
          m(t, !e);
        };
      })(e),
    ),
  ),
  m = t.state(9, (e, o) => {
    t.attr(e[0], "hidden", !o), t.data(e[3], o ? "[-]" : "[+]"), l(e);
  }),
  d = t.value(
    8,
    (e, o) => t.attr(e[0], "id", o),
    () => t.inConditionalScope(n, 4),
  ),
  u = t.value(7, 0, () => c),
  p = t.value(
    6,
    (e, o) => {
      t.data(e[1], o.text), s(e, o.comments ? a : null);
    },
    () => t.intersections([s, t.inConditionalScope(i, 4)]),
  ),
  v = t.value(
    5,
    (t, e) => {
      p(t, e[0]), u(t, e[1]);
    },
    () => t.intersections([p, u]),
  ),
  f = t.closure(2, 0, void 0, () => c),
  g = (t) => {
    m(t, !0);
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
