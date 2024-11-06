// size: 408 (min) 173 (brotli)

import * as t from "@marko/runtime-tags/dom";
import { init as n } from "@marko/runtime-tags/dom";
const o = t.effect("a0", (n) => {
    t.on(
      n[0],
      "click",
      ((t) => {
        const { 6: n } = t;
        return function () {
          c(t, n + 2);
        };
      })(n),
    ),
      t.on(
        n[2],
        "click",
        ((t) => {
          const { 6: n } = t;
          return function () {
            c(t, 3 * n);
          };
        })(n),
      ),
      t.on(
        n[4],
        "click",
        ((t) => {
          const { 6: n } = t;
          return function () {
            c(t, n ** 3);
          };
        })(n),
      );
  }),
  c = t.state(6, (n, c) => {
    t.data(n[1], c), t.data(n[3], c), t.data(n[5], c), o(n);
  });
n();
