export const $template = "<!><!><!>";
export const $walks = /* over(1), replace, over(2) */"b%c";
import { resolveAfter } from "../../utils/resolve";
import * as _ from "@marko/runtime-tags/debug/dom";
_._enable_catch();
const $if_content__value = /* @__PURE__ */_._if_closure("#text/2", 0, $scope => _._text($scope["#text/0"], $scope._.value));
const $if_content__setup = $if_content__value;
const $await_content__if = /* @__PURE__ */_._if("#text/2", "<span> </span>", /* next(1), get, out(1) */"D l", $if_content__setup);
const $await_content__value__script = _._script("__tests__/template.marko_3_value", $scope => _._on($scope["#button/0"], "click", function () {
  $await_content__value($scope, $scope.value + 1);
}));
const $await_content__value = /* @__PURE__ */_._let("value/3", $scope => {
  _._text($scope["#text/1"], $scope.value);
  $await_content__if($scope, ($scope.value > 0) ? 0 : 1);
  $if_content__value($scope);
  $await_content__value__script($scope);
});
const $await_content__setup = $scope => $await_content__value($scope, 1);
const $placeholder_content = _._content_resume("__tests__/template.marko_2_content", "loading...", /* over(1) */"b");
const $await_content = /* @__PURE__ */_._await_content("#text/0", "<button> </button><!><!>", /* get, next(1), get, out(1), replace, over(2) */" D l%c", $await_content__setup);
const $try_content__await_promise = /* @__PURE__ */_._await_promise("#text/0");
const $try_content__setup = $scope => {
  $await_content($scope);
  $try_content__await_promise($scope, resolveAfter(0, 1));
};
const $try = /* @__PURE__ */_._try("#text/0", "<!><!><!>", /* over(1), replace, over(2) */"b%c", $try_content__setup);
export function $setup($scope) {
  $try($scope, {
    placeholder: _.attrTag({
      content: $placeholder_content($scope)
    })
  });
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);