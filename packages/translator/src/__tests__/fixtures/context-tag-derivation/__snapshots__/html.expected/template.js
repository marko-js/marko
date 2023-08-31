import { pushContext as _pushContext, nextScopeId as _nextScopeId, popContext as _popContext, createTemplate as _createTemplate } from "@marko/runtime-fluurt/src/html";
import _child from "./components/child.marko";
const _renderer = (input, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  _pushContext("packages/translator/src/__tests__/fixtures/context-tag-derivation/template.marko", 123);
  const _scope1_id = _nextScopeId();
  _child._({
    renderBody() {
      const _scope2_id = _nextScopeId();
    }
  });
  _popContext();
};
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator/src/__tests__/fixtures/context-tag-derivation/template.marko");