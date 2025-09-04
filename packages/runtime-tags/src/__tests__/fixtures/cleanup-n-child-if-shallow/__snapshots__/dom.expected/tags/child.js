export const $template = "<div>a</div><span>b</span><p>c</p>";
export const $walks = /* over(3) */"d";
export const $setup = () => {};
import * as _ from "@marko/runtime-tags/debug/dom";
const $input__script = _._script("__tests__/tags/child.marko_0_input", ($scope, {
  input
}) => {
  input.write('mounted');
  _.$signal($scope, 0).onabort = () => {
    input.write('destroyed');
  };
});
export const $input = /* @__PURE__ */_._const("input", $scope => {
  _.$signalReset($scope, 0);
  $input__script($scope);
});
export default /* @__PURE__ */_._template("__tests__/tags/child.marko", $template, $walks, $setup, $input);