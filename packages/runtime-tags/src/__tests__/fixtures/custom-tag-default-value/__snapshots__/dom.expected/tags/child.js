export const $template = "<!> ";
export const $walks = /* replace, over(2) */"%c";
export const $setup = () => {};
import * as _ from "@marko/runtime-tags/debug/dom";
const $value = ($scope, value) => _._text($scope["#text/0"], value);
export const $input_value = ($scope, input_value) => $value($scope, input_value);
export const $input = ($scope, input) => $input_value($scope, input.value);
export default /* @__PURE__ */_._template("__tests__/tags/child.marko", $template, $walks, $setup, $input);