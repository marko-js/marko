import Other from "./other.marko";

_dynamicTag(Other, {}, _createRenderer("<!></span>", "D%", () => {
  _write("<span>");

  const message = _getInContext("packages/translator/src/__tests__/fixtures/context-tag-from-relative-path/other.marko");
}));

import { write as _write, getInContext as _getInContext, data as _data, createRenderer as _createRenderer, dynamicTag as _dynamicTag, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

function _apply_message(message) {
  if (_write(1, message)) _data(0, message);
}

const _temp = _createRenderer("<!></span>", "D%", null);

export const template = "";
export const walks = "";
export const apply = null;
export default _createRenderFn(template, walks, apply);