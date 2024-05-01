import { data as _data, closure as _closure, createRenderer as _createRenderer, register as _register, conditional as _conditional, inConditionalScope as _inConditionalScope, value as _value2, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _value$ifBody = /* @__PURE__ */_closure("value", (_scope, value) => _data(_scope["#text/0"], value));
const _ifBody = _register("packages/translator-tags/src/__tests__/fixtures/toggle-first-child/template.marko_1_renderer", /* @__PURE__ */_createRenderer("<span> </span>", /* next(1), get */"D ", void 0, [_value$ifBody]));
const _if = /* @__PURE__ */_conditional("#text/0");
const _value = /* @__PURE__ */_value2("value", (_scope, value) => _if(_scope, value ? _ifBody : null), _inConditionalScope(_value$ifBody, "#text/0"), _if);
const _destructure2 = (_scope, _destructure, _clean) => {
  let value;
  if (!_clean) ({
    value
  } = _destructure);
  _value(_scope, value, _clean);
};
const _input = /* @__PURE__ */_value2("input", (_scope, input) => _destructure2(_scope, input), void 0, _destructure2);
export const _args_ = (_scope, _destructure3, _clean) => {
  let input;
  if (!_clean) [input] = _destructure3;
  _input(_scope, input, _clean);
};
export const _template_ = "<div><!><span></span><span></span></div>";
export const _walks_ = /* next(1), replace, out(1) */"D%l";
export const _setup_ = function () {};
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(_template_, _walks_, _setup_, void 0, void 0, _args_), "packages/translator-tags/src/__tests__/fixtures/toggle-first-child/template.marko");