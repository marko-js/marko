export const $template = "<!><!><button>Update</button>";
export const $walks = /* over(1), replace, over(1), get, over(1) */"b%b b";
import * as _ from "@marko/runtime-tags/debug/dom";
const $if_content__value = /* @__PURE__ */_._if_closure("#text/0", 0, $scope => _._text($scope["#text/0"], $scope._.value));
const $if_content__setup = $if_content__value;
const $if_content = /* @__PURE__ */_._content_branch(" ", /* get, over(1) */" b", $if_content__setup);
const $value = /* @__PURE__ */_._let("value/5", $if_content__value);
const $setup__script = _._script("__tests__/template.marko_0", $scope => _._on($scope["#button/1"], "click", function () {
  $value($scope, 1);
}));
export function $setup($scope) {
  $value($scope, 0);
  $setup__script($scope);
}
const $if = /* @__PURE__ */_._if("#text/0", $if_content);
export const $input_show = /* @__PURE__ */_._const("input_show", $scope => $if($scope, $scope.input_show ? 0 : 1));
export const $input = /* @__PURE__ */_._const("input", $scope => $input_show($scope, $scope.input.show));
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup, $input);