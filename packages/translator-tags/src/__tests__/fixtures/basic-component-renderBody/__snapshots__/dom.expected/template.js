export const _template_ = `${_myButton_template}`;
export const _walks_ = /* beginChild, _myButton_walks, endChild */`/${_myButton_walks}&`;
import * as _$ from "@marko/runtime-tags/debug/dom";
const _onClick = _$.register("packages/translator-tags/src/__tests__/fixtures/basic-component-renderBody/template.marko_0/onClick", _scope => {
  const {
    clickCount
  } = _scope;
  return function () {
    _clickCount(_scope, clickCount + 1);
  };
});
import { _setup_ as _myButton, _renderBody_ as _myButton_input_renderBody, _onClick_ as _myButton_input_onClick, _template_ as _myButton_template, _walks_ as _myButton_walks } from "./components/my-button.marko";
const _clickCount$myButtonBody = _$.registerSubscriber("packages/translator-tags/src/__tests__/fixtures/basic-component-renderBody/template.marko_1_clickCount/subscriber", /* @__PURE__ */_$.dynamicClosure("clickCount", (_scope, clickCount) => _$.data(_scope["#text/0"], clickCount)));
const _myButtonBody = _$.register("packages/translator-tags/src/__tests__/fixtures/basic-component-renderBody/template.marko_1_renderer", /* @__PURE__ */_$.createRendererWithOwner(" ", /* get */" ", void 0, () => [_clickCount$myButtonBody]));
const _clickCount = /* @__PURE__ */_$.state("clickCount", (_scope, clickCount) => _myButton_input_onClick(_scope["#childScope/0"], _onClick(_scope)), () => _$.intersections([_$.inChild("#childScope/0", _myButton_input_onClick), _$.dynamicSubscribers("clickCount")]));
export function _setup_(_scope) {
  _myButton(_scope["#childScope/0"]);
  _clickCount(_scope, 0);
  _myButton_input_renderBody(_scope["#childScope/0"], _myButtonBody(_scope));
}
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/basic-component-renderBody/template.marko", _template_, _walks_, _setup_);