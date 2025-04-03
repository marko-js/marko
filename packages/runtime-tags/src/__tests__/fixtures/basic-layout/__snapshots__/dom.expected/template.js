export const $template = _layout_template;
export const $walks = /* beginChild, _layout_walks, endChild */`/${_layout_walks}&`;
import * as _$ from "@marko/runtime-tags/debug/dom";
import { $setup as _layout, $content as _layout_input_content, $template as _layout_template, $walks as _layout_walks } from "./tags/layout.marko";
const $name$layout$content = /* @__PURE__ */_$.dynamicClosureRead("name", ($scope, name) => _$.data($scope["#text/0"], name));
const $layout_content = /* @__PURE__ */_$.createContent("__tests__/template.marko_1_renderer", "<h1>Hello <!></h1>", /* next(1), over(1), replace */"Db%", 0, 0, $scope => $name$layout$content($scope));
const $name_closure = /* @__PURE__ */_$.dynamicClosure($name$layout$content);
export const $name = /* @__PURE__ */_$.value("name", $name_closure);
export const $input = /* @__PURE__ */_$.value("input", ($scope, input) => $name($scope, input.name));
export function $setup($scope) {
  _layout($scope["#childScope/0"]);
  _layout_input_content($scope["#childScope/0"], $layout_content($scope));
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup, $input);