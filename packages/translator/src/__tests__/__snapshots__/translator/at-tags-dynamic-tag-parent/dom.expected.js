import { write as _write, dynamicTag as _dynamicTag, register as _register, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/dist/dom";
export const template = "";
export const walks = "";
export const hydrate = _register("peJo0GB3", input => {
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
  });
});
export default _createRenderFn(template, walks, ["x"], hydrate);