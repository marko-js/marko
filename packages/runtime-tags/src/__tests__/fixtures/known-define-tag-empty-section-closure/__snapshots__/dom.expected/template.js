export const $template = "<div><!></div>";
export const $walks = /* next(1), replace, out(1) */"D%l";
import { $setup as _test, $template as _test_template, $walks as _test_walks } from "./tags/test.marko";
const $if_content__setup = $scope => {
  _test($scope["#childScope/0"]);
};
import * as _ from "@marko/runtime-tags/debug/dom";
const $if = /* @__PURE__ */_._if("#text/0", `<!>${_test_template}<!>`, /* over(1), <test>, over(1) */`b/${_test_walks}&b`, $if_content__setup);
const $m = /* @__PURE__ */_._let("m/1", $scope => $if($scope, $scope.m ? 0 : 1));
const $setup__script = _._script("__tests__/template.marko_0", $scope => $m($scope, 1));
export function $setup($scope) {
  $m($scope, undefined);
  $setup__script($scope);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);