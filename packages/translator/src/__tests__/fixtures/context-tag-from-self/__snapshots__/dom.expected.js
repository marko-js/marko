_pushContext("packages/translator/src/__tests__/fixtures/context-tag-from-self/template.marko", 1);

_write("<div><span>");

const x = _getInContext("packages/translator/src/__tests__/fixtures/context-tag-from-self/template.marko");

_popContext();

import { pushContext as _pushContext, write as _write, getInContext as _getInContext, data as _data, popContext as _popContext, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

function _apply_x(_scope, x) {
  if (_write(_scope, 1, x)) _data(_scope, 0, x);
}

export const template = " </span></div>";
export const walks =
/* next(2), get, out(2) */
"E m";
export const apply = function () {};
export default _createRenderFn(template, walks, apply);