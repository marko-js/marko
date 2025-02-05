const formatNumber = _$.register(n => {
  return "$" + n.toFixed(2);
}, "__tests__/template.marko_0/formatNumber");
function formatNumber2(n) {
  return "$" + n.toFixed(2);
}
_$.register(formatNumber2, "__tests__/template.marko_0/formatNumber2");
import _counter from "./tags/counter.marko";
import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer(input => {
  const _scope0_id = _$.nextScopeId();
  const _childScope = _$.peekNextScope();
  _counter({
    format: formatNumber
  });
  const _childScope2 = _$.peekNextScope();
  _counter({
    format: formatNumber2
  });
  _$.debug(_$.writeScope(_scope0_id, {
    "#childScope/0": _$.writeExistingScope(_childScope),
    "#childScope/1": _$.writeExistingScope(_childScope2)
  }), "__tests__/template.marko", 0);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);