export const _template = _myButton_template;
export const _walks = /* beginChild, _myButton_walks, endChild */`/${_myButton_walks}&`;
import * as _$ from "@marko/runtime-tags/debug/dom";
import { _setup as _myButton, _content as _myButton_input_content, _onClick as _myButton_input_onClick, _template as _myButton_template, _walks as _myButton_walks } from "./tags/my-button.marko";
const _clickCount$mybutton_content = /* @__PURE__ */_$.dynamicClosureRead("clickCount", (_scope, clickCount) => _$.data(_scope["#text/0"], clickCount));
const _mybutton_content = /* @__PURE__ */_$.createContent("__tests__/template.marko_1_renderer", " ", /* get */" ", 0, 0, _scope => _clickCount$mybutton_content(_scope));
const _clickCount_closure = /* @__PURE__ */_$.dynamicClosure(_clickCount$mybutton_content);
const _clickCount = /* @__PURE__ */_$.state("clickCount/1", (_scope, clickCount) => {
  _myButton_input_onClick(_scope["#childScope/0"], _onClick(_scope));
  _clickCount_closure(_scope);
});
export function _setup(_scope) {
  _myButton(_scope["#childScope/0"]);
  _clickCount(_scope, 0);
  _myButton_input_content(_scope["#childScope/0"], _mybutton_content(_scope));
}
function _onClick(_scope, {
  clickCount
} = _scope) {
  return function () {
    _clickCount(_scope, clickCount + 1), clickCount;
  };
}
_$.register("__tests__/template.marko_0/onClick", _onClick);
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template, _walks, _setup);