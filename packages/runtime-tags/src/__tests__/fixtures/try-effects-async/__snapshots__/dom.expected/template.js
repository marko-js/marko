export const $template = "<button>inc</button><div></div><!><!>";
export const $walks = /* get, over(1), get, over(1), replace, over(2) */" b b%c";
import { resolveAfter } from "../../utils/resolve";
import * as _ from "@marko/runtime-tags/debug/dom";
_._enable_catch();
const $await_content__value = /* @__PURE__ */_._const("value", $scope => _._text($scope["#text/0"], $scope.value > 1 ? (() => {
  throw new Error("ERROR!");
})() : $scope.value));
const $await_content__$params = /* @__PURE__ */_._const("$params3", $scope => $await_content__value($scope, $scope.$params3[0]));
const $catch_content__err = /* @__PURE__ */_._const("err", $scope => _._text($scope["#text/0"], $scope.err));
const $catch_content__$params = /* @__PURE__ */_._const("$params2", $scope => $catch_content__err($scope, $scope.$params2[0]));
const $catch_content = _._content_resume("__tests__/template.marko_3_content", " ", /* get, over(1) */" b", 0, $catch_content__$params);
const $placeholder_content = _._content_resume("__tests__/template.marko_2_content", "LOADING...", /* over(1) */"b");
const $try_content__await = /* @__PURE__ */_._await("#text/0", "Async: <!>", /* over(1), replace, over(1) */"b%b", 0, $await_content__$params);
const $try_content__clickCount__script = _._script("__tests__/template.marko_1_clickCount", $scope => {
  debugger;
  _._el_read($scope._["#div/1"]).textContent = $scope._.clickCount;
});
const $try_content__clickCount = /* @__PURE__ */_._closure_get("clickCount", $scope => {
  $try_content__await($scope, resolveAfter($scope._.clickCount, 1));
  $try_content__clickCount__script($scope);
});
const $try_content__setup = $try_content__clickCount;
const $clickCount__closure = /* @__PURE__ */_._closure($try_content__clickCount);
const $clickCount__script = _._script("__tests__/template.marko_0_clickCount", $scope => _._on($scope["#button/0"], "click", function () {
  $clickCount($scope, $scope.clickCount + 1);
}));
const $clickCount = /* @__PURE__ */_._let("clickCount/3", $scope => {
  $clickCount__closure($scope);
  $clickCount__script($scope);
});
const $try = /* @__PURE__ */_._try("#text/2", "<!><!><!>", /* over(1), replace, over(2) */"b%c", $try_content__setup);
export function $setup($scope) {
  $clickCount($scope, 0);
  $try($scope, {
    catch: _.attrTag({
      content: $catch_content($scope)
    }),
    placeholder: _.attrTag({
      content: $placeholder_content($scope)
    })
  });
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);