import { conditional as _conditional, value as _value, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _dynamicTagName = /* @__PURE__ */_conditional("#text/0");
const _renderBody = /* @__PURE__ */_value("renderBody", (_scope, renderBody) => _dynamicTagName(_scope, renderBody));
export const attrs = (_scope, _destructure, _dirty = true) => {
  let renderBody;
  if (_dirty) ({
    renderBody
  } = _destructure);
  _renderBody(_scope, renderBody, _dirty);
};
export { _renderBody as _apply_renderBody };
export const template = "<body><!></body>";
export const walks = /* next(1), replace, out(1) */"D%l";
export const setup = function () {};
export default /* @__PURE__ */_createRenderFn(template, walks, setup, attrs, null, "packages/translator/src/__tests__/fixtures/basic-layout/components/layout.marko");