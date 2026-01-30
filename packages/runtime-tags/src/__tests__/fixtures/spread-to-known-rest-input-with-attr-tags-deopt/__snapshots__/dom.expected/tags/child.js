export const $template = "<!><!><!>";
export const $walks = /* over(1), replace, over(2) */"b%c";
export const $setup = () => {};
import * as _ from "@marko/runtime-tags/debug/dom";
const $for_content__item__script = _._script("__tests__/tags/child.marko_1_item", $scope => _._attrs_script($scope, "#span/0"));
const $for_content__item = /* @__PURE__ */_._const("item", $scope => {
  _._attrs($scope, "#span/0", $scope.item);
  $for_content__item__script($scope);
});
const $for_content__dynamicTag = /* @__PURE__ */_._dynamic_tag("#text/1");
const $for_content__desc = ($scope, desc) => $for_content__dynamicTag($scope, desc);
const $for_content__$params = ($scope, $params2) => $for_content__$temp($scope, $params2?.[0]);
const $for_content__$temp = ($scope, $temp) => {
  (({
    desc,
    ...item
  }) => $for_content__item($scope, item))($temp);
  $for_content__desc($scope, $temp.desc);
};
const $for = /* @__PURE__ */_._for_of("#text/0", "<span><!></span>", /* get, next(1), replace, out(1) */" D%l", 0, $for_content__$params);
export const $foo = ($scope, foo) => $for($scope, [foo]);
export const $input = ($scope, input) => $foo($scope, input.foo);
export default /* @__PURE__ */_._template("__tests__/tags/child.marko", $template, $walks, $setup, $input);