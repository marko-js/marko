export const $template = "<!><!><!>";
export const $walks = /* replace, over(1), replace, over(1) */"%b%bD";
export const $setup = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
export const $name = /* @__PURE__ */_$.value("name", ($scope, name) => _$.data($scope["#text/0"], name));
const $dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/1");
export const $content = /* @__PURE__ */_$.value("content", $dynamicTag);
export const $input = /* @__PURE__ */_$.value("input", ($scope, input) => {
  $name($scope, input.name);
  $content($scope, input.content);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/child/index.marko", $template, $walks, $setup, $input);