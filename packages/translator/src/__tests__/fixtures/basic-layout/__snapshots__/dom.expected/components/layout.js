import { conditional as _conditional, source as _source, setSource as _setSource, destructureSources as _destructureSources, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

const _dynamicTagName = /* @__PURE__ */_conditional(0, 1, (_scope, renderBody = _scope[6]) => renderBody);

const _renderBody = /* @__PURE__ */_source(6, [_dynamicTagName]);

export const attrs = /* @__PURE__ */_destructureSources([_renderBody], (_scope, {
  renderBody
}) => {
  _setSource(_scope, _renderBody, renderBody);
});
export { _renderBody as _apply_renderBody };
export const template = "<body><!></body>";
export const walks =
/* next(1), replace, skip(5), out(1) */
"D%-l";
export const setup = function () {};
export default /* @__PURE__ */_createRenderFn(template, walks, setup, attrs);