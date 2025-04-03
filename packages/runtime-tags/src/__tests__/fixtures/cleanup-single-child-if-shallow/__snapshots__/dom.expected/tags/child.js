export const $template = "<div>child</div>";
export const $walks = /* over(1) */"b";
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