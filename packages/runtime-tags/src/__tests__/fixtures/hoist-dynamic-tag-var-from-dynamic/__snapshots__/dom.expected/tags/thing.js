export const $template = "<!><!><!><!>";
export const $walks = /* replace, over(1), replace, over(1) */"D%b%bD";
export const $setup = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const $dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/0");
const $dynamicTag2 = /* @__PURE__ */_$.dynamicTag("#text/1");
export const $input_content = /* @__PURE__ */_$.value("input_content", ($scope, input_content) => {
  $dynamicTag($scope, input_content);
  $dynamicTag2($scope, input_content);
});
export const $input = /* @__PURE__ */_$.value("input", ($scope, input) => $input_content($scope, input.content));
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/thing.marko", $template, $walks, $setup, $input);