export const _template_ = `${_FancyButton_template}`;
export const _walks_ = /* beginChild, _FancyButton_walks, endChild */`/${_FancyButton_walks}&`;
import { register as _register, data as _data, inChild as _inChild, createRendererWithOwner as _createRendererWithOwner, dynamicClosure as _dynamicClosure, registerSubscriber as _registerSubscriber, dynamicSubscribers as _dynamicSubscribers, intersections as _intersections, state as _state, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _onClick = _register("packages/translator-tags/src/__tests__/fixtures/body-content/template.marko_0/onClick", _scope => {
  const {
    clickCount
  } = _scope;
  return function () {
    _clickCount(_scope, clickCount + 1);
  };
});
import { _setup_ as _FancyButton, _input_ as _FancyButton_input, _template_ as _FancyButton_template, _walks_ as _FancyButton_walks } from "./components/FancyButton.marko";
const _clickCount$FancyButtonBody = _registerSubscriber("packages/translator-tags/src/__tests__/fixtures/body-content/template.marko_1_clickCount/subscriber", /* @__PURE__ */_dynamicClosure("clickCount", (_scope, clickCount) => _data(_scope["#text/0"], clickCount)));
const _FancyButtonBody = _register("packages/translator-tags/src/__tests__/fixtures/body-content/template.marko_1_renderer", /* @__PURE__ */_createRendererWithOwner(" ", /* get */" ", void 0, () => [_clickCount$FancyButtonBody]));
const _clickCount = /* @__PURE__ */_state("clickCount", (_scope, clickCount) => _FancyButton_input(_scope["#childScope/0"], {
  onClick: _onClick(_scope),
  renderBody: _FancyButtonBody(_scope)
}), () => _intersections([_inChild("#childScope/0", _FancyButton_input), _dynamicSubscribers("clickCount")]));
export function _setup_(_scope) {
  _FancyButton(_scope["#childScope/0"]);
  _clickCount(_scope, 0);
}
export default /* @__PURE__ */_createTemplate(/* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/body-content/template.marko");