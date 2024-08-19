import { register as _register, data as _data, inChild as _inChild, bindRenderer as _bindRenderer, queueSource as _queueSource, createRenderer as _createRenderer, dynamicClosure as _dynamicClosure, registerSubscriber as _registerSubscriber, registerRenderer as _registerRenderer, dynamicSubscribers as _dynamicSubscribers, intersections as _intersections, value as _value, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _onClick = _register("packages/translator-tags/src/__tests__/fixtures/basic-component-renderBody/template.marko_0/onClick", _scope => {
  const {
    clickCount
  } = _scope;
  return function () {
    _queueSource(_scope, _clickCount, clickCount + 1);
  };
});
import { _setup_ as _myButton, _onClick_ as _myButton__onClick_, _renderBody_ as _myButton_renderBody, _template_ as _myButton_template, _walks_ as _myButton_walks } from "./components/my-button.marko";
const _clickCount$myButtonBody = _registerSubscriber("packages/translator-tags/src/__tests__/fixtures/basic-component-renderBody/template.marko_1_clickCount/subscriber", /* @__PURE__ */_dynamicClosure("clickCount", (_scope, clickCount) => _data(_scope["#text/0"], clickCount)));
const _myButtonBody = _registerRenderer("packages/translator-tags/src/__tests__/fixtures/basic-component-renderBody/template.marko_1_renderer", /* @__PURE__ */_createRenderer(" ", /* get */" ", void 0, [_clickCount$myButtonBody]));
const _clickCount = /* @__PURE__ */_value("clickCount", (_scope, clickCount) => _myButton__onClick_(_scope["#childScope/0"], _onClick(_scope)), _intersections([_inChild("#childScope/0", _myButton__onClick_), _dynamicSubscribers("clickCount")]));
const _setup = _scope => {
  _myButton(_scope["#childScope/0"]);
  _clickCount(_scope, 0);
  _myButton_renderBody(_scope["#childScope/0"], /* @__PURE__ */_bindRenderer(_scope, _myButtonBody));
};
export const _template_ = `${_myButton_template}`;
export const _walks_ = /* beginChild, _myButton_walks, endChild */`/${_myButton_walks}&`;
export const _setup_ = _setup;
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/basic-component-renderBody/template.marko");