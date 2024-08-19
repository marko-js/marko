const formatNumber = _register(n => {
  return "$" + n.toFixed(2);
}, "packages/translator-tags/src/__tests__/fixtures/component-attrs-static-code/template.marko_0/anonymous");
function formatNumber2(n) {
  return "$" + n.toFixed(2);
}
import { register as _register, peekNextScope as _peekNextScope, writeScope as _writeScope, nextScopeId as _nextScopeId, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
import _counter from "./components/counter.marko";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  _register(formatNumber2, "packages/translator-tags/src/__tests__/fixtures/component-attrs-static-code/template.marko_0/formatNumber2");
  const _childScope = _peekNextScope();
  _counter._({
    format: formatNumber
  });
  const _childScope2 = _peekNextScope();
  _counter._({
    format: formatNumber2
  });
  _writeScope(_scope0_id, {
    "#childScope/0": _childScope,
    "#childScope/1": _childScope2
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/component-attrs-static-code/template.marko");