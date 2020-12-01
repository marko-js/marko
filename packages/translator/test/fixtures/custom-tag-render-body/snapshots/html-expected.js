_child({
  name: "World",

  renderBody() {
    _write("This is the body content");
  }

});

import { write as _write } from "@marko/runtime-fluurt/src/html";
import _child from "./components/child/index.marko";