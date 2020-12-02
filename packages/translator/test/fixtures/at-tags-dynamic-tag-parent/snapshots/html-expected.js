_dynamicTag(input.x, {
  header: {
    class: "my-header",

    renderBody() {
      _write("Header content");
    }

  },
  footer: {
    class: "my-footer",

    renderBody() {
      _write("Footer content");
    }

  }
}, () => _write("Body content"));

import { write as _write, dynamicTag as _dynamicTag } from "@marko/runtime-fluurt/src/html";