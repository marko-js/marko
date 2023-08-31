import { initContextProvider as _initContextProvider, data as _data, on as _on, queueSource as _queueSource, contextClosure as _contextClosure, createRenderer as _createRenderer, register as _register, conditional as _conditional, dynamicClosure as _dynamicClosure, dynamicSubscribers as _dynamicSubscribers, value as _value, queueEffect as _queueEffect, createTemplate as _createTemplate } from "@marko/runtime-fluurt/src/dom";
const _x$ifBody = /* @__PURE__ */_contextClosure("x", "packages/translator/src/__tests__/fixtures/context-tag-in-if/template.marko", (_scope, x) => _data(_scope["#text/0"], x));
const _ifBody = _register("packages/translator/src/__tests__/fixtures/context-tag-in-if/template.marko_2_renderer", /* @__PURE__ */_createRenderer("<span> </span>", /* next(1), get */"D ", void 0, [_x$ifBody]));
const _if$putBody = /* @__PURE__ */_conditional("#text/0");
const _show$putBody = /* @__PURE__ */_dynamicClosure("show", (_scope, show) => _if$putBody(_scope, show ? _ifBody : null), void 0, void 0, _if$putBody);
const _putBody = /* @__PURE__ */_createRenderer("<!>", /* replace */"%", void 0, [_show$putBody]);
const _put = /* @__PURE__ */_value("0:", null, _dynamicSubscribers("0:"));
const _show_effect = _register("packages/translator/src/__tests__/fixtures/context-tag-in-if/template.marko_0_show", _scope => _on(_scope["#button/1"], "click", function () {
  const {
    show
  } = _scope;
  _queueSource(_scope, _show, !show);
}));
const _show = /* @__PURE__ */_value("show", (_scope, show) => _queueEffect(_scope, _show_effect), _dynamicSubscribers("show"));
const _setup = _scope => {
  _initContextProvider(_scope, "#text/0", "0:", "packages/translator/src/__tests__/fixtures/context-tag-in-if/template.marko", _putBody);
  _show(_scope, true);
  _put(_scope, 123);
};
export const template = "<div><!><button id=toggle>Toggle</button></div>";
export const walks = /* next(1), replace, over(1), get, out(1) */"D%b l";
export const setup = _setup;
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(template, walks, setup), "packages/translator/src/__tests__/fixtures/context-tag-in-if/template.marko");