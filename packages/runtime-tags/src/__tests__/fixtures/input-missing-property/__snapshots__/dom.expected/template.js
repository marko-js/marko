const $Child_content__walks = /* over(1), replace, over(2) */"b%c",
  $Child_content__template = "<!><!><!>";
export const $template = /*@__PURE__*/(_w0 => `<button> </button>${_w0}<!>`)($Child_content__template);
export const $walks =
/*@__PURE__*/
/* get, next(1), get, out(1), <Child>, over(1) */
(_w0 => ` D l/${_w0}&b`)($Child_content__walks);
import * as _ from "@marko/runtime-tags/debug/dom";
const $if_content2__input_name = /* @__PURE__ */_._closure_get("input_name", $scope => _._text($scope["#text/0"], $scope._._.input_name || "Fallback"), $scope => $scope._._);
const $if_content2__setup = $if_content2__input_name;
const $if_content__if = /* @__PURE__ */_._if("#text/0", "<div> </div>", /* next(1), get, out(1) */"D l", $if_content2__setup);
const $if_content__setup = $scope => $if_content__if($scope, true ? 0 : 1);
const $Child_content__if = /* @__PURE__ */_._if("#text/0", "<!><!><!>", /* over(1), replace, over(2) */"b%c", $if_content__setup);
const $Child_content__input_count = ($scope, input_count) => $Child_content__if($scope, input_count ? 0 : 1);
const $Child_content__tag_input_name__closure = /* @__PURE__ */_._closure($if_content2__input_name);
const $Child_content__tag_input_name = /* @__PURE__ */_._const("input_name", $Child_content__tag_input_name__closure);
const $Child_content__$params = ($scope, $params2) => $Child_content__input($scope, $params2[0]);
const $Child_content__input = ($scope, input) => {
  $Child_content__input_count($scope, input.count);
  $Child_content__tag_input_name($scope, input.name);
};
const $count__script = _._script("__tests__/template.marko_0_count", $scope => _._on($scope["#button/0"], "click", function () {
  $count($scope, $scope.count + 1);
}));
const $count = /* @__PURE__ */_._let("count/3", $scope => {
  _._text($scope["#text/1"], $scope.count);
  $Child_content__input_count($scope["#childScope/2"], $scope.count);
  $count__script($scope);
});
export function $setup($scope) {
  $Child_content__tag_input_name($scope["#childScope/2"]);
  $count($scope, 0);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);