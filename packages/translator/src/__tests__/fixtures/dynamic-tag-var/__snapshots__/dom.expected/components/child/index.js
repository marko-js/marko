import { tagVarSignal as _tagVarSignal, setSource as _setSource, notifySignal as _notifySignal, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _setup = _scope => {
  _setSource(_scope, _tagVarSignal, 1);
  _notifySignal(_scope, _tagVarSignal);
};
export const template = "";
export const walks = "";
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup);