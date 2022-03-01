import { write as _write, getInContext as _getInContext, data as _data, createRenderer as _createRenderer, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
import { apply as _other, template as _other_template, walks as _other_walks } from "./components/other.marko";

function _apply_message(message) {
  if (_write(1, message)) _data(0, message);
}

function _apply() {
  _other();
}

export const template = `${_other_template}`;
export const walks = `${_other_walks}`;
export const apply = _apply;
export default _createRenderFn(template, walks, apply);