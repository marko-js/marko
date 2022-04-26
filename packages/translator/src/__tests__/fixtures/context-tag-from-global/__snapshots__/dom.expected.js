_write("<div><span>");

const {
  x
} = _getInContext("$");

import { write as _write, getInContext as _getInContext, data as _data, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

function _apply_x(_scope, x) {
  if (_write(_scope, 1, x)) {
    _data(_scope[0], x);
  }
}

export const template = " </span></div>";
export const walks =
/* next(2), get, out(2) */
"E m";
export const apply = function () {};
export default _createRenderFn(template, walks, apply);