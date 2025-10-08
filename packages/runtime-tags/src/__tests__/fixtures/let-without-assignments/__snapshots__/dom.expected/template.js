export const $template = "<ul></ul>";
export const $walks = /* get, over(1) */" b";
import * as _ from "@marko/runtime-tags/debug/dom";
const $for_content__i = /* @__PURE__ */_._const("i", ($scope, i) => _._text($scope["#text/0"], i));
const $for_content__$params = /* @__PURE__ */_._const("$params2", ($scope, $params2) => $for_content__i($scope, $params2[0]));
const $for_content = /* @__PURE__ */_._content_branch("<li> </li>", /* next(1), get, out(1) */"D l", 0, $for_content__$params);
const $for = /* @__PURE__ */_._for_until("#ul/0", $for_content);
const $count = /* @__PURE__ */_._let("count/1", ($scope, count) => $for($scope, [count, 0, 1]));
const $setup__script = _._script("__tests__/template.marko_0", $scope => $scope["#ul/0"].classList.add("mounted"));
export function $setup($scope) {
  $count($scope, 1);
  $setup__script($scope);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);