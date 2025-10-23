export const $template = "<button></button>";
export const $walks = /* get, over(1) */" b";
import * as _ from "@marko/runtime-tags/debug/dom";
const $setup__script = _._script("__tests__/template.marko_0", $scope => _._on($scope["#button/0"], "click", function () {
  _._el_read($scope["#button/0"]).innerHTML = 'clicked';
}));
export const $setup = $setup__script;
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);