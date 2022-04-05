import Other from "./other.marko";

_dynamicTag(_scope, Other, {}, _createRenderer(" </span>",
/* next(1), get */
"D ", () => {
  _write("<span>");

  const message = _getInContext("packages/translator/src/__tests__/fixtures/context-tag-from-relative-path/other.marko");
}));

import { write as _write, getInContext as _getInContext, data as _data, createRenderer as _createRenderer, dynamicTag as _dynamicTag, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

function _apply_message(_scope, message) {
  if (_write(_scope, 1, message)) _data(_scope[0], message);
}

const _temp = _createRenderer(" </span>",
/* next(1), get */
"D ", null);

export const template = "";
export const walks = "";
export const apply = function () {};
export default _createRenderFn(template, walks, apply);