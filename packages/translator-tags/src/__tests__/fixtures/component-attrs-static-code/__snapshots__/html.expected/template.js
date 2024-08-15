const formatNumber = _register(n => {
  return "$" + n.toFixed(2);
}, "packages/translator-tags/src/__tests__/fixtures/component-attrs-static-code/template.marko_0/anonymous");
import { register as _register, peekNextScope as _peekNextScope, writeScope as _writeScope, nextScopeId as _nextScopeId, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
import _counter from "./components/counter.marko";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const _childScope = _peekNextScope();
  _counter._({
    format: formatNumber
  });
  _writeScope(_scope0_id, {
    "#childScope/0": _childScope
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/component-attrs-static-code/template.marko");