let _thing;

if (x) _thing = {
  x: 1,

  renderBody() {
    _write("Hello");
  }

};

_customTag({
  thing: _thing
});

import { write as _write, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
import { hydrate as _customTag, template as _customTag_template, walks as _customTag_walks } from "./components/custom-tag/index.marko";
export const template = `${_customTag_template}`;
export const walks = `${_customTag_walks}`;
export const apply;
export default _createRenderFn(template, walks, apply);