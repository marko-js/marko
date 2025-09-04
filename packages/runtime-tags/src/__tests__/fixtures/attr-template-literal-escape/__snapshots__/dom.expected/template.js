export const $template = "<div></div>";
export const $walks = /* get, over(1) */" b";
export const $setup = () => {};
import * as _ from "@marko/runtime-tags/debug/dom";
export const $input_name = /* @__PURE__ */_._const("input_name", ($scope, input_name) => _._attr($scope["#div/0"], "foo", `Hello ${input_name}`));
export const $input = /* @__PURE__ */_._const("input", ($scope, input) => $input_name($scope, input.name));
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup, $input);