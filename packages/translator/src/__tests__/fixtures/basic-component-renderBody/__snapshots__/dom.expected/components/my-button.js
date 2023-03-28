import { on as _on, conditional as _conditional, value as _value, register as _register, queueHydrate as _queueHydrate, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _dynamicTagName = /* @__PURE__ */_conditional("#text/1");
const _renderBody = /* @__PURE__ */_value("renderBody", (_scope, renderBody) => _dynamicTagName(_scope, renderBody));
const _hydrate_onClick = _register("packages/translator/src/__tests__/fixtures/basic-component-renderBody/components/my-button.marko_0_onClick", _scope => {
  const onClick = _scope["onClick"];
  _on(_scope["#button/0"], "click", onClick);
});
const _onClick = /* @__PURE__ */_value("onClick", (_scope, onClick) => _queueHydrate(_scope, _hydrate_onClick));
export const attrs = (_scope, _destructure, _dirty = true) => {
  let onClick, renderBody;
  if (_dirty) ({
    onClick,
    renderBody
  } = _destructure);
  _onClick(_scope, onClick, _dirty);
  _renderBody(_scope, renderBody, _dirty);
};
export { _onClick as _apply_onClick, _renderBody as _apply_renderBody };
export const template = "<button><!></button>";
export const walks = /* get, next(1), replace, out(1) */" D%l";
export const setup = function () {};
export default /* @__PURE__ */_createRenderFn(template, walks, setup, attrs, null, "packages/translator/src/__tests__/fixtures/basic-component-renderBody/components/my-button.marko");