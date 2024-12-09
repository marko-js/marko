export const _template_ = `<button>Inc</button>${_child_template}`;
export const _walks_ = /* get, over(1), beginChild, _child_walks, endChild */` b/${_child_walks}&`;
import * as _$ from "@marko/runtime-tags/debug/dom";
import { _setup_ as _child, _renderBody_ as _child_input_renderBody, _value_ as _child_input_value, _template_ as _child_template, _walks_ as _child_walks } from "./components/child.marko";
const _inner$childBody = /* @__PURE__ */_$.value("inner", (_scope, inner) => _$.data(_scope["#text/1"], inner));
const _outer$childBody = _$.registerSubscriber("packages/translator-tags/src/__tests__/fixtures/basic-nested-params/template.marko_2_outer/subscriber", /* @__PURE__ */_$.dynamicClosure("outer", (_scope, outer) => _$.data(_scope["#text/0"], outer)));
const _params_3$childBody = /* @__PURE__ */_$.value("_params_3", (_scope, _params_3) => _inner$childBody(_scope, _params_3[0]));
const _childBody2 = _$.register("packages/translator-tags/src/__tests__/fixtures/basic-nested-params/template.marko_2_renderer", /* @__PURE__ */_$.createRendererWithOwner("<div><!>.<!></div>", /* next(1), replace, over(2), replace */"D%c%", void 0, () => [_outer$childBody], () => _params_3$childBody));
const _y$childBody = _$.registerSubscriber("packages/translator-tags/src/__tests__/fixtures/basic-nested-params/template.marko_1_y/subscriber", /* @__PURE__ */_$.dynamicClosure("y", (_scope, y) => _child_input_value(_scope["#childScope/0"], y), void 0, () => _$.inChild("#childScope/0", _child_input_value)));
const _outer$childBody2 = /* @__PURE__ */_$.value("outer", 0, () => _$.dynamicSubscribers("outer"));
const _params_2$childBody = /* @__PURE__ */_$.value("_params_2", (_scope, _params_2) => _outer$childBody2(_scope, _params_2[0]), () => _outer$childBody2);
const _setup$childBody = _scope => {
  _child(_scope["#childScope/0"]);
  _child_input_renderBody(_scope["#childScope/0"], _childBody2(_scope));
};
const _childBody = _$.register("packages/translator-tags/src/__tests__/fixtures/basic-nested-params/template.marko_1_renderer", /* @__PURE__ */_$.createRendererWithOwner(`${_child_template}`, /* beginChild, _child_walks, endChild */`/${_child_walks}&`, _setup$childBody, () => [_y$childBody], () => _params_2$childBody));
const _y = /* @__PURE__ */_$.state("y", 0, () => _$.dynamicSubscribers("y"));
const _x_effect = _$.effect("packages/translator-tags/src/__tests__/fixtures/basic-nested-params/template.marko_0_x", (_scope, {
  x
}) => _$.on(_scope["#button/0"], "click", function () {
  _x(_scope, x + 1), x;
}));
const _x = /* @__PURE__ */_$.state("x", (_scope, x) => {
  _x_effect(_scope);
  _child_input_value(_scope["#childScope/1"], x);
}, () => _$.inChild("#childScope/1", _child_input_value));
export function _setup_(_scope) {
  _child(_scope["#childScope/1"]);
  _x(_scope, 1);
  _y(_scope, 2);
  _child_input_renderBody(_scope["#childScope/1"], _childBody(_scope));
}
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/basic-nested-params/template.marko", _template_, _walks_, _setup_);