export const $template = "<!>";
export const $walks = /* replace, over(1) */"%b";
export const $setup = () => {};
import * as _ from "@marko/runtime-tags/debug/dom";
export const $input = ($scope, input) => _._text($scope["#text/0"], JSON.stringify(input));
export default /* @__PURE__ */_._template("__tests__/tags/child.marko", $template, $walks, $setup, $input);