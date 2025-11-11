export const $template = _layout_template;
export const $walks = /* <layout> */`/${_layout_walks}&`;
import * as _ from "@marko/runtime-tags/debug/dom";
import { $setup as _layout, $content as _layout_input_content, $template as _layout_template, $walks as _layout_walks } from "./tags/layout.marko";
const $layout_content__name = /* @__PURE__ */_._closure_get("name", $scope => _._text($scope["#text/0"], $scope._.name));
const $layout_content__setup = $layout_content__name;
const $layout_content = /* @__PURE__ */_._content("__tests__/template.marko_1_content", "<h1>Hello <!></h1>", /* next(1), over(1), replace, out(1) */"Db%l", $layout_content__setup);
export function $setup($scope) {
  _layout($scope["#childScope/0"]);
  _layout_input_content($scope["#childScope/0"], $layout_content($scope));
}
export const $input = /* @__PURE__ */_._const("input", $scope => $name($scope, $scope.input.name));
const $name__closure = /* @__PURE__ */_._closure($layout_content__name);
export const $name = /* @__PURE__ */_._const("name", $name__closure);
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup, $input);