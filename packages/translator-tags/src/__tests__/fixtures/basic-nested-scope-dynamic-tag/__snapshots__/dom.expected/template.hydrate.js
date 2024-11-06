// size: 462 (min) 257 (brotli)

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
          i(t._, r + 1);
        };
      })(r),
    ),
  ),
  n = t.registerSubscriber(
    "b1",
    t.dynamicClosure(1, (r, n) => {
      t.data(r[1], n), e(r);
    }),
  ),
  o = t.register(
    "b2",
    t.createRendererWithOwner("<button> </button>", " D ", void 0, () => [n]),
  );
t.dynamicTagAttrs(0, o);
const i = t.state(1, 0, () => t.dynamicSubscribers(1));
r();
