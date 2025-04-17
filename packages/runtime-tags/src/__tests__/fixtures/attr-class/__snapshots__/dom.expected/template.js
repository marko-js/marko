export const $template = `<div class=a></div><div class="a b"></div><div class="a b c"></div>${_customTag_template}${_customTag_template}<!><!>`;
export const $walks = /* get, over(3), beginChild, _customTag_walks, endChild, beginChild, _customTag_walks, endChild, replace, over(1) */` d/${_customTag_walks}&/${_customTag_walks}&%bD`;
import * as _$ from "@marko/runtime-tags/debug/dom";
import { $setup as _customTag, $className as _customTag_input_class, $template as _customTag_template, $walks as _customTag_walks } from "./tags/custom-tag.marko";
const $test_content = _$.registerContent("__tests__/template.marko_1_renderer", "Hello");
const $expr_input_test_c_d = /* @__PURE__ */_$.intersection(10, $scope => {
  const {
    input_test,
    c,
    d
  } = $scope;
  $dynamicTag($scope, input_test, () => ({
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
}, 2);
const $expr_c_d = /* @__PURE__ */_$.intersection(9, $scope => {
  const {
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
});
const $dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/3");
export const $d = /* @__PURE__ */_$.value("d", $scope => {
  $expr_c_d($scope);
  $expr_input_test_c_d($scope);
});
export const $c = /* @__PURE__ */_$.value("c", $scope => {
  $expr_c_d($scope);
  $expr_input_test_c_d($scope);
});
export const $input_test = /* @__PURE__ */_$.value("input_test", $expr_input_test_c_d);
export const $input = /* @__PURE__ */_$.value("input", ($scope, input) => {
  $input_test($scope, input.test);
  $c($scope, input.c);
  $d($scope, input.d);
});
export function $setup($scope) {
  _customTag($scope["#childScope/1"]);
  _customTag($scope["#childScope/2"]);
  _customTag_input_class($scope["#childScope/2"], ["a", false, "b"]);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup, $input);