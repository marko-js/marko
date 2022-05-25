import Other from "./other.marko";
import { write as _write, data as _data, createRenderer as _createRenderer, dynamicTag as _dynamicTag, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

function _apply$OtherBody_message(_scope, message) {
  if (_write(_scope, 1, message)) {
    _data(_scope[0], message);
  }
}

export const template = "";
export const walks = "";
export const apply = function () {};

const _OtherBody = _createRenderer(" </span>",
/* next(1), get */
"D ", null);

export default _createRenderFn(template, walks, apply);