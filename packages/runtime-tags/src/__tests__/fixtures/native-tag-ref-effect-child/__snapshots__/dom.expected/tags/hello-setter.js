export const $template = "";
export const $walks = "";
export const $setup = () => {};
import * as _ from "@marko/runtime-tags/debug/dom";
const $el__script = _._script("__tests__/tags/hello-setter.marko_0_el", $scope => ($scope.el().textContent = "hello"));
export const $el = /* @__PURE__ */_._const("el", $el__script);
export const $input = ($scope, input) => $el($scope, input.el);
export default /* @__PURE__ */_._template("__tests__/tags/hello-setter.marko", $template, $walks, $setup, $input);