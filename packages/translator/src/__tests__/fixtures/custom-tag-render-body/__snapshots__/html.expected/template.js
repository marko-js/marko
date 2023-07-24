import { write as _write, nextScopeId as _nextScopeId, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
import _child from "./components/child/index.marko";
const _renderer = _register((input, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  _child({
    name: "World",
    renderBody() {
      const _scope1_id = _nextScopeId();
      _write("This is the body content");
    }
  });
}, "packages/translator/src/__tests__/fixtures/custom-tag-render-body/template.marko");
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);