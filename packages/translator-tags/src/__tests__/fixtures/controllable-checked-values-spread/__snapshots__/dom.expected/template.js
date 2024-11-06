export const _template_ = `${_checkbox_template}${_checkbox_template}${_checkbox_template}<span> </span>`;
export const _walks_ = /* beginChild, _checkbox_walks, endChild, beginChild, _checkbox_walks, endChild, beginChild, _checkbox_walks, endChild, next(1), get, out(1) */`/${_checkbox_walks}&/${_checkbox_walks}&/${_checkbox_walks}&D l`;
import { register as _register, inChild as _inChild, data as _data, intersections as _intersections, state as _state, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _checkedValueChange = _register("packages/translator-tags/src/__tests__/fixtures/controllable-checked-values-spread/template.marko_0/checkedValueChange", _scope => function (_new_checkedValue) {
  _checkedValue(_scope, _new_checkedValue);
});
import { _setup_ as _checkbox, _input_ as _checkbox_input, _template_ as _checkbox_template, _walks_ as _checkbox_walks } from "./components/checkbox.marko";
const _checkedValueChange2 = _register("packages/translator-tags/src/__tests__/fixtures/controllable-checked-values-spread/template.marko_0/checkedValueChange_0", _scope => function (_new_checkedValue2) {
  _checkedValue(_scope, _new_checkedValue2);
});
const _checkedValueChange3 = _register("packages/translator-tags/src/__tests__/fixtures/controllable-checked-values-spread/template.marko_0/checkedValueChange_0", _scope => function (_new_checkedValue3) {
  _checkedValue(_scope, _new_checkedValue3);
});
const _checkedValue = /* @__PURE__ */_state("checkedValue", (_scope, checkedValue) => {
  _data(_scope["#text/3"], checkedValue);
  _checkbox_input(_scope["#childScope/0"], {
    checkedValue: checkedValue,
    checkedValueChange: _checkedValueChange(_scope),
    value: "a"
  });
  _checkbox_input(_scope["#childScope/1"], {
    checkedValue: checkedValue,
    checkedValueChange: _checkedValueChange2(_scope),
    value: "b"
  });
  _checkbox_input(_scope["#childScope/2"], {
    checkedValue: checkedValue,
    checkedValueChange: _checkedValueChange3(_scope),
    value: "c"
  });
}, () => _intersections([_inChild("#childScope/0", _checkbox_input), _inChild("#childScope/1", _checkbox_input), _inChild("#childScope/2", _checkbox_input)]));
export function _setup_(_scope) {
  _checkbox(_scope["#childScope/0"]);
  _checkbox(_scope["#childScope/1"]);
  _checkbox(_scope["#childScope/2"]);
  _checkedValue(_scope, ["a", "b"]);
}
export default /* @__PURE__ */_createTemplate(/* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/controllable-checked-values-spread/template.marko");