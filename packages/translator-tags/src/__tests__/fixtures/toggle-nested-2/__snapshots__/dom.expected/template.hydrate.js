// size: 913 (min) 392 (brotli)

import * as t from "@marko/runtime-tags/dom";
import { init as n } from "@marko/runtime-tags/dom";
const e = t.effect("a0", (n) =>
    t.on(
      n[0],
      "click",
      ((t) => {
        const {
          _: {
            _: { 4: n },
          },
        } = t;
        return function () {
          d(t._._, n + 1);
        };
      })(n),
    ),
  ),
  o = t.registerSubscriber(
    "a1",
    t.dynamicClosure(
      4,
      (n, o) => {
        t.data(n[1], o), e(n);
      },
      (t) => t._._,
    ),
  ),
  r = t.register(
    "a2",
    t.createRenderer("<button id=count> </button>", " D ", void 0, () => [o]),
  ),
  i = t.conditional(1, 0),
  c = t.effect("a3", (n) =>
    t.on(
      n[0],
      "click",
      ((t) => {
        const {
          _: { 3: n },
        } = t;
        return function () {
          l(t._, !n);
        };
      })(n),
    ),
  ),
  a = t.closure(
    3,
    (t, n) => {
      c(t), i(t, n ? r : null);
    },
    void 0,
    () => i,
  ),
  u = t.register(
    "a4",
    t.createRenderer("<button id=inner></button><!><!>", " b%D", void 0, () => [
      a,
    ]),
  ),
  s = t.conditional(1, 0),
  d = t.state(4, 0, () => t.dynamicSubscribers(4)),
  l = t.state(3, 0, () => t.inConditionalScope(a, 1)),
  m = t.effect("a5", (n) =>
    t.on(
      n[0],
      "click",
      ((t) => {
        const { 2: n } = t;
        return function () {
          f(t, !n);
        };
      })(n),
    ),
  ),
  f = t.state(
    2,
    (t, n) => {
      m(t), s(t, n ? u : null);
    },
    () => s,
  );
n();
