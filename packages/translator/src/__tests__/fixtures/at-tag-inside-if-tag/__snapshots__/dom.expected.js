let _thing;

const _if = _createRenderer("", "", null);

_customTag({
  thing: _thing
});

import { write as _write, createRenderer as _createRenderer, setConditionalRenderer as _setConditionalRenderer, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

function _apply_x(x) {
  if (_write(0, x)) _setConditionalRenderer(0, x ? _if : null);
}

import { hydrate as _customTag, template as _customTag_template, walks as _customTag_walks } from "./components/custom-tag/index.marko";
export const template = `${_customTag_template}`;
export const walks = `${_customTag_walks}`;
export const apply;
export default _createRenderFn(template, walks, apply);