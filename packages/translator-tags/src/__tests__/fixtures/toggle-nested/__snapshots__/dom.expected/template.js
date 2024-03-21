import { data as _data, dynamicClosure as _dynamicClosure, registerSubscriber as _registerSubscriber, createRenderer as _createRenderer, register as _register, conditional as _conditional, closure as _closure, inConditionalScope as _inConditionalScope, dynamicSubscribers as _dynamicSubscribers, intersections as _intersections, value as _value3, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _value2$ifBody = _registerSubscriber("packages/translator-tags/src/__tests__/fixtures/toggle-nested/template.marko_3_value2/subscriber", /* @__PURE__ */_dynamicClosure("value2", (_scope, value2) => _data(_scope["#text/0"], value2), _scope => _scope._._));
const _ifBody3 = _register("packages/translator-tags/src/__tests__/fixtures/toggle-nested/template.marko_3_renderer", /* @__PURE__ */_createRenderer("<span> </span>", /* next(1), get */"D ", void 0, [_value2$ifBody]));
const _value1$ifBody = _registerSubscriber("packages/translator-tags/src/__tests__/fixtures/toggle-nested/template.marko_2_value1/subscriber", /* @__PURE__ */_dynamicClosure("value1", (_scope, value1) => _data(_scope["#text/0"], value1), _scope => _scope._._));
const _ifBody2 = _register("packages/translator-tags/src/__tests__/fixtures/toggle-nested/template.marko_2_renderer", /* @__PURE__ */_createRenderer("<span> </span>", /* next(1), get */"D ", void 0, [_value1$ifBody]));
const _if3$ifBody = /* @__PURE__ */_conditional("#text/1");
const _if2$ifBody = /* @__PURE__ */_conditional("#text/0");
const _value2$ifBody2 = /* @__PURE__ */_closure("value2", (_scope, value2) => _if3$ifBody(_scope, value2 ? _ifBody3 : null), void 0, void 0, _if3$ifBody);
const _value1$ifBody2 = /* @__PURE__ */_closure("value1", (_scope, value1) => _if2$ifBody(_scope, value1 ? _ifBody2 : null), void 0, void 0, _if2$ifBody);
const _ifBody = _register("packages/translator-tags/src/__tests__/fixtures/toggle-nested/template.marko_1_renderer", /* @__PURE__ */_createRenderer("<!><!><!><!>", /* replace, over(1), replace */"D%b%D", void 0, [_value1$ifBody2, _value2$ifBody2]));
const _if = /* @__PURE__ */_conditional("#text/0");
const _value2 = /* @__PURE__ */_value3("value2", null, _intersections([_inConditionalScope(_value2$ifBody2, "#text/0"), _dynamicSubscribers("value2")]));
const _value = /* @__PURE__ */_value3("value1", null, _intersections([_inConditionalScope(_value1$ifBody2, "#text/0"), _dynamicSubscribers("value1")]));
const _show = /* @__PURE__ */_value3("show", (_scope, show) => _if(_scope, show ? _ifBody : null), void 0, _if);
const _destructure2 = (_scope, _destructure, _clean) => {
  let show, value1, value2;
  if (!_clean) ({
    show,
    value1,
    value2
  } = _destructure);
  _show(_scope, show, _clean);
  _value(_scope, value1, _clean);
  _value2(_scope, value2, _clean);
};
const _input = /* @__PURE__ */_value3("input", (_scope, input) => _destructure2(_scope, input), void 0, _destructure2);
export const args = (_scope, _destructure3, _clean) => {
  let input;
  if (!_clean) [input] = _destructure3;
  _input(_scope, input, _clean);
};
export const template = "<div><!></div>";
export const walks = /* next(1), replace, out(1) */"D%l";
export const setup = function () {};
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(template, walks, setup, void 0, void 0, args), "packages/translator-tags/src/__tests__/fixtures/toggle-nested/template.marko");