export const _template_ = _myButton_template;
export const _walks_ = /* beginChild, _myButton_walks, endChild */`/${_myButton_walks}&`;
import { _setup_ as _myButton, _text_ as _myButton_input_text, _onClick_ as _myButton_input_onClick, _template_ as _myButton_template, _walks_ as _myButton_walks } from "./components/my-button.marko";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _clickCount = /* @__PURE__ */_$.state("clickCount", (_scope, clickCount) => {
  _myButton_input_text(_scope["#childScope/0"], clickCount);
  _myButton_input_onClick(_scope["#childScope/0"], _onClick(_scope));
}, () => _$.intersections([_$.inChild("#childScope/0", _myButton_input_text), _$.inChild("#childScope/0", _myButton_input_onClick)]));
export function _setup_(_scope) {
  _myButton(_scope["#childScope/0"]);
  _clickCount(_scope, 0);
}
function _onClick(_scope, {
  clickCount
} = _scope) {
  return function () {
    _clickCount(_scope, clickCount + 1), clickCount;
  };
}
_$.register("packages/translator-tags/src/__tests__/fixtures/basic-component-input-same-source-alias/template.marko_0/onClick", _onClick);
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/basic-component-input-same-source-alias/template.marko", _template_, _walks_, _setup_);