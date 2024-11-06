// size: 569 (min) 310 (brotli)

import * as e from "@marko/runtime-tags/dom";
import { init as t } from "@marko/runtime-tags/dom";
const n = e.dynamicTagAttrs(1),
  r = e.conditional(
    1,
    (e) => n(e, () => ({})),
    () => n,
  ),
  i = e.value(
    3,
    (t, n) => {
      e.classAttr(t[0], { selected: n.thing.selected }),
        r(t, n.thing.renderBody);
    },
    () => r,
  ),
  o = e.register("b0", e.createRendererWithOwner("<span>The thing</span>", "")),
  a = e.value(
    3,
    (e, t) => i(e[0], { thing: t }),
    () => e.inChild(0, i),
  ),
  s = e.effect("b1", (t) =>
    e.on(
      t[1],
      "click",
      ((e) => {
        const { 2: t } = e;
        return function () {
          c(e, !t);
        };
      })(t),
    ),
  ),
  c = e.state(
    2,
    (e, t) => {
      s(e), a(e, { selected: t, renderBody: o(e) });
    },
    () => a,
  );
t();
