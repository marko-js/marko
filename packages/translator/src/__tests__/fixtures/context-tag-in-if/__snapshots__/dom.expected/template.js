import { setSource as _setSource, queueSource as _queueSource, dynamicSubscribers as _dynamicSubscribers, initContextProvider as _initContextProvider, data as _data, on as _on, contextClosure as _contextClosure, createRenderer as _createRenderer, conditional as _conditional, dynamicClosure as _dynamicClosure, derivation as _derivation, source as _source, register as _register, queueHydrate as _queueHydrate, notifySignal as _notifySignal, bind as _bind, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _x$ifBody = _contextClosure(1, "packages/translator/src/__tests__/fixtures/context-tag-in-if/template.marko", [], (_scope, x) => _data(_scope[0], x));
const _ifBody = /* @__PURE__ */_createRenderer("<span> </span>", /* next(1), get */"D ", null, [_x$ifBody]);
const _if$putBody = /* @__PURE__ */_conditional(0, 1, (_scope, show = _scope._[3]) => show ? _ifBody : null);
const _show$putBody = _dynamicClosure(1, 3, [_if$putBody]);
const _putBody = /* @__PURE__ */_createRenderer("<!>", /* replace, skip(5) */"%-", null, [_show$putBody]);
const _put = /* @__PURE__ */_derivation(1, 1, [_dynamicSubscribers(1)], _scope => 123);
const _onClick = function (_scope) {
  const show = _scope[3];
  _queueSource(_scope, _show, !show);
};
const _hydrate_show = _register("packages/translator/src/__tests__/fixtures/context-tag-in-if/template.marko_0_show", _scope => {
  const show = _scope[3];
  _on(_scope[2], "click", /* @__PURE__ */_bind(_scope, _onClick));
});
const _show = /* @__PURE__ */_source(3, [_dynamicSubscribers(3)], (_scope, show) => _queueHydrate(_scope, _hydrate_show));
const _setup = _scope => {
  _setSource(_scope, _show, true);
  _initContextProvider(_scope, 0, 1, "packages/translator/src/__tests__/fixtures/context-tag-in-if/template.marko", _putBody);
  _notifySignal(_scope, _put);
};
export const template = "<div><!><button id=toggle>Toggle</button></div>";
export const walks = /* next(1), replace, skip(1), over(1), get, out(1) */"D%)b l";
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup);