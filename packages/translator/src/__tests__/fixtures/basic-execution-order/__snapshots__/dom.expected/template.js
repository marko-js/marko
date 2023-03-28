import { on as _on, queueSource as _queueSource, data as _data, closure as _closure, createRenderer as _createRenderer, register as _register, conditional as _conditional, value as _value, inConditionalScope as _inConditionalScope, queueHydrate as _queueHydrate, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _message$ifBody = /* @__PURE__ */_closure("message", (_scope, message) => _data(_scope["#text/0"], message.text));
const _ifBody = _register("packages/translator/src/__tests__/fixtures/basic-execution-order/template.marko_1_renderer", /* @__PURE__ */_createRenderer(" ", /* get */" ", null, [_message$ifBody]));
const _if = /* @__PURE__ */_conditional("#text/1");
const _show = /* @__PURE__ */_value("show", (_scope, show, _dirty) => {
  let _if_value;
  if (_dirty) {
    _if_value = show ? _ifBody : null;
  }
  _if(_scope, _if_value, _dirty);
});
const _message = /* @__PURE__ */_value("message", (_scope, message, _dirty) => _inConditionalScope(_scope, _dirty, _message$ifBody, "#text/1"));
const _hydrate_setup = _register("packages/translator/src/__tests__/fixtures/basic-execution-order/template.marko_0", _scope => _on(_scope["#button/0"], "click", function () {
  _queueSource(_scope, _message, null);
  _queueSource(_scope, _show, false);
}));
const _setup = _scope => {
  _queueHydrate(_scope, _hydrate_setup);
  _message(_scope, {
    text: "hi"
  });
  _show(_scope, true);
};
export const template = "<button>hide</button><!>";
export const walks = /* get, over(1), replace, over(1) */" b%b";
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup, null, null, "packages/translator/src/__tests__/fixtures/basic-execution-order/template.marko");