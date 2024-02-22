import { on as _on, queueSource as _queueSource, createRenderer as _createRenderer, register as _register, conditional as _conditional, queueEffect as _queueEffect, value as _value, createTemplate as _createTemplate } from "@marko/runtime-tags/src/dom";
const _ifBody = _register("packages/translator-tags/src/__tests__/fixtures/if-default-false/template.marko_1_renderer", /* @__PURE__ */_createRenderer("hi", ""));
const _if = /* @__PURE__ */_conditional("#text/1");
const _show_effect = _register("packages/translator-tags/src/__tests__/fixtures/if-default-false/template.marko_0_show", _scope => _on(_scope["#button/0"], "click", function () {
  const {
    show
  } = _scope;
  _queueSource(_scope, _show, !show);
}));
const _show = /* @__PURE__ */_value("show", (_scope, show) => {
  _queueEffect(_scope, _show_effect);
  _if(_scope, show ? _ifBody : null);
});
const _setup = _scope => {
  _show(_scope, false);
};
export const template = "<button></button><!><!>";
export const walks = /* get, over(1), replace, over(1) */" b%bD";
export const setup = _setup;
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(template, walks, setup), "packages/translator-tags/src/__tests__/fixtures/if-default-false/template.marko");