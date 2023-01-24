import { setSource as _setSource, dynamicAttrsProxy as _dynamicAttrsProxy, dynamicTagAttrs as _dynamicTagAttrs, on as _on, queueSource as _queueSource, createRenderer as _createRenderer, subscriber as _subscriber, conditional as _conditional, source as _source, register as _register, queueHydrate as _queueHydrate, notifySignal as _notifySignal, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _dynamicBody2 = /* @__PURE__ */_createRenderer("paragraph", "");
const _expr_dynamicTagName_className = /* @__PURE__ */_subscriber([_dynamicAttrsProxy("#text/0")], 2, (_scope, dynamicTagName = _scope["#text/0"], className = _scope["className"]) => _dynamicTagAttrs(_scope, "#text/0", () => ({
  class: className
}), _dynamicBody2));
const _dynamicTagName = /* @__PURE__ */_conditional("#text/0", 1, _scope => `p` || _dynamicBody2, _expr_dynamicTagName_className);
const _hydrate_className = _register("packages/translator/src/__tests__/fixtures/dynamic-tag-attr-signal/template.marko_0_className", _scope => _on(_scope["#button/1"], "click", function () {
  const className = _scope["className"];
  _queueSource(_scope, _className, className === "A" ? "B" : "A");
}));
const _className = /* @__PURE__ */_source("className", [_expr_dynamicTagName_className], (_scope, className) => _queueHydrate(_scope, _hydrate_className));
const _setup = _scope => {
  _setSource(_scope, _className, "A");
  _notifySignal(_scope, _dynamicTagName);
};
export const template = "<!><button></button>";
export const walks = /* replace, over(1), get, over(1) */"%b b";
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup);