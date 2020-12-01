_child({
  class: "hi",
  onclick: () => {
    console.log("hello world");
  }
});

import _child from "./components/child/index.marko";
import { write as _write } from "@marko/runtime-fluurt/src/html";

_write("<div class=hi></div>");