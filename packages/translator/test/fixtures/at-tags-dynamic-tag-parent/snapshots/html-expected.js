import { write as _write, dynamicTag as _dynamicTag, wrapHydratable as _wrapHydratable, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/html";

const _renderer = _wrapHydratable(input => {
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
export const render = _createRenderFn(_renderer);