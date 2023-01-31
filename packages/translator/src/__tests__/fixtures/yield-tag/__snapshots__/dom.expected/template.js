import { tagVarSignal as _tagVarSignal, setSource as _setSource, notifySignal as _notifySignal, createRenderer as _createRenderer, register as _register, conditional as _conditional, source as _source, destructureSources as _destructureSources, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _setup$elseBody = _scope => {
  _setSource(_scope, _tagVarSignal, 2);
  _notifySignal(_scope, _tagVarSignal);
};
const _elseBody = _register("packages/translator/src/__tests__/fixtures/yield-tag/template.marko_2_renderer", /* @__PURE__ */_createRenderer("", "", _setup$elseBody));
const _setup$ifBody = _scope => {
  _setSource(_scope, _tagVarSignal, 1);
  _notifySignal(_scope, _tagVarSignal);
};
const _ifBody = _register("packages/translator/src/__tests__/fixtures/yield-tag/template.marko_1_renderer", /* @__PURE__ */_createRenderer("", "", _setup$ifBody));
const _if = /* @__PURE__ */_conditional("#text/0", 1, (_scope, show = _scope["show"]) => show ? _ifBody : _elseBody);
const _show = /* @__PURE__ */_source("show", [_if]);
export const attrs = /* @__PURE__ */_destructureSources([_show], (_scope, {
  show
}) => {
  _setSource(_scope, _show, show);
});
export { _show as _apply_show };
export const template = "<!>";
export const walks = /* replace, over(1) */"%b";
export const setup = function () {};
export default /* @__PURE__ */_createRenderFn(template, walks, setup, attrs, null, "packages/translator/src/__tests__/fixtures/yield-tag/template.marko");