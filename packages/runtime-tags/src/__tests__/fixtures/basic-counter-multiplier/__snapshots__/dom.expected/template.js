export const $template = "<button id=multiplier>increase multiplier (<!>)</button><button id=count>increase count</button><div> </div>";
export const $walks = /* get, next(1), over(1), replace, out(1), get, over(1), next(1), get, out(1) */" Db%l bD l";
import * as _ from "@marko/runtime-tags/debug/dom";
const $multipliedCount = /* @__PURE__ */_._const("multipliedCount", ($scope, multipliedCount) => _._text($scope["#text/3"], multipliedCount));
const $count__OR__multiplier = /* @__PURE__ */_._or(6, $scope => {
  let {
    count,
    multiplier
  } = $scope;
  $multipliedCount($scope, count * multiplier);
});
const $count__script = _._script("__tests__/template.marko_0_count", ($scope, {
  count
}) => _._on($scope["#button/2"], "click", function () {
  $count($scope, ++count)
}));
const $count = /* @__PURE__ */_._let("count/4", $scope => {
  $count__OR__multiplier($scope);
  $count__script($scope);
});
const $multiplier__script = _._script("__tests__/template.marko_0_multiplier", ($scope, {
  multiplier
}) => _._on($scope["#button/0"], "click", function () {
  $multiplier($scope, ++multiplier)
}));
const $multiplier = /* @__PURE__ */_._let("multiplier/5", ($scope, multiplier) => {
  _._text($scope["#text/1"], multiplier);
  $count__OR__multiplier($scope);
  $multiplier__script($scope);
});
export function $setup($scope) {
  $count($scope, 0);
  $multiplier($scope, 1);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);