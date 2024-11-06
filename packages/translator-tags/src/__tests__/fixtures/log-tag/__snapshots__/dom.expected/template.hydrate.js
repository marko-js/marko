// size: 205 (min) 135 (brotli)

import * as t from "@marko/runtime-tags/dom";
import { init as m } from "@marko/runtime-tags/dom";
import o from "./test-log";
const r = t.state(2, (m, o) => t.data(m[0], o));
t.effect("a0", (t) => r(t, JSON.stringify(o))), m();
