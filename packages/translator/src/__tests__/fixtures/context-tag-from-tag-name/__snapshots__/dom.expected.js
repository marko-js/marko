_other({
  renderBody: _createRenderer("<!></span>", "D%", () => {
    _write("<span>");

    const message = _getInContext("packages/translator/src/__tests__/fixtures/context-tag-from-tag-name/components/other.marko");
  })
});

import { write as _write, getInContext as _getInContext, data as _data, createRenderer as _createRenderer, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
import { hydrate as _other, template as _other_template, walks as _other_walks } from "./components/other.marko";

function _apply_message(message) {
  if (_write(1, message)) _data(0, message);
}

export const template = `${_other_template}`;
export const walks = `${_other_walks}`;
export const apply = null;
export default _createRenderFn(template, walks, apply);