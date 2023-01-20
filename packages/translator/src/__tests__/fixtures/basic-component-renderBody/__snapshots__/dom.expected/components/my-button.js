import { on as _on, conditional as _conditional, source as _source, register as _register, queueHydrate as _queueHydrate, setSource as _setSource, destructureSources as _destructureSources, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _dynamicTagName = /* @__PURE__ */_conditional("#text/1", 1, (_scope, renderBody = _scope["renderBody"]) => renderBody);
const _renderBody = /* @__PURE__ */_source("renderBody", [_dynamicTagName]);
const _hydrate_onClick = _register("packages/translator/src/__tests__/fixtures/basic-component-renderBody/components/my-button.marko_0_onClick", _scope => {
  const onClick = _scope["onClick"];
  _on(_scope["#button/0"], "click", onClick);
});
const _onClick = /* @__PURE__ */_source("onClick", [], (_scope, onClick) => _queueHydrate(_scope, _hydrate_onClick));
export const attrs = /* @__PURE__ */_destructureSources([_onClick, _renderBody], (_scope, {
  onClick,
  renderBody
}) => {
  _setSource(_scope, _onClick, onClick);
  _setSource(_scope, _renderBody, renderBody);
});
export { _onClick as _apply_onClick, _renderBody as _apply_renderBody };
export const template = "<button><!></button>";
export const walks = /* get, next(1), replace, out(1) */" D%l";
export const setup = function () {};
export default /* @__PURE__ */_createRenderFn(template, walks, setup, attrs);