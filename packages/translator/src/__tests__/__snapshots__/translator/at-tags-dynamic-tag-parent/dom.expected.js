_dynamicTag(input.x, {
  header: {
    class: "my-header"
  },
  footer: {
    class: "my-footer"
  }
});

import { dynamicTag as _dynamicTag, register as _register, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/dist/dom";
export const template = "Header contentFooter contentBody content";
export const walks = "_";
export const hydrate = _register("peJo0GB3", input => {});
export default _createRenderFn(template, walks, ["x"], hydrate);