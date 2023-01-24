import Other from "./other.marko";
import { data as _data, dynamicAttrsProxy as _dynamicAttrsProxy, dynamicTagAttrs as _dynamicTagAttrs, contextClosure as _contextClosure, createRenderer as _createRenderer, conditional as _conditional, notifySignal as _notifySignal, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _message$OtherBody = _contextClosure("message", "packages/translator/src/__tests__/fixtures/context-tag-from-relative-path/other.marko", [], (_scope, message) => _data(_scope["#text/0"], message));
const _OtherBody = /* @__PURE__ */_createRenderer("<span> </span>", /* next(1), get */"D ", null, [_message$OtherBody]);
const _dynamicTagName = /* @__PURE__ */_conditional("#text/0", 1, _scope => Other || _OtherBody, _dynamicAttrsProxy("#text/0"), _scope => _dynamicTagAttrs(_scope, "#text/0", () => ({}), _OtherBody));
const _setup = _scope => {
  _notifySignal(_scope, _dynamicTagName);
};
export const template = "<!>";
export const walks = /* replace, over(1) */"%b";
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup);