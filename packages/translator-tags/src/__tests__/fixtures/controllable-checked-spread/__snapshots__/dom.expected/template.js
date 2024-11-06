export const _template_ = `${_checkbox_template}<span> </span>`;
export const _walks_ = /* beginChild, _checkbox_walks, endChild, next(1), get, out(1) */`/${_checkbox_walks}&D l`;
import { register as _register, inChild as _inChild, data as _data, state as _state, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _checkedChange = _register("packages/translator-tags/src/__tests__/fixtures/controllable-checked-spread/template.marko_0/checkedChange", _scope => function (_new_checked) {
  _checked(_scope, _new_checked);
});
import { _setup_ as _checkbox, _input_ as _checkbox_input, _template_ as _checkbox_template, _walks_ as _checkbox_walks } from "./components/checkbox.marko";
const _checked = /* @__PURE__ */_state("checked", (_scope, checked) => {
  _data(_scope["#text/1"], String(checked));
  _checkbox_input(_scope["#childScope/0"], {
    checked: checked,
    checkedChange: _checkedChange(_scope)
  });
}, () => _inChild("#childScope/0", _checkbox_input));
export function _setup_(_scope) {
  _checkbox(_scope["#childScope/0"]);
  _checked(_scope, false);
}
export default /* @__PURE__ */_createTemplate(/* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/controllable-checked-spread/template.marko");