import { setSource as _setSource, dynamicSubscribers as _dynamicSubscribers, initContextProvider as _initContextProvider, data as _data, on as _on, queueSource as _queueSource, contextClosure as _contextClosure, createRenderer as _createRenderer, conditional as _conditional, dynamicClosure as _dynamicClosure, derivation as _derivation, source as _source, register as _register, queueHydrate as _queueHydrate, notifySignal as _notifySignal, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _x$ifBody = _contextClosure(1, "packages/translator/src/__tests__/fixtures/context-tag-in-if/template.marko", [], (_scope, x) => _data(_scope[0], x));
const _ifBody = /* @__PURE__ */_createRenderer("<span> </span>", /* next(1), get */"D ", null, [_x$ifBody]);
const _if$putBody = /* @__PURE__ */_conditional(0, 1, (_scope, show = _scope._[2]) => show ? _ifBody : null);
const _show$putBody = _dynamicClosure(1, 2, [_if$putBody]);
const _putBody = /* @__PURE__ */_createRenderer("<!>", /* replace */"%", null, [_show$putBody]);
const _put = /* @__PURE__ */_derivation("0:", 1, [_dynamicSubscribers("0:")], _scope => 123);
const _hydrate_show = _register("packages/translator/src/__tests__/fixtures/context-tag-in-if/template.marko_0_show", _scope => _on(_scope[1], "click", function () {
  const show = _scope[2];
  _queueSource(_scope, _show, !show);
}));
const _show = /* @__PURE__ */_source(2, [_dynamicSubscribers(2)], (_scope, show) => _queueHydrate(_scope, _hydrate_show));
const _setup = _scope => {
  _setSource(_scope, _show, true);
  _initContextProvider(_scope, 0, "0:", "packages/translator/src/__tests__/fixtures/context-tag-in-if/template.marko", _putBody);
  _notifySignal(_scope, _put);
};
export const template = "<div><!><button id=toggle>Toggle</button></div>";
export const walks = /* next(1), replace, over(1), get, out(1) */"D%b l";
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup);