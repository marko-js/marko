import { pushContext as _pushContext, nextScopeId as _nextScopeId, popContext as _popContext, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-fluurt/src/html";
import _child from "./components/child.marko";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  _pushContext("packages/translator/src/__tests__/fixtures/context-tag-derivation/template.marko", 123);
  const _scope1_id = _nextScopeId();
  _child._({});
  _popContext();
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator/src/__tests__/fixtures/context-tag-derivation/template.marko");