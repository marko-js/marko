export const _template_ = `${_myButton_template}`;
export const _walks_ = /* beginChild, _myButton_walks, endChild */`/${_myButton_walks}&`;
import { register as _register, data as _data, inChild as _inChild, createRendererWithOwner as _createRendererWithOwner, dynamicClosure as _dynamicClosure, registerSubscriber as _registerSubscriber, dynamicSubscribers as _dynamicSubscribers, intersections as _intersections, state as _state, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _onClick = _register("packages/translator-tags/src/__tests__/fixtures/basic-component-renderBody/template.marko_0/onClick", _scope => {
  const {
    clickCount
  } = _scope;
  return function () {
    _clickCount(_scope, clickCount + 1);
  };
});
import { _setup_ as _myButton, _renderBody_ as _myButton_input_renderBody, _onClick_ as _myButton_input_onClick, _template_ as _myButton_template, _walks_ as _myButton_walks } from "./components/my-button.marko";
const _clickCount$myButtonBody = _registerSubscriber("packages/translator-tags/src/__tests__/fixtures/basic-component-renderBody/template.marko_1_clickCount/subscriber", /* @__PURE__ */_dynamicClosure("clickCount", (_scope, clickCount) => _data(_scope["#text/0"], clickCount)));
const _myButtonBody = _register("packages/translator-tags/src/__tests__/fixtures/basic-component-renderBody/template.marko_1_renderer", /* @__PURE__ */_createRendererWithOwner(" ", /* get */" ", void 0, () => [_clickCount$myButtonBody]));
const _clickCount = /* @__PURE__ */_state("clickCount", (_scope, clickCount) => _myButton_input_onClick(_scope["#childScope/0"], _onClick(_scope)), () => _intersections([_inChild("#childScope/0", _myButton_input_onClick), _dynamicSubscribers("clickCount")]));
export function _setup_(_scope) {
  _myButton(_scope["#childScope/0"]);
  _clickCount(_scope, 0);
  _myButton_input_renderBody(_scope["#childScope/0"], _myButtonBody(_scope));
}
export default /* @__PURE__ */_createTemplate(/* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/basic-component-renderBody/template.marko");