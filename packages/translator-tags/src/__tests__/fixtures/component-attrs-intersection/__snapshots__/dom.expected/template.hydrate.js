// size: 333 (min) 198 (brotli)

import * as t from "@marko/runtime-tags/dom";
import { init as o } from "@marko/runtime-tags/dom";
const n = t.intersection(2, (o) => {
    const { 3: n, 4: r } = o;
    t.data(o[0], n);
  }),
  r = t.value(3, 0, () => n),
  i = t.effect("b0", (o) =>
    t.on(
      o[1],
      "click",
      ((t) => {
        const { 2: o } = t;
        return function () {
          m(t, o + 1);
        };
      })(o),
    ),
  ),
  m = t.state(
    2,
    (t, o) => {
      i(t), r(t[0], o);
    },
    () => t.inChild(0, r),
  );
o();
