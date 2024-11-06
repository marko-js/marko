// size: 672 (min) 358 (brotli)

import * as r from "@marko/runtime-tags/dom";
import { init as e } from "@marko/runtime-tags/dom";
const t = r.dynamicTagAttrs(1),
  i = r.conditional(
    1,
    (r) => t(r, () => ({})),
    () => t,
  ),
  n = r.effect("a0", (e) => {
    r.attrsEvents(e, 0);
  }),
  a = r.value(
    4,
    (r, e) => i(r, e),
    () => i,
  ),
  o = r.value(
    3,
    (e, t) => {
      ((e, t) => {
        r.attrs(e, 0, t), n(e);
      })(e, t),
        a(e, t.renderBody);
    },
    () => a,
  ),
  s = r.register("b0", (r) => {
    const { 1: e } = r;
    return function () {
      m(r, e + 1);
    };
  }),
  d = r.registerSubscriber(
    "b1",
    r.dynamicClosure(1, (e, t) => r.data(e[0], t)),
  ),
  c = r.register(
    "b2",
    r.createRendererWithOwner(" ", " ", void 0, () => [d]),
  ),
  m = r.state(
    1,
    (r, e) => o(r[0], { onClick: s(r), renderBody: c(r) }),
    () => r.intersections([r.inChild(0, o), r.dynamicSubscribers(1)]),
  );
e();
