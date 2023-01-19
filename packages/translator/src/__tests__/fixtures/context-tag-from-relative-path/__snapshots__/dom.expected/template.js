import Other from "./other.marko";
import { data as _data, contextClosure as _contextClosure, createRenderer as _createRenderer, conditional as _conditional, notifySignal as _notifySignal, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _message$OtherBody = _contextClosure(1, "packages/translator/src/__tests__/fixtures/context-tag-from-relative-path/other.marko", [], (_scope, message) => _data(_scope[0], message));
const _OtherBody = /* @__PURE__ */_createRenderer("<span> </span>", /* next(1), get */"D ", null, [_message$OtherBody]);
const _dynamicTagName = /* @__PURE__ */_conditional(0, 1, _scope => Other);
const _setup = _scope => {
  _notifySignal(_scope, _dynamicTagName);
};
export const template = "<!>";
export const walks = /* replace, over(1) */"%b";
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup);