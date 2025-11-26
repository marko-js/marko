export const $template = "<button>+</button><div></div>";
export const $walks = /* get, over(1), get, over(1) */" b b";
import * as _ from "@marko/runtime-tags/debug/dom";
const $title_content = _._content_resume("__tests__/template.marko_1_content");
const $count__script = _._script("__tests__/template.marko_0_count", $scope => {
  _._on($scope["#button/0"], "click", function () {
    $count($scope, $scope.count + 1);
  });
  $scope.count;
  _._el_read($scope["#div/1"]).textContent = document.title;
});
const $count = /* @__PURE__ */_._let("count/2", $scope => {
  _._title(`Count is ${_._to_text($scope.count)}`);
  $count__script($scope);
});
export function $setup($scope) {
  $count($scope, 0);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);