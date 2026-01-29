const formatNumber = n => {
  return "$" + n.toFixed(2);
};
function formatNumber2(n) {
  return "$" + n.toFixed(2);
}
import _price from "./tags/price.marko";
import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  _price({
    value: 1,
    format: formatNumber
  });
  _price({
    value: 1.1111,
    format: formatNumber2
  });
});