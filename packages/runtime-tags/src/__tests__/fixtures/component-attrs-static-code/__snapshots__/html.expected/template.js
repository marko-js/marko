const formatNumber = _$.register(n => {
  return "$" + n.toFixed(2);
}, "__tests__/template.marko_0/formatNumber");
function formatNumber2(n) {
  return "$" + n.toFixed(2);
}
_$.register(formatNumber2, "__tests__/template.marko_0/formatNumber2");
import _counter from "./tags/counter.marko";
import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  _counter({
    format: formatNumber
  });
  _counter({
    format: formatNumber2
  });
});