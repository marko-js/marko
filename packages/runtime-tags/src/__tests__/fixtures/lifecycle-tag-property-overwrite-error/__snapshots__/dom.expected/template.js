export const $template = "";
export const $walks = "";
import * as _ from "@marko/runtime-tags/debug/dom";
const $setup__script = _._script("__tests__/template.marko_0", $scope => _._lifecycle($scope, "$lifecycle", {
  w: 0,
  onMount: function () {
    this.w = 1;
  }
}));
export const $setup = $setup__script;
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);