export const $template = "<div id=target></div>";
export const $walks = /* get, over(1) */" b";
import * as _ from "@marko/runtime-tags/debug/dom";
const $for_content__selected = /* @__PURE__ */_._for_closure("#div/0", $scope => _._attr($scope["#span/0"], "data-selected", $scope._.selected === $scope["#LoopKey"]));
const $for_content__setup = $scope => {
  $for_content__selected._($scope);
  _._text($scope["#text/1"], $scope["#LoopKey"]);
};
const $selected__script = _._script("__tests__/template.marko_0_selected", $scope => _._on($scope["#div/0"], "click", function () {
  $selected($scope, $scope.selected + 1);
}));
const $selected = /* @__PURE__ */_._let("selected/1", $scope => {
  $for_content__selected($scope);
  $selected__script($scope);
});
const $for = /* @__PURE__ */_._for_until("#div/0", "<span> </span>", /* get, next(1), get, out(1) */" D l", $for_content__setup);
export function $setup($scope) {
  $selected($scope, 0);
  $for($scope, [3, 0, 1]);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);