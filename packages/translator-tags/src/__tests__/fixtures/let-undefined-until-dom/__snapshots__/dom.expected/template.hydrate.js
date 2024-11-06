// size: 175 (min) 119 (brotli)

import * as t from "@marko/runtime-tags/dom";
import { init as m } from "@marko/runtime-tags/dom";
const a = t.state(1, (m, a) => t.data(m[0], a));
t.effect("a0", (t) => a(t, "Client Only")), m();
