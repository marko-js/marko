import { queueSource as _queueSource, data as _data, register as _register, bindFunction as _bindFunction, bindRenderer as _bindRenderer, inChild as _inChild, dynamicClosure as _dynamicClosure, registerSubscriber as _registerSubscriber, createRenderer as _createRenderer, dynamicSubscribers as _dynamicSubscribers, value as _value, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
import { _setup_ as _myButton, _args_ as _myButton_args, _template_ as _myButton_template, _walks_ as _myButton_walks } from "./components/my-button.marko";
const _onClick = _register("packages/translator-tags/src/__tests__/fixtures/basic-component-renderBody/template.marko_0/onClick", function (_scope) {
  const {
    clickCount
  } = _scope;
  _queueSource(_scope, _clickCount, clickCount + 1);
});
const _clickCount$myButtonBody = _registerSubscriber("packages/translator-tags/src/__tests__/fixtures/basic-component-renderBody/template.marko_1_clickCount/subscriber", /* @__PURE__ */_dynamicClosure("clickCount", (_scope, clickCount) => _data(_scope["#text/0"], clickCount)));
const _myButtonBody = _register("packages/translator-tags/src/__tests__/fixtures/basic-component-renderBody/template.marko_1_renderer", /* @__PURE__ */_createRenderer(" ", /* get */" ", void 0, [_clickCount$myButtonBody]));
const _clickCount = /* @__PURE__ */_value("clickCount", (_scope, clickCount) => _myButton_args(_scope["#childScope/0"], [{
  onClick: /* @__PURE__ */_bindFunction(_scope, _onClick),
  renderBody: /* @__PURE__ */_bindRenderer(_scope, _myButtonBody)
}]), _dynamicSubscribers("clickCount"), _inChild("#childScope/0", _myButton_args));
const _setup = _scope => {
  _myButton(_scope["#childScope/0"]);
  _clickCount(_scope, 0);
};
export const _template_ = `${_myButton_template}`;
export const _walks_ = /* beginChild, _myButton_walks, endChild */`/${_myButton_walks}&`;
export const _setup_ = _setup;
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/basic-component-renderBody/template.marko");