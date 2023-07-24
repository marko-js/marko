import { write as _write, nextScopeId as _nextScopeId, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
import _hello from "./components/hello/index.marko";
const _renderer = _register((input, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  _hello({
    foo: {
      renderBody() {
        _write("Foo!");
      }
    },
    renderBody() {
      const _scope1_id = _nextScopeId();
    }
  });
}, "packages/translator/src/__tests__/fixtures/at-tags/template.marko");
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);