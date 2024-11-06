const formatNumber = _$.register(n => {
  return "$" + n.toFixed(2);
}, "packages/translator-tags/src/__tests__/fixtures/component-attrs-static-code/template.marko_0/anonymous");
function formatNumber2(n) {
  return "$" + n.toFixed(2);
}
import * as _$ from "@marko/runtime-tags/debug/html";
import _counter from "./components/counter.marko";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  _$.register(formatNumber2, "packages/translator-tags/src/__tests__/fixtures/component-attrs-static-code/template.marko_0/formatNumber2");
  const _childScope = _$.peekNextScope();
  _counter({
    format: formatNumber
  });
  const _childScope2 = _$.peekNextScope();
  _counter({
    format: formatNumber2
  });
  _$.writeScope(_scope0_id, {
    "#childScope/0": _$.writeExistingScope(_childScope),
    "#childScope/1": _$.writeExistingScope(_childScope2)
  });
});
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/component-attrs-static-code/template.marko", _renderer);