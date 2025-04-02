export const _template = "";
export const _walks = "";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _value = /* @__PURE__ */_$.state("value/3", _$.tagVarSignal);
export const _input_value = /* @__PURE__ */_$.value("input_value", _value);
export const _input = /* @__PURE__ */_$.value("input", (_scope, input) => _input_value(_scope, input.value));
export function _setup(_scope) {
  _$.setTagVarChange(_scope, _valueChange(_scope));
}
function _valueChange(_scope) {
  return _new_value => {
    _value(_scope, _new_value);
  };
}
_$.register("__tests__/tags/my-let.marko_0/valueChange", _valueChange);
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/my-let.marko", _template, _walks, _setup, _input);