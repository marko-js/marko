import { write as _write, wrapHydratable as _wrapHydratable, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
import _child from "./components/child/index.marko";

const _renderer = _wrapHydratable("packages/translator/test/fixtures/custom-tag-render-body/template.marko", input => {
  _child({
    name: "World",

    renderBody() {
      _write("This is the body content");
    }

  });
});

export default _renderer;
export const render = _createRenderer(_renderer);