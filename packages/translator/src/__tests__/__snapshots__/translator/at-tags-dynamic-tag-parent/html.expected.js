import { write as _write, dynamicTag as _dynamicTag, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";

const _renderer = _register("src/__tests__/fixtures/at-tags-dynamic-tag-parent/template.marko", input => {
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
});

export default _renderer;
export const render = _createRenderer(_renderer);