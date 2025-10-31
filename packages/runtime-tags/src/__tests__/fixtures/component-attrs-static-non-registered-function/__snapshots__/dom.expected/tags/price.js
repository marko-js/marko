export const $template = "<div> </div>";
export const $walks = /* next(1), get, out(1) */"D l";
export const $setup = () => {};
import * as _ from "@marko/runtime-tags/debug/dom";
export const $input = /* @__PURE__ */_._const("input", $scope => _._text($scope["#text/0"], $scope.input.format($scope.input.value)));
export default /* @__PURE__ */_._template("__tests__/tags/price.marko", $template, $walks, $setup, $input);