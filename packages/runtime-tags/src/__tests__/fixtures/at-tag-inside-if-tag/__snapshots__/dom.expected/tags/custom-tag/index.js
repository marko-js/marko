export const $template = "<!><!><div> </div>";
export const $walks = /* replace, over(1), next(1), get, out(1) */"D%bD l";
export const $setup = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const $dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/0");
export const $content = /* @__PURE__ */_$.value("content", $dynamicTag);
export const $x = /* @__PURE__ */_$.value("x", ($scope, x) => _$.data($scope["#text/1"], x));
export const $thing2 = /* @__PURE__ */_$.value("$thing", ($scope, $thing) => {
  $x($scope, $thing.x);
  $content($scope, $thing.content);
});
export const $input = /* @__PURE__ */_$.value("input", ($scope, input) => $thing2($scope, input.thing));
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/custom-tag/index.marko", $template, $walks, $setup, $input);