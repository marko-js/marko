const formatNumber = _._resume(n => {
  return "$" + n.toFixed(2);
}, "__tests__/template.marko_0/formatNumber");
function formatNumber2(n) {
  return "$" + n.toFixed(2);
}
_._resume(formatNumber2, "__tests__/template.marko_0/formatNumber2");
import _counter from "./tags/counter.marko";
import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  _counter({
    format: formatNumber
  });
  _counter({
    format: formatNumber2
  });
});