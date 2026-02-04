export const $template = `<button>Inc</button>${_child_template}`;
export const $walks = /* get, over(1), <child> */` b/${_child_walks}&`;
import * as _ from "@marko/runtime-tags/debug/dom";
import { $setup as _child, $content as _child_input_content, $value as _child_input_value, $template as _child_template, $walks as _child_walks } from "./tags/child.marko";
const $child_content2__outer = /* @__PURE__ */_._closure_get("outer", $scope => _._text($scope["#text/0"], $scope._.outer));
const $child_content2__setup = $child_content2__outer;
const $child_content2__inner = ($scope, inner) => _._text($scope["#text/1"], inner);
const $child_content2__$params = ($scope, $params3) => $child_content2__inner($scope, $params3[0]);
const $child_content2 = _._content_resume("__tests__/template.marko_2_content", "<div><!>.<!></div>", /* next(1), replace, over(2), replace, out(1) */"D%c%l", $child_content2__setup, $child_content2__$params);
const $child_content__y = /* @__PURE__ */_._closure_get("y", $scope => _child_input_value($scope["#childScope/0"], $scope._.y));
const $child_content__setup = $scope => {
  $child_content__y($scope);
  _child($scope["#childScope/0"]);
  _child_input_content($scope["#childScope/0"], $child_content2($scope));
};
const $child_content__$params = ($scope, $params2) => $child_content__outer($scope, $params2[0]);
const $child_content__outer__closure = /* @__PURE__ */_._closure($child_content2__outer);
const $child_content__outer = /* @__PURE__ */_._const("outer", $child_content__outer__closure);
const $child_content = _._content_resume("__tests__/template.marko_1_content", _child_template, /* <child> */`/${_child_walks}&`, $child_content__setup, $child_content__$params);
const $x__script = _._script("__tests__/template.marko_0_x", $scope => _._on($scope["#button/0"], "click", function () {
  $x($scope, $scope.x + 1);
}));
const $x = /* @__PURE__ */_._let("x/2", $scope => {
  _child_input_value($scope["#childScope/1"], $scope.x);
  $x__script($scope);
});
const $y = /* @__PURE__ */_._let("y/3");
export function $setup($scope) {
  _child($scope["#childScope/1"]);
  _child_input_content($scope["#childScope/1"], $child_content($scope));
  $x($scope, 1);
  $y($scope, 2);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);