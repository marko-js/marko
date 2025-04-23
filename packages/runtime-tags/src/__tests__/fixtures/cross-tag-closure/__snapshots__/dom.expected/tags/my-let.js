export const $template = "";
export const $walks = "";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $value = /* @__PURE__ */_$.state("value/3", _$.tagVarSignal);
export const $input_value = /* @__PURE__ */_$.value("input_value", $value);
export function $setup($scope) {
  _$.setTagVarChange($scope, $valueChange($scope));
}
export const $input = /* @__PURE__ */_$.value("input", ($scope, input) => $input_value($scope, input.value));
function $valueChange($scope) {
  return _new_value => {
    $value($scope, _new_value);
  };
}
_$.register("__tests__/tags/my-let.marko_0/valueChange", $valueChange);
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/my-let.marko", $template, $walks, $setup, $input);