export const _template_ = `${_checkbox_template}${_checkbox_template}${_checkbox_template}<span> </span>`;
export const _walks_ = /* beginChild, _checkbox_walks, endChild, beginChild, _checkbox_walks, endChild, beginChild, _checkbox_walks, endChild, next(1), get, out(1) */`/${_checkbox_walks}&/${_checkbox_walks}&/${_checkbox_walks}&D l`;
import { register as _register, inChild as _inChild, data as _data, queueSource as _queueSource, intersections as _intersections, value as _value, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _checkedValuesChange = _register("packages/translator-tags/src/__tests__/fixtures/controllable-checked-values-spread/template.marko_0/checkedValuesChange", _scope => function (_new_checkedValues) {
  _queueSource(_scope, _checkedValues, _new_checkedValues);
});
import { _setup_ as _checkbox, _input_ as _checkbox_input, _template_ as _checkbox_template, _walks_ as _checkbox_walks } from "./components/checkbox.marko";
const _checkedValuesChange2 = _register("packages/translator-tags/src/__tests__/fixtures/controllable-checked-values-spread/template.marko_0/checkedValuesChange_0", _scope => function (_new_checkedValues2) {
  _queueSource(_scope, _checkedValues, _new_checkedValues2);
});
const _checkedValuesChange3 = _register("packages/translator-tags/src/__tests__/fixtures/controllable-checked-values-spread/template.marko_0/checkedValuesChange_0", _scope => function (_new_checkedValues3) {
  _queueSource(_scope, _checkedValues, _new_checkedValues3);
});
const _checkedValues = /* @__PURE__ */_value("checkedValues", (_scope, checkedValues) => {
  _data(_scope["#text/3"], checkedValues);
  _checkbox_input(_scope["#childScope/0"], {
    checkedValues: checkedValues,
    checkedValuesChange: _checkedValuesChange(_scope),
    value: "a"
  });
  _checkbox_input(_scope["#childScope/1"], {
    checkedValues: checkedValues,
    checkedValuesChange: _checkedValuesChange2(_scope),
    value: "b"
  });
  _checkbox_input(_scope["#childScope/2"], {
    checkedValues: checkedValues,
    checkedValuesChange: _checkedValuesChange3(_scope),
    value: "c"
  });
}, _intersections([_inChild("#childScope/0", _checkbox_input), _inChild("#childScope/1", _checkbox_input), _inChild("#childScope/2", _checkbox_input)]));
export function _setup_(_scope) {
  _checkbox(_scope["#childScope/0"]);
  _checkbox(_scope["#childScope/1"]);
  _checkbox(_scope["#childScope/2"]);
  _checkedValues(_scope, ["a", "b"]);
}
export default /* @__PURE__ */_createTemplate(/* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/controllable-checked-values-spread/template.marko");