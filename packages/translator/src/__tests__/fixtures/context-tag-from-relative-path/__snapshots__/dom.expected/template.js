import Other from "./other.marko";
import { write as _write, data as _data, createRenderer as _createRenderer, conditional as _conditional, notifySignal as _notifySignal, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _message$OtherBody = "SIGNAL NOT INITIALIZED";
const _OtherBody = /* @__PURE__ */_createRenderer(" </span>", /* next(1), get */"D ");
const _dynamicTagName = /* @__PURE__ */_conditional(0, 1, _scope => Other);
const _setup = _scope => {
  _notifySignal(_scope, _dynamicTagName);
};
export const template = "<!>";
export const walks = /* replace, skip(5), over(1) */"%-b";
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup);