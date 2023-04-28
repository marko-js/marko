import { dynamicSubscribers as _dynamicSubscribers, initContextProvider as _initContextProvider, data as _data, on as _on, queueSource as _queueSource, contextClosure as _contextClosure, createRenderer as _createRenderer, register as _register, conditional as _conditional, dynamicClosure as _dynamicClosure, value as _value, queueEffect as _queueEffect, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _x$ifBody = /* @__PURE__ */_contextClosure("x", "packages/translator/src/__tests__/fixtures/context-tag-in-if/template.marko", (_scope, x) => _data(_scope["#text/0"], x));
const _ifBody = _register("packages/translator/src/__tests__/fixtures/context-tag-in-if/template.marko_2_renderer", /* @__PURE__ */_createRenderer("<span> </span>", /* next(1), get */"D ", null, [_x$ifBody]));
const _if$putBody = /* @__PURE__ */_conditional("#text/0");
const _show$putBody = /* @__PURE__ */_dynamicClosure("show", (_scope, show, _dirty) => {
  let _if$putBody_value;
  if (_dirty) {
    _if$putBody_value = show ? _ifBody : null;
  }
  _if$putBody(_scope, _if$putBody_value, _dirty);
});
const _putBody = /* @__PURE__ */_createRenderer("<!>", /* replace */"%", null, [_show$putBody]);
const _put = /* @__PURE__ */_value("0:", (_scope, put, _dirty) => _dynamicSubscribers(_scope["0:*"], _dirty));
const _show_effect = _register("packages/translator/src/__tests__/fixtures/context-tag-in-if/template.marko_0_show", _scope => _on(_scope["#button/1"], "click", function () {
  const {
    show
  } = _scope;
  _queueSource(_scope, _show, !show);
}));
const _show = /* @__PURE__ */_value("show", (_scope, show, _dirty) => {
  if (_dirty) {
    _queueEffect(_scope, _show_effect);
  }
  _dynamicSubscribers(_scope["show*"], _dirty);
});
const _setup = _scope => {
  _initContextProvider(_scope, "#text/0", "0:", "packages/translator/src/__tests__/fixtures/context-tag-in-if/template.marko", _putBody);
  _show(_scope, true);
  _put(_scope, 123);
};
export const template = "<div><!><button id=toggle>Toggle</button></div>";
export const walks = /* next(1), replace, over(1), get, out(1) */"D%b l";
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup, null, null, "packages/translator/src/__tests__/fixtures/context-tag-in-if/template.marko");