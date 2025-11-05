export const $template = "<input>";
export const $walks = /* get, over(1) */" b";
import * as _ from "@marko/runtime-tags/debug/dom";
const $setup__script = _._script("__tests__/template.marko_0", $scope => _._attrs_script($scope, "#input/0"));
export function $setup($scope) {
  _._attrs($scope, "#input/0", {
    type: "checkbox",
    ...{
      checkedValue: 1,
      checkedChange: $checkedChange
    }
  });
  $setup__script($scope);
}
function $checkedChange() {}
_._resume("__tests__/template.marko_0/checkedChange", $checkedChange);
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);