import { setSource as _setSource, on as _on, queueSource as _queueSource, data as _data, inConditionalScope as _inConditionalScope, closure as _closure, createRenderer as _createRenderer, conditional as _conditional, source as _source, register as _register, queueHydrate as _queueHydrate, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _message$ifBody = /* @__PURE__ */_closure(1, "message", [], (_scope, message) => _data(_scope["#text/0"], message.text));
const _ifBody = /* @__PURE__ */_createRenderer(" ", /* get */" ", null, [_message$ifBody]);
const _if = /* @__PURE__ */_conditional("#text/1", 1, (_scope, show = _scope["show"]) => show ? _ifBody : null);
const _show = /* @__PURE__ */_source("show", [_if]);
const _message = /* @__PURE__ */_source("message", [/* @__PURE__ */_inConditionalScope(_message$ifBody, "#text/1")]);
const _hydrate_setup = _register("packages/translator/src/__tests__/fixtures/basic-execution-order/template.marko_0", _scope => _on(_scope["#button/0"], "click", function () {
  _queueSource(_scope, _message, null);
  _queueSource(_scope, _show, false);
}));
const _setup = _scope => {
  _setSource(_scope, _message, {
    text: "hi"
  });
  _setSource(_scope, _show, true);
  _queueHydrate(_scope, _hydrate_setup);
};
export const template = "<button>hide</button><!>";
export const walks = /* get, over(1), replace, over(1) */" b%b";
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup);