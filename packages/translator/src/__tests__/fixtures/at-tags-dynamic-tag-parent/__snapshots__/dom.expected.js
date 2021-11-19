import { write as _write, dynamicTag as _dynamicTag, register as _register, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
export const template = "";
export const walks = "";
export const hydrate = _register("packages/translator/src/__tests__/fixtures/at-tags-dynamic-tag-parent/template.marko", input => {
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
});
export default _createRenderFn(template, walks, [], hydrate);