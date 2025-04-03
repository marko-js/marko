export const $template = "<!><!><!>";
export const $walks = /* replace, over(1) */"D%bD";
export const $setup = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const $child_text$for$content = /* @__PURE__ */_$.value("child_text", ($scope, child_text) => _$.data($scope["#text/0"], child_text));
const $child$for$content = /* @__PURE__ */_$.value("child", ($scope, child) => $child_text$for$content($scope, child?.text));
const $params2$for$content = /* @__PURE__ */_$.value("$params2", ($scope, $params2) => $child$for$content($scope, $params2[0]));
const $for_content = /* @__PURE__ */_$.createRenderer(" ", /* get */" ", 0, $params2$for$content);
const $for = /* @__PURE__ */_$.loopOf("#text/0", $for_content);
export const $input_children = /* @__PURE__ */_$.value("input_children", ($scope, input_children) => $for($scope, [input_children, function (c) {
  return c.id;
}]));
export const $input = /* @__PURE__ */_$.value("input", ($scope, input) => $input_children($scope, input.children));
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup, $input);