export const _template_ = _FancyButton_template;
export const _walks_ = /* beginChild, _FancyButton_walks, endChild */`/${_FancyButton_walks}&`;
import * as _$ from "@marko/runtime-tags/debug/dom";
import { _setup_ as _FancyButton, _input_ as _FancyButton_input, _template_ as _FancyButton_template, _walks_ as _FancyButton_walks } from "./tags/FancyButton.marko";
const _clickCount$FancyButton_content = _$.registerSubscriber("__tests__/template.marko_1_clickCount/subscriber", /* @__PURE__ */_$.dynamicClosure("clickCount", (_scope, clickCount) => _$.data(_scope["#text/0"], clickCount)));
const _FancyButton_content = _$.register("__tests__/template.marko_1_renderer", /* @__PURE__ */_$.createRendererWithOwner(" ", /* get */" ", void 0, () => [_clickCount$FancyButton_content]));
const _clickCount = /* @__PURE__ */_$.state("clickCount", (_scope, clickCount) => _FancyButton_input(_scope["#childScope/0"], {
  onClick: _onClick(_scope),
  content: _FancyButton_content(_scope)
}), () => _$.intersections([_$.inChild("#childScope/0", _FancyButton_input), _$.dynamicSubscribers("clickCount")]));
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