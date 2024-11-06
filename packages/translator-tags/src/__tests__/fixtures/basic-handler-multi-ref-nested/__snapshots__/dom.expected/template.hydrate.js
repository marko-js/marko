// size: 319 (min) 191 (brotli)

import * as t from "@marko/runtime-tags/dom";
import { init as o } from "@marko/runtime-tags/dom";
const n = t.effect("a0", (o) =>
    t.on(
      o[0],
      "click",
      ((t) => {
        const { 2: o, 3: n } = t;
        return function () {
          m(
            t,
            o.map(
              ((t) => {
                const { 3: o } = t;
                return (t) => o;
              })(t),
            ),
          );
        };
      })(o),
    ),
  ),
  r = t.intersection(2, (t) => {
    n(t);
  }),
  m = t.state(
    2,
    (o, n) => t.data(o[1], n.join("")),
    () => r,
  );
o();
