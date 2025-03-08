export const _template_ = _FancyButton_template;
export const _walks_ = /* beginChild, _FancyButton_walks, endChild */`/${_FancyButton_walks}&`;
import * as _$ from "@marko/runtime-tags/debug/dom";
import { _setup_ as _FancyButton, _input_ as _FancyButton_input, _template_ as _FancyButton_template, _walks_ as _FancyButton_walks } from "./tags/FancyButton.marko";
const _clickCount$FancyButton_content = /* @__PURE__ */_$.dynamicClosureRead("clickCount", (_scope, clickCount) => _$.data(_scope["#text/0"], clickCount));
const _FancyButton_content = _$.registerContent("__tests__/template.marko_1_renderer", " ", /* get */" ", 0, 0, _scope => _clickCount$FancyButton_content(_scope));
const _clickCount_closure = /* @__PURE__ */_$.dynamicClosure(_clickCount$FancyButton_content);
const _clickCount = /* @__PURE__ */_$.state("clickCount/1", (_scope, clickCount) => {
  _FancyButton_input(_scope["#childScope/0"], {
    onClick: _onClick(_scope),
    content: _FancyButton_content(_scope)
  });
  _clickCount_closure(_scope);
});
export function _setup_(_scope) {
  _FancyButton(_scope["#childScope/0"]);
  _clickCount(_scope, 0);
}
function _onClick(_scope, {
  clickCount
} = _scope) {
  return function () {
    _clickCount(_scope, clickCount + 1), clickCount;
  };
}
_$.register("__tests__/template.marko_0/onClick", _onClick);
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);