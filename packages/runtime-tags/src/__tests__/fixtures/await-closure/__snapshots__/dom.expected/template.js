export const $template = "<button> </button><!><!>";
export const $walks = /* get, next(1), get, out(1), replace, over(2) */" D l%c";
import { resolveAfter } from "../../utils/resolve";
import * as _ from "@marko/runtime-tags/debug/dom";
_._enable_catch();
const $placeholder_content = _._content_resume("__tests__/template.marko_3_content", "loading...", /* over(1) */"b");
const $await_content__value = /* @__PURE__ */_._closure_get("value", $scope => _._text($scope["#text/0"], $scope._._.value), $scope => $scope._._, "__tests__/template.marko_2_value");
const $await_content__setup = $await_content__value;
const $await_content = /* @__PURE__ */_._await_content("#text/0", "<span> </span>", /* next(1), get, out(1) */"D l", $await_content__setup);
const $try_content__await_promise = /* @__PURE__ */_._await_promise("#text/0");
const $try_content__setup = $scope => {
  $await_content($scope);
  $try_content__await_promise($scope, resolveAfter(0, 4));
};
const $value__closure = /* @__PURE__ */_._closure($await_content__value);
const $value__script = _._script("__tests__/template.marko_0_value", $scope => _._on($scope["#button/0"], "click", function () {
  $value($scope, $scope.value + 1);
}));
const $value = /* @__PURE__ */_._let("value/3", $scope => {
  _._text($scope["#text/1"], $scope.value);
  $value__closure($scope);
  $value__script($scope);
});
const $try = /* @__PURE__ */_._try("#text/2", "<!><!><!>", /* over(1), replace, over(2) */"b%c", $try_content__setup);
export function $setup($scope) {
  $value($scope, 1);
  $try($scope, {
    placeholder: _.attrTag({
      content: $placeholder_content($scope)
    })
  });
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);