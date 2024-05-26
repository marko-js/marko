// size: 675 (min) 375 (brotli)

import {
  register as o,
  attrsEvents as r,
  value as n,
  attrs as m,
  queueEffect as t,
  conditional as d,
  queueSource as e,
  registerSubscriber as i,
  dynamicClosure as c,
  data as f,
  registerRenderer as l,
  createRenderer as s,
  bindRenderer as u,
  intersections as a,
  inChild as j,
  dynamicSubscribers as k,
  init as q,
} from "@marko/runtime-tags/dom";
const y = d(1),
  B = o("mC20UZ41", (o) => r(o, 0)),
  C = n(4, (o, r) => y(o, r), y),
  I = n(
    3,
    (o, r) => {
      ((o, r) => {
        m(o, 0, r), t(o, B);
      })(o, r),
        C(o, r.renderBody);
    },
    C,
  ),
  Y = o("Yf8IJN4I", (o) => {
    const { 1: r } = o;
    return function () {
      e(o, b, r + 1);
    };
  }),
  Z = l(
    "mqrqoljj",
    s(" ", " ", void 0, [
      i(
        "YPZV5lbi",
        c(1, (o, r) => f(o[0], r)),
      ),
    ]),
  ),
  b = n(
    1,
    (o, r) => I(o[0], { onClick: Y(o), renderBody: u(o, Z) }),
    a([j(0, I), k(1)]),
  );
q();
