let _thing;

if (x) _thing = {
  x: 1,

  renderBody() {
    _write("Hello");
  }

};

_customTag({
  thing: _thing
});

import { write as _write } from "@marko/runtime-fluurt/src/html";
import _customTag from "./components/custom-tag/index.marko";