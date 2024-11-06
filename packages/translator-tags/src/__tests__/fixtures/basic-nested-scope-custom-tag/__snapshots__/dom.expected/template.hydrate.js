// size: 440 (min) 253 (brotli)

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
          o(t._, r + 1);
        };
      })(r),
    ),
  ),
  n = t.registerSubscriber(
    "b1",
    t.dynamicClosure(1, (r, n) => {
      t.data(r[1], n), e(r);
    }),
  );
t.register(
  "b2",
  t.createRendererWithOwner("<button> </button>", " D ", void 0, () => [n]),
);
const o = t.state(1, null, () => t.dynamicSubscribers(1));
r();
