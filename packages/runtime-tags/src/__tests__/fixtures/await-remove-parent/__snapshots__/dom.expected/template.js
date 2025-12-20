export const $template = "<div id=outside>Pass</div><!><!>";
export const $walks = /* over(1), replace, over(2) */"b%c";
import { resolveAfter } from "../../utils/resolve";
import * as _ from "@marko/runtime-tags/debug/dom";
_._enable_catch();
const $await_content__setup__script = _._script("__tests__/template.marko_4", $scope => (document.querySelector('#outside').textContent = "Fail"));
const $await_content__setup = $await_content__setup__script;
const $placeholder_content = _._content_resume("__tests__/template.marko_3_content", "loading...", /* over(1) */"b");
const $await_content = /* @__PURE__ */_._await_content("#text/0", 0, 0, $await_content__setup);
const $try_content__await_promise = /* @__PURE__ */_._await_promise("#text/0");
const $try_content__setup = $scope => {
  $await_content($scope);
  $try_content__await_promise($scope, resolveAfter(0, 1));
};
const $if_content__try = /* @__PURE__ */_._try("#text/0", "<!><!><!>", /* over(1), replace, over(2) */"b%c", $try_content__setup);
const $if_content__setup = $scope => $if_content__try($scope, {
  placeholder: _.attrTag({
    content: $placeholder_content($scope)
  })
});
const $if = /* @__PURE__ */_._if("#text/0", "<!><!><!>", /* over(1), replace, over(2) */"b%c", $if_content__setup);
const $show = /* @__PURE__ */_._let("show/1", $scope => $if($scope, $scope.show ? 0 : 1));
const $setup__script = _._script("__tests__/template.marko_0", $scope => $show($scope, 0));
export function $setup($scope) {
  $show($scope, 1);
  $setup__script($scope);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);