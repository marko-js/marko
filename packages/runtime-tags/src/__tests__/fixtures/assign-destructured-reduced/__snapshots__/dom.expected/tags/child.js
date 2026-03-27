export const $template = "";
export const $walks = "";
export const $setup = () => {};
import * as _ from "@marko/runtime-tags/debug/dom";
const $input__script = _._script("__tests__/tags/child.marko_0_input", $scope => {
  {
    $scope.input;
    const updated = _._call($scope.input.valueChange, 2);
    if (updated !== 2) {
      // Assignments always return their value.
      throw new Error(`Expected value to be 2`);
    }
    console.log(updated, $scope.input.value);
  }
});
export const $input = /* @__PURE__ */_._const("input", $input__script);
export default /* @__PURE__ */_._template("__tests__/tags/child.marko", $template, $walks, $setup, $input);