_dynamicTag(x, {
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
});

import { write as _write, dynamicTag as _dynamicTag, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
export const template = "";
export const walks = "";
export const apply;
export default _createRenderFn(template, walks, apply);