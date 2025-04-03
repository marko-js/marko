export const $template = "<div>a</div><span>b</span><p>c</p>";
export const $walks = /* over(3) */"d";
export const $setup = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const $input_effect = _$.effect("__tests__/tags/child.marko_0_input", ($scope, {
  input
}) => {
  input.write('mounted');
  _$.getAbortSignal($scope, 0).onabort = () => {
    input.write('destroyed');
  };
});
export const $input = /* @__PURE__ */_$.value("input", $scope => {
  _$.resetAbortSignal($scope, 0);
  $input_effect($scope);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/child.marko", $template, $walks, $setup, $input);