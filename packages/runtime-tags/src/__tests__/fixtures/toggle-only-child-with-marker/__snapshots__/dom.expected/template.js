export const $template = "<button></button>";
export const $walks = /* get, over(1) */" b";
import * as _ from "@marko/runtime-tags/debug/dom";
const $if_content = /* @__PURE__ */_._content_branch("<span id=count>0</span>", /* over(1) */"b");
const $setup__script = _._script("__tests__/template.marko_0", $scope => _._on($scope["#button/0"], "click", function () {
  document.getElementById("count").textContent++;
}));
export const $setup = $setup__script;
const $if = /* @__PURE__ */_._if("#button/0", $if_content);
export const $input_show = /* @__PURE__ */_._const("input_show", $scope => $if($scope, $scope.input_show ? 0 : 1));
export const $input = /* @__PURE__ */_._const("input", $scope => $input_show($scope, $scope.input.show));
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup, $input);