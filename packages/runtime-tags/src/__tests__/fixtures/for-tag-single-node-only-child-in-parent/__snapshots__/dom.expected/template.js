export const $template = "<div></div>";
export const $walks = /* get, over(1) */" b";
import * as _ from "@marko/runtime-tags/debug/dom";
const $for_content = /* @__PURE__ */_._content_branch("<div></div>", /* over(1) */"b");
const $for = /* @__PURE__ */_._for_of("#div/0", $for_content);
const $children__script = _._script("__tests__/template.marko_0_children", ($scope, {
  children
}) => {
  if (children?.length === 1) {
    $children($scope, children = [...children, 2]);
  }
});
const $children = /* @__PURE__ */_._let("children/1", ($scope, children) => {
  $children_length($scope, children?.length);
  $for($scope, [children]);
  $children__script($scope);
});
const $children_length = /* @__PURE__ */_._const("children_length", ($scope, children_length) => _._attr($scope["#div/0"], "data-children", children_length));
export function $setup($scope) {
  $children($scope, [1]);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);