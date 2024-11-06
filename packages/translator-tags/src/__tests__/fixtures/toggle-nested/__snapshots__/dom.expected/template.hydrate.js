// size: 589 (min) 224 (brotli)

import * as e from "@marko/runtime-tags/dom";
const r = e.registerSubscriber(
    "a0",
    e.dynamicClosure(
      5,
      (r, a) => e.data(r[0], a),
      (e) => e._._,
    ),
  ),
  a = e.register(
    "a1",
    e.createRenderer("<span> </span>", "D ", void 0, () => [r]),
  ),
  i = e.registerSubscriber(
    "a2",
    e.dynamicClosure(
      4,
      (r, a) => e.data(r[0], a),
      (e) => e._._,
    ),
  ),
  o = e.register(
    "a3",
    e.createRenderer("<span> </span>", "D ", void 0, () => [i]),
  ),
  s = e.conditional(1),
  n = e.conditional(0),
  t = e.closure(
    5,
    (e, r) => s(e, r ? a : null),
    void 0,
    () => s,
  ),
  d = e.closure(
    4,
    (e, r) => n(e, r ? o : null),
    void 0,
    () => n,
  );
e.register(
  "a4",
  e.createRenderer("<!><!><!><!>", "D%b%D", void 0, () => [t, d]),
);
