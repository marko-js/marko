export const $template = "<!><!><!>";
export const $walks = /* replace, over(1), replace, over(2) */"%b%c";
export const $setup = () => {};
import * as _ from "@marko/runtime-tags/debug/dom";
export const $name = /* @__PURE__ */_._const("name", ($scope, name) => _._text($scope["#text/0"], name));
const $dynamicTag = /* @__PURE__ */_._dynamic_tag("#text/1");
export const $content = /* @__PURE__ */_._const("content", $dynamicTag);
export const $input = /* @__PURE__ */_._const("input", ($scope, input) => {
  $name($scope, input.name);
  $content($scope, input.content);
});
export default /* @__PURE__ */_._template("__tests__/tags/child/index.marko", $template, $walks, $setup, $input);