export const $template = "<div><!></div>";
export const $walks = /* get, next(1), replace, out(1) */" D%l";
export const $setup = () => {};
import * as _ from "@marko/runtime-tags/debug/dom";
export const $input_thing_selected = /* @__PURE__ */_._const("input_thing_selected", $scope => _._attr_class_item($scope["#div/0"], "selected", $scope.input_thing_selected));
const $dynamicTag = /* @__PURE__ */_._dynamic_tag("#text/1");
export const $input_thing_content = /* @__PURE__ */_._const("input_thing_content", $scope => $dynamicTag($scope, $scope.input_thing_content));
export const $input = /* @__PURE__ */_._const("input", $scope => $input_thing($scope, $scope.input.thing));
export const $input_thing = /* @__PURE__ */_._const("input_thing", $scope => {
  $input_thing_selected($scope, $scope.input_thing?.selected);
  $input_thing_content($scope, $scope.input_thing?.content);
});
export default /* @__PURE__ */_._template("__tests__/tags/child.marko", $template, $walks, $setup, $input);