export const $template = "<!><!><!>";
export const $walks = /* over(1), replace, over(2) */"b%c";
export const $setup = () => {};
import * as _ from "@marko/runtime-tags/debug/dom";
const $if_content__foo = /* @__PURE__ */_._if_closure("#text/0", 0, $scope => _._text($scope["#text/0"], $scope._.foo));
const $if_content__rest__script = _._script("__tests__/template.marko_1_rest", $scope => _._attrs_script($scope, "#span/1"));
const $if_content__rest = /* @__PURE__ */_._if_closure("#text/0", 0, $scope => {
  _._attrs_content($scope, "#span/1", $scope._.rest);
  $if_content__rest__script($scope);
});
const $if_content__setup = $scope => {
  $if_content__foo._($scope);
  $if_content__rest._($scope);
};
const $if = /* @__PURE__ */_._if("#text/0", " -- <!><span></span>", /* over(1), replace, over(1), get, over(1) */"b%b b", $if_content__setup);
export const $value = ($scope, value) => {
  (({
    foo,
    ...rest
  }) => $rest($scope, rest))(value || {});
  $foo($scope, value?.foo);
  $if($scope, value ? 0 : 1);
};
export const $input = ($scope, input) => $value($scope, input.value);
const $rest = /* @__PURE__ */_._const("rest", $if_content__rest);
const $foo = /* @__PURE__ */_._const("foo", $if_content__foo);
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup, $input);