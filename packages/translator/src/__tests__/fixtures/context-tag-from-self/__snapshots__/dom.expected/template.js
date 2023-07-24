import { initContextProvider as _initContextProvider, data as _data, contextClosure as _contextClosure, createRenderer as _createRenderer, dynamicSubscribers as _dynamicSubscribers, value as _value, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _x$putBody = /* @__PURE__ */_contextClosure("x", "packages/translator/src/__tests__/fixtures/context-tag-from-self/template.marko", (_scope, x) => _data(_scope["#text/0"], x));
const _putBody = /* @__PURE__ */_createRenderer("<span> </span>", /* next(1), get */"D ", void 0, [_x$putBody]);
const _put = /* @__PURE__ */_value("0:", null, _dynamicSubscribers("0:"));
const _setup = _scope => {
  _initContextProvider(_scope, "#text/0", "0:", "packages/translator/src/__tests__/fixtures/context-tag-from-self/template.marko", _putBody);
  _put(_scope, 1);
};
export const template = "<div><!></div>";
export const walks = /* next(1), replace, out(1) */"D%l";
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup, void 0, void 0, "packages/translator/src/__tests__/fixtures/context-tag-from-self/template.marko");