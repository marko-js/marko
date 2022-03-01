let _thing;

const _if = _createRenderer("", "", null);

import { write as _write, createRenderer as _createRenderer, setConditionalRenderer as _setConditionalRenderer, readInOwner as _readInOwner, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
import { apply as _customTag, template as _customTag_template, walks as _customTag_walks } from "./components/custom-tag/index.marko";

function _apply_x(x = _readInOwner(0)) {
  _setConditionalRenderer(0, x ? _if : null);
}

function _apply() {
  _customTag();
}

export const template = `${_customTag_template}`;
export const walks = `${_customTag_walks}`;
export const apply = _apply;
export default _createRenderFn(template, walks, apply);