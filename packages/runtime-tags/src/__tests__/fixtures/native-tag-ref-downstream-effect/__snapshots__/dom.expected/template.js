export const $template = "<div></div><!><!>";
export const $walks = /* get, over(1), replace, over(2) */" b%c";
import * as _ from "@marko/runtime-tags/debug/dom";
const $if_content__setup__script = _._script("__tests__/template.marko_1", $scope => (_._el_read($scope._["#div/0"]).textContent = "hello"));
const $if_content__setup = $if_content__setup__script;
const $if = /* @__PURE__ */_._if("#text/1", 0, 0, $if_content__setup);
export function $setup($scope) {
  $if($scope, true ? 0 : 1);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);