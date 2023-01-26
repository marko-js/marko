import { pushContext as _pushContext, nextScopeId as _nextScopeId, popContext as _popContext, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
import _child from "./components/child.marko";
const _renderer = (input, _tagVar) => {
  const _scope0_ = _nextScopeId();
  _pushContext("packages/translator/src/__tests__/fixtures/context-tag-derivation/template.marko", 123);
  const _scope1_ = _nextScopeId();
  _child({
    renderBody() {
      const _scope2_ = _nextScopeId();
    }
  });
  _popContext();
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);