_pushContext("packages/translator/src/__tests__/fixtures/context-tag-from-self/template.marko", 1);

_write("<span>");

const x = _getInContext("packages/translator/src/__tests__/fixtures/context-tag-from-self/template.marko");

_popContext();

import { pushContext as _pushContext, write as _write, getInContext as _getInContext, data as _data, popContext as _popContext, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

function _apply_x(x) {
  if (_write(1, x)) _data(0, x);
}

export const template = "<div></div>";
export const walks = "";
export const apply;
export default _createRenderFn(template, walks, apply);