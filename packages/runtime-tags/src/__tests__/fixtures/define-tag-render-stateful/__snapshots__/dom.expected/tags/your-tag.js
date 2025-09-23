export const $template = "<div>Hello <!> <!></div>";
export const $walks = /* next(1), over(1), replace, over(2), replace, out(1) */"Db%c%l";
export const $setup = () => {};
import * as _ from "@marko/runtime-tags/debug/dom";
export const $input_name = /* @__PURE__ */_._const("input_name", ($scope, input_name) => _._text($scope["#text/0"], input_name));
export const $input_count = /* @__PURE__ */_._const("input_count", ($scope, input_count) => _._text($scope["#text/1"], input_count));
export const $input = /* @__PURE__ */_._const("input", ($scope, input) => {
  $input_name($scope, input.name);
  $input_count($scope, input.count);
});
export default /* @__PURE__ */_._template("__tests__/tags/your-tag.marko", $template, $walks, $setup, $input);