import { dynamicAttrsProxy as _dynamicAttrsProxy, dynamicTagAttrs as _dynamicTagAttrs, createRenderer as _createRenderer, conditional as _conditional, notifySignal as _notifySignal, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _dynamicBody2 = /* @__PURE__ */_createRenderer("paragraph", "");
const _dynamicTagName = /* @__PURE__ */_conditional("#text/0", 1, _scope => `p` || _dynamicBody2, _dynamicAttrsProxy("#text/0"), _scope => _dynamicTagAttrs(_scope, "#text/0", () => ({
  class: "par"
}), _dynamicBody2));
const _setup = _scope => {
  _notifySignal(_scope, _dynamicTagName);
};
export const template = "<!>";
export const walks = /* replace, over(1) */"%b";
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup);