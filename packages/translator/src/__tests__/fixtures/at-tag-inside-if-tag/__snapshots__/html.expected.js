import { markScopeOffset as _markScopeOffset, write as _write, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
import _customTag from "./components/custom-tag/index.marko";

const _renderer = _register("packages/translator/src/__tests__/fixtures/at-tag-inside-if-tag/template.marko", input => {
  let _thing;

  _write(`${_markScopeOffset(0)}`);

  if (x) {
    _thing = {
      x: 1,

      renderBody() {
        _write("Hello");
      }

    };

    _write(`${_markScopeOffset(0)}`);
  }

  _customTag({
    thing: _thing
  });
});

export default _renderer;
export const render = _createRenderer(_renderer);