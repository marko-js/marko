export const $template = "<button> </button><!><!><!>";
export const $walks = /* get, next(1), get, out(1), replace, over(1), replace, over(2) */" D l%b%c";
import { resolveAfter } from "../../utils/resolve";
import * as _ from "@marko/runtime-tags/debug/dom";
const $if_content__value = /* @__PURE__ */_._if_closure("#text/3", 0, $scope => _._text($scope["#text/0"], $scope._.value));
const $if_content__setup = $if_content__value;
const $if = /* @__PURE__ */_._if("#text/3", "<span> </span>", /* next(1), get, out(1) */"D l", $if_content__setup);
const $value__script = _._script("__tests__/template.marko_0_value", $scope => _._on($scope["#button/0"], "click", function () {
  $value($scope, $scope.value + 1);
}));
const $value = /* @__PURE__ */_._let("value/4", $scope => {
  _._text($scope["#text/1"], $scope.value);
  $if($scope, $scope.value ? 0 : 1);
  $if_content__value($scope);
  $value__script($scope);
});
const $await_content = /* @__PURE__ */_._await_content("#text/2", "<span>Hello</span>", /* over(1) */"b");
const $await_promise = /* @__PURE__ */_._await_promise("#text/2");
export function $setup($scope) {
  $await_content($scope);
  $value($scope, 1);
  $await_promise($scope, resolveAfter(0, 3));
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);