export const _template_ = "<button>hide</button><!><!>";
export const _walks_ = /* get, over(1), replace, over(1) */" b%bD";
import { on as _on, data as _data, queueSource as _queueSource, createRenderer as _createRenderer, closure as _closure, registerRenderer as _registerRenderer, conditional as _conditional, value as _value, inConditionalScope as _inConditionalScope, register as _register, queueEffect as _queueEffect, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _message$ifBody = /* @__PURE__ */_closure("message", (_scope, message) => _data(_scope["#text/0"], message.text));
const _ifBody = _registerRenderer("packages/translator-tags/src/__tests__/fixtures/basic-execution-order/template.marko_1_renderer", /* @__PURE__ */_createRenderer(" ", /* get */" ", void 0, [_message$ifBody]));
const _if = /* @__PURE__ */_conditional("#text/1");
const _show = /* @__PURE__ */_value("show", (_scope, show) => _if(_scope, show ? _ifBody : null), _if);
const _message = /* @__PURE__ */_value("message", null, _inConditionalScope(_message$ifBody, "#text/1"));
const _setup__effect = _register("packages/translator-tags/src/__tests__/fixtures/basic-execution-order/template.marko_0", _scope => _on(_scope["#button/0"], "click", function () {
  _queueSource(_scope, _message, null);
  _queueSource(_scope, _show, false);
}));
export function _setup_(_scope) {
  _queueEffect(_scope, _setup__effect);
  _message(_scope, {
    text: "hi"
  });
  _show(_scope, true);
}
export default /* @__PURE__ */_createTemplate(/* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/basic-execution-order/template.marko");