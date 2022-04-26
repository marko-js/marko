import child from "./components/child/index.marko";

const data1 = _dynamicTag(_scope, child, null);

const _tagName = show && child;

const data2 = _dynamicTag(_scope, _tagName, null);

const data3 = _dynamicTag(_scope, dynamic, null);

const _tagName2 = show && "div";

const el1 = _dynamicTag(_scope, _tagName2, null);

import { dynamicTag as _dynamicTag, write as _write, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

function _apply_dynamic(_scope, dynamic) {
  if (_write(_scope, 4, dynamic)) {}
}

function _apply_show(_scope, show) {
  if (_write(_scope, 3, show)) {}
}

function _apply_data2(_scope, data2) {
  if (_write(_scope, 2, data2)) {}
}

function _apply_data(_scope, data1) {
  if (_write(_scope, 1, data1)) {}
}

export const applyAttrs = function (_scope, {
  show,
  dynamic
}) {
  _apply_show(_scope, show);

  _apply_dynamic(_scope, dynamic);
};
export { _apply_show, _apply_dynamic };
export const template = "";
export const walks = "";
export const apply = function () {};
export default _createRenderFn(template, walks, apply, applyAttrs);