export const _template_ = "<input type=checkbox><span> </span>";
export const _walks_ = /* get, over(1), next(1), get, out(1) */" bD l";
import { register as _register, controllable_input_checked as _checkedAttr, controllable_input_checked_setup as _checkedChangeEffect, data as _data, queueSource as _queueSource, value as _value, queueEffect as _queueEffect, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _checkedChange = _register("packages/translator-tags/src/__tests__/fixtures/controllable-checked/template.marko_0/checkedChange", _scope => function (_new_checked) {
  _queueSource(_scope, _checked, _new_checked);
});
const _checked = /* @__PURE__ */_value("checked", (_scope, checked) => {
  _checkedAttr(_scope, "#input/0", checked, _checkedChange(_scope));
  _data(_scope["#text/1"], String(checked));
});
const _setup__effect = _register("packages/translator-tags/src/__tests__/fixtures/controllable-checked/template.marko_0", _scope => _checkedChangeEffect(_scope, "#input/0"));
export function _setup_(_scope) {
  _queueEffect(_scope, _setup__effect);
  _checked(_scope, false);
}
export default /* @__PURE__ */_createTemplate(/* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/controllable-checked/template.marko");