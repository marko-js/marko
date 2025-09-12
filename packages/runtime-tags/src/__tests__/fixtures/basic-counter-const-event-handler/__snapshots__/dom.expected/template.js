export const $template = "<button> </button>";
export const $walks = /* get, next(1), get, out(1) */" D l";
import * as _ from "@marko/runtime-tags/debug/dom";
const $increment2__script = _._script("__tests__/template.marko_0_increment", ($scope, {
  increment
}) => _._on($scope["#button/0"], "click", increment));
const $increment2 = /* @__PURE__ */_._const("increment", $increment2__script);
const $clickCount = /* @__PURE__ */_._let("clickCount/2", ($scope, clickCount) => {
  _._text($scope["#text/1"], clickCount);
  $increment2($scope, $increment($scope));
});
export function $setup($scope) {
  $clickCount($scope, 0);
}
function $increment($scope, {
  clickCount
} = $scope) {
  return function () {
    $clickCount($scope, ++clickCount);
  };
}
_._resume("__tests__/template.marko_0/increment", $increment);
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);