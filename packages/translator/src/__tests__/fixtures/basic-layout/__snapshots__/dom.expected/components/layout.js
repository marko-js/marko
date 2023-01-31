import { conditional as _conditional, source as _source, setSource as _setSource, destructureSources as _destructureSources, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _dynamicTagName = /* @__PURE__ */_conditional("#text/0", 1, (_scope, renderBody = _scope["renderBody"]) => renderBody);
const _renderBody = /* @__PURE__ */_source("renderBody", [_dynamicTagName]);
export const attrs = /* @__PURE__ */_destructureSources([_renderBody], (_scope, {
  renderBody
}) => {
  _setSource(_scope, _renderBody, renderBody);
});
export { _renderBody as _apply_renderBody };
export const template = "<body><!></body>";
export const walks = /* next(1), replace, out(1) */"D%l";
export const setup = function () {};
export default /* @__PURE__ */_createRenderFn(template, walks, setup, attrs, null, "packages/translator/src/__tests__/fixtures/basic-layout/components/layout.marko");