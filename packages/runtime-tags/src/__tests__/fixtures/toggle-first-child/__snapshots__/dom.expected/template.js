export const $template = "<div><!><span></span><span></span></div>";
export const $walks = /* next(1), replace, out(1) */"D%l";
export const $setup = () => {};
import * as _ from "@marko/runtime-tags/debug/dom";
const $if_content__value = /* @__PURE__ */_._if_closure("#text/0", 0, $scope => _._text($scope["#text/0"], $scope._.value));
const $if_content__setup = $if_content__value;
const $if = /* @__PURE__ */_._if("#text/0", "<span> </span>", /* next(1), get, out(1) */"D l", $if_content__setup);
export const $value = /* @__PURE__ */_._const("value", $scope => {
  $if($scope, $scope.value ? 0 : 1);
  $if_content__value($scope);
});
export const $input = /* @__PURE__ */_._const("input", $scope => $value($scope, $scope.input.value));
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup, $input);