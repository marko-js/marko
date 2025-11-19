export const $template = "<div id=outside> </div><!><!>";
export const $walks = /* next(1), get, out(1), replace, over(2) */"D l%c";
import { resolveAfter } from "../../utils/resolve";
import * as _ from "@marko/runtime-tags/debug/dom";
_._enable_catch();
const $await_content__value__script = _._script("__tests__/template.marko_3_value", $scope => (document.querySelector('#inside').textContent += ` effect ran ${$scope.value}`));
const $await_content__value = /* @__PURE__ */_._const("value", $scope => {
  _._text($scope["#text/0"], $scope.value);
  $await_content__value__script($scope);
});
const $await_content__setup__script = _._script("__tests__/template.marko_3", $scope => (document.querySelector('#outside').textContent += ` effect ran`));
const $await_content__setup = $await_content__setup__script;
const $await_content__$params = /* @__PURE__ */_._const("$params2", $scope => $await_content__value($scope, $scope.$params2[0]));
const $placeholder_content = _._content_resume("__tests__/template.marko_2_content", "loading...", /* over(1) */"b");
const $try_content__await = /* @__PURE__ */_._await("#text/0", "<div id=inside> </div>", /* next(1), get, out(1) */"D l", $await_content__setup, $await_content__$params);
const $try_content__value = /* @__PURE__ */_._closure_get("value", $scope => $try_content__await($scope, resolveAfter($scope._.value, 10)));
const $try_content__setup = $try_content__value;
const $value__closure = /* @__PURE__ */_._closure($try_content__value);
const $value = /* @__PURE__ */_._let("value/2", $scope => {
  _._text($scope["#text/0"], $scope.value);
  $value__closure($scope);
});
const $try = /* @__PURE__ */_._try("#text/1", "<!><!><!>", /* over(1), replace, over(2) */"b%c", $try_content__setup);
const $setup__script = _._script("__tests__/template.marko_0", $scope => $value($scope, 1));
export function $setup($scope) {
  $value($scope, 0);
  $try($scope, {
    placeholder: _.attrTag({
      content: $placeholder_content($scope)
    })
  });
  $setup__script($scope);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);