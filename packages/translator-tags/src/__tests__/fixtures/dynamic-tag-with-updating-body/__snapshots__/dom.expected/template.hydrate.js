// size: 597 (min) 314 (brotli)

import * as t from "@marko/runtime-tags/dom";
import { init as n } from "@marko/runtime-tags/dom";
const o = t.effect("a0", (n) =>
    t.on(
      n[0],
      "click",
      ((t) => {
        const { 2: n } = t;
        return function () {
          r(t, n + 1);
        };
      })(n),
    ),
  ),
  r = t.state(2, (n, r) => {
    t.data(n[1], r), o(n);
  });
const e = (t) => {
    !(function (t) {
      r(t, 0);
    })(t[0]);
  },
  c = t.register(
    "b0",
    t.createRendererWithOwner("<button id=count> </button>", "/ D l&", e),
  ),
  a = t.dynamicTagAttrs(0, c),
  i = t.conditional(
    0,
    (t) => a(t, () => ({})),
    () => a,
  ),
  s = t.effect("b1", (n) =>
    t.on(
      n[1],
      "click",
      ((t) => {
        const { 2: n } = t;
        return function () {
          m(t, "span" === n ? "div" : "span");
        };
      })(n),
    ),
  ),
  m = t.state(
    2,
    (t, n) => {
      s(t), i(t, n || c(t));
    },
    () => i,
  );
n();
