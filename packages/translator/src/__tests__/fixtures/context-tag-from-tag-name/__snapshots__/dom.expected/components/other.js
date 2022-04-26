_pushContext("packages/translator/src/__tests__/fixtures/context-tag-from-tag-name/components/other.marko", "Hello");

_popContext();

import { pushContext as _pushContext, dynamicTag as _dynamicTag, popContext as _popContext, write as _write, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

function _apply_input(_scope, input) {
  if (_write(_scope, 0, input)) {}
}

export const applyAttrs = function (_scope, input) {
  _apply_input(_scope, input);
};
export { _apply_input };
export const template = "";
export const walks = "";
export const apply = function () {};
export default _createRenderFn(template, walks, apply, applyAttrs);