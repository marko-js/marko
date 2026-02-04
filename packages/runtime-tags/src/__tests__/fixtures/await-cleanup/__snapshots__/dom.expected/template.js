export const $template = "<button></button><div id=one>Fail</div><div id=two>Fail</div><!><!>";
export const $walks = /* get, over(3), replace, over(2) */" d%c";
import { resolveAfter } from "../../utils/resolve";
import * as _ from "@marko/runtime-tags/debug/dom";
_._enable_catch();
const $await_content2__setup__script = _._script("__tests__/template.marko_5", $scope => (_.$signal($scope, 0).onabort = () => document.querySelector('#two').textContent = "Pass"));
const $await_content2__setup = $scope => {
  _.$signalReset($scope, 0);
  $await_content2__setup__script($scope);
};
const $placeholder_content = _._content_resume("__tests__/template.marko_4_content", "loading...", /* over(1) */"b");
const $await_content__show = /* @__PURE__ */_._closure_get("show", $scope => _._text($scope["#text/0"], $scope._._._.show), $scope => $scope._._._, "__tests__/template.marko_3_show");
const $await_content__setup__script = _._script("__tests__/template.marko_3", $scope => (_.$signal($scope, 0).onabort = () => document.querySelector('#one').textContent = "Pass"));
const $await_content__setup = $scope => {
  $await_content__show($scope);
  _.$signalReset($scope, 0);
  $await_content__setup__script($scope);
};
const $await_content = /* @__PURE__ */_._await_content("#text/0", " ", /* get, over(1) */" b", $await_content__setup);
const $try_content__await_promise = /* @__PURE__ */_._await_promise("#text/0");
const $await_content2 = /* @__PURE__ */_._await_content("#text/1", 0, 0, $await_content2__setup);
const $try_content__await_promise2 = /* @__PURE__ */_._await_promise("#text/1");
const $try_content__setup = $scope => {
  $await_content($scope);
  $await_content2($scope);
  $try_content__await_promise($scope, resolveAfter(0, 1));
  $try_content__await_promise2($scope, resolveAfter(0, 1));
};
const $if_content__try = /* @__PURE__ */_._try("#text/0", "<!><!><!><!>", /* over(1), replace, over(1), replace, over(2) */"b%b%c", $try_content__setup);
const $if_content__setup = $scope => $if_content__try($scope, {
  placeholder: _.attrTag({
    content: $placeholder_content($scope)
  })
});
const $if = /* @__PURE__ */_._if("#text/1", "<!><!><!>", /* over(1), replace, over(2) */"b%c", $if_content__setup);
const $show__closure = /* @__PURE__ */_._closure($await_content__show);
const $show = /* @__PURE__ */_._let("show/2", $scope => {
  $if($scope, $scope.show ? 0 : 1);
  $show__closure($scope);
});
const $setup__script = _._script("__tests__/template.marko_0", $scope => _._on($scope["#button/0"], "click", function () {
  $show($scope, 0);
}));
export function $setup($scope) {
  $show($scope, 1);
  $setup__script($scope);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);