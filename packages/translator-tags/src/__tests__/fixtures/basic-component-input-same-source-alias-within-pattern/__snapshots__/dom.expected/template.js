export const _template_ = `${_myButton_template}${_myButton_template}`;
export const _walks_ = /* beginChild, _myButton_walks, endChild, beginChild, _myButton_walks, endChild */`/${_myButton_walks}&/${_myButton_walks}&`;
import { register as _register, inChild as _inChild, queueSource as _queueSource, intersections as _intersections, value as _value, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _onClick = _register("packages/translator-tags/src/__tests__/fixtures/basic-component-input-same-source-alias-within-pattern/template.marko_0/onClick", _scope => {
  const {
    clickCount
  } = _scope;
  return function () {
    _queueSource(_scope, _clickCount, clickCount + 1);
  };
});
import { _setup_ as _myButton, _pattern__ as _myButton_input_value, _onClick_ as _myButton_input_onClick, _template_ as _myButton_template, _walks_ as _myButton_walks, _text_ as _myButton_input_value_text } from "./components/my-button.marko";
const _onClick2 = _register("packages/translator-tags/src/__tests__/fixtures/basic-component-input-same-source-alias-within-pattern/template.marko_0/onClick_0", _scope => {
  const {
    clickCount
  } = _scope;
  return function () {
    _queueSource(_scope, _clickCount, clickCount + 1);
  };
});
const _clickCount = /* @__PURE__ */_value("clickCount", (_scope, clickCount) => {
  _myButton_input_value(_scope["#childScope/0"], {
    text: clickCount
  });
  _myButton_input_onClick(_scope["#childScope/0"], _onClick(_scope));
  _myButton_input_value_text(_scope["#childScope/1"], clickCount);
  _myButton_input_onClick(_scope["#childScope/1"], _onClick2(_scope));
}, () => _intersections([_inChild("#childScope/0", _myButton_input_value), _inChild("#childScope/0", _myButton_input_onClick), _inChild("#childScope/1", _myButton_input_value_text), _inChild("#childScope/1", _myButton_input_onClick)]));
export function _setup_(_scope) {
  _myButton(_scope["#childScope/0"]);
  _myButton(_scope["#childScope/1"]);
  _clickCount(_scope, 0);
}
export default /* @__PURE__ */_createTemplate(/* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/basic-component-input-same-source-alias-within-pattern/template.marko");