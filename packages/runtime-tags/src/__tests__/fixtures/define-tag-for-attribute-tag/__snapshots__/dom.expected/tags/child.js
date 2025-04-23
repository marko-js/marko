export const $template = "<div><!></div>";
export const $walks = /* get, next(1), replace, out(1) */" D%l";
export const $setup = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
export const $input_thing_selected = /* @__PURE__ */_$.value("input_thing_selected", ($scope, input_thing_selected) => _$.classItem($scope["#div/0"], "selected", input_thing_selected));
const $dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/1");
export const $input_thing_content = /* @__PURE__ */_$.value("input_thing_content", $dynamicTag);
export const $input = /* @__PURE__ */_$.value("input", ($scope, input) => $input_thing($scope, input.thing));
export const $input_thing = /* @__PURE__ */_$.value("input_thing", ($scope, input_thing) => {
  $input_thing_selected($scope, input_thing?.selected);
  $input_thing_content($scope, input_thing?.content);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/child.marko", $template, $walks, $setup, $input);