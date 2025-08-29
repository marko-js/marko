const formatNumber = n => {
  return "$" + n.toFixed(2);
};
function formatNumber2(n) {
  return "$" + n.toFixed(2);
}
import _price from "./tags/price.marko";
import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  _price({
    value: 1,
    format: formatNumber
  });
  _price({
    value: 1.1111,
    format: formatNumber2
  });
});