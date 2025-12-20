export const $template = "<!><!><div> </div>";
export const $walks = /* over(1), replace, over(1), next(1), get, out(1) */"b%bD l";
export const $setup = () => {};
import * as _ from "@marko/runtime-tags/debug/dom";
const $dynamicTag = /* @__PURE__ */_._dynamic_tag("#text/0");
export const $content = ($scope, content) => $dynamicTag($scope, content);
export const $x = ($scope, x) => _._text($scope["#text/1"], x);
export const $input = ($scope, input) => $thing2($scope, input.thing);
export const $thing2 = ($scope, $thing) => {
  $x($scope, $thing.x);
  $content($scope, $thing.content);
};
export default /* @__PURE__ */_._template("__tests__/tags/custom-tag/index.marko", $template, $walks, $setup, $input);