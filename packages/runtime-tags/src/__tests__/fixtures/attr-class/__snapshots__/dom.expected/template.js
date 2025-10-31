export const $template = `<div class=a></div><div class="a b"></div><div class="a b c"></div>${_customTag_template}${_customTag_template}<!><!>`;
export const $walks = /* get, over(3), beginChild, _customTag_walks, endChild, beginChild, _customTag_walks, endChild, replace, over(2) */` d/${_customTag_walks}&/${_customTag_walks}&%c`;
import CustomTag from "./tags/custom-tag.marko";
const TestTag = CustomTag;
import * as _ from "@marko/runtime-tags/debug/dom";
import { $setup as _customTag, $input_class as _customTag_input_class, $input_test as _customTag_input_test, $template as _customTag_template, $walks as _customTag_walks } from "./tags/custom-tag.marko";
const $test_content = _._content_resume("__tests__/template.marko_1_content", "Hello", /* over(1) */"b");
const $dynamicTag = /* @__PURE__ */_._dynamic_tag("#text/3");
const $c__OR__d = /* @__PURE__ */_._or(8, $scope => {
  _._attr_class_items($scope["#div/0"], {
    b: $scope.c,
    d: $scope.d
  });
  _customTag_input_class($scope["#childScope/1"], ["a", {
    b: $scope.c,
    d: $scope.d
  }]);
  $dynamicTag($scope, TestTag, () => ({
    class: ["a", {
      b: $scope.c,
      d: $scope.d
    }],
    test: _.attrTag({
      class: ["a", {
        b: $scope.c,
        d: $scope.d
      }],
      content: $test_content($scope)
    })
  }));
});
export const $c = /* @__PURE__ */_._const("c", $c__OR__d);
export const $d = /* @__PURE__ */_._const("d", $c__OR__d);
export function $setup($scope) {
  _customTag($scope["#childScope/1"]);
  _customTag_input_test($scope["#childScope/1"], void 0);
  _customTag($scope["#childScope/2"]);
  _customTag_input_class($scope["#childScope/2"], ["a", false, "b"]);
  _customTag_input_test($scope["#childScope/2"], void 0);
}
export const $input = /* @__PURE__ */_._const("input", $scope => {
  $c($scope, $scope.input.c);
  $d($scope, $scope.input.d);
});
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup, $input);