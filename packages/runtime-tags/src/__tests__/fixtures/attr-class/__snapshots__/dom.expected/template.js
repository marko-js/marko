export const $template = `<div class=a></div><div class="a b"></div><div class="a b c"></div>${_customTag_template}${_customTag_template}<!><!>`;
export const $walks = /* get, over(3), beginChild, _customTag_walks, endChild, beginChild, _customTag_walks, endChild, replace, over(2) */` d/${_customTag_walks}&/${_customTag_walks}&%c`;
import CustomTag from "./tags/custom-tag.marko";
const TestTag = CustomTag;
import * as _$ from "@marko/runtime-tags/debug/dom";
import { $setup as _customTag, $input_class as _customTag_input_class, $input_test as _customTag_input_test, $template as _customTag_template, $walks as _customTag_walks } from "./tags/custom-tag.marko";
const $test_content = _$.registerContent("__tests__/template.marko_1_renderer", "Hello", /* over(1) */"b");
const $dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/3");
const $expr_c_d = /* @__PURE__ */_$.intersection(8, $scope => {
  let {
    c,
    d
  } = $scope;
  _$.classItems($scope["#div/0"], {
    b: c,
    d: d
  });
  _customTag_input_class($scope["#childScope/1"], ["a", {
    b: c,
    d
  }]);
  $dynamicTag($scope, TestTag, () => ({
    class: ["a", {
      b: c,
      d
    }],
    test: _$.attrTag({
      class: ["a", {
        b: c,
        d
      }],
      content: $test_content($scope)
    })
  }));
});
export const $c = /* @__PURE__ */_$.value("c", $expr_c_d);
export const $d = /* @__PURE__ */_$.value("d", $expr_c_d);
export function $setup($scope) {
  _customTag($scope["#childScope/1"]);
  _customTag_input_test($scope["#childScope/1"], void 0);
  _customTag($scope["#childScope/2"]);
  _customTag_input_class($scope["#childScope/2"], ["a", false, "b"]);
  _customTag_input_test($scope["#childScope/2"], void 0);
}
export const $input = /* @__PURE__ */_$.value("input", ($scope, input) => {
  $c($scope, input.c);
  $d($scope, input.d);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup, $input);