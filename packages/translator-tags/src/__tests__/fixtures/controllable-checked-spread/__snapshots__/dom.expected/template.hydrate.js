// size: 356 (min) 204 (brotli)

import * as t from "@marko/runtime-tags/dom";
import { init as e } from "@marko/runtime-tags/dom";
const a = t.effect("a0", (e) => t.attrsEvents(e, 0)),
  r = t.value(2, (e, r) => {
    t.attrs(e, 0, { type: "checkbox", ...r }), a(e);
  }),
  o = t.register(
    "b0",
    (t) =>
      function (e) {
        m(t, e);
      },
  ),
  m = t.state(
    2,
    (e, a) => {
      t.data(e[1], String(a)), r(e[0], { checked: a, checkedChange: o(e) });
    },
    () => t.inChild(0, r),
  );
e();
