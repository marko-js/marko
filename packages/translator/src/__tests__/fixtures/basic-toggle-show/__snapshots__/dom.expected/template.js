import { setSource as _setSource, on as _on, queueSource as _queueSource, createRenderer as _createRenderer, conditional as _conditional, source as _source, register as _register, queueHydrate as _queueHydrate, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _ifBody = /* @__PURE__ */_createRenderer("Hello!", "");
const _if = /* @__PURE__ */_conditional("#text/0", 1, (_scope, show = _scope["show"]) => show ? _ifBody : null);
const _hydrate_show = _register("packages/translator/src/__tests__/fixtures/basic-toggle-show/template.marko_0_show", _scope => _on(_scope["#button/1"], "click", function () {
  const show = _scope["show"];
  _queueSource(_scope, _show, !show);
}));
const _show = /* @__PURE__ */_source("show", [_if], (_scope, show) => _queueHydrate(_scope, _hydrate_show));
const _setup = _scope => {
  _setSource(_scope, _show, true);
};
export const template = "<div><!><button>Toggle</button></div>";
export const walks = /* next(1), replace, over(1), get, out(1) */"D%b l";
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup);