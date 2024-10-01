export const _template_ = `<button>Inc</button>${_child_template}`;
export const _walks_ = /* get, over(1), beginChild, _child_walks, endChild */` b/${_child_walks}&`;
import { on as _on, data as _data, inChild as _inChild, bindRenderer as _bindRenderer, queueSource as _queueSource, createRenderer as _createRenderer, value as _value, dynamicClosure as _dynamicClosure, registerSubscriber as _registerSubscriber, registerRenderer as _registerRenderer, dynamicSubscribers as _dynamicSubscribers, register as _register, queueEffect as _queueEffect, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
import { _setup_ as _child, _value_ as _child__value_, _renderBody_ as _child_renderBody, _template_ as _child_template, _walks_ as _child_walks } from "./components/child.marko";
const _inner$childBody = /* @__PURE__ */_value("inner", (_scope, inner) => _data(_scope["#text/1"], inner));
const _outer$childBody = _registerSubscriber("packages/translator-tags/src/__tests__/fixtures/basic-nested-params/template.marko_2_outer/subscriber", /* @__PURE__ */_dynamicClosure("outer", (_scope, outer) => _data(_scope["#text/0"], outer)));
const _params_3$childBody = /* @__PURE__ */_value("_params_3", (_scope, _params_3) => _inner$childBody(_scope, _params_3[0]));
const _childBody2 = _registerRenderer("packages/translator-tags/src/__tests__/fixtures/basic-nested-params/template.marko_2_renderer", /* @__PURE__ */_createRenderer("<div><!>.<!></div>", /* next(1), replace, over(2), replace */"D%c%", void 0, [_outer$childBody], void 0, _params_3$childBody));
const _y$childBody = _registerSubscriber("packages/translator-tags/src/__tests__/fixtures/basic-nested-params/template.marko_1_y/subscriber", /* @__PURE__ */_dynamicClosure("y", (_scope, y) => _child__value_(_scope["#childScope/0"], y), void 0, _inChild("#childScope/0", _child__value_)));
const _outer$childBody2 = /* @__PURE__ */_value("outer", null, _dynamicSubscribers("outer"));
const _params_2$childBody = /* @__PURE__ */_value("_params_2", (_scope, _params_2) => _outer$childBody2(_scope, _params_2[0]), _outer$childBody2);
const _setup$childBody = _scope => {
  _child(_scope["#childScope/0"]);
  _child_renderBody(_scope["#childScope/0"], /* @__PURE__ */_bindRenderer(_scope, _childBody2));
};
const _childBody = _registerRenderer("packages/translator-tags/src/__tests__/fixtures/basic-nested-params/template.marko_1_renderer", /* @__PURE__ */_createRenderer(`${_child_template}`, /* beginChild, _child_walks, endChild */`/${_child_walks}&`, _setup$childBody, [_y$childBody], void 0, _params_2$childBody));
const _y = /* @__PURE__ */_value("y", null, _dynamicSubscribers("y"));
const _onClick = _scope => {
  const {
    x
  } = _scope;
  return function () {
    _queueSource(_scope, _x, x + 1);
  };
};
const _x_effect = _register("packages/translator-tags/src/__tests__/fixtures/basic-nested-params/template.marko_0_x", _scope => _on(_scope["#button/0"], "click", _onClick(_scope)));
const _x = /* @__PURE__ */_value("x", (_scope, x) => {
  _queueEffect(_scope, _x_effect);
  _child__value_(_scope["#childScope/1"], x);
}, _inChild("#childScope/1", _child__value_));
export function _setup_(_scope) {
  _child(_scope["#childScope/1"]);
  _x(_scope, 1);
  _y(_scope, 2);
  _child_renderBody(_scope["#childScope/1"], /* @__PURE__ */_bindRenderer(_scope, _childBody));
}
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/basic-nested-params/template.marko");