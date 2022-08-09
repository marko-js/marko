import { dynamicTag as _dynamicTag, source as _source, setSource as _setSource, destructureSources as _destructureSources, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

const _renderBody = _source(0, []);

export const attrs = _destructureSources([_renderBody], (_scope, {
  renderBody
}) => {
  _setSource(_scope, _renderBody, renderBody);
});
export { _renderBody as _apply_renderBody };
export const template = "<body></body>";
export const walks =
/* over(1) */
"b";
export const setup = function () {};
export default _createRenderFn(template, walks, setup, attrs);