import { on as _on, queueSource as _queueSource, data as _data, createRenderer as _createRenderer, closure as _closure, register as _register, conditional as _conditional, inConditionalScope as _inConditionalScope, value as _value, queueEffect as _queueEffect, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _message$ifBody = /* @__PURE__ */_closure("message", (_scope, message) => _data(_scope["#text/0"], message));
const _ifBody = _register("packages/translator-tags/src/__tests__/fixtures/batched-updates-cleanup/template.marko_1_renderer", /* @__PURE__ */_createRenderer("<span> </span>", /* next(1), get */"D ", void 0, [_message$ifBody]));
const _if = /* @__PURE__ */_conditional("#text/1");
const _message = /* @__PURE__ */_value("message", null, _inConditionalScope(_message$ifBody, "#text/1"));
const _onClick = _scope => {
  const {
    show
  } = _scope;
  return function () {
    _queueSource(_scope, _message, "bye");
    _queueSource(_scope, _show, !show);
  };
};
const _show_effect = _register("packages/translator-tags/src/__tests__/fixtures/batched-updates-cleanup/template.marko_0_show", _scope => _on(_scope["#button/0"], "click", _onClick(_scope)));
const _show = /* @__PURE__ */_value("show", (_scope, show) => {
  _queueEffect(_scope, _show_effect);
  _if(_scope, show ? _ifBody : null);
}, _if);
const _setup = _scope => {
  _show(_scope, true);
  _message(_scope, "hi");
};
export const _template_ = "<button></button><!><!>";
export const _walks_ = /* get, over(1), replace, over(1) */" b%bD";
export const _setup_ = _setup;
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/batched-updates-cleanup/template.marko");