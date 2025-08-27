export const $template = "<div></div>";
export const $walks = /* get, over(1) */" b";
export const $setup = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const $child_text$for$content = /* @__PURE__ */_$.value("child_text", ($scope, child_text) => _$.data($scope["#text/0"], child_text));
const $params2$for$content = /* @__PURE__ */_$.value("$params2", ($scope, $params2) => $child$for$content($scope, $params2[0]));
const $child$for$content = /* @__PURE__ */_$.value("child", ($scope, child) => $child_text$for$content($scope, child?.text));
const $for_content = /* @__PURE__ */_$.createRenderer(" ", /* get, over(1) */" b", 0, $params2$for$content);
const $for = /* @__PURE__ */_$.loopOf("#div/0", $for_content);
export const $children = /* @__PURE__ */_$.value("children", ($scope, children) => $for($scope, [children, function (c) {
  return c.id;
}]));
export const $input = /* @__PURE__ */_$.value("input", ($scope, input) => $children($scope, input.children));
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup, $input);