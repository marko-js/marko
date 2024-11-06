export const _template_ = `${_myButton_template}${_myButton_template}`;
export const _walks_ = /* beginChild, _myButton_walks, endChild, beginChild, _myButton_walks, endChild */`/${_myButton_walks}&/${_myButton_walks}&`;
import * as _$ from "@marko/runtime-tags/debug/dom";
const _onClick = _$.register("packages/translator-tags/src/__tests__/fixtures/basic-component-input-same-source-alias-within-pattern/template.marko_0/onClick", _scope => {
  const {
    clickCount
  } = _scope;
  return function () {
    _clickCount(_scope, clickCount + 1);
  };
});
import { _setup_ as _myButton, _pattern__ as _myButton_input_value, _onClick_ as _myButton_input_onClick, _template_ as _myButton_template, _walks_ as _myButton_walks, _text_ as _myButton_input_value_text } from "./components/my-button.marko";
const _onClick2 = _$.register("packages/translator-tags/src/__tests__/fixtures/basic-component-input-same-source-alias-within-pattern/template.marko_0/onClick_0", _scope => {
  const {
    clickCount
  } = _scope;
  return function () {
    _clickCount(_scope, clickCount + 1);
  };
});
const _clickCount = /* @__PURE__ */_$.state("clickCount", (_scope, clickCount) => {
  _myButton_input_value(_scope["#childScope/0"], {
    text: clickCount
  });
  _myButton_input_onClick(_scope["#childScope/0"], _onClick(_scope));
  _myButton_input_value_text(_scope["#childScope/1"], clickCount);
  _myButton_input_onClick(_scope["#childScope/1"], _onClick2(_scope));
}, () => _$.intersections([_$.inChild("#childScope/0", _myButton_input_value), _$.inChild("#childScope/0", _myButton_input_onClick), _$.inChild("#childScope/1", _myButton_input_value_text), _$.inChild("#childScope/1", _myButton_input_onClick)]));
export function _setup_(_scope) {
  _myButton(_scope["#childScope/0"]);
  _myButton(_scope["#childScope/1"]);
  _clickCount(_scope, 0);
}
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/basic-component-input-same-source-alias-within-pattern/template.marko", _template_, _walks_, _setup_);