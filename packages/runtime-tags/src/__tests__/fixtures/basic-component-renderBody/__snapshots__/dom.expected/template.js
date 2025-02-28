export const _template_ = _myButton_template;
export const _walks_ = /* beginChild, _myButton_walks, endChild */`/${_myButton_walks}&`;
import * as _$ from "@marko/runtime-tags/debug/dom";
import { _setup_ as _myButton, _content_ as _myButton_input_content, _onClick_ as _myButton_input_onClick, _template_ as _myButton_template, _walks_ as _myButton_walks } from "./tags/my-button.marko";
const _clickCount$myButton_content = _$.registerDynamicClosure("__tests__/template.marko_1_clickCount/subscriber", "clickCount/1", (_scope, clickCount) => _$.data(_scope["#text/0"], clickCount));
const _setup$myButton_content = _scope => {
  _clickCount$myButton_content._(_scope);
};
const _myButton_content = _$.registerContent("__tests__/template.marko_1_renderer", " ", /* get */" ", _setup$myButton_content);
const _clickCount = /* @__PURE__ */_$.state("clickCount/1", (_scope, clickCount) => {
  _myButton_input_onClick(_scope["#childScope/0"], _onClick(_scope));
  _clickCount$myButton_content(_scope);
});
export function _setup_(_scope) {
  _myButton(_scope["#childScope/0"]);
  _clickCount(_scope, 0);
  _myButton_input_content(_scope["#childScope/0"], _myButton_content(_scope));
}
function _onClick(_scope, {
  "clickCount/1": clickCount
} = _scope) {
  return function () {
    _clickCount(_scope, clickCount + 1), clickCount;
  };
}
_$.register("__tests__/template.marko_0/onClick", _onClick);
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);