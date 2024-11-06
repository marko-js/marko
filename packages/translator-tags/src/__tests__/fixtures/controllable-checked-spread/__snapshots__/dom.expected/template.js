export const _template_ = `${_checkbox_template}<span> </span>`;
export const _walks_ = /* beginChild, _checkbox_walks, endChild, next(1), get, out(1) */`/${_checkbox_walks}&D l`;
import * as _$ from "@marko/runtime-tags/debug/dom";
const _checkedChange = _$.register("packages/translator-tags/src/__tests__/fixtures/controllable-checked-spread/template.marko_0/checkedChange", _scope => function (_new_checked) {
  _checked(_scope, _new_checked);
});
import { _setup_ as _checkbox, _input_ as _checkbox_input, _template_ as _checkbox_template, _walks_ as _checkbox_walks } from "./components/checkbox.marko";
const _checked = /* @__PURE__ */_$.state("checked", (_scope, checked) => {
  _$.data(_scope["#text/1"], String(checked));
  _checkbox_input(_scope["#childScope/0"], {
    checked: checked,
    checkedChange: _checkedChange(_scope)
  });
}, () => _$.inChild("#childScope/0", _checkbox_input));
export function _setup_(_scope) {
  _checkbox(_scope["#childScope/0"]);
  _checked(_scope, false);
}
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/controllable-checked-spread/template.marko", _template_, _walks_, _setup_);