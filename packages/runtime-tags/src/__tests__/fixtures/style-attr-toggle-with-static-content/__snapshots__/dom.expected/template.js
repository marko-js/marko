export const $template = "<button></button><div style=\"border:1px solid black\">foo bar</div>";
export const $walks = /* get, over(1), get, over(1) */" b b";
import * as _ from "@marko/runtime-tags/debug/dom";
const $open__script = _._script("__tests__/template.marko_0_open", ($scope, {
  open
}) => _._on($scope["#button/0"], "click", function () {
  $open($scope, open = !open);
}));
const $open = /* @__PURE__ */_._let("open/2", ($scope, open) => {
  _._attr_style_item($scope["#div/1"], "display", open ? undefined : "none");
  $open__script($scope);
});
export function $setup($scope) {
  $open($scope, true);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);