export const $template = "<button id=tags> </button><div><!></div>";
export const $walks = /* get, next(1), get, out(1), next(1), replace, out(1) */" D lD%l";
import * as _ from "@marko/runtime-tags/debug/dom";
const $count__script = _._script("__tests__/components/tags-layout.marko_0_count", ($scope, {
  count
}) => _._on($scope["#button/0"], "click", function () {
  $count($scope, ++count);
}));
const $count = /* @__PURE__ */_._let("count/7", ($scope, count) => {
  _._text($scope["#text/1"], count);
  $count__script($scope);
});
export function $setup($scope) {
  $count($scope, 0);
}
const $dynamicTag = /* @__PURE__ */_._dynamic_tag("#text/2");
export const $input_stuff_content = /* @__PURE__ */_._const("input_stuff_content", $dynamicTag);
export const $input = /* @__PURE__ */_._const("input", ($scope, input) => $input_stuff($scope, input.stuff));
export const $input_stuff = /* @__PURE__ */_._const("input_stuff", ($scope, input_stuff) => $input_stuff_content($scope, input_stuff?.content));
export default /* @__PURE__ */_._template("__tests__/components/tags-layout.marko", $template, $walks, $setup, $input);