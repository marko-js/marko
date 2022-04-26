_dynamicTag(_scope, renderBody, null);

import { dynamicTag as _dynamicTag, write as _write, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

function _apply_renderBody(_scope, renderBody) {
  if (_write(_scope, 0, renderBody)) {}
}

export const applyAttrs = function (_scope, {
  renderBody
}) {
  _apply_renderBody(_scope, renderBody);
};
export { _apply_renderBody };
export const template = "<body></body>";
export const walks =
/* over(1) */
"b";
export const apply = function () {};
export default _createRenderFn(template, walks, apply, applyAttrs);