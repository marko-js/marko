export const _template_ = "<input type=checkbox><span> </span>";
export const _walks_ = /* get, over(1), next(1), get, out(1) */" bD l";
import { register as _register, controllable_input_checked as _controllable_input_checked, controllable_input_checked_effect as _controllable_input_checked_effect, data as _data, state as _state, effect as _effect, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _checkedChange = _register("packages/translator-tags/src/__tests__/fixtures/controllable-checked/template.marko_0/checkedChange", _scope => function (_new_checked) {
  _checked(_scope, _new_checked);
});
const _checked = /* @__PURE__ */_state("checked", (_scope, checked) => {
  _controllable_input_checked(_scope, "#input/0", checked, _checkedChange(_scope));
  _data(_scope["#text/1"], String(checked));
});
const _setup__effect = _effect("packages/translator-tags/src/__tests__/fixtures/controllable-checked/template.marko_0", _scope => _controllable_input_checked_effect(_scope, "#input/0"));
export function _setup_(_scope) {
  _setup__effect(_scope);
  _checked(_scope, false);
}
export default /* @__PURE__ */_createTemplate(/* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/controllable-checked/template.marko");