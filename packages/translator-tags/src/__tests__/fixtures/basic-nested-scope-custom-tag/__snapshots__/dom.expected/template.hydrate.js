// size: 437 (min) 251 (brotli)

import * as t from "@marko/runtime-tags/dom";
import { init as r } from "@marko/runtime-tags/dom";
t.dynamicTagAttrs(0);
const e = t.effect("b0", (r) =>
    t.on(
      r[0],
      "click",
      ((t) => {
        const {
          _: { 1: r },
        } = t;
        return function () {
          n(t._, r + 1);
        };
      })(r),
    ),
  ),
  o = t.registerSubscriber(
    "b1",
    t.dynamicClosure(1, (r, o) => {
      t.data(r[1], o), e(r);
    }),
  );
t.register(
  "b2",
  t.createRendererWithOwner("<button> </button>", " D ", void 0, () => [o]),
);
const n = t.state(1, 0, () => t.dynamicSubscribers(1));
r();
