// size: 647 (min) 210 (brotli)

import * as t from "@marko/runtime-tags/dom";
import { init as n } from "@marko/runtime-tags/dom";
const a = t.effect("a0", (n) =>
    t.on(
      n[6],
      "click",
      ((t) => {
        const { 11: n } = t;
        return function () {
          c(t, n + 1);
        };
      })(n),
    ),
  ),
  c = t.state(11, (n, c) => {
    t.data(n[7], c), a(n);
  }),
  o = t.effect("a1", (n) =>
    t.on(
      n[4],
      "click",
      ((t) => {
        const { 10: n } = t;
        return function () {
          e(t, n + 1);
        };
      })(n),
    ),
  ),
  e = t.state(10, (n, a) => {
    t.data(n[5], a), o(n);
  }),
  r = t.effect("a2", (n) =>
    t.on(
      n[2],
      "click",
      ((t) => {
        const { 9: n } = t;
        return function () {
          f(t, n + 1);
        };
      })(n),
    ),
  ),
  f = t.state(9, (n, a) => {
    t.data(n[3], a), r(n);
  }),
  i = t.effect("a3", (n) =>
    t.on(
      n[0],
      "click",
      ((t) => {
        const { 8: n } = t;
        return function () {
          s(t, n + 1);
        };
      })(n),
    ),
  ),
  s = t.state(8, (n, a) => {
    t.data(n[1], a), i(n);
  });
n();
