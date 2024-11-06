// size: 274 (min) 168 (brotli)

import * as t from "@marko/runtime-tags/dom";
import { init as a } from "@marko/runtime-tags/dom";
const o = t.state(5, (a, o) => t.data(a[1], o)),
  m = t.state(4, (a, o) => t.data(a[0], o));
t.effect("a0", (a) => {
  const { 3: r } = a;
  {
    const e = m(a, r.value + 1);
    t.getAbortSignal(a, 0).onabort = () => o(a, e);
  }
}),
  a();
